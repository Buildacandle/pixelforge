"use client";

import { useState } from "react";
import {
  Code2,
  ShoppingCart,
  Smartphone,
  ArrowRight,
  Check,
  Globe,
  Palette,
  Zap,
  Star,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  ChevronRight,
  Layers,
  Shield,
  BarChart3,
  Headphones,
  Menu,
  X,
} from "lucide-react";

/* ─────────────────── NAVBAR ─────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Services", "Pricing", "Portfolio", "About", "Contact"];
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-[var(--color-bg)] border-4 border-[var(--color-text)] brutal-shadow-sm px-6 py-3 flex items-center justify-between">
      <a href="#" className="font-heading text-xl font-extrabold tracking-tight flex items-center gap-2">
        <div className="w-8 h-8 bg-[var(--color-cta)] border-2 border-[var(--color-text)] flex items-center justify-center rotate-[-2deg]">
          <Code2 className="w-5 h-5 text-white" />
        </div>
        PixelForge
      </a>
      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="font-heading text-sm font-bold uppercase tracking-wider hover:text-[var(--color-cta)] transition-colors cursor-pointer"
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-[var(--color-cta)] text-white font-heading font-bold text-sm px-5 py-2.5 border-3 border-[var(--color-text)] brutal-shadow-sm brutal-press cursor-pointer hover:bg-[#ea6a10] transition-colors"
        >
          Get a Quote
        </a>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden cursor-pointer p-2"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-bg)] border-4 border-[var(--color-text)] brutal-shadow-sm p-4 flex flex-col gap-3 md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-heading text-base font-bold uppercase tracking-wider hover:text-[var(--color-cta)] cursor-pointer"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─────────────────── HERO ─────────────────── */
