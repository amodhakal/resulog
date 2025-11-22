import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function useToken() {
  const navigateTo = useNavigate();
  const [token] = useState(() => window.localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      return;
    }

    navigateTo("/auth");
  }, [navigateTo, token]);

  return token;
}
