import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Dining from "./components/Dining";
import Plan from "./components/Plan";
import ReserveCTA from "./components/ReserveCTA";
import Access from "./components/Access";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    const targets = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans bg-white text-slate-800">
      {/* 全セクション */}
      <Header />
      <Hero />
      <Concept />
      <Rooms />
      <Facilities />
      <Dining />
      <Plan />
      <Access />
      <ReserveCTA />
      <Footer />
    </div>
  );
}
