import Swal, { type SweetAlertPosition } from "sweetalert2";

export const swallDeleteConfimation = (msj: string) => {
  return Swal.fire({
    title: msj,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#bdbdbd",
    confirmButtonText: "SI ELIMINAR",
    cancelButtonText: "NO ELIMINAR",
  });
};

export const swallAlertConfimation = (msj: string) => {
  return Swal.fire({
    title: msj,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#1565c0",
    cancelButtonColor: "#bdbdbd",
    confirmButtonText: "CONTINUAR",
    cancelButtonText: "CANCELAR",
  });
};

export const swalProsgress = (msj: string) => {
  let timerInterval: number | undefined;
  Swal.fire({
    title: msj,
    timerProgressBar: true,
    reverseButtons: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    icon: "info",
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("El diálogo se cerró por el temporizador");
    }
  });
};

export const swalMessage = (
  type: "success" | "warning" | "info" | "error" = "info",
  title: string,
  msg: string | null
) => {
  Swal.fire({
    title: title,
    text: msg || "",
    icon: type,
    customClass: {
      popup: "my-swal-popup",
    },
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#1565c0",
  });
};

export const swalSuccessful = (msg: string) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: msg,
    customClass: {
      popup: "swal-custom-z-index",
    },
    showConfirmButton: false,
    timer: 1500,
  });
};

export const swalSmoll = (
  type: "success" | "warning" | "info" | "error" = "success",
  msj: string,
  time?: number,
  position?: SweetAlertPosition
) => {
  const swalToast = Swal.mixin({
    toast: true,
    position: position ?? "top-end",
    showConfirmButton: false,
    timer: time ?? 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  swalToast.fire({
    icon: type,
    title: msj,
  });
};

export const swalImage = (
  image: string,
  nombre: string = "IMAGEN SELECCIONADA"
) => {
  Swal.fire({
    title: nombre,
    imageUrl: image,
    imageWidth: 480,
    imageHeight: 480,
    imageAlt: "Custom image",
    confirmButtonText: "ACEPTAR",
    confirmButtonColor: "#1565c0",
  });
};

export const swalDiss = () => {
  Swal.close();
};

export const swallAlertCurrentPassword = async (): Promise<string | null> => {
  const { value, isConfirmed } = await Swal.fire({
    title: "Ingresa tu contraseña actual",
    input: "password",
    inputLabel: "Contraseña",
    inputPlaceholder: "••••••••",
    inputAttributes: {
      autocapitalize: "off",
      autocorrect: "off",
    },
    showCancelButton: true,
    confirmButtonColor: "#1565c0",
    cancelButtonColor: "#bdbdbd",
    confirmButtonText: "CONFIRMAR",
    cancelButtonText: "CANCELAR",
    icon: "question",
  });

  return isConfirmed && value ? value : null;
};
