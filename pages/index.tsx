import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchProjects } from "@/utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};

const Home = ({ pageInfo, experiences, skills, socials, projects }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-slate-500"
    >
      <Head>
        <title>Ayaan Siddiqui - Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ChevronDoubleUpIcon className="h-10 w-10 bg-gray-600 rounded-full filter grayscale hover:grayscale-0" />
            {/* <p className="ml-3 text-base uppercase tracking-[3px] text-gray-400">Back to top</p> */}
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
