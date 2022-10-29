import { isEmpty } from "lodash";
import moment from "moment";

export const getDateFormat = (value: string) => {
  if (isEmpty(value)) return "N/A";
  return moment(value).format("MMM DD, yyyy");
};

export const getTimeFormat = (value: string) => {
  if (isEmpty(value)) return "";
  return moment(value).format("hh:mm A");
};
