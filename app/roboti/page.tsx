"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Mail, Globe, MapPin, ChevronDown, Cpu, 
  Menu, X, Cuboid, Settings2, Target, Zap
} from "lucide-react";

// =====================================================================
// AICI ADAUGI ROBOȚII NOI PE VIITOR!
// Doar copiezi o secțiune delimitată de acolade {...} și schimbi datele.
// =====================================================================
const robotsData = [
  {
    id: "titan-x",
    name: "TITAN-X",
    year: "2026",
    season: "FTC #10",
    description: "Robotul de debut al echipei Ghibabyte. Proiectat pentru a fi rapid, precis și fiabil. Acest robot reprezintă mii de ore de proiectare 3D, printare și scriere de cod. Dispune de un sistem modular care permite reparații rapide direct pe terenul de joc.",
    specs: ["Șasiu Omnidirecțional Mecanum", "Braț Telescopic", "Sistem Inteligent de Recunoaștere (AI)", "Piese Custom 3D"],
    image: "https://placehold.co/800x1000/transparent/FFF?text=TITAN-X+Robot",
    // Poți schimba culoarea glow-ului pentru fiecare robot în parte
    glowColor: "bg-cyan-500" 
  },
  // CA SĂ ADAUGI UN ROBOT NOU LA ANUL, DECOMENETZI/COPIEZI CODUL DE MAI JOS:
  /*
  {
    id: "robot-2",
    name: "NUME ROBOT 2",
    year: "2027",
    season: "FTC #11",
    description: "Descrierea noului robot...",
    specs: ["Specificație 1", "Specificație 2", "Specificație 3", "Specificație 4"],
    image: "link-poza-robot-nou.png",
    glowColor: "bg-purple-500" 
  }
  */
];

export default function RobotsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="flex flex-col bg-[#0a0514] min-h-screen selection:bg-purple-500/30 selection:text-white font-sans text-gray-200">
      
      {/* ================= STILURI CSS ================= */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .holo-text {
          background: linear-gradient(270deg, #b0c4de, #dda0dd, #ffb6c1, #a0e6ff, #b0c4de);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 6s ease infinite;
        }
        .holo-bg {
          background: linear-gradient(270deg, #b0c4de, #dda0dd, #ffb6c1, #a0e6ff, #b0c4de);
          background-size: 300% 300%;
          animation: shimmer 6s ease infinite;
        }
        .holo-border {
          position: relative;
        }
        .holo-border::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(270deg, rgba(176,196,222,0.5), rgba(221,160,221,0.5), rgba(255,182,193,0.5), rgba(160,230,255,0.5));
          background-size: 300% 300%;
          animation: shimmer 6s ease infinite;
          z-index: -1;
        }
      `}} />

      {/* ================= HEADER ================= */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled ? "bg-[#0a0514]/90 backdrop-blur-xl border-white/10 py-4 shadow-2xl" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center holo-bg group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(221,160,221,0.4)]">
              <Cpu size={22} className="text-[#0a0514]" />
            </div>
            <span className="text-white font-black text-2xl tracking-tighter drop-shadow-md">GHIBABYTE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-gray-300 font-medium text-sm tracking-wide">
            <Link href="/" className="hover:text-white transition-colors">Acasă</Link>
            <Link href="/roboti" className="text-white holo-text font-bold">Roboți</Link>
            <Link href="/proiecte-3d" className="hover:text-white transition-colors flex items-center gap-1">
              <Cuboid size={16} /> Proiecte 3D
            </Link>
          </nav>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#100820]/95 backdrop-blur-xl border-t border-white/10 flex flex-col p-6 gap-4 shadow-2xl">
            <Link href="/" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Acasă</Link>
            <Link href="/roboti" className="holo-text text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Roboți</Link>
            <Link href="/proiecte-3d" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Proiecte 3D</Link>
          </div>
        )}
      </header>

      {/* ================= HERO INTRO ROBOTI ================= */}
      <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center border-b border-white/10">
        <div className="absolute inset-0 bg-[#0a0514] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6"
          >
            MAȘINĂRIILE <span className="holo-text block mt-2">NOASTRE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Fiecare robot este o poveste a inovației, a eșecurilor depășite și a orelor târzii de muncă. Explorează evoluția Ghibabyte.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-10 z-20 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Alege Generația</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={32} className="text-[#dda0dd]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= GENERARE AUTOMATA SLIDE-URI ROBOTI ================= */}
      {robotsData.map((robot, index) => (
        <section key={robot.id} className="relative min-h-[100dvh] flex items-center py-20 px-6 border-b border-white/5 overflow-hidden">
          
          {/* Abstract background specific fiecarui robot (isi schimba stanga/dreapta) */}
          <div className={`absolute top-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-[150px] opacity-10 pointer-events-none ${index % 2 === 0 ? 'left-[-10%]' : 'right-[-10%]'} ${robot.glowColor}`}></div>

          <div className={`max-w-7xl mx-auto w-full flex flex-col gap-16 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            
            {/* INFORMATII ROBOT */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="w-full lg:w-1/2 flex flex-col items-start z-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white font-bold text-sm tracking-widest holo-border">
                  {robot.year}
                </span>
                <span className="text-gray-500 font-bold tracking-widest text-sm uppercase">
                  {robot.season}
                </span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter">
                {robot.name}
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
                {robot.description}
              </p>

              {/* SPECIFICATII - Grid Tech */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {robot.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors group">
                    <Target size={20} className="text-[#dda0dd] group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 font-medium text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* POZA ROBOT */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
              className="w-full lg:w-1/2 relative flex justify-center"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-[100px] opacity-20 holo-bg"></div>
              <motion.img 
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                src={robot.image} 
                alt={robot.name} 
                className="relative w-full max-w-lg object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] z-10"
              />
            </motion.div>

          </div>
        </section>
      ))}

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#05020a] py-12 px-6 border-t border-white/10 text-center">
         <p className="text-gray-500 text-sm font-light">
           © {new Date().getFullYear()} Ghibabyte. Website coded by <a href="https://www.instagram.com/itvld.17/" target="_blank" className="font-bold tracking-wider holo-text hover:opacity-80 transition-opacity">Vlad</a>
         </p>
      </footer>
    </main>
  );
}