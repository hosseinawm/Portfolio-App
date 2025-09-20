type MobileMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (prop: boolean) => void;
};

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex items-center justify-center 
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto "
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      <button
        className="absolute top-3 right-11 text-3xl focus:outline-none cursor-pointer"
        onClick={() => {
          setMenuOpen(false);
        }}
        aria-label="Close Menu"
      >
        &times;
      </button>
      <div className="flex flex-col items-center gap-6 text-xl">
        <a
          className="hover:text-[rgb(148,137,121)]"
          href="#home"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Home
        </a>
        <a
          className="hover:text-[rgb(148,137,121)]"
          href="#about"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          About
        </a>
        <a
          className="hover:text-[rgb(148,137,121)]"
          href="#projects"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Projects
        </a>
        <a
          className="hover:text-[rgb(148,137,121)]"
          href="#contact"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
