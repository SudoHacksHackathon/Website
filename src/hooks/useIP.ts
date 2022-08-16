import axios from "axios";
import { useEffect, useState } from "react";

let cachedIP: null | string = null;

const getIP = async () => {
  if (!cachedIP) {
    const res = await axios.get("https://geolocation-db.com/json/");
    cachedIP = res.data.IPv4;
  }

  return cachedIP;
};

const useIP = () => {
  const [ip, setIP] = useState<null | undefined | string>(undefined);

  useEffect(() => {
    (async () => {
      try {
        setIP(await getIP());
      } catch (e) {
        console.error(e);
        setIP(null);
      }
    })();
  });

  return ip;
};

export default useIP;
