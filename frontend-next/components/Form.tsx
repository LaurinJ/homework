import React, { useState } from "react";
import EstateForm from "./EstateForm";
import PersonForm from "./PersonForm";

export interface State {
  estateType: string;
  region: string;
  district: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface StateErrors {
  estateType?: string;
  region?: string;
  district?: string;
  fullName?: string;
  email?: string;
  phone?: string;
}

function Form() {
  const [step, setStep] = useState<number>(1);
  const [success, setSuccess] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<State>({
    estateType: "",
    region: "",
    district: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<StateErrors>({});

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const regionHandleChange = (region: string): void => {
    setFormValues({ ...formValues, region: region, district: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    };
    // send form
    fetch(`${process.env.BACKEND_LINK}/lead`, options)
      .then(async (res) => {
        if (res.status === 400) {
          // set error messages
          const err = await res.json();
          setErrors(err);
          if ("region" in err || "district" in err || "estateType" in err) {
            setStep(1);
          }
        } else {
          // set initial state and success message
          setErrors({});
          setFormValues({
            estateType: "",
            region: "",
            district: "",
            fullName: "",
            email: "",
            phone: "",
          });
          setSuccess(true);
          setStep(1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {success && <div className="success">Formulář byl úspěšně odeslán.</div>}
      {(() => {
        switch (step) {
          case 1:
            return (
              <EstateForm
                nextStep={nextStep}
                handleChange={handleChange}
                regionHandleChange={regionHandleChange}
                values={formValues}
                errors={errors}
              />
            );
          case 2:
            return (
              <PersonForm
                prevStep={prevStep}
                handleChange={handleChange}
                values={formValues}
                errors={errors}
              />
            );
        }
      })()}
    </form>
  );
}

export default Form;
