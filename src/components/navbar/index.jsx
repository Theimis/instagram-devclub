import { AiOutlineHome } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BiExit, BiMoon } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { MdMonitor } from "react-icons/md";

import LogoInstagram from "../../assets/logo-instagram.svg";

import { Flex, Spacer, Typography } from "../../style";
import * as C from "./style";

const menuNav = [
  {
    icon: <AiOutlineHome />,
    menuName: "Inicio",
  },
  {
    icon: <RiGlobalLine />,
    menuName: "Explorar",
  },
  {
    icon: <FiSend />,
    menuName: "Direct",
  },
  {
    icon: <MdMonitor />,
    menuName: "IGTV",
  },
  {
    icon: <BsGear />,
    menuName: "Ajustes",
  },
];

// eslint-disable-next-line react/prop-types
export function NavBar({ themeToggler, theme }) {
  // eslint-disable-next-line react/prop-types
  function GroupText({ title, subtitle }) {
    return (
      <Flex gap="4px">
        <Typography>{title} </Typography>
        <Typography weight="300" size="12px" height="14px">
          {subtitle}
        </Typography>
      </Flex>
    );
  }

  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler}>
          {theme == "light" ? <BiMoon /> : <BsSun />}
        </C.BtnTheme>
      </Flex>

      <img src={LogoInstagram} alt="Logo instagram" />

      <Flex>
        <C.Profile>
          <img
            src="https://media.licdn.com/dms/image/D5603AQGHxC4iAFEhng/profile-displayphoto-shrink_100_100/0/1706881103469?e=1722470400&v=beta&t=O5xgPSoTbIccXcyaME_ZSB0p1_2zUntU04Ie3hFkFnc"
            alt="imagen perfil"
          />
        </C.Profile>

        <GroupText title="Theimis Lima" subtitle=" @lima_x11" />
      </Flex>

      <Spacer margin="8px" />

      <Flex direction="row" justfy="space-between">
        <GroupText title="148" subtitle="Publicações" />
        <GroupText title="500" subtitle=" Seguidores" />
        <GroupText title="445" subtitle="Seguindo" />
      </Flex>

      <Spacer />

      <Flex align="start" gap="16px">
        {menuNav.map((menu) => (
          <C.listIncon key={menu.menuName}>
            {menu.icon}
            <Typography>{menu.menuName}</Typography>
          </C.listIncon>
        ))}
      </Flex>
      <Spacer />
       

      <C.Divider />
      <Spacer margin="8px" />

      <Flex align="start">
        <C.listIncon>
          <BiExit />
          <Typography>Sair</Typography>
        </C.listIncon>
      </Flex>
    </C.Container>
  );
}
