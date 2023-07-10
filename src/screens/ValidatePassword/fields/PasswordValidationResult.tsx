import React from "react";
import { validatePassword } from "../../../utils/validatePassword";

interface IPasswordValidationResultProps {
  password: string;
}

const PasswordValidationResult = ({
  password,
}: IPasswordValidationResultProps) => {
  if (!password) return <></>;
  return (
    <div className="justify-self-start w-full">
      {validatePassword(password.toString()) ? (
        <span className="text-green-500">Senha válida!</span>
      ) : (
        <>
          <span className="flex text-red-500">Senha inválida</span>
          <ul className="list-disc pl-8">
            <li className="text-red-500">Senha deve conter 6 dígitos</li>
            <li className="text-red-500">
              Senha deve conter 2 dígitos adjacentes iguais
            </li>
            <li className="text-red-500">
              Senha deve conter dígitos numa sequência crescente ou de mesmo
              valor
            </li>
            <li className="text-red-500">
              Senha deve estar entre os números 184759 e 856920
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default PasswordValidationResult;
