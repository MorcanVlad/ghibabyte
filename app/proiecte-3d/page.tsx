"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Menu, X, Cpu, Cuboid, Download, Layers, Wrench, Search
} from "lucide-react";

// =====================================================================
// AICI ADAUGI PIESELE 3D
// fileUrl: poate fi un link de Google Drive, Printables sau un fisier 
// pus în folderul 'public' din proiect (ex: "/fisiere/piesa1.stl")
// =====================================================================
const projects3D = [
  {
    id: 1,
    name: "Suport Servo Direcție",
    category: "Printabil 3D",
    description: "Un suport robust din PLA+ sau PETG, proiectat pentru a fixa ferm servo-motoarele standard de șasiul robotului. Grosime perete: 3mm.",
    tags: ["PLA+", "Mecanică", "Șasiu"],
    image: "https://placehold.co/600x400/170c2e/FFF?text=Suport+Servo",
    fileUrl: "#link-spre-google-drive-sau-fisier",
  },
  {
    id: 2,
    name: "Sistem Prindere Intrare",
    category: "Mecanism CAD",
    description: "Design-ul complet pentru intake-ul cu role flexibile. Include distanțierele custom și sistemul de tensionare a curelei.",
    tags: ["FUSION 360", "STEP", "Intake"],
    image: "https://placehold.co/600x400/170c2e/FFF?text=Sistem+Intake",
    fileUrl: "#link-spre-google-drive-sau-fisier",
  },
  {
    id: 3,
    name: "Carcasă Placă Control",
    category: "Printabil 3D",
    description: "Carcasă ventilată pentru protejarea Control Hub-ului. Oferă acces ușor la porturi și indicatoarele LED. Prindere cu șuruburi M3.",
    tags: ["PETG", "Electronică", "Protecție"],
    image: "https://placehold.co/600x400/170c2e/FFF?text=Carcasa+Hub",
    fileUrl: "#link-spre-google-drive-sau-fisier",
  },
  {
    id: 4,
    name: "Roată de Antrenare Custom",
    category: "Mecanism CAD",
    description: "Roată profilată pentru curea sincronă, optimizată pentru a reduce greutatea fără a compromite structura internă.",
    tags: ["TPU", "Transmisie"],
    image: "https://placehold.co/600x400/170c2e/FFF?text=Roata+Curea",
    fileUrl: "#link-spre-google-drive-sau-fisier",
  },
  // CA SĂ ADAUGI UN PROIECT NOU, ADAUGI UN BLOC {...} NOU AICI!
];

export default function Proiecte3DPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // Functie de cautare in catalog
  const filteredProjects = projects3D.filter((proj) =>
    proj.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    proj.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
            <Link href="/roboti" className="hover:text-white transition-colors">Roboți</Link>
            <Link href="/proiecte-3d" className="holo-text font-bold flex items-center gap-1">
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
            <Link href="/roboti" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Roboți</Link>
            <Link href="/proiecte-3d" className="holo-text text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Proiecte 3D</Link>
          </div>
        )}
      </header>

      {/* ================= HEADER CATALOG ================= */}
      <section className="relative pt-40 pb-20 w-full flex flex-col items-center justify-center border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0514] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 holo-border">
            <Layers size={32} className="text-white" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
          >
            CATALOGUL <span className="holo-text">CAD & 3D</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-400 font-light"
          >
            Descoperă, analizează și descarcă pisele proiectate de echipa Ghibabyte. Open-source pentru comunitatea FIRST.
          </motion.p>

          {/* Bara de Cautare */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-10 relative w-full max-w-md"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Caută o piesă (ex: suport, PLA)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#170c2e]/50 border border-white/10 text-white rounded-full py-4 pl-12 pr-4 focus:outline-none focus:border-[#dda0dd]/50 focus:ring-1 focus:ring-[#dda0dd]/50 transition-all placeholder:text-gray-600"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CATALOG GRID ================= */}
      <section className="py-24 px-6 relative min-h-[50dvh]">
        <div className="max-w-7xl mx-auto">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <Cuboid size={48} className="mx-auto mb-4 opacity-20" />
              <p>Nu am găsit niciun proiect conform căutării.</p>
            </div>
          ) : (
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id} variants={fadeUp}
                  className="group flex flex-col bg-[#120924]/60 border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                >
                  {/* Imagine Proiect */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#05020a]">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0a0514]/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase text-gray-300">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Informatii Proiect */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#dda0dd] transition-colors">{project.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 text-gray-400 text-xs font-medium">
                          <Wrench size={10} /> {tag}
                        </span>
                      ))}
                    </div>

                    {/* Download Button */}
                    <a 
                      href={project.fileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all group/btn relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Descarcă Fișier <Download size={18} className="group-hover/btn:translate-y-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 w-full h-full holo-bg opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#05020a] py-12 px-6 border-t border-white/10 text-center">
         <p className="text-gray-500 text-sm font-light">
           © {new Date().getFullYear()} Ghibabyte. Website coded by <a href="https://www.instagram.com/itvld.17/" target="_blank" className="font-bold tracking-wider holo-text hover:opacity-80 transition-opacity">Vlad</a>
         </p>
      </footer>
    </main>
  );
}