import { ReactNode } from "react";

interface Props {
    className: string;
    children: ReactNode
}

const Container = ({ className, children }: Props) => {
  return (
    <div className={`${className} max-w-screen-xl mx-auto py-8`}>
        {children}
    </div>
  )
}

export default Container;