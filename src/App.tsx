import React from "react";
import me from "./assets/me.jpg";
import cv from './assets/cv.pdf';


<img src={me} alt="Emirhan Aydın" />

// üst kısımda herhangi bir yere ekle:
const AVATAR = `${import.meta.env.BASE_URL}me.jpg`;

// —— Yardımcı SVG ikonları ——
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a10 10 0 0 0-3.162 19.494c.5.092.684-.216.684-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.222-.253-4.557-1.111-4.557-4.946 0-1.092.39-1.986 1.03-2.687-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.706.115 2.504.337 1.91-1.295 2.749-1.026 2.749-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.687 0 3.844-2.339 4.69-4.566 4.938.36.31.68.92.68 1.854 0 1.337-.012 2.417-.012 2.747 0 .268.18.58.69.481A10 10 0 0 0 12 2Z"/>
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M4.984 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3.5 9h2.97v11.25H3.5V9Zm6.045 0h2.847v1.53h.04c.397-.752 1.367-1.545 2.815-1.545 3.01 0 3.565 1.982 3.565 4.557v6.708h-2.97v-5.951c0-1.42-.025-3.245-1.977-3.245-1.98 0-2.283 1.547-2.283 3.145v6.051H9.545V9Z"/>
  </svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
  </svg>
);
const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 8.707 10.293L11 12.586V4a1 1 0 0 1 1-1ZM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"/>
  </svg>
);

// —— Basit veri modelleri ——
interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  duration: string;
  tech: string;
  description: string;
  image: string;       // ZORUNLU: poster görseli (public/ veya import)
  youtubeId?: string;  // OPSİYONEL: YouTube video ID (hover'da oynatmak için)
  link?: string;       // OPSİYONEL: kart tıklanınca gidilecek referans linki
}


interface Education {
  school: string;
  years: string;
  degree: string;
}


function YouTubeEmbed({ id, active }: { id?: string; active: boolean }) {
  if (!id) return null;
  // Hover aktif olduğunda autoplay’li URL:
  const src = `https://www.youtube.com/embed/${id}?autoplay=${active ? 1 : 0}&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${id}`;
  return (
    <iframe
      className={`yt-iframe ${active ? "is-active" : ""}`}
      src={src}
      title="YouTube video"
      loading="lazy"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  );
}

function ProjectCard({ p }: { p: Project }) {
  const [hover, setHover] = React.useState(false);

  return (
    <a
      href={p.link || "#"}
      target="_blank"
      rel="noreferrer"
      className="card card--link"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card__media" aria-hidden>
        <img className={`poster-img ${hover ? "is-dimmed" : ""}`} src={p.image} alt={`${p.title} poster`} />
        <YouTubeEmbed id={p.youtubeId} active={hover} />
        {!p.youtubeId && <div className="poster"><span className="poster__label">Görsel / Video</span></div>}
      </div>

      <div className="card__body">
        <div className="card__meta">
          <span className="badge">{p.year}</span>
          <span className="badge">{p.duration}</span>
          <span className="badge badge--soft">{p.tech}</span>
        </div>
        <h3 className="card__title">{p.title}</h3>
        <p className="card__role">{p.role}</p>
        <p className="card__desc">{p.description}</p>
      </div>
    </a>
  );
}

const projects: Project[] = [
  {
    id: 1,
    title: "Space Shooter Prototype",
    role: "Gameplay Programmer",
    year: "2023",
    duration: "6 Hafta",
    tech: "C++ / SDL2",
    description:
      "ECS ve prosedürel arka plan üretimi denemeleri.",
    image: `${import.meta.env.BASE_URL}thumbs/spaceshooter.jpg`,
    youtubeId: "dQw4w9WgXcQ",
    link: "https://github.com/emircakil/space-shooter"
  },
  {
    id: 2,
    title: "Bomber-like 2D",
    role: "Gameplay Programmer",
    year: "2022",
    duration: "4 Ay",
    tech: "Lua / LÖVE2D",
    description:
      "Harita ve power-up sistemleriyle klasik bomber tarzı.",
    image: `${import.meta.env.BASE_URL}thumbs/bomber.jpg`,
    youtubeId: "VIDEO_ID_2",
    link: "https://emiraydin-9.itch.io/your-game"
  },
  {
    id: 3,
    title: "Cleaning Rush",
    role: "Gameplay/Shader Programmer",
    year: "2022",
    duration: "3 Hafta",
    tech: "Unity",
    description:
      "VFX/Shader denemeleri içeren görev tabanlı prototip.",
    image: `${import.meta.env.BASE_URL}thumbs/cleaning.jpg`,
    youtubeId: "VIDEO_ID_3",
    link: "https://youtu.be/VIDEO_ID_3"
  },
];


