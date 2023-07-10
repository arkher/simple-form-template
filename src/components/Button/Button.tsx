import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
}
const Button = ({ isLoading, loadingText, disabled, ...props }: IButton) => {
  return (
    <button
      {...props}
      className="absolute bottom-4 left-4 right-4 w-90 h-12 flex border-solid border-1 hover:border-gray-500 focus:border-gray-500 focus:outline-none border-gray-400 justify-center items-center bg-gray-200 text-black rounded-md py-2 px-12 md:w-56 md:relative md:left-0 md:bottom-0 disabled:hover:border-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200  disabled:border-gray-400 disabled:text-gray-500"
      disabled={isLoading || disabled}
      data-testid="button"
    >
      {isLoading ? <>{loadingText || "Processando..."}</> : props.children}
    </button>
  );
};

export default Button;
