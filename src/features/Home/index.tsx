import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { requestPermissionLocation } from "../../utils/requestPermissionLocation";
import { useGetWeatherThreeDayQuery, weatherApi } from "../../api/weather";
interface LocationState {
	latitude: number;
	longitude: number;
}
const Home = () => {
	const [location, setLocation] = useState<LocationState>();

	const getLocation = async () => {
		const result = await requestPermissionLocation();
		console.log(result);
		Geolocation.getCurrentPosition(
			(position) => {
				console.log(position);
				setLocation({
					latitude: position.coords?.latitude,
					longitude: position.coords?.longitude,
				});
			},
			(error) => {
				// See error code charts below.
				console.log(error.code, error.message);
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
		);
	};
	useEffect(() => {
		getLocation();
	}, []);

	return (
		<View>
			<Text>sad</Text>
		</View>
	);
};
export default Home;
