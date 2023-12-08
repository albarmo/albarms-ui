import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  variant: 'link' | 'filled' | 'outline'
  size: 'small' | 'medium' | 'large'
  borderRadius: 'none' | 'small' | 'medium' | 'large' | 'full'
  backgroundColor?: string
  disabled: boolean,
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      disabled
      style={{ background: props?.backgroundColor}}
      className={`button-variant--${props.variant}  button-size--${props.size} button-radius--${props.borderRadius}`}
    >
      {props.label}
    </button>
  );
};

export default Button;