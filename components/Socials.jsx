import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaInstagram, FaTelegramPlane,} from "react-icons/fa"; 

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/Lavnish0101"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/lavnish-kumar-397aa5278/"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/lavnish_k01"},
    {icon: <FaTelegramPlane/>, path: "https://www.telegram.org/lavnish_k01"},
];
const Socials = ({containerStyles, iconstyles}) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=> {
        return <Link key={index} href={item.path} className={iconstyles}>{item.icon}</Link>
    })}
  </div>
}

export default Socials