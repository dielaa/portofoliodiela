import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { GrCircleInformation } from "react-icons/gr";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";

export default function ContactComp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const my_email = "fadhilahtsawabiyahnurhafid@gmail.com";

    try {
      const response = await fetch("https://formsubmit.co/ajax/" + my_email, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Pesan baru dari ${formData.name}`,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 4000);
      } else {
        throw new Error("Gagal mengirim pesan");
      }
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">Contact</h1>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto mt-2 mb-3"></div>
          <p className="text-gray-600">
            Please fill out the form below or reach me via email.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <h2 className="text-xl font-medium text-gray-800 flex items-center gap-2">
              <span className="text-gray-500">
                <GrCircleInformation />
              </span>{" "}
              Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-gray-500 text-lg">
                  <CiMail />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="fadhilahtsawabiyahnurhafid@gmail.com"
                    className="text-gray-800 hover:text-gray-600 hover:underline"
                  >
                    fadhilahtsawabiyahnurhafid@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-500 text-lg">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:+628123456789"
                    className="text-gray-800 hover:text-gray-600 hover:underline"
                  >
                    +62 87879326047
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-500 text-lg">
                  <IoLocationOutline />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-800">Bogor, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition hover:shadow-md">
            <h2 className="text-xl font-medium text-gray-800 mb-5 flex items-center gap-2">
              <span className="text-gray-500">
                <LuMessageCircleMore />
              </span>{" "}
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
              {isSent && (
                <p className="text-green-700 text-sm text-center mt-2 bg-green-50 py-1 rounded">
                  <FaCheck />
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-600 text-sm text-center mt-2 bg-red-50 py-1 rounded">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
