
import { FaHome } from "react-icons/fa";

import { MdDashboardCustomize } from "react-icons/md";
import { PiSteeringWheelBold } from "react-icons/pi";
import { SiAboutdotme } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
const links = [
  {
    id: 1,
    text: 'Home',
    path: '/',
    icon: <FaHome />,
  },
  {
    id: 7,
    text: 'Wheels',
    path: 'wheels',
    icon: <PiSteeringWheelBold />,
  },
  {
    id: 2,
    text: 'About',
    path: 'about',
    icon: <SiAboutdotme />,
  },
  {
    id: 4,
    text: 'Add Wheel',
    path: 'add-wheel',
    icon: <IoMdAdd />,
  },
  {
    id: 3,
    text: 'Dashborad',
    path: 'dashboard',
    icon: <MdDashboardCustomize />,
  }
];


export default links;