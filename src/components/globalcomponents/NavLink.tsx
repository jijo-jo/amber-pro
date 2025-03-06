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
      className={`block px-4 py-2 text-sm sm:text-base text-white hover:text-gray-400 transition ${className}`}
    >
      {label}
    </a>
  );
};

export default NavLink;

