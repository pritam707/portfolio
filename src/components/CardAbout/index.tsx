import Image from "next/image";
import Link from "next/link";
import { Button, Container, ButtonAlternatives } from "../../styles/styles";
import { AboutContainer } from "./styles";
import { ArrowRight, TelegramLogo } from "phosphor-react";

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={500}
            height={500}
            className="AboutImg"
            src="/about.svg"
            alt="Profile image"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Let me introduce</h2>
            <p>
              As a backend developer, I specialize in creating robust
              server-side solutions for web applications. Proficient in Node.js,
              I excel in designing and implementing scalable backend
              architectures. My expertise extends to optimizing performance and
              handling various aspects of backend development, including
              managing databases and ensuring seamless communication between the
              server and front-end interfaces.
            </p>
            <p>
              Also I'm a dedicated developer with a focus on designing and
              coding user interfaces for web applications using React.js and
              Next.js. My backend expertise in Node.js includes crafting robust
              server-side solutions and optimizing performance. Explore my
              profile for a glimpse into my skills and work.
            </p>
          </div>

          <div className="aboutButton">
            <Link href={"/contact"}>
              <a>
                <Button>
                  Contact
                  <TelegramLogo
                    style={{
                      marginBottom: "-0.1rem",
                      marginLeft: "0.2rem",
                    }}
                    size={16}
                    weight="bold"
                  />
                </Button>
              </a>
            </Link>
            <Link href={"/about"}>
              <a>
                <ButtonAlternatives>
                  Read more
                  <ArrowRight
                    style={{
                      marginBottom: "-0.1rem",
                      marginLeft: "0.2rem",
                    }}
                    weight="bold"
                    size={16}
                  />
                </ButtonAlternatives>
              </a>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
