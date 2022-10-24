import { useMemo } from "react";
import { Api } from "@app/api";

export const useApi = () => {
  const api = useMemo(() => {
    return Api({ url: "/api" });
  }, []);
  return api;
};
