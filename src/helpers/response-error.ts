import type { AxiosError } from "axios";
import type { ErrorResponse } from "@/shared/models/error.iterface";
import type { TypeWithKey } from "@/shared/models/base";
import { swalMessage } from "./alert-message";
import { router } from "@/routers";

export const handleError = (error: AxiosError): Promise<never> => {
  if (error.response && error.response.status) {
    if (error.response.status === 401) {
      // Not Authorize
      //   const { setAuth } = useAuthStore();
      //   setAuth(null);
      const currentRoute = router.currentRoute.value;
      if (currentRoute.name === "login-customer") {
        const responseData = error.response.data;

        if (responseData && responseData?.message) {
          swalMessage("error", "Advertencia", responseData?.message);
        } else {
          swalMessage("warning", "Advertencia", "Datos Incorrectos!");
        }
      } else {
        router.push({ name: "login-customer" });
      }
    } else if (error.response?.data) {
      // TODO: Usar CODE
      const data = error.response.data as ErrorResponse;
      if (!data.message) {
        data.message = "Ha ocurrido un error inesperado.";
      }
      if (data.message === "Invalid username or password") {
        swalMessage(
          "error",
          "Credenciales incorrectas",
          "Por favor, verifique su correo electrónico y contraseña e inténtelo de nuevo."
        );
      } else {
        // TODO: revisar una caso
        let message = "";
        if (data.errors && typeof data.errors === "object") {
          for (const [key, value] of Object.entries(data.errors)) {
            if (Array.isArray(value) && value.length > 0) {
              message += `${value[0]} `;
            }
          }
        }

        swalMessage(
          "error",
          data.message ||
            "Ha ocurrido un error inesperado. Por favor, intente más tarde.",
          message.trim() || null
        );
      }
    } else {
      swalMessage(
        "error",
        "Ha ocurrido un error inesperado!",
        "Código de error: " + error.response.status
      );
    }
    return Promise.reject(error);
  }
  // -----------------------------------------------

  // No error.response
  if (error.code !== "ERR_CANCELED") {
    swalMessage(
      "error",
      `ERROR ${error.code ?? ""}`,
      getValidationError(error.code)
    );
  }

  return Promise.reject(error);
};

const getValidationError = (errorCode?: string): string => {
  if (!errorCode) return "Error";

  const codeMatcher: TypeWithKey<string> = {
    // TODO: mensajes de validacion
    ERR_BAD_REQUEST:
      "El servidor no puede encontrar el recurso solicitado pero puede estar disponible en el futuro.",
    ERR_UNKNOWN: "Error desconocido",

    ERR_NETWORK: "Se rompió la red",
    ERR_TIMEOUT: "Se acabó el tiempo",
    ERR_400: "Error 400",
    ERR_401: "Error 401",
    ERR_403: "Error 403",
  };

  return codeMatcher[errorCode];
};
