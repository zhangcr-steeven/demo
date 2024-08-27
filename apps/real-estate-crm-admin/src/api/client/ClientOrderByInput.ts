import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  preferredContactMethod?: SortOrder;
  updatedAt?: SortOrder;
};
