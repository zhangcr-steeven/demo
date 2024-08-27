import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  description?: string | null;
  location?: string | null;
  name?: string | null;
  price?: number | null;
};
