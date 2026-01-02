import React, { useState } from "react";
import type { ContactFormState } from "../types/types";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // }

  {
    /* Back to top */
  }
  // <button
  //   onClick={scrollToTop}
  //   className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
  // >
  //   <span>Back to top</span>
  //   <div className="w-6 h-6 border-2 border-blue-400 rounded-full flex items-center justify-center">
  //     <div className="w-2 h-2 border-t-2 border-blue-400 transform rotate-45"></div>
  //   </div>
  // </button>

  return (
    <footer
      id="contact"
      className="pt-20 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-[#030303] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 sm:gap-16 lg:gap-20 mb-20 sm:mb-32 md:mb-40">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black tracking-tighter mb-8 sm:mb-10 md:mb-12 leading-none">
              START <br /> A <span className="text-indigo-600">THREAD.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-12 sm:mb-14 md:mb-16 max-w-md leading-relaxed">
              I'm always interested in hearing about new projects, technical
              challenges, or collaboration opportunities.
            </p>

            <div className="space-y-8 sm:space-y-12">
              <div>
                <span className="mono text-[10px] text-gray-600 block mb-3 sm:mb-4 uppercase tracking-[0.2em]">
                  Local Time
                </span>
                <span className="text-xl sm:text-2xl font-light">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZoneName: "short"
                  })}
                </span>
              </div>

              <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12">
                <a
                  href="https://www.linkedin.com/in/success-obayuwana-312748220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-sm hover:text-indigo-500 transition-colors uppercase tracking-widest"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Obayuwana22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-sm hover:text-indigo-500 transition-colors uppercase tracking-widest"
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/its_success?t=nsp_wWIz7_DSXV9nDhrIMA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-sm hover:text-indigo-500 transition-colors uppercase tracking-widest"
                >
                  X
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-sm hover:text-indigo-500 transition-colors uppercase tracking-widest"
                >
                  cv
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10 lg:p-12 border border-white/5 bg-white/1 rounded-2xl relative">
            <div className="mono text-[9px] sm:text-[10px] text-indigo-500/50 absolute top-3 sm:top-4 right-4 sm:right-8 uppercase">
              0x034 // Form_Service
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
              <div className="group">
                <label className="mono text-[10px] text-gray-600 block mb-2 uppercase tracking-widest transition-colors group-focus-within:text-indigo-500">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="IDENTITY"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none transition-all focus:border-indigo-600 text-sm tracking-wider placeholder:text-gray-800"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="group">
                <label className="mono text-[10px] text-gray-600 block mb-2 uppercase tracking-widest transition-colors group-focus-within:text-indigo-500">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="COMMUNICATION@ENDPOINT.COM"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none transition-all focus:border-indigo-600 text-sm tracking-wider placeholder:text-gray-800"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="group">
                <label className="mono text-[10px] text-gray-600 block mb-2 uppercase tracking-widest transition-colors group-focus-within:text-indigo-500">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="TRANSMIT_DATA..."
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none transition-all focus:border-indigo-600 text-sm tracking-wider resize-none placeholder:text-gray-800"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled
                // disabled={status !== 'idle'}
                className="w-full py-4 sm:py-5 md:py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:bg-indigo-600 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "idle" && "Push to Main"}
                {status === "sending" && "Broadcasting..."}
                {status === "success" && "Transmission Success"}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
          <div className="mono text-[9px] sm:text-[10px] text-gray-600 text-center md:text-left">
            ENGINEERED_BY_SUCCESS_2026 // ALL_RIGHTS_RESERVED
          </div>
          <div className="mono text-[9px] sm:text-[10px] text-gray-600 text-center md:text-left">
            BUILT_WITH_REACT_TYPESCRIPT_TAILWIND
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-1/2 -left-1/4 w-250 h-250 bg-indigo-900/10 blur-[150px] rounded-full"></div>
    </footer>
  );
};

export default Contact;
