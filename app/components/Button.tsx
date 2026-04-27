import React from 'react';
import { Link } from 'react-router';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseStyles = "inline-block rounded-full transition-all duration-300 font-medium";
  
  const variants = {
    primary: "bg-[#C6A75E] text-[#0D0D0D] hover:bg-[#D4B871] hover:shadow-[0_0_20px_rgba(198,167,94,0.4)]",
    secondary: "bg-[#4B0F1A] text-[#F5F5F5] hover:bg-[#5C1321] hover:shadow-[0_0_20px_rgba(75,15,26,0.4)]",
    outline: "border-2 border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#0D0D0D]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;
  
  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}