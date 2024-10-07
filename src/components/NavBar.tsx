import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/navbar/logo_game.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="80px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
