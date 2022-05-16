import { Schema, model } from "mongoose";
import { IPerson } from "./person";

export interface IEstate {
  seller: IPerson;
  estateType: string;
  region: string;
  district: string;
  createdAt?: string;
}

const estateSchema = new Schema<IEstate>(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: "Person",
      required: true,
    },
    estateType: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export const Estate = model<IEstate>("Estate", estateSchema);
