import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => (
  <Sonner
    theme="light"
    className="toaster group"
    toastOptions={{
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#1A1A1A] group-[.toaster]:border-[#E5E7EB] group-[.toaster]:shadow-lg group-[.toaster]:rounded-none",
        description: "group-[.toast]:text-[#5B6270]",
        actionButton: "group-[.toast]:bg-[#1C3172] group-[.toast]:text-white",
        cancelButton: "group-[.toast]:bg-[#F7F8FA] group-[.toast]:text-[#5B6270]",
      },
    }}
    {...props}
  />
);

export { Toaster };
