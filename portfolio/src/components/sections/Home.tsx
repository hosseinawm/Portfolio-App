const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center scrollbar"
    >
      <div className="text-center z-10 px-4">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#dfd0b8] to-[#e6b7a9] bg-clip-text text-transparent



"
        >
          Hi, I’m Hossein Matari
        </h1>
        <p className=" text-lg mb-8 max-w-lg mx-auto font-mono">
          I'm a frontend developer passionate about creating modern,
          user-friendly web applications. I love pushing boundaries with the
          latest technologies and continuously growing my skills to build
          innovative, scalable, and high-quality digital experiences.
        </p>

        <div className="flex justify-center items-center space-x-4">
          <a
            href="#projects"
            className="bg-[#dfd0b8] text-black px-6 py-3 rounded-2xl font-medium relative hover:bg-[#d4a373] hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-[#dfd0b8] text-[#dfd0b8] px-6 py-3 rounded-2xl font-medium relative hover:bg-[#d4a373] hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
