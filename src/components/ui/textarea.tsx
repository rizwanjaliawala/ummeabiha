import React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-foreground/80"
        >
          {label}
          {props.required && <span className="ml-1 text-red-500">*</span>}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground resize-y min-h-[120px]",
            "placeholder:text-muted/60 transition-all duration-200",
            "focus:border-emerald focus:ring-2 focus:ring-emerald/20 focus:outline-none",
            "hover:border-border-strong",
            error && "border-red-400 focus:border-red-500 focus:ring-red-200",
            className
          )}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 mt-1" role="alert">{error}</p>
        )}
        {hint && !error && (
          <p className="text-xs text-muted mt-1">{hint}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
