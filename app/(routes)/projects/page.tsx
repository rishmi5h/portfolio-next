import ProjectCard from "@/app/_components/ProjectCard/ProjectCard";
import Link from "next/link";

export const metadata = {
  title: "rishmi5h | projects",
  openGraph: {
    title: "Project",
  },
};

const Project = [
  {
    projectName: "Siigma ui",
    projectDescription: "compoonent library",
    githubUrl: "https://github.com/rishmi5h/Sigma-UI",
    websiteUrl: "https://sigma-ui.netlify.app/",
  },
];

export default function Projects() {
  return (
    <div className='flex flex-col items-center justify-between p-24'>
      <h1>This is product page</h1>
      {Project.map(
        ({ projectName, projectDescription, githubUrl, websiteUrl }) => {
          return (
            <ProjectCard
              key={projectName}
              projectName={projectName}
              projectDescription={projectDescription}
              githubUrl={githubUrl}
              websiteUrl={websiteUrl}
            />
          );
        }
      )}
    </div>
  );
}
