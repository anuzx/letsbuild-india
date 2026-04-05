import HeroSection from "./components/HeroSection";
import HackathonSection from "./components/Hackathon";
import { SponserSection } from "./components/SponserSection";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* 🔹 Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        <HeroSection />
      </section>

      {/* 🔹 Hackathon Section */}
      <HackathonSection />

      {/* 🔹 Sponsors Section */}
      <section
        id="sponsors"
        className="w-full py-24"
        style={{ background: "#0f0f1a" }}
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
              className="mt-4 h-[2px] w-16 rounded-full"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />
          </div>
          <SponserSection />
        </div>
      </section>

      {/* 🔹 Contact Us Section */}
      <section
        id="contact"
        className="w-full py-24"
        style={{ background: "linear-gradient(180deg, #0f0f1a 0%, #0a0a0f 100%)" }}
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
              className="mt-4 h-[2px] w-16 rounded-full"
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
