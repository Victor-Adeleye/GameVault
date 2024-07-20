import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import GameVaultLogo from "../assets/GameVaultLogo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={GameVaultLogo} boxSize="90px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
