import React from "react";

interface Props {
  value: string;
  error?: String;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function EstateType({ value, error, handleChange }: Props) {
  // list of types
  const esteteType: string[] = ["Dům", "Byt", "Pozemek"];

  return (
    <>
      <h2 className="small_title">Typ nemovitosti</h2>
      {/* error message */}
      {error && <span className="error">{error}</span>}
      <div className="grid grid-cols-3 gap-y-3">
        {/* render list of types */}
        {esteteType.map((type, i) => {
          return (
            <label key={i} className="radio">
              <input
                type="radio"
                name="estateType"
                value={type}
                defaultChecked={type === value}
                onChange={handleChange}
              />
              {type}
              <span></span>
            </label>
          );
        })}
      </div>
    </>
  );
}

export default EstateType;
