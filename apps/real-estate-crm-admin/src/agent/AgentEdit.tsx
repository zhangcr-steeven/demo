import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { PropertyTitle } from "../property/PropertyTitle";

export const AgentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="LicenseNumber" source="licenseNumber" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="properties"
          reference="Property"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PropertyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
