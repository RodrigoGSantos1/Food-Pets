import { ValidationError } from "yup";

export default function getValidationErrors(err: ValidationError): any {
  const validationErrors: any = {};

  err.inner.forEach((error) => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return (validationErrors);
}
