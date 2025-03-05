import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { Links } from "../components/Links";
import { BiUserPin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import * as S from "../styles/about";
import { ButtonAlt, Section, Title } from "../styles/styles";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Pritam Raj</title>
        <meta
          name="description"
          content="My name is Pritam Raj, I'm a Full-stack developer from India."
        />
        <meta property="og:title" content="About | Pritam Raj" />
        <meta
          property="og:description"
          content="My name is Pritam Raj, I'm a Full-stack developer from India"
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            About
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="https://www.imghippo.com/i/Uoc9826HZs.JPEG"
                alt="Pritam's Profile"
              />

              <div className="links">
                <ul>
                  <Link href={"https://github.com/pritam707"}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link to Github"
                    >
                      <AiFillGithub size={25} /> @pritam707
                    </a>
                  </Link>
                  <Link href={"https://www.linkedin.com/in/pritamraj/"}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link to Linkedin"
                    >
                      <BsLinkedin size={25} /> @pritamraj
                    </a>
                  </Link>
                  <Link
                    href={"https://api.whatsapp.com/send?phone=917903346941"}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link to WhatsApp"
                    >
                      <RiWhatsappFill size={25} /> +91 7903346941
                    </a>
                  </Link>
                  <Link href={"https://www.discordapp.com/users/pritam_raj"}>
                    <a
                      className="dc"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link to Discord"
                    >
                      <FaDiscord size={25} /> @Pritam
                    </a>
                  </Link>
                  <Link href={"mailto:pritamkumarraj222@gmail.com"}>
                    <a
                      className="email"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link to email"
                    >
                      <GrMail size={25} /> @pritamkumarraj222@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Let&lsquo;s talk, maybe create an incredible project together?
                </h3>
                <p>Send me a message! 😉</p>
                <Link href={"/contact"}>
                  <a>
                    <ButtonAlt>Contact</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
                Greetings! I am Pritam Raj, a passionate and dedicated
                Full-stack Developer. I bring a curious mindset and a creative
                approach to every project I undertake. My primary focus is on
                backend development, and I thrive on building scalable and
                efficient systems using technologies like Node.js, Express.js,
                and JavaScript.
                <br /> <br />
                In my current role as a Software Engineer (Backend Developer) at
                Mobcoder since February 2022, I have played a key role in
                developing and maintaining robust backend systems. My
                responsibilities include designing and implementing RESTful
                APIs, integrating third-party services, and ensuring seamless
                communication between frontend and backend components. Notably,
                I&lsquo;ve contributed to projects like SYN, an NFT marketplace,
                where I facilitated secure transactions and developed an
                intuitive interface for users.
                <br /> <br />
                My skill set includes a range of technologies such as Node.js,
                Express.js, JavaScript, TypeScript, MongoDB, SQL, AWS, S3,
                Redis, HTML, CSS, React.js, Python, and more. I am well-versed
                in Agile methodology, and my knowledge extends to
                object-oriented programming (OOP) and data structures and
                algorithms (DSA). I am proficient in using version control
                systems like Git and have experience deploying applications on
                EC2 instances.
                <br /> <br />
                Currently, I&lsquo;m working on the Dobrh platform, a
                freelancing platform that I am developing from scratch. This
                involves implementing authentication, wallet management, and
                review systems. I have utilized my expertise in Node.js,
                MongoDB, Redis for caching, and integrated technologies like AWS
                and S3 for optimal performance.
                <br /> <br />
                I hold a B.Tech degree from PCE Jaipur (RTU, Kota) with an
                impressive CGPA of 8. Additionally, I completed a Diploma from
                AITS, Udaipur, and my schooling at JHS, Maheshkhunt.
                <br /> <br />
                Beyond technical expertise, I bring strong personal skills to
                the table. I am a leader with effective communication skills,
                adept at time management, and thrive in collaborative team
                environments. My adaptability and problem-solving skills make me
                a valuable asset in dynamic and challenging projects.
                <br /> <br />
                I have earned certifications in Microsoft Azure AI Fundamentals,
                MongoDB, Microsoft Azure Data Fundamentals, Amazon EC2, and
                various HackerRank certifications showcasing expertise in Rest
                API, JavaScript, and problem-solving. I have also received a
                Python Certification from Great Learning.
                <br /> <br />
                Feel free to explore my portfolio to see firsthand examples of
                my work and the innovative solutions I&lsquo;ve brought to
                various projects. Let&lsquo;s connect and discuss how I can
                contribute to your next exciting project!
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  );
}
