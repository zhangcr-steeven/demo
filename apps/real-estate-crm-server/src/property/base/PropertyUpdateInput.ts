/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgentWhereUniqueInput } from "../../agent/base/AgentWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

@InputType()
class PropertyUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AgentWhereUniqueInput)
  @IsOptional()
  @Field(() => AgentWhereUniqueInput, {
    nullable: true,
  })
  agent?: AgentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AppointmentUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AppointmentUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;
}

export { PropertyUpdateInput as PropertyUpdateInput };
