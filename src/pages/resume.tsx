import Head from "next/head";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { CV } from "../components/CV";
import { Description, Section, Title } from "../styles/styles";
import { PageSection } from "../styles/resume";
import { BsFileText } from "react-icons/bs";

export default function Resume() {
  const resumeData =
    "https://www.canva.com/design/DAF4RYk3CWw/wpmMtXElXzC_AcmkiViSbg/edit?utm_content=DAF4RYk3CWw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf("/") + 1
  )}view?embed`;

  return (
    <>
      <Head>
        <title>Resume | Pritam Raj </title>
        <meta
          name="description"
          content="Here you can see or download my CV."
        />
        <meta property="og:title" content="Resume | Evander Inácio" />
        <meta
          property="og:description"
          content="
          Here you can see or download my CV."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../curriculum</p>
          Curriculum
          <span>
            <BsFileText /> Curriculum
          </span>
        </Title>
        <Description>Here you can see or download my resume.</Description>

        <PageSection>
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Pritam Raj"
          />

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  );
}
