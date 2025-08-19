import React from "react";

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
  image?: string; // Poster veya görsel (opsiyonel)
}

interface Education {
  school: string;
  years: string;
  degree: string;
}

const PROFILE_INITIALS = "EA"; // Emirhan Aydın varsayılan baş harfler

const projects: Project[] = [
  {
    id: 1,
    title: "Örnek Proje 1",
    role: "Gameplay Programmer",
    year: "2023",
    duration: "6 Hafta",
    tech: "C++ / SDL2",
    description:
      "Space-Shooter tarzında bir prototip. ECS mantığı ve prosedürel arka plan üretimi gibi sistemleri denemek için geliştirildi.",
  },
  {
    id: 2,
    title: "Örnek Proje 2",
    role: "Gameplay Programmer",
    year: "2022",
    duration: "4 Ay",
    tech: "Lua / LÖVE2D",
    description:
      "Klasik Bomberman mekaniğini temel alan, harita ve güçlendirme sistemleri içeren 2D oyun denemesi.",
  },
  {
    id: 3,
    title: "Örnek Proje 3",
    role: "Gameplay/Shader Programmer",
    year: "2022",
    duration: "3 Hafta",
    tech: "Unity",
    description:
      "Basit görev bazlı bir prototip: ev içi temizlik ve sürelere karşı yarışma. VFX/Shader denemeleri içerir.",
  },
];

const educations: Education[] = [
  {
    school: "FutureGames",
    years: "2021 – 2023",
    degree: "Higher Vocational Education Diploma, Game Programming",
  },
  {
    school: "Linnaeus University",
    years: "2011 – 2013",
    degree: "Higher Education Diploma, Web Development",
  },
];

const skills = [
  "C++",
  "Unreal Engine",
  "SDL2",
  "Lua",
  "LÖVE2D",
  "C#",
  "Unity",
  "JavaScript",
  "Java",
  "Perforce",
  "Git",
];

