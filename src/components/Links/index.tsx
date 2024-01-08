import Link from "next/link";
import { Icons } from "./styles";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function Links() {
  return (
    <>
      <Icons>
        <Link href={"https://www.linkedin.com/in/pritamraj/"}>
          <a target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={"https://github.com/pritam707"}>
          <a target="_blank" aria-label="Link to Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=917903346941"}>
          <a target="_blank" aria-label="Link to contact via WhatsApp">
            <FaWhatsapp />
          </a>
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  );
}
