import React, { useState, useEffect } from "react";
import DistrictList from "./DistrictList";
import EstateType from "./EstateType";
import Map from "./Map";
import { State, StateErrors } from "./Form";

interface Props {
  nextStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regionHandleChange: (region: string) => void;
  values: State;
  errors: StateErrors;
}

function EstateForm({
  nextStep,
  handleChange,
  regionHandleChange,
  values,
  errors,
}: Props) {
  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    if (values.region) {
      // fetch districts data
      fetch(`${process.env.BACKEND_LINK}/districts?q=${values.region}`)
        .then((res) => res.json())
        .then((res) => {
          setDistricts(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [values.region]);

  return (
    <>
      <h1 className="text-2xl font-bold">Kde se nachází vaše nemovitost?</h1>
      <span className="text-gray-600">
        Klikněte na kraj a následně vyberte okres.
      </span>
      <Map
        value={values.region}
        error={errors.region}
        handleChange={regionHandleChange}
      />
      <DistrictList
        districts={districts}
        value={values.district}
        handleChange={handleChange}
        error={errors.district}
      />
      <EstateType
        value={values.estateType}
        handleChange={handleChange}
        error={errors.estateType}
      />
      <div>
        <button onClick={nextStep} className="btn">
          Pokračovat
        </button>
      </div>
    </>
  );
}

export default EstateForm;
