import { useState } from "react";

import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("error");
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-150 ">
        <h2 className="flex justify-center text-3xl font-bold mb-8 bg-gradient-to-r from-[#dfd0b8] to-[#e6b7a9] bg-clip-text text-transparent">
          Contact Me
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              value={form.name}
              onChange={handleChange}
              id="name"
              name="name"
              required
              className="w-full bg-[#1a1a1a] border border-[#dfd0b8] rounded placeholder-[#a8a29e] px-4 py-3 transition focus:outline-none focus:border-[#dfd0b8] focus:bg-[#111]"
              placeholder="Name..."
            />
          </div>

          <div className="relative">
            <input
              type="email"
              value={form.email}
              onChange={handleChange}
              id="email"
              name="email"
              required
              className="w-full bg-[#1a1a1a] border border-[#dfd0b8] rounded placeholder-[#a8a29e] px-4 py-3 transition focus:outline-none focus:border-[#dfd0b8] focus:bg-[#111]"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              name="message"
              rows={7}
              required
              className="w-full bg-[#1a1a1a] border border-[#dfd0b8] rounded placeholder-[#a8a29e] px-4 py-3 transition focus:outline-none focus:border-[#dfd0b8] focus:bg-[#111]"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded  transition ${
              loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-[#dfd0b8] text-black hover:bg-[#d4a373]"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
