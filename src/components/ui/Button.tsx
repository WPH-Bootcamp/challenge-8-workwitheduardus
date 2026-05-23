import type {ButtonProps} from "../../types";
import "../../index.css"

const variantStyles = {
    primary: "bg-primary-200 text-white  hover:bg-primary-300 ",
    secondary: "bg-neutral-25 text-white hover:bg-gray-700 ",
    outline:
      "border-2 border-gray-300 text-neutral-50 hover:bg-gray-50",
  };

const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

const Button =({
    variant = "primary",
    size = "md",
    children,
    onClick,
    href,
    className = "",
    disabled = false,
    type = "button",
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

    if (href) {
        return (
          <a href={href} className={classes}>
            {children}
          </a>
        );
    }

return (
    <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={classes}>
        {children}
    </button>
);
};

export default Button;