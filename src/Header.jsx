import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setIsSelected] = useState("Home");
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Menu links
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    }
      
    

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header className={`fixed top-2 left-4 right-4 inset-x-0 max-w-auto md:max-w-4xl mx-auto w-auto shadow-2xl z-50 transition-all duration-575 ${scrolled ? "bg-black/30 scale-[1.04] md:max-w-2 md:scale-[1.04] rounded-b-2xl" : "bg-black/90 rounded-xl"}`}>
      <div className="flex justify-between items-center py-4 px-6 md:px-16">
        {/* Logo */}
        <h1 className={`text-2xl font-bold tracking-widest transition-all duration-300`}>JP</h1>
        <h2
          className={`uppercase font-extrabold text-2xl transition-all duration-300
            ${isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}
          `}
        >
          {selected}
        </h2>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 transition duration-75">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setIsAnimating(false);
                  setIsSelected(link.name);
                }, 200);
              }}
              className={`
                transition duration-300 font-bold
                ${selected === link.name ? "text-blue-400" : "opacity-100 hover:text-blue-400"}
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1 focus:outline-none"
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 right-4 left-4 bg-black/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {links.map((link, index) => (
            <a 
            key={link.name} 
            href={link.href} 
            onClick={() => {
                setIsOpen(false);
                setIsAnimating(true);
                setTimeout(() => {
                  setIsAnimating(false);
                  setIsSelected(link.name);
                }, 200);
              }}
            className={`block px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-100 transform font-bold
              ${ isOpen ? `translate-y-0 opacity-100 delay-${index * 75}` : "translate-y-2 opacity-0" } 
              ${ selected === link.name ? "hidden" : ""}
            `}>{link.name}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
