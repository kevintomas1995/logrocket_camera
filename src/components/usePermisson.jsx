import { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";

const usePermission = (Camera) => {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status === "granted");
    })();
  }, []);

  return hasCameraPermissions;
};

export default usePermission;

