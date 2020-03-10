import { Matrix, Point } from "address";
import { Permission, StoreObj } from "@/@types/store";

export type TouchRequest = {
  collection: string;
  id?: string;
  option?: Partial<StoreObj<unknown>>;
};
export type TouchModifyRequest = TouchRequest & {
  id: string;
};
export type ReleaseTouchRequest = TouchModifyRequest & {
  option?: { continuous?: boolean };
};

export type CreateDataRequest = TouchModifyRequest & {
  data: any;
};
export type AddDirectRequest = {
  collection: string;
  dataList: any[];
  option?: Partial<StoreObj<unknown>>;
};
export type DeleteDataRequest = TouchModifyRequest;
export type UpdateDataRequest = TouchModifyRequest & {
  data: any;
  option?: Partial<StoreObj<unknown>> & { continuous?: boolean };
};

export type DataReference = {
  type: string;
  docId: string;
};

export type AddObjectInfo = {
  dropWindow: string;
  point: Point;
  matrix: Matrix;
};
