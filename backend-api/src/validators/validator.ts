import { IPerson } from "../models/person";
import { IEstate } from "../models/estate";

export interface ValidatorErrors {
  estateType?: string;
  region?: string;
  district?: string;
  fullName?: string;
  email?: string;
  phone?: string;
}

export const validator = (values: IPerson & IEstate) => {
  const errors: ValidatorErrors = {};
  const regexName = /^[a-zA-Z]+(\s)+[a-zA-Z]+$/;
  const regexNumber =
    /^\+?([420]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{3})[ ]?([0-9]{3})$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = "Toto pole je povinné";
  } else if (!regexEmail.test(values.email)) {
    errors.email = "Email je ve špatném formátu";
  }
  if (!values.fullName) {
    errors.fullName = "Toto pole je povinné";
  } else if (!regexName.test(values.fullName)) {
    errors.fullName = "Jméno je ve špatném formátu";
  }
  if (!values.phone) {
    errors.phone = "Toto pole je povinné";
  } else if (!regexNumber.test(values.phone)) {
    errors.phone = "Číslo je ve špatném formátu (+420 xxx xxx xxx)";
  }
  if (!values.region) {
    errors.region = "Toto pole je povinné";
  }
  if (!values.district) {
    errors.district = "Toto pole je povinné";
  }
  if (!values.estateType) {
    errors.estateType = "Toto pole je povinné";
  }
  return errors;
};
