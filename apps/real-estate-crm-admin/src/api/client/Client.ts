import { Appointment } from "../appointment/Appointment";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  preferredContactMethod?: "Option1" | null;
  updatedAt: Date;
};
