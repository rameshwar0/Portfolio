import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI-Driven Mixed Reality",
    platform: "Unreal Engine",
    description: "• Developed a 3D AI-powered human character capable of interview-style and conversational interactions.\n• Implemented interactive dialogue systems using Blueprint Visual Scripting.\n• Integrated real-time AI responses to create natural conversational flow.\n• Focused on user interaction, immersion, and mixed-reality experience design.",
    tech: ["Unreal Engine", "Blueprints", "AI"]
  },
  {
    title: "Game Reskinning & Customization",
    platform: "Unity",
    description: "• Reskinned and customized multiple mobile games while retaining core mechanics: Choco Crunch, Sphinx Bubble Blast, Fastlane Racing, Challas Aath.\n• Redesigned UI/UX, enhanced visuals, and improved gameplay logic and performance.\n• Integrated Firebase backend services, Ads monetization, Analytics, and Push Notifications.",
    tech: ["Unity", "Firebase", "Ads SDK", "Analytics"]
  },
  {
    title: "Housie (Tambola) Multiplayer",
    platform: "Unity / Node.js",
    description: "• Developing a real-time multiplayer Housie game from scratch.\n• Handling end-to-end development including game logic, backend integration, and multiplayer systems.\n• Implemented Socket.io and WebSocket communication for real-time player synchronization.",
    tech: ["Unity", "Socket.io", "WebSockets"]
  },
  {
    title: "Sniper VR",
    platform: "Apple VisionOS",
    description: "In my solo endeavor, I spearheaded the development of a sniper-based game exclusively designed for Apple VisionOS, blending elements of VR and MR. Utilizing the Unity Game Engine, I navigated the intricacies of this cutting-edge platform, crafting immersive gaming experiences.",
    tech: ["Unity", "Apple VisionOS", "VR/MR"]
  },
  {
    title: "Endless Runner Game",
    platform: "Unity Game Engine",
    description: "I single-handedly conceptualized, developed, and deployed a 3D endless runner game on the Google Play Store. I crafted captivating animations and integrated mobile gestures tailored for Android devices. Notably, I introduced innovative AR face detection mechanics to enhance player interaction.",
    tech: ["Unity", "AR Foundation", "Google Play"]
  }
];

const publishedGames = [
  {
    title: "G-Wheel Jump",
    url: "https://play.google.com/store/apps/details?id=com.shonstudio.gwheeljump&hl=en_IN",
    companyUrl: "https://www.integratex.com/g-wheel-jump/",
    img: "/games/g-wheel-jump.webp",
    features: ["Constant arcade motion", "Increasing speed mechanics", "Precision tap controls"]
  },
  {
    title: "Road Runner",
    url: "https://play.google.com/store/apps/details?id=com.shonstudio.roadrunner&hl=en_IN",
    companyUrl: "https://www.integratex.com/road-runner/",
    img: "/games/road-runner.webp",
    features: ["Dynamic obstacle generation", "High-speed 3D environment", "Smooth responsive handling"]
  },
  {
    title: "Fastlane Racing",
    url: "https://play.google.com/store/apps/details?id=com.shonstudio.fastlaneracing&hl=en_IN",
    companyUrl: "https://www.integratex.com/fastlane-racing/",
    img: "/games/fastlane-racing.webp",
    features: ["Immersive 3D racing logic", "Vehicle customization", "High-octane mechanics"]
  },
  {
    title: "Choco Crunch",
    url: "https://play.google.com/store/apps/details?id=com.indianic.chococrunch&hl=en_IN",
    companyUrl: "https://www.integratex.com/choco-crunch/",
    img: "/games/choco-crunch.webp",
    features: ["Match-3 puzzle progression", "Firebase Live-Ops integration", "Ads & Analytics monetization"]
  },
  {
    title: "Sphinx Bubble Blast",
    url: "https://play.google.com/store/apps/details?id=com.indianic.sphinxbubble&hl=en_IN",
    companyUrl: "https://www.integratex.com/sphinx-bubble-blast/",
    img: "/games/sphinx-bubble-blast.webp",
    features: ["Bubble shooter specific logic", "Intuitive UI/UX redesign", "Push Notifications capability"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container" style={{ zIndex: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="heading-section">Selected Works</h3>
      </motion.div>

      {/* Ranks of Projects */}
      <div className="grid-2" style={{ width: '100%', marginBottom: '8rem' }}>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-peach)', border: '1px solid rgba(255, 106, 0, 0.3)', background: 'rgba(255, 106, 0, 0.05)', padding: '0.4rem 1rem', borderRadius: '40px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                {project.platform}
              </span>
            </div>
            
            <h4 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1rem', fontWeight: 700, letterSpacing: '-0.5px' }}>{project.title}</h4>
            
            <div style={{ flex: 1 }}>
              <div className="text-body" style={{ whiteSpace: 'pre-line', marginBottom: '2rem' }}>
                {project.description}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.03)', padding: '0.4rem 1rem', borderRadius: '40px', fontWeight: 500 }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="heading-section" style={{ marginBottom: '3rem' }}>Published Titles</h3>
      </motion.div>

      <div className="grid-2" style={{ width: '100%', gap: '3rem' }}>
        {publishedGames.map((game, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            {/* Cinematic Image Banner */}
            <div style={{ width: '100%', height: '280px', position: 'relative', overflow: 'hidden' }}>
              {/* Fallback solid background just in case image fails */}
              <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-navy)', zIndex: 0 }}></div>
              <motion.img 
                src={game.img} 
                alt={game.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)', transition: 'transform 0.5s ease', transformOrigin: 'center' }}
                whileHover={{ scale: 1.05, filter: 'brightness(0.9)' }}
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', background: 'linear-gradient(to top, var(--bg-navy), transparent)', zIndex: 1 }}></div>
            </div>

            <div style={{ padding: '2.5rem', background: 'var(--bg-navy)', position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>{game.title}</h4>
              
              <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2.5rem', flex: 1 }}>
                {game.features.map((feature, i) => (
                  <li key={i} className="text-body" style={{ margin: '0.8rem 0', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: 'var(--accent-blue)', fontSize: '1.2rem' }}>✦</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href={game.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                  style={{ background: 'var(--text-primary)', color: '#000', borderColor: 'var(--text-primary)' }}
                >
                  Play Store
                </a>
                <a 
                  href={game.companyUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                >
                  Case Study
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
