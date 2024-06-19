interface InputProps {
  type: string;
  placeholder: string;
  name: string;
}

export function Input(inputProps: InputProps) {
  const { type, placeholder, name } = inputProps;
  return (
    <div>
      <input
        className="w-full border-2 border-gray-500 rounded-md h-11 px-2"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
