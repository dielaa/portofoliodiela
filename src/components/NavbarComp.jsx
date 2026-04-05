import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavbarComp() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 right-0 py-2 md:py-5 z-50 bg-white "
    >
      <NavbarBrand href="#">
        <span className="self-center whitespace-nowrap text-xl font-bold text-[#4B362E] fixed left-22">
          Fadhilah
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse className="mr-6 md:mr-16">
        <NavbarLink className="text-gray-600! hover:text-[#4B362E]!" href="#home" active>
          Home
        </NavbarLink>
        <NavbarLink href="#about" className="text-gray-600! hover:text-[#4B362E]!">About</NavbarLink>
        <NavbarLink href="#certificate" className="text-gray-600! hover:text-[#4B362E]!">Certificate</NavbarLink>
        <NavbarLink href="#experience" className="text-gray-600! hover:text-[#4B362E]!">Experience</NavbarLink>
        <NavbarLink href="#contact" className="text-gray-600! hover:text-[#4B362E]!">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