const educations: Education[] = [
  
  {
    school: "Superwolf Games",
    years: "2024 Jul – 2024 Aug",
    degree: "Internship of Game Development",
  },
  {
    school: "Firat University",
    years: "2020 Sep – 2026 Jan",
    degree: "Bachelor's Degree of Computer Engineering",
  },
];

const skills = [
  "C++",
  "Unreal Engine",
  "C#",
  "Unity",
  "Java",
  "Git",
];

// === Minimal Circuit BG (scroll-parallax canvas) ===
// === Minimal Circuit BG (scroll-parallax canvas) ===
function CircuitBackground() {
  const ref = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let W = 0, H = 0;

    // grid ayarı (daha seyrek = daha minimal)
    let spacing = 90;                       // px
    const nodes: {
      x: number; y: number;                 // grid konumu (viewport koordinatı)
      amp: number; speed: number; phase: number;
      linkRight: boolean; linkDown: boolean;
    }[] = [];
    let cols = 0, rows = 0;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // grid’i yeniden kur
      nodes.length = 0;
      spacing = W < 640 ? 72 : 90;
      cols = Math.ceil(W / spacing) + 2;    // kenarlara buffer
      rows = Math.ceil(H / spacing) + 2;

      for (let r = -1; r < rows - 1; r++) {
        for (let c = -1; c < cols - 1; c++) {
          const x = c * spacing + (spacing / 2);
          const y = r * spacing + (spacing / 2);
          nodes.push({
            x, y,
            amp: 2 + Math.random() * 3,     // hafif titreşim
            speed: 0.4 + Math.random() * 0.7,
            phase: Math.random() * Math.PI * 2,
            linkRight: Math.random() < 0.55, // elektronik devre gibi yatay/dikey kısa bağlantılar
            linkDown: Math.random() < 0.35,
          });
        }
      }
    }

    function draw(ts: number) {
      const t = ts / 1000;
      ctx.clearRect(0, 0, W, H);

      // scroll parallax (y ekseni): kaydırdıkça desen yavaşça karşı yöne süzülür
      const scroll = window.scrollY || 0;
      const yOffset = -((scroll * 0.18) % spacing);

      // stiller
      const LINE = "rgba(110,231,255,0.09)"; // var(--primary) tonunda çok hafif
      const DOT  = "rgba(110,231,255,0.55)";

      // bağları çiz (önce çizgi, sonra nokta)
      ctx.lineWidth = 1;
      ctx.strokeStyle = LINE;

      // grid boyutunu biliyoruz; sağ ve aşağı komşuya bağlan
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const jRight = i + 1;                 // aynı satırda sağdaki
        const jDown  = i + (cols - 1);        // bir alt satırdaki (çünkü -1..cols-2 kullandık)
        const wobbleX = Math.sin(t * n.speed + n.phase) * n.amp;
        const wobbleY = Math.cos(t * n.speed + n.phase) * n.amp;

        const x = n.x + wobbleX;
        const y = n.y + wobbleY + yOffset;

        if (n.linkRight && (i % (cols - 1)) !== (cols - 2)) {
          const r = nodes[jRight];
          const rx = r.x + Math.sin(t * r.speed + r.phase) * r.amp;
          const ry = r.y + Math.cos(t * r.speed + r.phase) * r.amp + yOffset;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(rx, ry);
          ctx.stroke();
        }
        if (n.linkDown && i + (cols - 1) < nodes.length) {
          const d = nodes[jDown];
          const dx = d.x + Math.sin(t * d.speed + d.phase) * d.amp;
          const dy = d.y + Math.cos(t * d.speed + d.phase) * d.amp + yOffset;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(dx, dy);
          ctx.stroke();
        }
      }

      // noktalar
      ctx.fillStyle = DOT;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const x = n.x + Math.sin(t * n.speed + n.phase) * n.amp;
        const y = n.y + Math.cos(t * n.speed + n.phase) * n.amp + yOffset;
        ctx.beginPath();
        ctx.arc(x, y, 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReduced) raf = requestAnimationFrame(draw);
    }

    resize();
    if (!prefersReduced) raf = requestAnimationFrame(draw);
    else draw(0); // hareketi azalt tercihinde statik çiz

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", () => { /* parallax için sadece yeniden çiz */ }, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="circuit-canvas" ref={ref} aria-hidden />;
}



