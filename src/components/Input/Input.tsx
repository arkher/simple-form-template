import React, { LegacyRef, forwardRef } from "react";

const Input = forwardRef(
  (
    {
      value,
      onChange,
      onBlur,
      ...props
    }: React.InputHTMLAttributes<HTMLInputElement>,
    ref?: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        className="bg-white mb-8 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        data-testid="input"
        {...props}
      />
    );
  }
);

export default Input;
