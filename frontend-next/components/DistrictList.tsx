import React from "react";

interface Props {
  districts: string[];
  value: string;
  error?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DistrictList({ districts, value, error, handleChange }: Props) {
  return (
    <>
      <h2 className="small_title">Vyberte okres</h2>
      {/* error message */}
      {error && <span className="error">{error}</span>}
      <div className="grid grid-cols-3 gap-y-3">
        {/* render list of districts */}
        {districts.map((district, i) => {
          return (
            <label key={i} className="radio">
              <input
                type="radio"
                name="district"
                value={district}
                defaultChecked={district === value}
                onChange={handleChange}
              />
              {district}
              <span></span>
            </label>
          );
        })}
        {/* if it doesn't have a list */}
        {!districts.length && (
          <span className="text-gray-800 ">Nejdříve vyberte kraj!</span>
        )}
      </div>
    </>
  );
}

export default DistrictList;
