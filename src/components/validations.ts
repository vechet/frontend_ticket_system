import { FORM_ERROR } from "final-form";
import { forEach } from "lodash";

export const mapResponseErrors = (
  errors: any[],
  key = "",
  prevWord = "",
  newWord = ""
) => {
  const _errors: any = {};
  forEach(errors, ({ message, field }) => {
    if (field === "error") {
      _errors[FORM_ERROR] = message;
    } else {
      if (key && key === field) {
        _errors[field] = message.replace(prevWord, newWord);
      } else {
        _errors[field] = message;
      }
    }
  });
  return _errors;
};

//validate required fields custom message
export const validateCRequired =
  (message = "This field is required") =>
  (value: any) =>
    value ? undefined : message || "This field is required";
