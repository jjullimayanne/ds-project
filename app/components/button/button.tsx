import { type } from "os";
import React from "react";

type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>


const Button = ({children, className}: ButtonProps) => {
    return <button className={`rounded-[8px] px-[32px] py-[12px] text-white  ${className}`}>{children}</button>
}

export default Button;