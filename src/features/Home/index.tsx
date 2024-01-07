import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Geolocation from "react-native-geolocation-service";
import { requestPermissionLocation } from "../../utils/requestPermissionLocation";

import Screen from "../../components/Screen";
import { fetchWeather, fetchWeatherRangeDays } from "../../store/weatherSlice";
import { useAppDispatch, useTypedSelector } from "../../store/store";
import WeatherCard from "../../components/WeatherCard";
import SwitchTheme from "../../components/SwitchTheme";
interface Location {
  latitude: number;
  longitude: number;
}

const Home = () => {
  const dispatch = useAppDispatch();

  const globalPolling = useTypedSelector((state) => state.weather.weatherToday);
  const globaltheme = useTypedSelector((state) => state.theme.theme);

  const [countDays, setCountDays] = useState<number>(3);
  const [location, setLocation] = useState<Location>();
  const [city, setCity] = useState<string>(
    globalPolling?.location?.name || "Kyiv"
  );
  const image: string = globalPolling?.current?.condition?.icon;

  const getLocation = useCallback(async () => {
    const result = await requestPermissionLocation();

    if (result === "granted") {
      Geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            fetchWeather(
              `${position.coords?.latitude},${position.coords?.longitude}`
            )
          );
          setLocation({
            latitude: position.coords?.latitude,
            longitude: position.coords?.longitude,
          });
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      setCity(globalPolling?.location.name);
      dispatch(fetchWeatherRangeDays({ city: city, days: countDays }));
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    dispatch(fetchWeatherRangeDays({ city: city, days: countDays }));
  }, [city, countDays]);

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "flex-end", paddingVertical: 10 }}>
          <SwitchTheme />
        </View>
        <WeatherCard
          forecast={globalPolling?.forecast?.forecastday}
          cityName={city}
          temperature={globalPolling?.current?.temp_c}
          lastUpdated={globalPolling?.current?.last_updated}
        />

        <TouchableOpacity
          style={{
            backgroundColor: globaltheme.secondBg,
            alignSelf: "center",
            padding: 10,
            borderRadius: 12,
            marginTop: 10,
          }}
          onPress={() => {
            setCountDays(countDays !== 14 ? 14 : 3);
          }}
        >
          <Text style={{ color: globaltheme.text }}>More</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
};
export default Home;
