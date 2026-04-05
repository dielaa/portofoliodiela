import React, { useState, useEffect, useRef } from "react";
import { SiUbisoft } from "react-icons/si";
import { SiOpensourcehardware } from "react-icons/si";
import { TbGuitarPick } from "react-icons/tb";

export default function AboutComp() {
  const [isVisible, setIsVisible] = useState(false);
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

  const educationData = [
    {
      level: "Elementary School",
      school: "SDN Bangka 3 Bogor",
      year: "2015-2021",
    },
    {
      level: "Junior High School",
      school: "MTs Fathan Mubina",
      year: "2021-2024",
    },
    {
      level: "Vocational High School",
      school: "SMK Wikrama Bogor",
      year: "2024-2026",
    },
  ];

  const hardSkills = [
    "HTML",
    "CSS",
    "React JS",
    "Laravel",
    "Tailwind",
    "Python",
    "Figma",
    "Bootstrap",
    "JavaScript",
    "Flutter",
    "PHP",
    "MySQL",
    "MongoDB",
  ];
  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Time Management",
  ];
  const otherExperiences = ["Pramuka (Scouting)", "Gitar (Guitar)"];

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
            About Me
          </h1>
          <p className="text-gray-600 mt-2">Education, Skills & Activities</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative pl-6 border-l-2 border-[#4B362E]/30">
            {educationData.map((item, idx) => (
              <div
                key={idx}
                className={`relative mb-8 transition-all duration-500 delay-${idx * 100} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <div className="absolute -left-[1.85rem] top-1 w-3 h-3 bg-[#4B362E] rounded-full"></div>
                <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h4 className="font-bold text-[#4B362E]">{item.level}</h4>
                    <span className="text-xs bg-[#F3EDE6] text-[#4B362E] px-2 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{item.school}</p>
                </div>
              </div>
            ))}

            <div
              className={`mt-6 bg-[#4B362E]/5 rounded-xl p-4 border-l-4 border-[#4B362E] transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <p className="text-gray-700 text-sm">
                Currently studying at{" "}
                <span className="font-semibold text-[#4B362E]">
                  SMK Wikrama Bogor
                </span>{" "}
                majoring in
                <span className="font-semibold text-[#4B362E]">
                  {" "}
                  PPLG (Software Engineering)
                </span>
                , actively involved in web development and other activities.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="font-bold text-[#4B362E] mb-3 flex items-center gap-2">
                <span>
                  <SiOpensourcehardware />
                </span>{" "}
                Hard Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 bg-white rounded-full text-sm text-[#4B362E] border border-[#4B362E]/30 shadow-sm transition-all duration-500 delay-${idx * 50} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-[#4B362E] mb-3 flex items-center gap-2">
                <span>
                  <SiUbisoft />
                </span>{" "}
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 bg-white rounded-full text-sm text-[#4B362E] border border-[#4B362E]/30 shadow-sm transition-all duration-500 delay-${200 + idx * 50} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-[#4B362E] mb-3 flex items-center gap-2">
                <span>
                  <TbGuitarPick />
                </span>{" "}
                Other Experiences
              </h3>
              <div className="flex flex-wrap gap-2">
                {otherExperiences.map((exp, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 bg-[#F3EDE6] rounded-full text-sm text-[#4B362E] border border-[#4B362E]/20 transition-all duration-500 delay-${400 + idx * 50} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`mt-8 p-3 bg-linear-to-r from-[#4B362E] to-[#6b4f45] rounded-lg text-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="text-white text-xs italic">
                "Always learn, contribute, and become a useful person"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
