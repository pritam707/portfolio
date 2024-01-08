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
                src="https://media.licdn.com/dms/image/D4D03AQGg2_bJ05a_Pw/profile-displayphoto-shrink_800_800/0/1700319835482?e=1709164800&v=beta&t=1V8oCHJG04k-0IvH15GvOvvrfs82wVzgIt6QMXT1sZ0"
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
