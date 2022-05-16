import React from "react";
import InputField from "./InputField";
import { State, StateErrors } from "./Form";
import { emailValidator, phoneValidator } from "../validators/inputValidators";

interface Props {
  prevStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: State;
  errors: StateErrors;
}

function PersonForm({ prevStep, handleChange, values, errors }: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold ">Osobní údaje</h1>
      <span className="text-gray-600">
        Vyplňte osobní údaje a odešlete formulář.
      </span>
      <div className="space-y-3">
        <InputField
          required={true}
          type="text"
          name="fullName"
          label="Celé jméno:"
          prompt="Zadejte celé jméno"
          error={errors.fullName}
          value={values.fullName}
          handleChange={handleChange}
        />
        <InputField
          required={true}
          type="text"
          name="email"
          label="Email:"
          prompt="Zadejte email"
          error={errors.email}
          value={values.email}
          validator={emailValidator}
          handleChange={handleChange}
        />
        <InputField
          required={true}
          type="text"
          name="phone"
          label="Telefonní číslo:"
          prompt="Zadejte telefonní číslo, včetně +420"
          error={errors.phone}
          value={values.phone}
          validator={phoneValidator}
          handleChange={handleChange}
        />
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="btn">
          Zpět
        </button>
        <button type="submit" className="btn bg-blue-500">
          Odeslat
        </button>
      </div>
    </>
  );
}

export default PersonForm;
