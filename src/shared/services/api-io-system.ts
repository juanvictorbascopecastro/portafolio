// src/api/restaurantApi.ts

import { useCustomerUserStore } from "@/features/user/store/customer.store";
import { handleError } from "@/helpers/response-error";
import axios, { type AxiosResponse } from "axios";

const restaurantApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor de respuesta
restaurantApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  handleError
);

// Interceptor de request para agregar token
restaurantApi.interceptors.request.use(
  (config) => {
    const store = useCustomerUserStore();
    const token = store.authToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default restaurantApi;
