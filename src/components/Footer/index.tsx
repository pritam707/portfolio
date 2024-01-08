import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Pritam Raj</h4>
      <div className="links">
        <Link href={"https://github.com/pritam707"}>
          <a target="_blank" aria-label="Link to GitHub">
            <FiGithub />
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/pritamraj/"}>
          <a target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=917903346941"}>
          <a target="_blank" aria-label="Link to contact via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  );
}
