import "../index.css";
interface InputTitleType {
  title: string;
  value: string;
  inputData: Function;
  placeholder: string;
}
export function InputTitle({
  title,
  value,
  inputData,
  placeholder,
}: InputTitleType) {
  return (
    <div className="flex flex-col gap-1 m-2">
      <p>{title}</p>
      <input
        className="input-base"
        value={value}
        onChange={(e) => inputData(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
