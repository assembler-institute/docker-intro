export const InputElement = ({ label, type, useform }) => {
  return (
    <label className="w-10/12 flex flex-col">
      {label}
      <input
        type={type}
        {...useform}
        className="border-solid border border-icon px-1 py-[0.09rem] outline-text text-sm"
      />
    </label>
  );
};
