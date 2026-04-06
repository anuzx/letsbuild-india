import HeroSection from "./components/HeroSection";
import HackathonSection from "./components/Hackathon";
import SponserSection from "./components/SponserSection";
import { ContactUs } from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* 🔹 Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden snap-always snap-start">
        <HeroSection />
      </section>

      {/* 🔹 Hackathon Section */}
      <section id="hackathons" className="relative w-full py-24 bg-[#050505] border-t border-[#262626] bg-[radial-gradient(circle_at_50%_0%,_#111_0%,_transparent_50%)] snap-start">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Upcoming Events
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-center"
              style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
            >
              Hackathons
            </h2>
            <div
              className="mt-4 h-0.5 w-16 rounded-full"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />
          </div>
          <HackathonSection />
        </div>
      </section>

      {/* 🔹 Sponsors Section */}
      <section
        id="sponsors"
        className="relative w-full py-24 bg-[#050505] border-t border-[#262626] bg-[radial-gradient(circle_at_50%_0%,_#111_0%,_transparent_50%)] snap-start"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Backed By
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-center"
              style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
            >
              Sponsors
            </h2>
            <div
              className="mt-4 h-0.5 w-16 rounded-full"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />
          </div>
          <SponserSection />
        </div>
      </section>

      {/* 🔹 Contact Us Section */}
      <section
        id="contact"
        className="relative w-full py-24 bg-[#050505] border-t border-[#262626] bg-[radial-gradient(circle_at_50%_0%,_#111_0%,_transparent_50%)] snap-start"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Get In Touch
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-center"
              style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
            >
              Contact Us
            </h2>
            <div
              className="mt-4 h-0.5 w-16 rounded-full"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />
          </div>
          <ContactUs />
        </div>
      </section>

      {/* 🔹 Footer */}
      <Footer />

    </main>
  );
}
