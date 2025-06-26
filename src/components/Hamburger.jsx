export default function HamburgerButton({ isOpen, toggle }) {
    return (
        <button
        onClick={toggle}
        className="relative w-6 h-6 flex items-center justify-center focus:outline-none hover:cursor-pointer md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`absolute h-0.5 w-6 bg-myblack transition-transform duration-300 ease-in-out rounded-full ${
            isOpen ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-myblack transition-opacity duration-300 rounded-full ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-myblack transition-transform duration-300 ease-in-out rounded-full ${
            isOpen ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>
    );
  }
  