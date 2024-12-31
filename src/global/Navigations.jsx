import { IoHome } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
export const Nav = [
  {
    lable: "Home",
    href: "/",
    icon: <IoHome />,
  },
  {
    lable: "Explore",
    href: "/explore",
    icon: <HiOutlinePhoto />,
  },
  {
    lable: "Collections",
    href: "/collections",
    icon: <MdOutlineCategory />,
  },
  {
    lable: "Favorits",
    href: "/favorit",
    icon: <FaRegHeart />,
  },
];
