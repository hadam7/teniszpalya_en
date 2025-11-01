function InputField({ label, type = "text", placeholder, value, onChange, hasError = false}) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-dark-green font-medium text-sm sm:text-base">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-white rounded-[16px] h-[50px] sm:h-[62px] px-4 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300
            ${hasError
                ? "border border-red-500  focus:border-red-500 focus:ring-red-300"
                : "border border-dark-green-half focus:border-dark-green focus:ring-green/20"
            }`}
      />
    </div>
  );
}

export default InputField;