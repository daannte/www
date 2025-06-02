import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center bg-button transition-all dark:hover:bg-button/60 hover:bg-[#ccc] w-fit gap-1 py-2 px-3 rounded-2xl cursor-pointer hover:scale-[1.01] hover:-translate-y-[1px] active:scale-[0.95]"
    >
      {children}
    </div>
  );
}
