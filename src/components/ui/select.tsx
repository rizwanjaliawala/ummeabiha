import React from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: readonly { value: string; label: string }[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className, id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-foreground/80"
        >
          {label}
          {props.required && <span className="ml-1 text-red-500">*</span>}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground appearance-none",
            "transition-all duration-200 cursor-pointer",
            "focus:border-emerald focus:ring-2 focus:ring-emerald/20 focus:outline-none",
            "hover:border-border-strong",
            "bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')]",
            "bg-[length:20px] bg-[right_12px_center] bg-no-repeat",
            error && "border-red-400 focus:border-red-500 focus:ring-red-200",
            className
          )}
          aria-invalid={!!error}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="text-black bg-white">
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-black bg-white">
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-xs text-red-500 mt-1" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
