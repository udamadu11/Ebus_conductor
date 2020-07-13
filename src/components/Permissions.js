import { requestMultiple, PERMISSIONS } from 'react-native-permissions';

const Permissions = () => {
    requestMultiple([
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
    ]).then(
        (statuses) => {
            if (statuses["android.permission.ACCESS_BACKGROUND_LOCATION"] != "granted") alert("Location access denied!")
            if (statuses["android.permission.ACCESS_FINE_LOCATION"] != "granted") alert("Location access denied!")
            if (statuses["android.permission.CAMERA"] != "granted") alert("Camera access denied!")
            if (statuses["android.permission.READ_EXTERNAL_STORAGE"] != "granted") alert("Storage access denied!")
            if (statuses["android.permission.WRITE_EXTERNAL_STORAGE"] != "granted") alert("Storage access denied!")
        },
    );
}

export default Permissions

