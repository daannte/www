import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <div className="flex items-center bg-button transition-colors hover:bg-button/60 w-fit gap-1 py-2 px-3 rounded-2xl">
      {children}
    </div>
  )
}

