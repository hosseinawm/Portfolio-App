import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="flex justify-center text-3xl font-bold mb-8 bg-gradient-to-r from-[#dfd0b8] to-[#e6b7a9] bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-xl border-[#dfd0b8]/20 border flex flex-col justify-center items-center hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 ">{project.title}</h3>
              <p className="font-mono">{project.description}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between  mt-6 gap-2 w-full">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="bg-[#dfd0b8] text-black py-1 px-3 rounded-full text-sm hover:bg-[#d4a373]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 border border-[#dfd0b8] text-[#dfd0b8] px-3 py-1 rounded-2xl font-medium relative hover:bg-[#d4a373] hover:-translate-y-0.5 self-end sm:self-auto mt-2 sm:mt-0"
                >
                  View Project
                  <i className="fa-solid fa-arrow-right fa-fade"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
