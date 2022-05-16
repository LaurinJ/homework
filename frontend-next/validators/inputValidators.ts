export const emailValidator = (value: string) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!regexEmail.test(value)) {
    return "Email je ve špatném formátu";
  }
  return "";
};

export const phoneValidator = (value: string) => {
  const regexNumber =
    /^\+?([420]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{3})[ ]?([0-9]{3})$/;
  if (!regexNumber.test(value)) {
    return "Číslo musí být ve formátu (+420 xxx xxx xxx)";
  }
  return "";
};
