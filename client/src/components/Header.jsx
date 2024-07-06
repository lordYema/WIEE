import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSearch } from "react-icons/fa";
function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          W.I.E
        </span>
        <span className="font-bold">{` S.P.I.T `}</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search Events"
          rightIcon={FaSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className=" lg:hidden" gradientDuoTone="purpleToPink" pill>
        <FaSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 sm:inline  " color="gray">
          <FaMoon />
        </Button>
        <Button className="sm:inline" gradientDuoTone="purpleToPink" outline>
          Sign In
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/sign-up"} as={"div"}>
          <Link to="/sign-up">Sign Up</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={"div"}>
          <Link to="/contact">Contact Us</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
