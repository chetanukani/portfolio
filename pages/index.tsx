import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"), { ssr: false });
const Greetings = dynamic(() => import("../containers/Greetings"), { ssr: false });
const Skills = dynamic(() => import("../containers/Skills"), { ssr: false });
const Proficiency = dynamic(() => import("../containers/Proficiency"), { ssr: false });
const Education = dynamic(() => import("../containers/Education"), { ssr: false });
const Experience = dynamic(() => import("../containers/Experience"), { ssr: false });
const Projects = dynamic(() => import("../containers/Projects"), { ssr: false });
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"), { ssr: false });
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

export async function getStaticProps() {
  let githubProfileData: GithubUserType | null = null;
  try {
    const res = await fetch(`https://api.github.com/users/${openSource.githubUserName}`);
    if (res.ok) {
      githubProfileData = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch Github profile data:", error);
  }

  if (!githubProfileData || !githubProfileData.avatar_url) {
    githubProfileData = {
      avatar_url: "https://avatars.githubusercontent.com/u/59178380?v=4",
      bio: "Full Stack & Web3 / Blockchain Developer | Smart Contracts, dApps & Scalable Architecture",
      location: "Ahmedabad, Gujarat, India",
    } as any;
  }

  return {
    props: { githubProfileData },
  };
}
