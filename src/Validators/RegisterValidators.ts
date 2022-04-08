import * as Yup from "yup";
import getValidationErrors from "../utils/getValidationErrors";

class RegisterValidators {
  async validator(dados: {}) {
    try {
      const schema = Yup.object(dados).shape({
        name: Yup.string()
          .required("nome é obrigatório"),
        email: Yup.string()
          .required("email é obrigatório"),
        password: Yup.string()
          .required("senha é obrigatório"),
        confirmPassword: Yup.string()
          .required("confirmação de senha é obrigatório")
      });
      await schema.validate(dados, {
        abortEarly: false,
      });
      return {};
      // console.log(status)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        return errors;
      }
    }
  }
}

export default new RegisterValidators();
