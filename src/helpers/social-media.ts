export const call = (cel: String) => {
  const cleanedCel = cel.replace(/\s+/g, ""); // Elimina todos los espacios
  window.open("tel:" + cleanedCel, "_blank");
};

export const whatsapp = (cel: String) => {
  const cleanedCel = cel.replace(/\s+/g, ""); // Elimina todos los espacios
  window.open(`https://wa.me/${cleanedCel}?text=`, "_blank");
};

export const mail = (email: String) => {
  const cleanedEmail = email.replace(/\s+/g, ""); // Elimina todos los espacios
  window.open(`mailto:${cleanedEmail}`, "_blank");
};
