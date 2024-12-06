import { FaGithub, FaInstagram, FaFacebook, FaReddit } from "react-icons/fa";

const Footer = ({ logo, about, socialLinks = {}, services = [] }) => {
    return (
        <div className="flex-col w-full bg-gray-500 text-gray-200 py-6 absolute bottom-0">
            <div className="px-8 relative">
                <img src={logo} alt="Logo" className="max-h-[8vh] max-w-[12vw] mr-auto" />
                    <div className="absolute inset-0 flex justify-center">
                    <div className="space-x-[5vw] text-[2.5vw]">
                        {services.map((service) => (
                            <a href={service.href} className="hover:underline">{service.name}</a>))}
                    </div>
                </div>
            </div>
            {/* Line */}
            <div className="w-full h-[2px] bg-white my-6"></div>
            {/* Socials */}
            {/* If the item is there, itll render it with the &&() otherwise it wont render anything */}
            <div className="flex justify-center space-x-[2.5vw] text-[vw] mb-[2vw]">
                {socialLinks.github && (
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <FaGithub size={30} />
                    </a>
                )}
                {socialLinks.instagram && (<a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <FaInstagram size={30} />
                    </a>
                )}
                {socialLinks.facebook && (<a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <FaFacebook size={30} />
                    </a>
                )}
                {socialLinks.reddit && (<a href={socialLinks.reddit} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <FaReddit size={30} />
                    </a>
                )}
            </div>

            {/* Footer Text */}
            <p className="text-center text-[2vw]">{about}</p>
        </div>
    );
};

export default Footer;