function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center pt-24 pb-16 overflow-hidden grain">
      {/* Color blocks */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-[var(--color-yellow)] border-4 border-[var(--color-text)] rotate-12 opacity-60" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[var(--color-violet)] border-4 border-[var(--color-text)] -rotate-6 opacity-50" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[var(--color-red)] border-4 border-[var(--color-text)] rotate-3 opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="inline-block bg-[var(--color-yellow)] border-3 border-[var(--color-text)] px-4 py-1.5 mb-6 rotate-[-1deg] brutal-shadow-sm">
          <span className="font-heading font-bold text-sm uppercase tracking-wider text-[var(--color-text)]">Web &bull; E-Commerce &bull; Apps</span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-6 max-w-4xl">
          We Build<br />
          <span className="text-[var(--color-cta)]">Digital</span>{" "}
          <span className="relative inline-block">
            Experiences
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 8C50 2 150 2 298 8" stroke="var(--color-red)" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-xl mb-10 text-[var(--color-text-muted)] font-body font-light leading-relaxed">
          From stunning websites to powerful mobile apps — PixelForge crafts
          digital products that convert visitors into loyal customers.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#pricing"
            className="bg-[var(--color-cta)] text-white font-heading font-bold text-lg px-8 py-4 border-4 border-[var(--color-text)] brutal-shadow brutal-press cursor-pointer hover:bg-[#ea6a10] transition-colors flex items-center gap-2"
          >
            View Pricing <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="bg-white text-[var(--color-text)] font-heading font-bold text-lg px-8 py-4 border-4 border-[var(--color-text)] brutal-shadow brutal-press cursor-pointer hover:bg-gray-50 transition-colors"
          >
            See Our Work
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-wrap gap-8">
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "3+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="font-heading text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">{s.num}</span>
              <span className="text-sm text-[var(--color-text-muted)] font-medium leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SERVICES ─────────────────── */
function Services() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      desc: "Beautiful, responsive websites that load fast and rank high. From landing pages to multi-page business sites.",
      color: "var(--color-primary)",
      bg: "#EFF6FF",
      rotate: "-1deg",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce & Themes",
      desc: "Custom WordPress and Shopify themes with full e-commerce functionality. Sell products with zero friction.",
      color: "var(--color-cta)",
      bg: "#FFF7ED",
      rotate: "1deg",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      desc: "Native iOS and Android apps with stunning UI, powerful backends, and seamless app store deployment.",
      color: "var(--color-red)",
      bg: "#FFF1F2",
      rotate: "-0.5deg",
    },
  ];

  return (
    <section id="services" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block bg-[var(--color-primary)] text-white border-3 border-[var(--color-text)] px-4 py-1.5 mb-4 rotate-[-1deg] brutal-shadow-sm">
          <span className="font-heading font-bold text-sm uppercase tracking-wider">What We Do</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border-4 border-[var(--color-text)] p-6 brutal-shadow brutal-press cursor-pointer group"
              style={{ backgroundColor: s.bg, transform: `rotate(${s.rotate})` }}
            >
              <div
                className="w-14 h-14 border-3 border-[var(--color-text)] flex items-center justify-center mb-4"
                style={{ backgroundColor: s.color, color: "white" }}
              >
                {s.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-[var(--color-text-muted)] font-light leading-relaxed text-sm">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 font-heading font-bold text-sm group-hover:text-[var(--color-cta)] transition-colors">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── PRICING ─────────────────── */
function Pricing() {
  const tiers = [
    {
      name: "Starter Site",
      price: "$300 – $1,000",
      target: "Basic business websites & landing pages",
      color: "var(--color-primary)",
      bg: "#EFF6FF",
      popular: false,
      features: [
        "1–5 page responsive website",
        "Mobile-optimized design",
        "Contact form integration",
        "Basic SEO setup",
        "SSL certificate included",
        "1 round of revisions",
        "30 days post-launch support",
      ],
    },
    {
      name: "Business Pro",
      price: "$1,250 – $5,000",
      target: "E-commerce, WP & Shopify themes",
      color: "var(--color-cta)",
      bg: "#FFF7ED",
      popular: true,
      features: [
        "Full e-commerce functionality",
        "Custom WordPress or Shopify theme",
        "Product catalog (up to 100 items)",
        "Payment gateway integration",
        "Advanced SEO & analytics",
        "Blog / CMS included",
        "3 rounds of revisions",
        "60 days post-launch support",
        "Social media integration",
      ],
    },
    {
      name: "App Builder",
      price: "$250 – $10,000",
      target: "Custom iOS & Android applications",
      color: "var(--color-red)",
      bg: "#FFF1F2",
      popular: false,
      features: [
        "Native iOS & Android development",
        "Custom UI/UX design",
        "API development & integration",
        "Push notifications",
        "App Store & Play Store submission",
        "User authentication system",
        "Admin dashboard",
        "5 rounds of revisions",
        "90 days post-launch support",
      ],
    },
  ];

  const addons = [
    {
      name: "Basic Maintenance",
      price: "$49",
      period: "/mo",
      features: ["Updates & backups", "Uptime monitoring", "Email support"],
      icon: <Shield className="w-6 h-6" />,
    },
    {
      name: "Growth Package",
      price: "$149",
      period: "/mo",
      features: ["SEO optimization", "Content updates", "Analytics reports"],
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      name: "Priority Support",
      price: "$299",
      period: "/mo",
      features: ["Same-day response", "Unlimited changes", "Performance tuning"],
      icon: <Headphones className="w-6 h-6" />,
    },
  ];

  return (
    <section id="pricing" className="py-20 scroll-mt-24 relative">
      {/* Background accent blocks */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-[var(--color-yellow)] border-4 border-[var(--color-text)] rotate-6 opacity-20" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-[var(--color-violet)] border-4 border-[var(--color-text)] -rotate-3 opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="inline-block bg-[var(--color-red)] text-white border-3 border-[var(--color-text)] px-4 py-1.5 mb-4 rotate-[1deg] brutal-shadow-sm">
          <span className="font-heading font-bold text-sm uppercase tracking-wider">Pricing</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">Transparent Pricing</h2>
        <p className="text-[var(--color-text-muted)] font-light text-lg mb-12 max-w-xl">Every project is unique. Here are our starting ranges — final pricing depends on your specific needs.</p>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="relative border-4 border-[var(--color-text)] p-6 brutal-shadow brutal-press cursor-pointer flex flex-col"
              style={{ backgroundColor: t.bg }}
            >
              {t.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-cta)] text-white font-heading font-bold text-xs px-4 py-1.5 border-2 border-[var(--color-text)] rotate-[-2deg] uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div
                className="w-12 h-12 border-3 border-[var(--color-text)] flex items-center justify-center mb-4"
                style={{ backgroundColor: t.color, color: "white" }}
              >
                {t.name === "Starter Site" ? <Globe className="w-6 h-6" /> : t.name === "Business Pro" ? <ShoppingCart className="w-6 h-6" /> : <Smartphone className="w-6 h-6" />}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-1">{t.name}</h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-4 font-light">{t.target}</p>
              <div className="font-heading text-3xl font-extrabold mb-6" style={{ color: t.color }}>
                {t.price}
              </div>
              <ul className="flex-1 space-y-2.5 mb-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: t.color }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center font-heading font-bold text-sm px-6 py-3 border-3 border-[var(--color-text)] brutal-shadow-sm brutal-press cursor-pointer transition-colors"
                style={{ backgroundColor: t.color, color: "white" }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Monthly Add-ons */}
        <div className="inline-block bg-[var(--color-violet)] border-3 border-[var(--color-text)] px-4 py-1.5 mb-4 rotate-[-1deg] brutal-shadow-sm">
          <span className="font-heading font-bold text-sm uppercase tracking-wider text-[var(--color-text)]">Monthly Add-Ons</span>
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">Ongoing Support Packages</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {addons.map((a) => (
            <div
              key={a.name}
              className="bg-white border-4 border-[var(--color-text)] p-5 brutal-shadow-sm brutal-press cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[var(--color-yellow)] border-2 border-[var(--color-text)] flex items-center justify-center">
                  {a.icon}
                </div>
                <div className="font-heading font-extrabold text-2xl">
                  {a.price}<span className="text-sm font-medium text-[var(--color-text-muted)]">{a.period}</span>
                </div>
              </div>
              <h4 className="font-heading font-bold text-lg mb-2">{a.name}</h4>
              <ul className="space-y-1.5">
                {a.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                    <Check className="w-3.5 h-3.5 text-[var(--color-cta)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── PORTFOLIO ─────────────────── */
function Portfolio() {
  const categories = ["All", "Websites", "E-Commerce", "Mobile Apps"];
  const [active, setActive] = useState("All");

  const projects = [
    {
      title: "Bloom & Brew",
      category: "Websites",
      desc: "Artisan coffee brand website with online ordering",
      color: "#DCFCE7",
      accent: "#16A34A",
    },
    {
      title: "StyleVault",
      category: "E-Commerce",
      desc: "Fashion marketplace with 500+ products",
      color: "#FEF3C7",
      accent: "#D97706",
    },
    {
      title: "FitTrack Pro",
      category: "Mobile Apps",
      desc: "Fitness tracking app with AI workout plans",
      color: "#EDE9FE",
      accent: "#7C3AED",
    },
    {
      title: "NomadStays",
      category: "Websites",
      desc: "Travel booking platform for digital nomads",
      color: "#DBEAFE",
      accent: "#2563EB",
    },
    {
      title: "PetPals Shop",
      category: "E-Commerce",
      desc: "Pet supplies store with subscription boxes",
      color: "#FFE4E6",
      accent: "#E11D48",
    },
    {
      title: "QuickBite",
      category: "Mobile Apps",
      desc: "Food delivery app with real-time tracking",
      color: "#FEF9C3",
      accent: "#CA8A04",
    },
  ];

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-20 scroll-mt-24 bg-[var(--color-text)] text-white relative overflow-hidden grain">
      {/* Decorative */}
      <div className="absolute top-10 right-20 w-32 h-32 border-4 border-white/20 rotate-12" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-[var(--color-cta)] opacity-20 -rotate-6" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="inline-block bg-[var(--color-yellow)] text-[var(--color-text)] border-3 border-white px-4 py-1.5 mb-4 rotate-[1deg] brutal-shadow-sm">
          <span className="font-heading font-bold text-sm uppercase tracking-wider">Our Work</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-8">Featured Projects</h2>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-heading font-bold text-sm px-5 py-2.5 border-3 cursor-pointer transition-all ${
                active === c
                  ? "bg-[var(--color-cta)] text-white border-white brutal-shadow-sm"
                  : "bg-transparent text-white/70 border-white/30 hover:border-white hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="border-4 border-white brutal-shadow brutal-press cursor-pointer group overflow-hidden"
              style={{ backgroundColor: p.color }}
            >
              {/* Placeholder visual */}
              <div className="h-48 flex items-center justify-center relative">
                <div
                  className="w-20 h-20 border-4 border-[var(--color-text)] flex items-center justify-center"
                  style={{ backgroundColor: p.accent }}
                >
                  <Layers className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-3 right-3 bg-[var(--color-text)] text-white font-heading font-bold text-xs px-3 py-1 border-2 border-white">
                  {p.category}
                </div>
              </div>
              <div className="p-4 bg-white border-t-4 border-[var(--color-text)]">
                <h3 className="font-heading text-lg font-bold text-[var(--color-text)]">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] font-light">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── ABOUT ─────────────────── */
function About() {
  const values = [
    { icon: <Palette className="w-6 h-6" />, title: "Design-First", desc: "Every pixel matters. We obsess over the details." },
    { icon: <Zap className="w-6 h-6" />, title: "Performance", desc: "Lightning-fast load times. No compromises." },
    { icon: <Shield className="w-6 h-6" />, title: "Reliability", desc: "Built to scale. Maintained with care." },
    { icon: <Headphones className="w-6 h-6" />, title: "Support", desc: "We're here for you, before and after launch." },
  ];

  return (
    <section id="about" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[var(--color-violet)] border-3 border-[var(--color-text)] px-4 py-1.5 mb-4 rotate-[-1deg] brutal-shadow-sm">
              <span className="font-heading font-bold text-sm uppercase tracking-wider text-[var(--color-text)]">About Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">We&apos;re PixelForge</h2>
            <p className="text-[var(--color-text-muted)] font-light text-lg leading-relaxed mb-4">
              We&apos;re a team of designers, developers, and strategists who believe
              technology should be beautiful, functional, and accessible to everyone.
            </p>
            <p className="text-[var(--color-text-muted)] font-light leading-relaxed mb-8">
              From small businesses launching their first website to enterprises needing
              custom mobile applications, we bring the same level of craft and care to
              every project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--color-text)] text-white font-heading font-bold px-6 py-3 border-4 border-[var(--color-text)] brutal-shadow-cta brutal-press cursor-pointer"
            >
              Work With Us <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white border-4 border-[var(--color-text)] p-5 brutal-shadow-sm brutal-press cursor-pointer"
                style={{ transform: `rotate(${i % 2 === 0 ? "-1" : "1"}deg)` }}
              >
                <div className="w-10 h-10 bg-[var(--color-yellow)] border-2 border-[var(--color-text)] flex items-center justify-center mb-3">
                  {v.icon}
                </div>
                <h3 className="font-heading font-bold text-sm mb-1">{v.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── TESTIMONIALS ─────────────────── */
function Testimonials() {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "Founder, Bloom & Brew",
      text: "PixelForge transformed our online presence. Our website traffic increased 300% in the first month after launch.",
      stars: 5,
      color: "#DCFCE7",
    },
    {
      name: "Marcus Johnson",
      role: "CEO, StyleVault",
      text: "The e-commerce platform they built handles 10,000+ orders monthly without breaking a sweat. Incredible work.",
      stars: 5,
      color: "#FEF3C7",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, FitTrack",
      text: "Our app went from concept to App Store in 8 weeks. The team's speed and quality are unmatched.",
      stars: 5,
      color: "#EDE9FE",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-yellow)] border-y-4 border-[var(--color-text)] relative overflow-hidden">
      <div className="absolute top-5 left-5 w-20 h-20 bg-[var(--color-cta)] border-4 border-[var(--color-text)] rotate-12 opacity-30" />
      <div className="absolute bottom-5 right-10 w-16 h-16 bg-[var(--color-violet)] border-4 border-[var(--color-text)] -rotate-6 opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-[var(--color-text)] text-white border-3 border-[var(--color-text)] px-4 py-1.5 mb-4 rotate-[1deg]">
            <span className="font-heading font-bold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[var(--color-text)]">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="bg-white border-4 border-[var(--color-text)] p-6 brutal-shadow brutal-press cursor-pointer"
              style={{ transform: `rotate(${i === 0 ? "-1" : i === 1 ? "0.5" : "-0.5"}deg)` }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[var(--color-cta)] text-[var(--color-cta)]" />
                ))}
              </div>
              <p className="text-[var(--color-text)] mb-4 font-light leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 border-2 border-[var(--color-text)] flex items-center justify-center font-heading font-bold text-sm"
                  style={{ backgroundColor: r.color }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-heading font-bold text-sm">{r.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CONTACT ─────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="inline-block bg-[var(--color-cta)] text-white border-3 border-[var(--color-text)] px-4 py-1.5 mb-4 rotate-[-1deg] brutal-shadow-sm">
              <span className="font-heading font-bold text-sm uppercase tracking-wider">Contact</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">Let&apos;s Build Together</h2>
            <p className="text-[var(--color-text-muted)] font-light text-lg leading-relaxed mb-8">
              Ready to bring your vision to life? Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Mail className="w-5 h-5" />, text: "hello@pixelforge.dev" },
                { icon: <Phone className="w-5 h-5" />, text: "+1 (555) 123-4567" },
                { icon: <MapPin className="w-5 h-5" />, text: "Remote-First, Worldwide" },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-yellow)] border-2 border-[var(--color-text)] flex items-center justify-center">
                    {c.icon}
                  </div>
                  <span className="font-medium">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-4 border-[var(--color-text)] p-6 brutal-shadow">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="font-heading font-bold text-sm block mb-1">Name <span className="text-[var(--color-red)]" aria-hidden="true">*</span></label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full border-3 border-[var(--color-text)] px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] focus:ring-offset-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-heading font-bold text-sm block mb-1">Email <span className="text-[var(--color-red)]" aria-hidden="true">*</span></label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full border-3 border-[var(--color-text)] px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] focus:ring-offset-2"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="service" className="font-heading font-bold text-sm block mb-1">Service Interested In</label>
                <select
                  id="service"
                  className="w-full border-3 border-[var(--color-text)] px-4 py-3 font-body bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] focus:ring-offset-2 cursor-pointer"
                >
                  <option>Starter Site ($300 – $1,000)</option>
                  <option>Business Pro ($1,250 – $5,000)</option>
                  <option>App Builder ($250 – $10,000)</option>
                  <option>Monthly Support</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="font-heading font-bold text-sm block mb-1">Message <span className="text-[var(--color-red)]" aria-hidden="true">*</span></label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full border-3 border-[var(--color-text)] px-4 py-3 font-body resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] focus:ring-offset-2"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-cta)] text-white font-heading font-bold text-lg py-4 border-4 border-[var(--color-text)] brutal-shadow brutal-press cursor-pointer hover:bg-[#ea6a10] transition-colors flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  return (
    <footer className="bg-[var(--color-text)] text-white py-12 border-t-4 border-[var(--color-cta)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--color-cta)] border-2 border-white flex items-center justify-center rotate-[-2deg]">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-extrabold">PixelForge</span>
            </div>
            <p className="text-white/60 font-light leading-relaxed max-w-sm text-sm">
              We build websites, e-commerce platforms, and mobile apps that help businesses grow. Let&apos;s create something amazing together.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "Pricing", "Portfolio", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-[var(--color-cta)] transition-colors text-sm cursor-pointer">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: <Github className="w-5 h-5" />, label: "GitHub" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 bg-white/10 border-2 border-white/20 flex items-center justify-center hover:bg-[var(--color-cta)] hover:border-[var(--color-cta)] transition-colors cursor-pointer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} PixelForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────── PAGE ─────────────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

