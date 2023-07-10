import * as Yup from "yup";
import { validatePassword } from "../../utils/validatePassword";

export default Yup.object().shape({
  name: Yup.string().required("Por favor, digite o nome completo."),
  email: Yup.string()
    .email("Por favor, digite um email válido.")
    .required("Por favor, digite um email."),
  password: Yup.string()
    .required("Por favor, digite uma senha.")
    .test("is-valid-password", "Senha inválida", (value) =>
      validatePassword(value.toString())
    ),
});
