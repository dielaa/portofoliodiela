import React, { useState, useEffect, useRef } from "react";

export default function ExperienceComp() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "IMT Website",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "Body Mass Index (IMT) calculator website with interactive form.",
      image: "/project/imt.png",
    },
    {
      id: 2,
      title: "Laravel Hotel",
      tech: ["Laravel"],
      desc: "Hotel booking and room management system built with Laravel.",
      image: "/project/laravel hotel.png",
    },
    {
      id: 3,
      title: "TixId",
      tech: ["Laravel"],
      desc: "Event ticketing platform with user authentication.",
      image: "/project/tixid.png",
    },
    {
      id: 4,
      title: "Flaw Flower Design",
      tech: ["Figma"],
      desc: "Modern UI/UX design for an online flower shop (Figma).",
      image: "/project/design flawflower.png",
    },
    {
      id: 5,
      title: "Buku Tamu Design",
      tech: ["Figma"],
      desc: "Guest book UI design for SMK Wikrama (Figma).",
      image: "/project/design buku tamu.png",
    },
    {
      id: 6,
      title: "Fake Store App",
      tech: ["React", "Tailwind CSS", "REST API"],
      desc: "E‑commerce frontend app with product listing and cart, fetching data from FakeStore API.",
      image: "/project/fake store app.png",
    },
    {
      id: 7,
      title: "Makeup Store App",
      tech: ["React", "Tailwind CSS", "REST API"],
      desc: "Makeup products catalog app with filter and detail view, using Makeup API.",
      image: "/project/makeup store app.png",
    },
    {
      id: 8,
      title: "Python Project",
      tech: ["Python"],
      desc: "Various Python scripts and data processing projects.",
      image: "/project/python.png",
    },
    {
      id: 9,
      title: "Uncle Jo",
      tech: ["HTML", "CSS"],
      desc: "Static company profile website for Uncle Jo.",
      image: "/project/unclejo.png",
    },
    {
      id: 10,
      title: "Laravel SeaWorld",
      tech: ["Laravel"],
      desc: "Aquarium ticket booking and information system.",
      image: "/project/laravel seaworld.png",
    },
  ];

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;
  const hasLess = visibleCount > 3;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  const loadLess = () => {
    setVisibleCount(3);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-linear-to-br from-[#F3EDE6] via-white to-[#F3EDE6]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#4B362E] to-[#6b4f45] bg-clip-text text-transparent">
            PROJECTS
          </h1>
          <p className="text-gray-600 mt-2">Some projects I have built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#4B362E] mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-[#F3EDE6] rounded-full text-[#4B362E] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-x-4">
          {hasMore && (
            <button
              onClick={loadMore}
              className="px-6 py-2 rounded-full bg-white border border-[#4B362E] text-[#4B362E] font-medium hover:bg-[#F3EDE6] transition shadow-sm hover:shadow"
            >
              View More
            </button>
          )}
          {hasLess && (
            <button
              onClick={loadLess}
              className="px-6 py-2 rounded-full bg-white border border-[#4B362E] text-[#4B362E] font-medium hover:bg-[#F3EDE6] transition shadow-sm hover:shadow"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
