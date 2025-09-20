const About = () => {
  const frontendSkills: string[] = [
    "React",
    "Next.js(app-router)",
    "TypeScript",
    "Redux",
    "Zustand",
    "MUI",
    "Tailwind",
    "ShadCN UI",
  ];
  const backendSkills: string[] = [
    "Python",
    "Django",
    "Django REST Framework",
    "Restful API",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="flex justify-center text-3xl font-bold mb-8 bg-gradient-to-r from-[#dfd0b8] to-[#e6b7a9] bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="rounded-xl p-8 font-mono border-[#dfd0b8]/20 border hover:-translate-y-1 transition-all">
          <p className="mb-6">
            Motivated and passionate self-taught developer with a deep interest
            in computers and software development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#dfd0b8] text-black py-1 px-3 rounded-full text-sm hover:bg-[#d4a373]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Backend(basics)</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#dfd0b8] text-black py-1 px-3 rounded-full text-sm hover:bg-[#d4a373]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 hover:-translate-y-1 transition-all">
          <div className="p-6 rounded-xl border-[#dfd0b8]/20 border">
            <h3 className="text-xl font-bold mb-4 ">Education</h3>
            <p className="font-mono">
              - Bachelor’s in Law | Master’s in Criminal Law (ongoing)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
