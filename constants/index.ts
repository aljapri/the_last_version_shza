import { wrap } from "module";
import Cheese from "../public/image/Cheese.jpg";
import oil from "../public/image/oil.jpg";
import qamar from "../public/image/qamar.png";
import woraq from "../public/image/woraq.jpg";
import { FaAddressCard } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMobileButton } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";

export const headerMenu = [
  {
    name: "الرئيسية",
    link: "/",
  },
  {
    name: "من نحن",
    link: "/aboutUs",
  },
  {
    name: "منجاتنا",
    link: "products",
  },
  {
    name: "أتصل بنا",
    link: "contactUs",
  },
];

export const galleryImages:any = [
  Cheese,oil,qamar,woraq
];

export const socialLinks = [
  {
    id: 1,
    icon: FiGlobe,
    url: "https://www.stoman.me/",
  },
  {
    id: 2,
    icon: FiGithub,
    url: "https://github.com/",
  },
  {
    id: 3,
    icon: FiTwitter ,
    url: "https://twitter.com/",
  },
  {
    id: 4,
    icon: FiLinkedin ,
    url: "https://www.linkedin.com/in/",
  },
  {
    id: 5,
    icon: FiYoutube,
    url: "https://www.youtube.com/c/",
  },
];

export const contactInfo = [
  {
    icon: MdEmail,
    title: "email",
    content: 'example"gmail.com',
  },
  {
    icon: FaAddressCard,
    title: "Address",
    content: "syria",
  },
  {
    icon: TbDeviceLandlinePhone,
    title: "Land Line",
    content: "(0421) 431 2030",
  },
  {
    icon: FaMobileButton,
    title: "Mobil",
    content: "+91 123456789",
  },
];
