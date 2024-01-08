/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from "next/link";
import { Form } from "./Form";
import { Description, Section, Title } from "../../styles/styles";
import { ContainerContact, ContactContent } from "./styles";
import { BsWhatsapp } from "react-icons/bs";
import { Envelope, EnvelopeSimpleOpen } from "phosphor-react";

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact</p>
        Contact
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        I am always open to new work opportunities or collaborating in some
        amazing new projects. Just fill out the form that I will return 💪
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00fffb" /> WhatsApp{" "}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=917903346941">
              <a target="_blank">
                <span>+91 7903346941</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {" "}
              <EnvelopeSimpleOpen size={22} color="#00fffb" /> Email{" "}
            </h4>
            <Link href="mailto:pritamkumarraj222@gmail.com">
              <a target="_blank">
                <span>pritamkumarraj222@gmail.com</span>
              </a>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  );
}
