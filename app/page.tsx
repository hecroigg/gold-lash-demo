"use client";

import { useEffect, useState } from "react";

const mapsUrl = "https://www.google.com/maps/place/Gold+Lash/@49.4857352,8.4725019,17z";

const copy = {
  de: { navBook: "Termin", location: "Mannheim · P7", hero: <>DEIN LOOK.<br/><em>DEINE</em> LASHES.</>, intro: "Präzise Wimpern- und Brow-Looks, ganz auf dich abgestimmt.", book: "TERMIN BUCHEN", discover: "LOOKS ENTDECKEN", scroll: "SCROLL", offer: "01 / ANGEBOT", art: <>THE ART OF<br/><em>THE DETAIL.</em></>, lashes: <>Wimpern-<br/>verlängerung</>, lashText: "Ein Look mit Ausdruck, maßgeschneidert für deine Augen.", brows: <>Augenbrauen-<br/>verlängerung</>, browText: "Feine Akzente für einen definierten, harmonischen Rahmen.", looksLabel: "02 / GOLD LASH LOOKS", looks: <>Sanft. Ausdrucksstark.<br/>Ganz du.</>, about: "03 / GOLD LASH", why: <>WENIGER<br/>STANDARD.<br/><em>MEHR DU.</em></>, whyText: "Gold Lash steht in Mannheim für einen persönlichen Blick auf Beauty: mit Ruhe, Fingerspitzengefühl und Sinn für das, was dir wirklich steht.", ctaLabel: "DEIN NÄCHSTER LOOK", cta: <>READY FOR<br/><em>YOUR NEXT</em><br/>LOOK?</>, route: "ROUTE PLANEN", top: "NACH OBEN", details: "DETAILS ENTDECKEN", detailText: "Jeder Look beginnt mit dem Blick für Proportion, Ausdruck und deine natürliche Ausstrahlung.", address: <>P7 22<br/>68161 Mannheim</> },
  en: { navBook: "Book now", location: "Mannheim · P7", hero: <>YOUR LOOK.<br/><em>YOUR</em> LASHES.</>, intro: "Precise lash and brow looks, thoughtfully tailored to you.", book: "BOOK AN APPOINTMENT", discover: "EXPLORE LOOKS", scroll: "SCROLL", offer: "01 / SERVICES", art: <>THE ART OF<br/><em>THE DETAIL.</em></>, lashes: <>Lash<br/>extensions</>, lashText: "An expressive look, tailored to your individual eyes.", brows: <>Brow<br/>extensions</>, browText: "Fine accents for a defined, harmonious frame.", looksLabel: "02 / GOLD LASH LOOKS", looks: <>Soft. Expressive.<br/>Entirely you.</>, about: "03 / GOLD LASH", why: <>LESS<br/>STANDARD.<br/><em>MORE YOU.</em></>, whyText: "Gold Lash in Mannheim takes a personal approach to beauty: with calm, sensitivity and an eye for what truly suits you.", ctaLabel: "YOUR NEXT LOOK", cta: <>READY FOR<br/><em>YOUR NEXT</em><br/>LOOK?</>, route: "GET DIRECTIONS", top: "BACK TO TOP", details: "DISCOVER THE DETAIL", detailText: "Every look begins with an eye for proportion, expression and your natural beauty.", address: <>P7 22<br/>68161 Mannheim</> }
};

export default function Home() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState<"de" | "en">("de");
  const [details, setDetails] = useState(false);
  const t = copy[language];
  useEffect(() => {
    const move = (event: MouseEvent) => setCursor({ x: (event.clientX / window.innerWidth - .5) * 12, y: (event.clientY / window.innerHeight - .5) * 12 });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <main>
    <section className="hero" id="top">
      <nav><a className="brand" href="#top">GOLD <i>LASH</i></a><div className="nav-actions"><div className="language" aria-label="Language"><button className={language === "de" ? "active" : ""} onClick={() => setLanguage("de")}>DE</button><span>/</span><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button></div><a className="nav-link" href="#booking">{t.navBook} <span>↗</span></a></div></nav>
      <div className="hero-copy"><p className="eyebrow">{t.location}</p><h1>{t.hero}</h1><p className="intro">{t.intro}</p><div className="button-row"><a className="button light" href="#booking">{t.book} <b>↗</b></a><a className="text-button" href="#looks">{t.discover} <b>↓</b></a></div></div>
      <div className="hero-photo"><img src="/lash-editorial.webp" alt="Editorial close-up mit langen Wimpern"/></div><div className="orb" style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }} aria-hidden="true"/><p className="side-note">BEAUTY IN DETAIL<br/>P7 · MANNHEIM</p><a className="scroll" href="#services">{t.scroll} <span>↓</span></a>
    </section>
    <section className="services section" id="services"><div className="section-head"><p className="eyebrow">{t.offer}</p><h2>{t.art}</h2></div><div className="service-list"><article><span>01</span><h3>{t.lashes}</h3><p>{t.lashText}</p></article><article><span>02</span><h3>{t.brows}</h3><p>{t.browText}</p></article><article className="service-image"><img src="/lash-application.webp" alt="Präzise Wimpernanwendung"/></article></div></section>
    <section className="looks section" id="looks"><div className="looks-top"><p className="eyebrow">{t.looksLabel}</p><p>{t.looks}</p></div><div className="editorial-grid"><figure className="image-one"><img src="/lash-application.webp" alt="Wimpernanwendung im Detail"/></figure><div className="look-word">LOOKS</div><figure className="image-two"><img src="/lash-profile.webp" alt="Ergebnis eines Lash Looks im Profil"/></figure><p className="vertical">MADE FOR YOUR EYES</p></div><button className="detail-trigger" onClick={() => setDetails(!details)} aria-expanded={details}>{t.details} <span>{details ? "−" : "+"}</span></button>{details && <p className="detail-copy">{t.detailText}</p>}</section>
    <section className="why"><div><p className="eyebrow">{t.about}</p><h2>{t.why}</h2></div><div><p className="why-copy">{t.whyText}</p><a className="text-button cream" href="#booking">{t.book} <b>↗</b></a></div></section>
    <section className="booking" id="booking"><p className="eyebrow">{t.ctaLabel}</p><h2>{t.cta}</h2><div className="button-row booking-buttons"><a className="button gold" href={mapsUrl} target="_blank" rel="noreferrer">{t.book} <b>↗</b></a><a className="button outline" href={mapsUrl} target="_blank" rel="noreferrer">{t.route} <b>↗</b></a></div><div className="booking-orb" aria-hidden="true"/></section>
    <footer><div><a className="brand" href="#top">GOLD <i>LASH</i></a><p>{t.address}</p></div><div><a href={mapsUrl} target="_blank" rel="noreferrer">{t.route} ↗</a><a href="#top">{t.top} ↑</a></div><small>© {new Date().getFullYear()} GOLD LASH</small></footer>
  </main>;
}