export default function App() {
  return (
    <div>
      <Style />
      <main className="page">
        {/* ——— HERO ——— */}
        <header className="hero">
          <div className="hero__top">
            <div className="avatar" aria-hidden>
              <span>{PROFILE_INITIALS}</span>
            </div>
            <div className="hero__text">
              <h1 className="title">Emirhan Aydın</h1>
              <p className="subtitle">Gameplay Programmer</p>
              <p className="tagline">
                Verimli, okunabilir kod. Oynanışı hissettiren sistemler. Yeni
                şeyler öğrenmeye meraklı, problem çözmeye takıntılı.
              </p>
              <nav className="actions" aria-label="Sosyal ve CV bağlantıları">
                <a className="btn" href="#" onClick={(e)=>e.preventDefault()}>
                  <GitHubIcon className="icon" /> GitHub
                </a>
                <a className="btn" href="#" onClick={(e)=>e.preventDefault()}>
                  <LinkedinIcon className="icon" /> LinkedIn
                </a>
                <a className="btn" href="#" onClick={(e)=>e.preventDefault()}>
                  <InstagramIcon className="icon" /> Instagram
                </a>
                <a className="btn btn--primary" href="#" onClick={(e)=>e.preventDefault()}>
                  <DownloadIcon className="icon" /> CV indir
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* ——— PROJELER ——— */}
        <section className="section" id="game-programming">
          <h2 className="section__title">Game Programming</h2>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.id} className="card">
                <div className="card__media" aria-hidden>
                  {/* Gerçek görsel/video eklemek isterseniz p.image kullanın */}
                  <div className="poster">
                    <span className="poster__label">Görsel / Video</span>
                  </div>
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
              </article>
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
              34 yaşında bir oyun programcısıyım. Kod kalitesi, performans ve
              oynanış hissi benim için öncelikli. Zor problemleri çözmeyi,
              öğrenmeyi ve bildiklerimi geliştirmeyi seviyorum.
            </p>
            <p>
              Daha fazlası için yukarıdaki sosyal hesaplarıma ya da CV’deki
              iletişim bilgilerime ulaşabilirsiniz.
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
      *{box-sizing:border-box}
      html,body,#root{height:100%}
      body{margin:0;background:radial-gradient(1200px 800px at 10% 10%, #12131b, transparent), radial-gradient(1000px 700px at 90% 0%, #10121a, transparent), var(--bg); color:var(--text); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";}
      .page{max-width:1100px; margin:0 auto; padding:48px 20px 80px;}

      /* HERO */
      .hero{position:relative; margin-bottom:48px}
      .hero__top{display:grid; grid-template-columns:120px 1fr; gap:24px; align-items:center}
      .avatar{width:120px; height:120px; border-radius:999px; display:grid; place-items:center; background: conic-gradient(from 180deg at 50% 50%, #5eead4, #60a5fa, #a78bfa, #5eead4); box-shadow: var(--shadow);}
      .avatar span{display:grid; place-items:center; width:108px; height:108px; border-radius:inherit; background:var(--card); font-weight:700; font-size:28px; letter-spacing:.5px}
      .hero__text{}
      .title{font-size: clamp(28px, 3vw, 40px); margin:0 0 6px}
      .subtitle{margin:0 0 10px; color:var(--muted); font-weight:600}
      .tagline{margin:0 0 18px; color:#d4d4dd}
      .actions{display:flex; flex-wrap:wrap; gap:10px}
      .btn{display:inline-flex; align-items:center; gap:10px; padding:10px 14px; border-radius:12px; background:#15151b; color:var(--text); text-decoration:none; border:1px solid var(--ring); box-shadow: var(--shadow); font-weight:600}
      .btn:hover{border-color:#2f2f45; transform:translateY(-1px)}
      .btn--primary{background:linear-gradient(180deg, var(--primary-10), transparent); border-color:#29708a}
      .icon{width:18px; height:18px}

      /* SECTION */
      .section{margin:56px 0}
      .section__title{font-size:22px; margin:0 0 20px; letter-spacing:.4px}

      /* PROJECTS */
      .projects{display:grid; gap:16px}
      .card{display:grid; grid-template-columns: 360px 1fr; gap:20px; background:var(--card); border:1px solid var(--ring); border-radius:18px; box-shadow: var(--shadow); overflow:hidden}
      .card__media{position:relative; min-height:200px}
      .poster{position:absolute; inset:0; background: radial-gradient(600px 300px at -10% 0%, #1b1b24, transparent), radial-gradient(400px 200px at 120% 120%, #1b1b24, transparent); display:grid; place-items:center;}
      .poster__label{font-size:12px; color:var(--muted); border:1px dashed #343442; padding:8px 10px; border-radius:10px; background:#101017}
      .card__body{padding:18px 18px 22px}
      .card__meta{display:flex; flex-wrap:wrap; gap:8px; margin-bottom:8px}
      .badge{font-size:12px; padding:6px 10px; background:#161620; border:1px solid #282838; border-radius:999px; color:#cfd3ff}
      .badge--soft{color:#9edcff; border-color:#225a70; background: #0e1316}
      .card__title{font-size:18px; margin:6px 0 6px}
      .card__role{margin:0 0 10px; color:#c3c3cf}
      .card__desc{margin:0; color:#d9d9e6}

      /* TIMELINE */
      .timeline{list-style:none; padding:0; margin:0; border-left:1px solid var(--ring)}
      .timeline__item{position:relative; padding:14px 0 14px 18px}
      .timeline__dot{position:absolute; left:-6px; top:22px; width:10px; height:10px; border-radius:10px; background:var(--primary); box-shadow:0 0 0 4px var(--primary-10)}
      .timeline__title{margin:0 0 4px}
      .timeline__meta{margin:0 0 8px; color:var(--muted)}
      .timeline__desc{margin:0; color:#d8d8e2}

      /* SKILLS */
      .skills{display:flex; flex-wrap:wrap; gap:10px; padding:0; margin:0; list-style:none}
      .skill{padding:8px 12px; background:#15151b; border:1px solid var(--ring); border-radius:999px; color:#c7c7d6; font-weight:600}

      /* ABOUT */
      .about{display:grid; gap:10px; color:#d8d8e2}

      .footer{margin-top:56px; color:var(--muted); text-align:center}

      /* Responsive */
      @media (max-width: 880px){
        .hero__top{grid-template-columns:90px 1fr}
        .avatar{width:90px;height:90px}
        .avatar span{width:80px;height:80px;font-size:22px}
        .card{grid-template-columns:1fr}
      }
    `}</style>
  );
}
