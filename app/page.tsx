"use client";

import { useEffect, useState } from "react";

const mapsUrl = "https://www.google.com/maps/place/Gold+Lash/@49.4857352,8.4725019,17z";

export default function Home() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: (e.clientX / window.innerWidth - .5) * 12, y: (e.clientY / window.innerHeight - .5) * 12 });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <main>
    <section className="hero" id="top">
      <nav><a className="brand" href="#top">GOLD <i>LASH</i></a><a className="nav-link" href="#booking">Termin buchen <span>↗</span></a></nav>
      <div className="hero-copy"><p className="eyebrow">Mannheim · P7</p><h1>DEIN LOOK.<br/><em>DEINE</em> LASHES.</h1><p className="intro">Präzise Wimpern- und Brow-Looks, ganz auf dich abgestimmt.</p><a className="button light" href="#booking">TERMIN BUCHEN <b>↗</b></a></div>
      <div className="hero-photo"><img src="/lash-editorial.webp" alt="Editorial close-up mit langen Wimpern"/></div>
      <div className="orb" style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }} aria-hidden="true"><span/></div>
      <p className="side-note">BEAUTY IN DETAIL<br/>P7 · MANNHEIM</p>
      <a className="scroll" href="#services">SCROLL <span>↓</span></a>
    </section>

    <section className="services section" id="services"><div className="section-head"><p className="eyebrow">01 / ANGEBOT</p><h2>THE ART OF<br/><em>THE DETAIL.</em></h2></div><div className="service-list">
      <article><span>01</span><h3>Wimpern-<br/>verlängerung</h3><p>Ein Look mit Ausdruck, maßgeschneidert für deine Augen.</p></article>
      <article><span>02</span><h3>Augenbrauen-<br/>verlängerung</h3><p>Feine Akzente für einen definierten, harmonischen Rahmen.</p></article>
      <article className="service-image"><img src="/lash-editorial.webp" alt="Detail eines Wimpernlooks"/></article>
    </div></section>

    <section className="looks section"><div className="looks-top"><p className="eyebrow">02 / GOLD LASH LOOKS</p><p>Sanft. Ausdrucksstark.<br/>Ganz du.</p></div><div className="editorial-grid"><figure className="image-one"><img src="/lash-editorial.webp" alt="Wimpern Detail"/></figure><div className="look-word">LOOKS</div><figure className="image-two"><img src="/lash-editorial.webp" alt="Augen Detail"/></figure><p className="vertical">MADE FOR YOUR EYES</p></div></section>

    <section className="why"><div><p className="eyebrow">03 / GOLD LASH</p><h2>WENIGER<br/>STANDARD.<br/><em>MEHR DU.</em></h2></div><p className="why-copy">Gold Lash steht in Mannheim für einen persönlichen Blick auf Beauty: mit Ruhe, Fingerspitzengefühl und Sinn für das, was dir wirklich steht.</p></section>

    <section className="booking" id="booking"><p className="eyebrow">DEIN NÄCHSTER LOOK</p><h2>READY FOR<br/><em>YOUR NEXT</em><br/>LOOK?</h2><a className="button gold" href={mapsUrl} target="_blank" rel="noreferrer">TERMIN BUCHEN <b>↗</b></a><div className="booking-orb" aria-hidden="true"/></section>

    <footer><div><a className="brand" href="#top">GOLD <i>LASH</i></a><p>P7 22<br/>68161 Mannheim</p></div><div><a href={mapsUrl} target="_blank" rel="noreferrer">Route planen ↗</a><a href="#top">Nach oben ↑</a></div><small>© {new Date().getFullYear()} GOLD LASH</small></footer>
  </main>;
}
