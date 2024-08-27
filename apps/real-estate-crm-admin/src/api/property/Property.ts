import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  id: string;
  location: string | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
