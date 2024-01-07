import { FC, useDeferredValue, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTypedSelector } from "../../store/store";
import { secondBg, text } from "../../colors";
interface WeatherCardProps {
  cityName: string;
  temperature: number;
  feelslikeTemperature: number;
  lastUpdated: string;
  forecast: [];
}
const WeatherCard: FC<WeatherCardProps> = ({
  cityName,
  temperature,
  feelslikeTemperature,
  lastUpdated,
  forecast,
}) => {
  const globalWeatherTreeDays = useTypedSelector(
    (state) => state.weather.weatherTreDays
  );
  console.log("globalWeatherTreeDays", globalWeatherTreeDays.length);

  const hours = useMemo(
    () =>
      forecast?.length > 0 &&
      forecast[0]?.hour?.slice(
        Number(Number(new Date(lastUpdated).getHours())),
        Number(Number(new Date(lastUpdated).getHours()) + 5)
      ),
    [forecast]
  );
  console.log(forecast && forecast[0]?.day);

  // const renderHour=forecast?.length>1&&  [...forecast[0]?.hour].slice( Number(Number(new Date(lastUpdated).getHours())),Number(Number(new Date(lastUpdated).getHours())+4))
  return (
    <View style={s.contentCard}>
      <View style={s.headerCard}>
        <Text style={[s.text]}>{cityName || ""}</Text>
        <Text style={[s.text]}>{Math.floor(temperature) + "℃" || ""}</Text>
      </View>
      <View style={s.hoursBlock}>
        {hours?.length > 0 &&
          hours?.map((item: any) => (
            <View
              key={item.time}
              style={{ flexShrink: 1, gap: 5, alignItems: "center" }}
            >
              <Text style={[s.text]}>
                {new Date(item.time).getHours() <= 9
                  ? "0" + new Date(item.time).getHours()
                  : new Date(item.time).getHours() || ""}
              </Text>
              <Text style={[s.text, { fontWeight: "500" }]}>
                {Math.floor(item.temp_c)}℃
              </Text>
            </View>
          ))}
      </View>
      <View style={s.nextDaysBlock}>
        {globalWeatherTreeDays &&
          globalWeatherTreeDays?.map((item: any) => {
            return (
              <View style={{justifyContent:'space-between', alignItems:'center',flexDirection:'row',gap:20}}>
               <>
               <Text style={[s.text, {fontWeight: "500" ,width:'10%'}]}>
                  {new Date(item.date).toString().slice(0, 4)}
                </Text>
                <Text style={[s.text,{textAlign:'left',fontWeight:'600',color:'gray'}]}>{Math.floor(item.day.mintemp_c)}℃</Text>
                </>
                <View style={{backgroundColor:'#888',borderRadius:16,width:
                '35%',height:5}}/>
                 <>
                <Text style={[s.text,{fontWeight:'600',color:text}]}>{Math.floor(item.day.maxtemp_c)}℃</Text>
                </>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default WeatherCard;
const s = StyleSheet.create({
  contentCard: {
    gap: 10,
    backgroundColor: secondBg ,
    borderRadius: 12,
    padding: 16,
  },
  headerCard: {
    paddingBottom: 10,
    borderBottomWidth: 0.3,
    gap: 5,
    borderBottomColor: "#fefefe",
  },
  hoursBlock: {
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: "space-between",
    borderBottomWidth: 0.3,
    borderBottomColor: "#fefefe",
  },
  nextDaysBlock: { padding: 5, gap: 8 },
  text: {
    color: text,
  },
});
// const d = {
//   last_updated_epoch: 1704569400,
//   last_updated: "2024-01-06 21:30",
//   temp_c: -0.6,
//   temp_f: 30.8,
//   is_day: 0,ƒƒfƒ
//   condition: {
//     text: "Overcast",
//     icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
//     code: 1009,s
//   },
//   wind_mph: 8.1,
//   wind_kph: 13,
//   wind_degree: 32,
//   wind_dir: "NNE",
//   pressure_mb: 1013,
//   pressure_in: 29.91,
//   precip_mm: 0,
//   precip_in: 0,
//   humidity: 95,
//   cloud: 88,
//   feelslike_c: -4.8,
//   feelslike_f: 23.4,
//   vis_km: 10,
//   vis_miles: 6,
//   uv: 1,
//   gust_mph: 12.7,
//   gust_kph: 20.5,
// };
