export default function Input({
  label,
  id,
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <div className={"w-full px-5 " + className}>
      <label htmlFor={id}>
        <h1 className="mr-2 font-medium text-xl">{label}</h1>
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-lightPurple mt-2 w-full rounded-xl h-10 border-2 placeholder:text-backPurple text-white border-backPurple px-2 py-1 "
      />
    </div>
  );
}
