import React from "react";

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col w-full">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-400" : "border-gray-500 focus:ring-blue-400"
        } bg-gray-200 text-black placeholder:font-inter placeholder:font-medium placeholder:text-[#000000]
           placeholder:text-[13.89px] placeholder:leading-[19px] placeholder:tracking-[0%] 
           placeholder:align-middle`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;


