import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  agent?: AgentWhereUniqueInput;
  appointments?: AppointmentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
