"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Mail, Globe, MapPin, ChevronDown, Cpu, 
  Code2, Users, Trophy, Zap, Menu, X, ArrowRight, Cuboid
} from "lucide-react";

export default function Home() {
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

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <main className="flex flex-col bg-[#0a0514] min-h-screen overflow-hidden selection:bg-purple-500/30 selection:text-white font-sans text-gray-200">
      
      {/* ================= STILURI CSS PENTRU EFECTUL HOLOGRAFIC ================= */}
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

      {/* ================= HEADER / NAVBAR ================= */}
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-gray-300 font-medium text-sm tracking-wide">
            <Link href="/" className="hover:text-white transition-colors">Acasă</Link>
            <Link href="/roboti" className="hover:text-white transition-colors">Roboți</Link>
            <Link href="/proiecte-3d" className="hover:text-white transition-colors flex items-center gap-1">
              <Cuboid size={16} /> Proiecte 3D
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#100820]/95 backdrop-blur-xl border-t border-white/10 flex flex-col p-6 gap-4 shadow-2xl">
            <Link href="/" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Acasă</Link>
            <Link href="/roboti" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Roboți</Link>
            <Link href="/proiecte-3d" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Proiecte 3D</Link>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION (FIXED H-100DVH & CENTERED) ================= */}
      <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center">
        
        {/* Background Gradient Mov Închis/Bleumarin */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c0f33] via-[#0a0514] to-[#0d071a]" />
        
        {/* Abstract Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none"></div>

        {/* Holographic Glowing Orbs */}
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[140px] z-0 pointer-events-none"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-cyan-500/15 rounded-full blur-[130px] z-0 pointer-events-none"
        />

        {/* Conținut Hero (Centrat Vertical) */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl inline-flex items-center gap-3 text-gray-200 text-sm font-bold tracking-widest shadow-lg"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dda0dd] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#dda0dd]"></span>
            </span>
            Debutăm în Sezonul FTC #10
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter drop-shadow-2xl leading-none text-white"
          >
            GHIBABYTE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 text-lg md:text-2xl text-gray-300 font-light max-w-3xl"
          >
            Construim viitorul la Colegiul Național "Elena Ghiba Birta". Pasiunea pentru cod, inginerie și inovație ne definește.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 z-20 flex flex-col items-center text-gray-500"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={40} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= STATS BAR ================= */}
      <div className="relative z-30 py-16 px-6 max-w-6xl mx-auto w-full">
        <div className="bg-[#120924]/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 border border-white/10 flex flex-col md:flex-row justify-around gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {[
            { icon: <Code2 size={24} />, num: "1", text: "Echipă de debut" },
            { icon: <Users size={24} />, num: "20+", text: "Membri pasionați" },
            { icon: <Zap size={24} />, num: "100%", text: "Dedicare & Muncă" },
            { icon: <Trophy size={24} />, num: "FTC #10", text: "Gata de competiție" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 pt-4 md:pt-0 group">
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mb-3 text-white group-hover:scale-110 transition-transform holo-bg !text-[#0a0514]">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-white">{stat.num}</h3>
              <p className="text-gray-400 font-medium mt-1">{stat.text}</p>
            </div>
          ))}

        </div>
      </div>

      {/* ================= ROBOT SECTION ================= */}
      <section className="relative min-h-[90dvh] flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="flex flex-col items-start z-10"
          >
            <div className="inline-block px-4 py-1 mb-4 rounded-full border border-white/20 bg-white/5 text-gray-300 font-bold text-sm tracking-widest">
              PROIECTUL CURENT
            </div>
            <h2 className="text-7xl md:text-9xl font-black text-white leading-none mb-6 tracking-tighter">
              GHEBOASA
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
              Primul nostru robot, construit de la zero cu pasiune. Combină un șasiu precis cu mecanisme inovatoare concepute special pentru provocările Sezonului #10.
            </p>
            
            <Link href="/roboti" className="group flex items-center gap-4 px-8 py-4 font-bold text-[#0a0514] rounded-full overflow-hidden transition-all hover:scale-105 holo-bg shadow-[0_0_20px_rgba(221,160,221,0.2)]">
              <span>Descoperă-l în detaliu</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full blur-[100px] opacity-30 holo-bg"></div>
            <motion.img 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="https://placehold.co/800x1000/transparent/FFF?text=Robot+Transparent" 
              alt="TITAN-X Robot" 
              className="relative w-full max-w-lg object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-32 px-6 relative bg-[#100820]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">Cunoaște Echipa</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">Tinerii pasionați care transformă ideile în realitate.</p>
          </motion.div>

          {/* Lideri */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {[
              { role: "Team Captain", name: "Nume Președinte", img: "P", desc: "Arhitectul viziunii noastre. Coordonează eforturile și menține echipa unită." },
              { role: "Main Developer", name: "Nume Dev", img: "MD", desc: "Scrie codul care dă viață mașinăriilor noastre. Expert în sisteme de control." }
            ].map((leader, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} 
                className="group relative bg-[#170c2e]/60 backdrop-blur-sm p-8 rounded-[2rem] flex flex-col sm:flex-row gap-8 items-center border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-white/10 transition-all z-0 pointer-events-none"></div>
                
                <div className="relative shrink-0 z-10">
                  <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 holo-bg"></div>
                  <img src={`https://placehold.co/200x200/111/FFF?text=${leader.img}`} alt={leader.name} className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/10 bg-[#0a0514]" />
                </div>
                <div className="text-center sm:text-left z-10">
                  <p className="holo-text font-bold tracking-widest text-sm uppercase mb-2 inline-block">{leader.role}</p>
                  <h3 className="text-3xl font-bold mb-4 text-white">{leader.name}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Membri */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12"
          >
            {[
              { role: "Mecanic Principal", name: "Membru 1" },
              { role: "PR & Marketing", name: "Membru 2" },
              { role: "3D Designer", name: "Membru 3" },
              { role: "Hardware Eng", name: "Membru 4" }
            ].map((member, i) => (
              <motion.div key={i} variants={fadeUp} className="group flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-[-5px] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500 holo-bg z-0"></div>
                  <img src={`https://placehold.co/200x200/111/FFF?text=M${i+1}`} alt={member.name} className="relative w-28 h-28 md:w-36 md:h-36 object-cover rounded-full border border-white/10 z-10 bg-[#0a0514]" />
                </div>
                <h4 className="text-xl font-bold text-white">{member.name}</h4>
                <p className="text-sm text-gray-400 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SPONSORS SECTION ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-12">Participăm la</h3>
            
            <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
              <img 
                src="https://placehold.co/1200x150/170c2e/FFF?text=Imagine+Banner+FTC+Aici" 
                alt="Sponsors Banner" 
                className="w-full max-w-5xl rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="bg-[#05020a] py-16 px-6 relative border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          
          <div className="md:col-span-5">
            <h2 className="text-3xl font-black mb-6 text-white">GHIBABYTE</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-sm">
              Echipa de robotică a Colegiului Național "Elena Ghiba Birta". Construim roboți, formăm caractere.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/team.ghibabyte.arad/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hover:border-[#dda0dd]/50 hover:shadow-[0_0_15px_rgba(221,160,221,0.3)] group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/TeamGhibabyteArad/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hover:border-[#a0e6ff]/50 hover:shadow-[0_0_15px_rgba(160,230,255,0.3)] group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Website Ghiba */}
              <a href="https://ghibabirta.ro" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hover:border-white/30 group">
                <Globe size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Navigație</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><Link href="/" className="hover:text-white transition-colors">Acasă</Link></li>
              <li><Link href="/roboti" className="hover:text-white transition-colors">Roboții Noștri</Link></li>
              <li><Link href="/proiecte-3d" className="hover:text-white transition-colors">Proiecte 3D</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 shrink-0 text-[#dda0dd]" /> 
                <span>Colegiul Național "Elena Ghiba Birta"<br/>Arad, România</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="shrink-0 text-[#dda0dd]" /> 
                <a href="mailto:ghibabytearad@gmail.com" className="hover:text-white transition-colors">ghibabytearad@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Ghibabyte. Toate drepturile rezervate.</p>
          <p>Website coded by <a href="https://www.instagram.com/itvld.17/" target="_blank" className="font-bold tracking-wider holo-text hover:opacity-80 transition-opacity">Vlad</a></p>
        </div>
      </footer>
    </main>
  );
}