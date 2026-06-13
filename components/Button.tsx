import { CSSProperties, ReactNode } from "react";

type Props = {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  style?: CSSProperties | undefined;
};

function Button(props: Props) {
  const {
    children,
    onClick,
    disabled,
    className,
    type = "button",
    style,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`uppercase p-2 px-4 text-xs font-semibold font-family-vt  border rounded-md cursor-pointer ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
