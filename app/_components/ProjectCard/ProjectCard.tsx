type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  githubUrl: string;
  websiteUrl: string;
};

export default function ProjectCard(_props: ProjectCardProps) {
  return (
    <div>
      <h1>{_props.projectName}</h1>
      <p>{_props.projectDescription}</p>
      <a href={_props.githubUrl}>Github URL</a>
      <a href={_props.websiteUrl}>Demo URL</a>
    </div>
  );
}
