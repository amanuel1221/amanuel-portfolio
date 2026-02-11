
import {  Github,Linkedin,Twitter, Figma, Facebook,FileText, Mail,MessageCircle} from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gray-50 ">
      <div className="max-w-6xl mx-auto px-6 py-12 ">   
        <div className="flex flex-col items-center text-center gap-6  md:flex-row md:justify-between md:text-left ">
          
          <div className="flex justify-center md:justify-start">
            <img
              src="/logo-brand.svg"
              alt="logo"
              className="w-14 h-14 rounded-2xl"
              data-testid="logo"
            />
          </div>

          <p className="text-gray-600 text-sm">
            Junior Frontend Developer • React & Tailwind CSS
          </p>

         
<div className="flex  items-center justify-center">

      <a
        href="https://github.com/amanuel1221"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg  hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
        data-testid="Github"
        aria-label="GitHub profile"
      >
        <Github size={20} />
      </a>
      <a
        href="https://www.figma.com/files/team/1527017293903765142/user/1527017290758443585?fuid=1527017290758443585"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg  hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
        aria-label="Figma profile"
        data-testid="Figma"
      >
        <Figma size={20} />
      </a>
      <a
        href="https://facebook.com/manuell211"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg  hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
        aria-label="Facebook profile"
        data-testid="Facebook"
      >
        < Facebook size={20} />
      </a>
     
    
      <a
        href="https://www.linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg  hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
        aria-label="LinkedIn profile"
        data-testid="Linkedin"
      >
        <Linkedin size={20} />
      </a>

      <a
        href="https://x.com/AmanuelAma66386"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg  hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
        aria-label="Twitter profile"
        data-testid="Twitter"
      >
        <Twitter size={20} />
      </a>
        <a
        href="https://substack.com/@amanuelamare"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg  hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
        aria-label="Substack profile"
        data-testid="Substack"
      >
        <FileText size={20} />
      </a>

      <a
        href="https://wa.me/251921337037"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg  hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
        aria-label="Whatsapp profile"
        data-testid="Whatsapp"
      >
        <MessageCircle size={20} />
      </a>

      <a
        href="mailto:amanuelamare084@gmail.com"
        className="w-10 h-10 flex items-center justify-center rounded-lg  hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
        aria-label="Email"
        data-testid="Email"
      >
        <Mail size={20} />
      </a>

    </div>
    </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Amanuel Amare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
