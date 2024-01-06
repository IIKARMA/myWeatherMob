import { check, requestMultiple, request, checkLocationAccuracy, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const requestPermissionLocation = async () => {

    const permission = requestMultiple([PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE])
    return permission
}