import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
  location?: string | null;
  name?: string | null;
  price?: number | null;
};
