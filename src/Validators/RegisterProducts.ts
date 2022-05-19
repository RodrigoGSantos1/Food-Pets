import * as Yup from "yup";
import getValidationErrors from "../utils/getValidationErrors";

class RegisterProducts {
  async validator(dados: {}) {
    try {
      const schema = Yup.object(dados).shape({
        names: Yup.string()
          .required("nome é obrigatório")
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

export default new RegisterProducts();
