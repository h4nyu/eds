import axios from "axios";

const wrap = <T>(fn: (x) => Promise<T | Error>) => {
  return async (req) => {
    try {
      const res = await fn(req);
    } catch (err) {
      const message = err.response?.data?.message;
      if (message) {
        return new Error(message);
      } else {
        return new Error(err.message);
      }
    }
  };
};

export const Api = (props: { url?: string }) => {
  const http = axios.create({ baseURL: props.url });
  const hello = async (payload) => {
    const res = await http.post(`/hello`);
    return res.data;
  };
  const createMeasurement = async (payload) => {
    const res = await http.post(`/measurement/create`, payload);
    return res.data;
  }
  return {
    hello: wrap(hello),
    measurement: {
      create: wrap(createMeasurement),
    }
  };
};
