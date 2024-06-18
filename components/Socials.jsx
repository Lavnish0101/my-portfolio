import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaInstagram, FaTelegramPlane} from "react-icons/fa"; 

const socials = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaInstagram/>, path: ""},
    {icon: <FaTelegramPlane/>, path: ""},
];
const Socials = ({containerStyles, iconstyles}) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=> {
        return <Link key={index} href={item.path} className={iconstyles}>{item.icon}</Link>
    })}
  </div>
}

export default Socials