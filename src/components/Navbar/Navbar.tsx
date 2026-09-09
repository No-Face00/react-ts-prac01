import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-base-100 px-5 py-3 rounded-[20px] mt-5">
      <div className="flex justify-between container mx-auto  ">
        <img src={Logo} alt="Logo" />

        <ul className="flex  gap-3 items-center ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button className="btn">
            Credit<div className="badge badge-sm bg-amber-100">1000$</div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
