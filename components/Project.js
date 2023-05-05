import Image from "next/image";

const Project = () => {
  return (
    <article>
      <h1>Project Title</h1>
      <p>
        here comes a short description of the project, the scope and what i did
        followed by tags
      </p>
      <p>
        Figma
        <br />
        React
        <br />
        Next.js
        <br />
        MongoDB
        <br />
      </p>
      <Image height={200} width={200} alt="project" scr="public/favicon.ico" />
    </article>
  );
};

export default Project;
