import React, { useState, useRef } from "react";
import { MdComputer } from "react-icons/md";
import { TbGuitarPick } from "react-icons/tb";

export default function CertificateComp() {
  const [selectedCert, setSelectedCert] = useState(null);
  const photoSectionRef = useRef(null);

  const sertifikatData = {
    jurusan: {
      title: "Department Certificates",
      icon: <MdComputer />,
      company: "SMK Wikrama Bogor",
      period: "2024 - 2026",
      desc: "Competency certificates and final project from Software Engineering major.",
      image:
        "/certificates/Sertifikat Belajar Dasar Pemrograman JavaScript.png",
      photos: [
        {
          id: 1,
          title: "Certificate in Basic JavaScript Programming",
          desc: "Learn the Basics of JavaScript Programming at Dicoding.com",
          image:
            "/certificates/Sertifikat Belajar Dasar Pemrograman JavaScript.png",
        },
        {
          id: 2,
          title: "Certificate in Basic Web Programming",
          desc: "Learn the Basics of Web Programming at Dicoding.com",
          image: "/certificates/Sertifikat Belajar Dasar Pemrograman Web.png",
        },
        {
          id: 3,
          title: "Certificate Software Engineer",
          desc: "Learn Software Engineer at MySkill",
          image: "/certificates/Sertifikat Software Engineer.png",
        },
        {
          id: 4,
          title: "Certificate Financial Literacy",
          desc: "Learn Basic Financial Literacy at Dicoding",
          image: "/certificates/Sertifikat Financial Literacy.png",
        },
        {
          id: 5,
          title: "Certificate K3",
          desc: "Occupational Safety and Health",
          image: "/certificates/Sertifikat K3.png",
        },
      ],
    },
    other: {
      title: "Other Activities",
      icon: <TbGuitarPick />,
      company: "Personal & Scout",
      period: "2024 - Present",
      desc: "Scouting activities and self development.",
      image: "/certificates/Sertifikat LDK.png",
      photos: [
        {
          id: 1,
          title: "Certificate of National Defense ",
          desc: "Introductory National Defense Education with the Ciampea Branch and Saka Dirgantara",
          image: "/certificates/Sertifikat Bela Negara.jpeg",
        },
        {
          id: 2,
          title: "Joint Training Certificate",
          desc: "Joint training between the East Bogor and South Bogor branches",
          image: "/certificates/Sertifikat Latgab.jpeg",
        },

        {
          id: 3,
          title: "Active Creative Video Certificate",
          desc: "The Active Creative Video Program is organized by DKR Bogor Timur",
          image: "/certificates/Sertifikat Video Kreatif Aktif.jpeg",
        },

        {
          id: 4,
          title: "Guitar Music Training Certificate",
          desc: "Training & Talent Development in Classical Guitar Music by Cempaka Musik",
          image: "/certificates/Sertifikat Pelatihan Musik Gitar.jpeg",
        },
      ],
    },
  };

  const handleClick = (key) => {
    if (selectedCert === key) {
      setSelectedCert(null);
    } else {
      setSelectedCert(key);
      setTimeout(() => {
        photoSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const selectedData = selectedCert ? sertifikatData[selectedCert] : null;

  return (
    <div className="py-20 bg-linear-to-br from-slate-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#4B362E]/10 rounded-full mb-3">
            <span className="text-[#4B362E] text-sm font-medium">
              Achievements
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Certificate Gallery
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Click on a card to see the certificate proof
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-[#4B362E] to-transparent hidden md:block"></div>

          <div
            className="relative flex flex-col md:flex-row items-center mb-12 cursor-pointer group"
            onClick={() => handleClick("jurusan")}
          >
            <div className="w-full md:w-5/12 md:text-right md:pr-12">
              <div
                className={`bg-white rounded-2xl p-5 shadow-lg border-l-4 border-[#4B362E] transition ${selectedCert === "jurusan" ? "ring-2 ring-[#4B362E]" : ""}`}
              >
                <div className="flex items-center gap-3 md:justify-end mb-2">
                  <span className="text-2xl">
                    {sertifikatData.jurusan.icon}
                  </span>
                  <h3 className="text-xl font-bold text-[#4B362E]">
                    {sertifikatData.jurusan.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500">
                  {sertifikatData.jurusan.company}
                </p>
                <span className="text-xs bg-[#F3EDE6] px-2 py-1 rounded-full text-[#4B362E]">
                  {sertifikatData.jurusan.period}
                </span>
                <p className="text-sm mt-2 text-gray-600">
                  {sertifikatData.jurusan.desc}
                </p>
              </div>
            </div>

            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4B362E] rounded-full border-4 border-white"></div>

            <div className="w-full md:w-5/12 mt-4 flex justify-center">
              <img
                src={sertifikatData.jurusan.image}
                className="w-28 h-28 rounded-full object-cover border-4 border-[#4B362E]"
              />
            </div>
          </div>

          <div
            className="relative flex flex-col md:flex-row items-center mb-12 cursor-pointer group"
            onClick={() => handleClick("other")}
          >
            <div className="w-full md:w-5/12 md:ml-auto md:pl-12">
              <div
                className={`bg-white rounded-2xl p-5 shadow-lg border-l-4 border-[#4B362E] transition ${selectedCert === "other" ? "ring-2 ring-[#4B362E]" : ""}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{sertifikatData.other.icon}</span>
                  <h3 className="text-xl font-bold text-[#4B362E]">
                    {sertifikatData.other.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500">
                  {sertifikatData.other.company}
                </p>
                <span className="text-xs bg-[#F3EDE6] px-2 py-1 rounded-full text-[#4B362E]">
                  {sertifikatData.other.period}
                </span>
                <p className="text-sm mt-2 text-gray-600">
                  {sertifikatData.other.desc}
                </p>
              </div>
            </div>

            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4B362E] rounded-full border-4 border-white"></div>

            <div className="w-full md:w-5/12 mt-4 flex justify-center">
              <img
                src={sertifikatData.other.image}
                className="w-28 h-28 rounded-full object-cover border-4 border-[#4B362E]"
              />
            </div>
          </div>
        </div>

        {selectedData && (
          <div ref={photoSectionRef} className="mt-12">
            <div className="grid md:grid-cols-2 gap-6">
              {selectedData.photos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-xl shadow-md p-3"
                >
                  <div className="h-60 flex items-center justify-center bg-gray-100">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <h4 className="mt-3 font-bold text-[#4B362E]">
                    {photo.title}
                  </h4>
                  <p className="text-sm text-gray-500">{photo.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 bg-gray-200 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
