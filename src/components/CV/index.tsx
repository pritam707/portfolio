/* eslint-disable @next/next/no-img-element */
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles";
import { FiDownload } from "react-icons/fi";

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title style={{ marginBottom: "3rem" }}>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className="aspas">&ldquo;</div>
            <p>
              Here you can download my resume by clicking the download button.
            </p>
            <div className="profile">
              <img
                src="https://avatars.githubusercontent.com/u/101946248?v=4"
                alt="Profile image"
              />
              <div className="name">
                <h3>Pritam Raj</h3>
                <span>Backend Developer</span>
              </div>
            </div>
          </CVDescription>

          <Curriculum>
            <img src="/cv.png" alt="showing a resume download button" />
            <a href="/pdf/PritamCV2.1.pdf" download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20} />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>
      </CVContainer>
    </Container>
  );
}
