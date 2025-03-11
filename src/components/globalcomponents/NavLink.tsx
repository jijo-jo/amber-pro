import React from "react";

interface NavLinkProps {
  label: string;
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href, className }) => {
  return (
    <a
      href={href}
      className={`block px-4 py-2 text-[14px] sm:text-base text-[#8F8F8F] hover:text-white transition ${className}`}
    >
      {label}
    </a>
  );
};

export default NavLink;

