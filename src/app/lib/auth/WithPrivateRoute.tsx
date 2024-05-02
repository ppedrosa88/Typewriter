"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { isPast } from "date-fns";

const WithPrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
    }

    if (accessToken) {
      const { exp } = jwtDecode(accessToken);
      if (isPast(new Date(exp * 1000))) {
        router.push("/login");
      }
    }
  }, []);

  return <>{children}</>;
};

export default WithPrivateRoute;
