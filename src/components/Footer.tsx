import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between mx-14 ">
            <div className="flex items-center justify-start">
                <p className="text-xl cursor-pointer">Dribble</p>
            </div>
            <div className="max-md:hidden">
                <div className="flex items-center justify-center md:mx-10 gap-x-[5px] md:gap-x-10">
                    <p className="cursor-pointer">For Designers</p>
                    <p className="cursor-pointer">Hire Talent</p>
                    <p className="cursor-pointer">Inspiration</p>
                    <p className="cursor-pointer">Advertising</p>
                    <p className="cursor-pointer">Blog</p>
                    <p className="cursor-pointer">About</p>
                    <p className="cursor-pointer">Careers</p>
                    <p className="cursor-pointer">Support</p>
                </div>
            </div>
            <div className="md:hidden">
                <div className="flex flex-col items-center justify-center md:mx-10 gap-x-[5px] md:gap-x-10">
                    <div className="flex gap-x-[7px]">
                        <p className="cursor-pointer">For Designers</p>
                        <p className="cursor-pointer">Hire Talent</p>
                        <p className="cursor-pointer">Inspiration</p>
                    </div>
                    <div className="flex gap-x-[7px]">
                        <p className="cursor-pointer">Advertising</p>
                        <p className="cursor-pointer">Blog</p>
                        <p className="cursor-pointer">About</p>
                        <p className="cursor-pointer">Careers</p>
                        <p className="cursor-pointer">Support</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-x-4">
                <span className="text-xl cursor-pointer"><FaTwitter/></span>
                <span className="text-xl cursor-pointer"><ImFacebook2/></span>
                <span className="text-xl cursor-pointer"><FaInstagram/></span>
                <span className="text-xl cursor-pointer"><FaPinterest/></span>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mx-14 mt-10 mb-5">
            <div className="flex items-center justify-center gap-x-2">
                <div className="flex items-center gap-x-2">
                    <div className="flex gap-x-1">
                        <p>&copy;</p>
                        <p>{new Date().getFullYear()}</p>
                        <p>Dribble</p>
                    </div>
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                    <a href="">Cookies</a>
                </div>
            </div>
            <div className="flex items-center gap-x-[5px] md:gap-x-2 ">
                <p>Jobs</p>
                <p>Designers</p>
                <p>Freelancers</p>
                <p>Tags</p>
                <p>Places</p>
                <p>Resources</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;