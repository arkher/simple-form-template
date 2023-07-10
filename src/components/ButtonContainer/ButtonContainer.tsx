import React, { HTMLAttributes } from "react";

interface IButtonContainer extends HTMLAttributes<HTMLDivElement> {
  message?: string;
  error?: boolean;
}

const ButtonContainer = ({ children, error }: IButtonContainer) => {
  return (
    <div
      className="w-full flex flex-1 flex-row items-center justify-end md:mt-16"
      data-testid="button-container"
    >
      {error !== undefined && error && (
        <div className="text-sm absolute bottom-20 left-8 right-8 w-100 flex flex-1 justify-center text-red-500 md:relative md:bottom-0 md:right-0 md:left-0 md:mr-8 md:justify-end">
          Falha ao enviar resultado. Tente novamente.
        </div>
      )}
      {error !== undefined && !error && (
        <div className="text-sm absolute bottom-20 left-8 right-8 w-100 flex flex-1 justify-center text-green-500 md:relative md:bottom-0 md:right-0 md:left-0 md:mr-8 md:justify-end">
          Resultado enviado com sucesso!
        </div>
      )}
      <div className="flex justify-end">{children}</div>
    </div>
  );
};

export default ButtonContainer;
