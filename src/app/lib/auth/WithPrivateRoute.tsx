"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { isPast } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export default function WithPrivateRoute({ children }) {
  const router = useRouter();
  const timeZone = "Europe/Berlin";

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
    }
    try {
      if (accessToken) {
        const { exp } = jwtDecode(accessToken);

        const expirationDate = new Date(exp * 1000);
        // const zonedExpirationDate = utcToZonedTime(expirationDate, timeZone);
        // console.log(zonedExpirationDate);

        if (isPast(expirationDate)) {
          router.push("/login");
        }
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
}