export default function App() {
  return (
    <div>
      <Style />
      <CircuitBackground />

      
      <main className="page">
        {/* ——— HERO ——— */}
       <header className="hero">


  <div className="avatar">
    <img
      src={me}
      alt="Emirhan Aydın"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
  </div>

  <div className="headline" style={{ minWidth: 0 }}>
    <h1 style={{ fontSize: 40, margin: 0 }}>Emirhan Aydin Cakil</h1>  
    <div style={{ opacity: 0.8, marginTop: 6, fontWeight: 600 }}>Gameplay Programmer</div>
    <p style={{ marginTop: 12, lineHeight: 1.5, opacity: 0.85 }}>
      Temiz, okunabilir kod. Oynanışı hissettiren sistemler. Yeni şeyler öğrenmeye meraklı, problem çözmeye takıntılı.
    </p>
    <div className="actions">
  <a className="btn" href="https://github.com/emircakil" target="_blank" rel="noreferrer">
    {/* GitHub */}
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.162 19.494c.5.092.684-.216.684-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.222-.253-4.557-1.111-4.557-4.946 0-1.092.39-1.986 1.03-2.687-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.706.115 2.504.337 1.91-1.295 2.749-1.026 2.749-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.687 0 3.844-2.339 4.69-4.566 4.938.36.31.68.92.68 1.854 0 1.337-.012 2.417-.012 2.747 0 .268.18.58.69.481A10 10 0 0 0 12 2Z"/></svg>
    GitHub
  </a>

  <a className="btn" href="https://www.linkedin.com/in/emirhan-aydın-çakıl-0b1aa41bb/" target="_blank" rel="noreferrer">
    {/* LinkedIn */}
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 22h4V7.5h-4V22zM8 7.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.14V22h-4v-6.2c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.39 1.62-2.39 3.29V22H8V7.5z"/></svg>
    LinkedIn
  </a>

  <a className="btn" href="https://emiraydin-9.itch.io" target="_blank" rel="noreferrer">
    {/* itch.io (gamepad ikonu) */}
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 7h12a3 3 0 0 1 3 3v4a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-1H10v1a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4v-4a3 3 0 0 1 3-3Zm3.5 2.5h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1Zm6.75 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2.5 0a1 1 0 1 0 .001 2.001A1 1 0 0 0 18.75 11Z"/></svg>
    itch.io
  </a>

  {/* CV: cv.pdf'i /src/assets altına koyup import edelim */}
  <a className="btn" href={cv} download>
    {/* Download icon */}
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 8.707 10.293L11 12.586V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"/></svg>
    CV indir
  </a>
</div>
    {/* butonlar */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16 }}>
      {/* mevcut GitHub / LinkedIn / Instagram / CV butonlarını buraya bırak */}
    </div>
  </div>


</header>
        {/* ——— PROJELER ——— */}
        {/* ——— PROJELER ——— */}
<section className="section" id="game-programming">
  <h2 className="section__title">Game Programming</h2>
  <div className="projects">
    {projects.map((p) => (
      <ProjectCard key={p.id} p={p} />
    ))}
  </div>
</section>


        {/* ——— EĞİTİM ——— */}
        <section className="section" id="education">
          <h2 className="section__title">Educations</h2>
          <ol className="timeline">
            {educations.map((e, i) => (
              <li key={i} className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__content">
                  <h3 className="timeline__title">{e.school}</h3>
                  <p className="timeline__meta">{e.years}</p>
                  <p className="timeline__desc">{e.degree}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ——— TEKNİK DENEYİM ——— */}
        <section className="section" id="skills">
          <h2 className="section__title">Technical Experience</h2>
          <ul className="skills">
            {skills.map((s, i) => (
              <li key={i} className="skill">{s}</li>
            ))}
          </ul>
        </section>

        {/* ——— HAKKIMDA ——— */}
        <section className="section" id="about">
          <h2 className="section__title">Hi, I’m Emirhan</h2>
          <div className="about">
            <p>
              
              I am a 23 year old game programmer that's currently Junior Developer. </p>
            <p>I describe myself as a problem solver that seeks opportunities to learn new things, at the same time, constantly improving my skills. I enjoy creating games that feel great to play, with clean code that is easy to read. I thrive on difficult challenges, maybe a little too much sometimes as I have a hard time letting go if I can not come up with a solution during a coding session.
            </p>
            <p>
Want to know more? You can find my contact information in my resume at the top. You can feel free to reach me.
            </p>
           
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Emirhan Aydın — Portfolio</p>
        </footer>
      </main>
    </div>
  );
}

// —— Dahili CSS ——
function Style() {
  return (
  <style>{`
  /* =========
     THEME
  ========= */
  :root{
    --bg: #0b0b0e;
    --card: #121217;
    --muted: #a9a9b3;
    --text: #e8e8ef;
    --primary: #6ee7ff;
    --primary-10: #6ee7ff1a;
    --ring: #2a2a36;
    --shadow: 0 20px 50px rgba(0,0,0,.45);
  }

  /* =========
     GLOBAL
  ========= */
  *{ box-sizing: border-box; }
  html,body,#root{ height:100%; }
  body{
    margin:0;
    background:
      radial-gradient(1200px 800px at 10% 10%, #12131b, transparent),
      radial-gradient(1000px 700px at 90% 0%, #10121a, transparent),
      var(--bg);
    color:var(--text);
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
  }
  a{ color:inherit; text-decoration:none; }
  img{ max-width:100%; display:block; }

  .page{ max-width:1100px; margin:0 auto; padding:48px 20px 80px; }

  /* =========
     HERO
  ========= */
  .hero{
    --avatar: 256px;               /* avatar boyutu (tek yerden değiştir) */
    display:grid;
    grid-template-columns: var(--avatar) 1fr;
    gap:24px;
    align-items:center;
  }
  .hero .avatar{
    width:var(--avatar);
    height:var(--avatar);
    border-radius:50%;
    overflow:hidden;
    border:1px solid rgba(255,255,255,0.15);
    box-shadow: var(--shadow);
  }
  .hero .headline{ min-width:0; }
  .hero .headline h1{ font-size:40px; margin:0; }
  .hero .headline .subtitle{ opacity:.85; margin-top:6px; font-weight:600; }
  .hero .headline p{ margin-top:12px; line-height:1.55; opacity:.9; }

  /* Hero actions (GitHub / LinkedIn / itch.io / CV) */
  .actions{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:16px;
  }
  .btn{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:10px 14px;
    border-radius:12px;
    border:1px solid rgba(255,255,255,0.15);
    background:rgba(255,255,255,0.03);
    font-weight:600;
    transition: transform .15s ease, border-color .15s ease, background .15s ease;
  }
  .btn:hover{
    transform: translateY(-1px);
    border-color: rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.06);
  }
  .btn svg{ width:18px; height:18px; }

  /* =========
     SECTIONS
  ========= */
  .section{ margin:56px 0; }
  .section__title{ font-size:22px; margin:0 0 20px; letter-spacing:.4px; }

  /* =========
     PROJECTS
  ========= */
  /* === BEAUTY PASS v2 === */

/* Kart: net hatlar + yumuşak degrade + hafif parıltı */
/* ===== HOTFIX RESET (ekle ve en sonda dursun) ===== */

/* Liste: tek sütun, tam genişlik, makul boşluk */
.projects{
  display:grid !important;
  grid-template-columns: 1fr !important;
  gap:18px !important;
}

/* Kart: grid düzen + tam genişlik */
.card.card--link{
  display:grid !important;
  grid-template-columns: 360px 1fr !important;
  width:100% !important;
  max-width:100% !important;
  margin:0 !important;
  border-radius:20px !important;
  border:1px solid rgba(255,255,255,0.12) !important;
  background: var(--card) !important;
  box-shadow: var(--shadow) !important;
  overflow:hidden !important;
  text-decoration:none !important;
  color:inherit !important;
}

/* Medya alanı: oran, pozisyon ve ayrım çizgisi */
.card__media{
  position:relative !important;
  aspect-ratio:16/9 !important;
  width:100% !important;
  background:#0f1016 !important;
  border-right:1px solid rgba(255,255,255,0.10) !important;
  overflow:hidden !important;
}

/* Poster ve iframe tam kaplasın */
.poster-img{
  position:absolute !important; inset:0 !important;
  width:100% !important; height:100% !important;
  object-fit:cover !important;
  transition: opacity .25s ease, transform .25s ease;
}
.poster-img.is-dimmed{ opacity:.10; transform:scale(1.02); }

/* YouTube: siyah kenarları gizlemek için hafif ölçekle */
.yt-iframe{
  position:absolute !important; inset:0 !important;
  width:110% !important; height:110% !important;
  left:-5% !important; top:-5% !important;
  border:0 !important;
  opacity:0; transition:opacity .25s ease;
  pointer-events:none;
}
.yt-iframe.is-active{ opacity:1; }

/* İç içerik: taşıma ve tipografi */
.card__body{ padding:18px 20px 22px !important; min-width:0; }
.card__title{ margin:6px 0 8px; font-size:20px; letter-spacing:.2px; }
.card__role{ margin:0 0 10px; color:#c9c9d6; }
.card__desc{ margin:0; color:#dfe0ea; line-height:1.55; }

/* Rozetler */
.card__meta{ display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px; }
.badge{
  display:inline-flex; align-items:center;
  padding:6px 10px; border-radius:999px;
  font-size:12px; line-height:1;
  background: rgba(255,255,255,0.06);
  border:1px solid rgba(255,255,255,0.14);
  color:#d7ddff;
}
.badge.badge--soft{
  background: rgba(110,231,255,0.10);
  border-color: rgba(110,231,255,0.28);
  color:#aeeaff;
}

/* Responsive */
@media (max-width: 880px){
  .card.card--link{ grid-template-columns: 1fr !important; }
  .card__media{ border-right:0 !important; }
}
@media (max-width: 480px){
  .card__title{ font-size:18px; }
  .badge{ padding:6px 9px; }
}


  /* =========
     TIMELINE
  ========= */
  .timeline{ list-style:none; padding:0; margin:0; border-left:1px solid var(--ring); }
  .timeline__item{ position:relative; padding:14px 0 14px 18px; }
  .timeline__dot{
    position:absolute; left:-6px; top:22px;
    width:10px; height:10px; border-radius:10px;
    background:var(--primary); box-shadow:0 0 0 4px var(--primary-10);
  }
  .timeline__title{ margin:0 0 4px; }
  .timeline__meta{ margin:0 0 8px; color:var(--muted); }
  .timeline__desc{ margin:0; color:#d8d8e2; }

  /* =========
     SKILLS
  ========= */
  .skills{ display:flex; flex-wrap:wrap; gap:10px; padding:0; margin:0; list-style:none; }
  .skill{
    padding:8px 12px; background:#15151b;
    border:1px solid var(--ring); border-radius:999px;
    color:#c7c7d6; font-weight:600;
  }

  /* === ABOUT SECTION BEAUTIFY === */
#about{
  margin-top: 120px;
}

.about{
  background: linear-gradient(145deg, rgba(255,255,255,0.02), rgba(0,0,0,0.15));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 28px 32px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04);
  color: #e1e3ee;
  font-size: 18px;
  line-height: 1.6;
  display: grid;
  gap: 18px;
}

/* başlığı biraz daha ayrıştır */
#about .section__title{
  font-size: 24px;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #6ee7ff, #aeeaff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}



footer {
    
  text-align: center;
  padding:30px 0; /* Üst-alt boşluğu büyüt */
}

/* === Circuit background layer === */
#circuit-canvas{
  position: fixed;
  inset: 0;
  z-index: 0;              /* içerikten geride */
  pointer-events: none;    /* tıklamaları engelleme */
  opacity: .55;            /* çok hafif görünürlük */
}

/* içerik üstte kalsın */
.page{ position: relative; z-index: 1; }

/* (opsiyonel) koyu temada biraz daha yumuşatma */
@supports (backdrop-filter: blur(2px)){
  #circuit-canvas{ backdrop-filter: blur(0.0px) } /* şimdilik no-blur */
}

/* hareketi azalt tercihine saygı */
@media (prefers-reduced-motion: reduce){
  #circuit-canvas{ opacity:.35; }
}



  /* =========
     RESPONSIVE
  ========= */
  /* Tablet */
  @media (max-width: 1024px){
    .card{ grid-template-columns: 320px 1fr; }
  }
  /* Kartları tek sütuna düşür */
  @media (max-width: 880px){
    .card{ grid-template-columns: 1fr; }
  }
  /* Hero stack + avatar küçültme */
  @media (max-width: 768px){
    .hero{
      grid-template-columns: 1fr;
      text-align:center;
      --avatar: 180px;
    }
    .hero .avatar{ margin: 0 auto 16px; }
    .actions{ justify-content:center; }
  }
  /* Küçük telefonlar */
  @media (max-width: 480px){
    .hero{ --avatar: 140px; gap:16px; }
    .hero .headline h1{ font-size:32px; }
    .btn{ padding:9px 12px; border-radius:10px; }
  }
 

`}</style>


  );
}
