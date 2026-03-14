import { motion } from "motion/react";
import { Cpu, Globe, Layers, Shield, Zap, Database, Server, Code, Cloud } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-start ${className}`}>
    <div className="flex items-baseline gap-0">
      <span className="text-3xl font-bold tracking-tighter text-midnight leading-none">qenzor</span>
    </div>
    <div className="flex items-center gap-2 -mt-1">
      <div className="relative w-8 h-4">
        {/* Simplified representation of the teal/navy link icon */}
        <svg viewBox="0 0 40 20" className="w-full h-full">
          <path 
            d="M5 5 L15 5 L15 15 L5 15 Z" 
            fill="none" 
            stroke="#06B6D4" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <path 
            d="M12 10 L30 10 L25 5 M30 10 L25 15" 
            fill="none" 
            stroke="#0F172A" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-midnight whitespace-nowrap">IT & SERVICES</span>
    </div>
  </div>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass">
    <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Logo className="scale-90 origin-left" />
      <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
        <a href="#services" className="hover:text-teal transition-colors">Services</a>
        <a href="#infrastructure" className="hover:text-teal transition-colors">Infrastructure</a>
        <a href="#case-studies" className="hover:text-teal transition-colors">Case Studies</a>
        <a href="#contact" className="hover:text-teal transition-colors">Contact</a>
      </div>
      <button className="md:hidden">
        <div className="w-6 h-0.5 bg-midnight mb-1"></div>
        <div className="w-6 h-0.5 bg-midnight mb-1"></div>
        <div className="w-6 h-0.5 bg-midnight"></div>
      </button>
    </nav>
  </header>
);

const Hero = () => (
  <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 max-w-4xl">
        Engineering Scalable <br />
        <span className="text-teal">Digital Backbones.</span>
      </h1>
      <p className="text-xl md:text-2xl text-midnight/60 max-w-2xl mb-12 leading-relaxed">
        We build the high-performance software and infrastructure that powers global enterprises.
      </p>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-midnight text-white px-8 py-4 rounded-none font-bold text-lg tracking-tight hover:bg-midnight/90 transition-colors"
      >
        Start Your Project
      </motion.button>
    </motion.div>
    
    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-midnight/5 pt-12">
      {[
        { label: "Performance", value: "99.99%", sub: "Uptime Guaranteed" },
        { label: "Scalability", value: "10M+", sub: "Concurrent Requests" },
        { label: "Security", value: "Level 1", sub: "PCI-DSS Compliant" }
      ].map((stat, i) => (
        <div key={i}>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-midnight/40 mb-2">{stat.label}</p>
          <p className="text-4xl font-bold">{stat.value}</p>
          <p className="text-sm text-midnight/60">{stat.sub}</p>
        </div>
      ))}
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
      <h2 className="text-4xl font-bold tracking-tight">Core Capabilities</h2>
      <p className="text-midnight/60 max-w-md font-mono text-sm">
        Our engineering team specializes in high-load systems and distributed architectures.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-midnight/5">
      {[
        { icon: Server, title: "Cloud Infrastructure", desc: "Automated provisioning and orchestration for multi-cloud environments." },
        { icon: Code, title: "Software Engineering", desc: "Robust backend systems built with Java, Spring Boot, and high-performance runtimes." },
        { icon: Shield, title: "Cybersecurity", desc: "Zero-trust architecture implementation and continuous security monitoring." },
        { icon: Database, title: "Data Architecture", desc: "Scalable NoSQL and SQL solutions designed for consistency and speed." },
        { icon: Zap, title: "DevOps & SRE", desc: "Continuous integration and deployment pipelines with 24/7 reliability engineering." },
        { icon: Globe, title: "Global Networking", desc: "Low-latency content delivery and edge computing integration." }
      ].map((service, i) => (
        <div key={i} className="bg-offwhite p-12 group hover:bg-white transition-colors">
          <service.icon className="w-8 h-8 mb-6 text-teal" />
          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
          <p className="text-midnight/60 leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const TechStack = () => (
  <section className="py-24 px-6 bg-midnight text-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-12 text-center">Our Technical Foundation</p>
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        {[
          { name: "Java", icon: Code },
          { name: "Spring Boot", icon: Zap },
          { name: "MongoDB", icon: Database },
          { name: "AWS", icon: Cloud },
          { name: "Kubernetes", icon: Layers },
          { name: "Terraform", icon: Cpu }
        ].map((tech, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <tech.icon className="w-12 h-12" />
            <span className="font-mono text-[10px] tracking-widest uppercase">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-midnight/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <Logo className="mb-8" />
        <p className="text-midnight/60 max-w-xs mb-8">
          Building the future of enterprise infrastructure with precision and performance.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-sm text-midnight/60 font-mono">
          <li><a href="#" className="hover:text-teal transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-teal transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-teal transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6">Connect</h4>
        <ul className="space-y-4 text-sm text-midnight/60 font-mono">
          <li><a href="#" className="hover:text-teal transition-colors">LinkedIn</a></li>
          <li><a href="#" className="hover:text-teal transition-colors">Twitter</a></li>
          <li><a href="#" className="hover:text-teal transition-colors">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-midnight/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[10px] font-mono text-midnight/40 uppercase tracking-widest">
        © 2026 QENZOR INFRASTRUCTURE. ALL RIGHTS RESERVED.
      </p>
      <p className="text-[10px] font-mono text-midnight/40 uppercase tracking-widest">
        ENGINEERED IN SAN FRANCISCO
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <section id="contact" className="py-32 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Ready to scale?</h2>
          <p className="text-xl text-midnight/60 mb-12 max-w-2xl mx-auto">
            Let's discuss your infrastructure requirements and build a solution that grows with your business.
          </p>
          <button className="bg-midnight text-white px-12 py-5 rounded-none font-bold text-xl tracking-tight hover:bg-midnight/90 transition-all hover:scale-105">
            Contact Engineering
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
