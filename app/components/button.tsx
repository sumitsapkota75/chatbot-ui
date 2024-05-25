// components/Button.tsx
import React from 'react';
import { IoIosRefresh } from "react-icons/io";

interface ButtonProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
    isLoading?: boolean;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    width = 'w-full',
    height = 'h-10',
    backgroundColor = 'bg-white',
    isLoading = false,
    disabled = false,
    leadingIcon,
    text,
    onClick,
}) => {
    return (
        <button
            className={`flex items-center justify-center ${width} ${height} ${backgroundColor} text-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <IoIosRefresh className="animate-spin mr-2" />
            ) : (
                leadingIcon && <span className="mr-2">{leadingIcon}</span>
            )}
            {text}
        </button>
    );
};

export default Button;
