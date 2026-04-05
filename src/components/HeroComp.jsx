import { MdOutlinePermContactCalendar } from "react-icons/md";
import { TbReportOff } from "react-icons/tb";

export default function HeroComp() {
  return (
    <section className="min-h-screen flex items-start pt-24 relative overflow-hidden bg-white">
      <div className="absolute top-25 right-0 w-96 h-80 bg-[#4B362E] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#4B362E] rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="absolute w-80 h-80 border border-[#4B362E]/30 rounded-full"></div>
            <div className="absolute w-72 h-72 border border-[#4B362E]/20 rounded-full animate-pulse"></div>

            <div className="relative bg-linear-to-r from-[#4B362E] to-[#6b4f45] p-1 rounded-full shadow-xl">
              <div className="bg-[#F3EDE6] p-2 rounded-full">
                <img
                  src="/personal/profile.jpeg"
                  alt="Fadhilah"
                  className="w-64 h-64 object-cover rounded-full border-4 border-white"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-[#F3EDE6] border border-[#4B362E]/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#4B362E] rounded-full animate-pulse"></span>
              <span className="text-[#4B362E] text-sm font-medium">
                Hello, I'm
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-[#4B362E] to-[#6b4f45] bg-clip-text text-transparent">
                Fadhilah Tsawabiyah
              </span>
              <br />
              <span className="text-gray-800">Nurhafid</span>
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-linear-to-b from-[#4B362E] to-[#6b4f45] rounded-full"></div>
              <h2 className="text-xl font-semibold text-gray-600">
                Software Developer
              </h2>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed border-l-4 border-[#4B362E] pl-4">
              I am a student at SMK Wikrama Bogor with a strong interest in
              information technology, not only in software development but also
              in various other areas of the digital world. This portfolio
              highlights my journey, learning experiences, and continuous growth
              in this field.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-linear-to-r from-[#4B362E] to-[#6b4f45] rounded-lg font-semibold text-white hover:scale-105 transition"
              >
                <span className="flex items-center gap-2">
                  <MdOutlinePermContactCalendar />
                  Contact
                </span>
              </a>

              <a
                href="#certificate"
                className="px-8 py-3 rounded-lg font-semibold text-[#4B362E] border-2 border-[#4B362E] hover:bg-[#F3EDE6] transition flex items-center gap-2"
              >
                <TbReportOff />
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
