import { useEffect } from "react";

type MobileMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (prop: boolean) => void;
};

const Navbar = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className="bg-[#1a1a1a] sticky top-0 flex justify-around w-full h-15 
      z-40 shadow-md items-center"
    >
      <div className=" ">
        <a href="#" className="flex items-center gap-2">
          <i className="fa-solid fa-user-tie fa-beat text-2xl"></i>
          <p className="logo-text text-3xl tracking-wide text-[rgb(148,137,121)]">
            Port<span className="text-[#e6b7a9]">folio</span>
          </p>
        </a>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 text-xl">
        <a
          className="hover:text-[rgb(148,137,121)] hover:-translate-y-0.5"
          href="#home"
        >
          Home
        </a>
        <a
          className="hover:text-[rgb(148,137,121)] hover:-translate-y-0.5"
          href="#about"
        >
          About
        </a>
        <a
          className="hover:text-[rgb(148,137,121)] hover:-translate-y-0.5"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="hover:text-[rgb(148,137,121)] hover:-translate-y-0.5"
          href="#contact"
        >
          Contact
        </a>
      </div>
      {/* mobile menu */}
      <div
        className="item relative cursor-pointer z-40 md:hidden "
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
