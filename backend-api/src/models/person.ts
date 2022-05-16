import { Schema, model } from "mongoose";

export interface IPerson {
  fullName: string;
  phone: string;
  email: string;
  createdAt?: string;
}

const personSchema = new Schema<IPerson>(
  {
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export const Person = model<IPerson>("Person", personSchema);
