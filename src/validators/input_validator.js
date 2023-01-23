import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const email = yup
  .string()
  .required("Informe o e-mail")
  .email("E-mail inválido");

const password = yup
  .string()
  .required("Informe a senha")
  .min(6, "A senha deve ter ao menos 6 dígitos")
  .matches(/^(?=.*[a-z])/, "A senha deve conter ao menos uma letra minúscula")
  .matches(/^(?=.*[A-Z])/, "A senha deve conter ao menos uma letra maiúscula")
  .matches(/^(?=.*[0-9])/, "A senha deve conter ao menos um número")
  .matches(
    /^(?=.*[!@#\$%\^&\*])/,
    "A senha deve conter ao menos um caractere especial"
  );

const confirm_password = yup
  .string()
  .required("Confirme a senha")
  .oneOf([yup.ref("password"), null], "A senha de confirmação não confere.");

const schema_cadastro = yup.object({
  email,
  password,
  confirm_password,
});

export default yupResolver(schema_cadastro);
