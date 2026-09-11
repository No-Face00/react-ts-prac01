import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="mx-4 mt-5 rounded-2xl border border-base-300 bg-base-100/90 px-5 py-3 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          <li>
            <a
              href="#"
              className="rounded-lg px-4 py-2 font-medium transition-all duration-200 hover:bg-primary hover:text-primary-content"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="rounded-lg px-4 py-2 font-medium transition-all duration-200 hover:bg-primary hover:text-primary-content"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="rounded-lg px-4 py-2 font-medium transition-all duration-200 hover:bg-primary hover:text-primary-content"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#"
              className="rounded-lg px-4 py-2 font-medium transition-all duration-200 hover:bg-primary hover:text-primary-content"
            >
              Contact
            </a>
          </li>

          {/* Credit */}
          <li className="ml-3">
            <div className="flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-base-content/60">
                Credit
              </span>

              <span className="rounded-lg bg-primary px-3 py-1 text-sm font-bold text-primary-content">
                $1,000
              </span>
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="btn btn-ghost btn-circle md:hidden">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;