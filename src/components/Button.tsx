import React from "react";
type Props = {
    label: string;
    href: string;
  };
  
const CustomButton = ({ label, href }: Props) => (
<a href={href} className="overflow-hidden no-underline inline-block border border-black rounded-full px-4 py-2 text-lg font-normal text-black hover:text-white  hover:font-bold hover:bg-black transition hover:scale-105">
    <p className="m-0">{label}</p>
</a>
);
  
export default CustomButton