import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Phone, Mail, Droplets, Wrench, Hammer, CheckCircle2, Sparkles, ShieldCheck, X } from "lucide-react";
import poolServiced from "@/assets/pool-serviced.webp";
import acidWash from "@/assets/acid-wash.webp";
import equipmentInstall from "@/assets/equipment-installation.webp";
import filterSystem from "@/assets/filter-system.webp";
import hotTub from "@/assets/hot-tub.webp";
import newPoolStartup from "@/assets/new-pool-startup.webp";
import poolRemodeling from "@/assets/pool-remodeling.webp";
import waterBalancing from "@/assets/water-balancing.webp";
import pumpSystems from "@/assets/pump-systems.jpg";
import felixAtWork from "@/assets/felix-at-work.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felix Pool Service — Pool Cleaning, Repairs & Installation" },
      {
        name: "description",
        content:
          "Felix Pool Service offers professional pool cleaning, repair, and installation. Crystal-clear water, guaranteed. Call 424-385-6852.",
      },
      { property: "og:title", content: "Felix Pool Service" },
      { property: "og:description", content: "Pool service, repair & installation." },
    ],
  }),
  component: Index,
});

const PHONE = "424-385-6852";
const PHONE_HREF = "tel:+14243856852";
const EMAIL = "felixpoolservice67@gmail.com";
const EMAIL_HREF = "mailto:felixpoolservice67@gmail.com";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Showcase />
      <Why />
      <CTA />
      <Footer />
    </div>
  );
}

function Showcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-95"
        style={{ background: "var(--gradient-pool)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur">
            <Sparkles className="w-3.5 h-3.5" /> See us in action
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Real work. Real results.
          </h2>
          <p className="mt-3 text-white/90 text-lg">
            A quick look at how Felix Pool Service keeps your water crystal-clear
            and your equipment running like new.
          </p>
        </div>
        <div className="relative mt-10">
          <div
            className="absolute -inset-3 rounded-[2rem] blur-2xl opacity-50"
            style={{ background: "var(--gradient-pool)" }}
          />
          <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-[var(--shadow-soft)] bg-black">
            <video
              className="w-full h-auto block"
              src="/videos/showcase.mp4"
              poster="/videos/showcase-poster.jpg"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white">
          <Droplets className="w-6 h-6" />
          <span className="font-semibold tracking-tight">Felix Pool Service</span>
        </a>
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={EMAIL_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm text-white border border-white/20 hover:bg-white/25 transition"
          >
            <Mail className="w-4 h-4" /> {EMAIL}
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-sm text-white border border-white/20 hover:bg-white/25 transition"
          >
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${poolServiced})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/70 via-brand-deep/40 to-background" />
      <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-28 md:pt-44 md:pb-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Trusted local pool experts
        </span>
        <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight max-w-3xl">
          Felix Pool Service
        </h1>
        <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
          Felix Pool Service keeps your water sparkling and your equipment running.
          Cleaning, repairs, and new pool installations done right.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-6 py-3 font-semibold shadow-[var(--shadow-soft)] hover:scale-[1.02] transition"
          >
            <Phone className="w-4 h-4" /> Call {PHONE}
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-medium hover:bg-white/10 transition"
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: Droplets,
      title: "Weekly Pool Service",
      desc: "Skimming, brushing, vacuuming, and brushing to keep your pool pristine all season long.",
      img: poolServiced,
    },
    {
      icon: Sparkles,
      title: "Water Balancing",
      desc: "Professional water testing and chemical balancing for safe, clear, comfortable swimming.",
      img: waterBalancing,
    },
    {
      icon: Wrench,
      title: "Equipment Inspection",
      desc: "Cartridge, DE, and sand filter cleaning to keep your system running at peak performance.",
      img: filterSystem,
    },
    {
      icon: Hammer,
      title: "Equipment Installation",
      desc: "Pumps, heaters, salt systems, and automation — installed correctly the first time.",
      img: equipmentInstall,
    },
    {
      icon: Wrench,
      title: "Pump & System Repairs",
      desc: "Familiar with every major pump and plumbing setup. Fast diagnosis, lasting repairs.",
      img: pumpSystems,
    },
    {
      icon: Droplets,
      title: "Hot Tub Service",
      desc: "Spa cleaning, water care, and equipment service to keep your hot tub ready to enjoy.",
      img: hotTub,
    },
    {
      icon: Hammer,
      title: "Pool Remodeling",
      desc: "Replaster, retile, and full resurfacing to bring tired pools back to life.",
      img: poolRemodeling,
    },
    {
      icon: Sparkles,
      title: "Acid Wash",
      desc: "Deep stain removal and surface restoration for neglected or discolored pools.",
      img: acidWash,
    },
    {
      icon: Droplets,
      title: "New Pool Start-up",
      desc: "Complete chemical start-up and break-in service for brand new pools.",
      img: newPoolStartup,
    },
  ];
  const [lightbox, setLightbox] = useState<{ img: string; title: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Full-service pool care — from routine maintenance to complete builds.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl bg-card overflow-hidden border border-border shadow-sm hover:shadow-[var(--shadow-soft)] transition"
            >
              <button
                type="button"
                onClick={() => setLightbox({ img: s.img, title: s.title })}
                className="block w-full h-52 bg-cover bg-center transition-transform group-hover:scale-105 cursor-zoom-in"
                style={{ backgroundImage: `url(${s.img})` }}
                aria-label={`View ${s.title} image`}
              />
              <div className="p-6">
                <s.icon className="w-7 h-7 text-brand" />
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 text-white p-2 transition"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <figure className="max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="max-h-[85vh] w-auto rounded-xl shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-white/90 font-medium">
              {lightbox.title}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function Why() {
  const points = [
    { icon: CheckCircle2, title: "On-time, every time", desc: "Consistent weekly visits." },
    { icon: Sparkles, title: "Guaranteed clean", desc: "We're not done until it shines." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
        {points.map((p) => (
          <div key={p.title} className="flex gap-4">
            <p.icon className="w-8 h-8 text-brand shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-muted-foreground mt-1">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div
        className="mx-auto max-w-6xl mx-6 rounded-3xl px-8 py-14 md:px-14 md:py-20 text-white text-center"
        style={{ background: "var(--gradient-pool)" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Ready for a cleaner pool?
        </h2>
        <p className="mt-3 text-white/90 max-w-xl mx-auto">
          Call Felix today for a free quote on service, repair, or installation.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-7 py-3.5 font-semibold shadow-lg hover:scale-[1.02] transition"
          >
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
          <a
            href={EMAIL_HREF}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-7 py-3.5 font-semibold hover:bg-white/10 transition"
          >
            <Mail className="w-4 h-4" /> Email us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-brand" />
          <span>© {new Date().getFullYear()} Felix Pool Service</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center">
          <a href={PHONE_HREF} className="hover:text-foreground transition">{PHONE}</a>
          <a href={EMAIL_HREF} className="hover:text-foreground transition">{EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
