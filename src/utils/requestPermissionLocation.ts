import { Platform } from "react-native";
import { PERMISSIONS, request } from "react-native-permissions";

export const requestPermissionLocation = async () => {
  let permission;
  if (Platform.OS === "ios") {
    permission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
      (res) => res
    );
  } else {
    permission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(
      (res) => res
    );
  }
  console.log(permission, "permission");

  return permission;
};
