export const personalInfo = {
  name: "Rameshwar Ghanekar",
  title: "Game Developer | Unity & AR/VR Specialist",
  location: "India",
  phone: "+91 8269428474",
  email: "rameshwar.ghanekar05@gmail.com",
  linkedin: "https://www.linkedin.com/in/rameshwar-ghanekar-9a037523a/",
  tagline: "Building immersive, scalable, and interactive gaming experiences across mobile, AR, VR, and mixed reality.",
  cvUrl: "https://customer-assets.emergentagent.com/job_ramesh-portfolio-2/artifacts/k6rcoixp_Rameshwar%20Ghanekar.pdf",
};

export const aboutData = {
  summary:
    "Game Developer with 3+ years of experience specializing in Unity, AR/VR, and multiplayer systems. Skilled in building scalable mobile games, integrating backend services, and creating immersive mixed reality experiences using Unreal Engine and Apple VisionOS.",
  highlights: [
    "3+ years experience in Unity & Game Development",
    "Expertise in AR/VR/Mixed Reality",
    "Multiplayer systems with WebSockets & Socket.io",
    "Firebase backend & live services integration",
    "Experience with Unreal Engine (Blueprints)",
    "Published mobile games on Android & iOS",
  ],
};

export const skillsData = {
  gameEngines: ["Unity", "Unreal Engine (Blueprints)"],
  programming: ["C#", ".NET (Basics)"],
  gameDevelopment: ["3D Mobile Games", "AR", "VR", "Mixed Reality"],
  backendNetworking: ["Firebase", "REST APIs", "Socket.io", "WebSockets"],
  monetizationAnalytics: ["Ads Integration", "Analytics", "Crashlytics", "Push Notifications"],
  toolsPlatforms: ["Google Play Console", "App Store Connect", "Xcode", "Postman", "Visual Studio"],
};

export const experienceData = [
  {
    id: 1,
    role: "Unity 3D Programmer",
    company: "IndiaNIC Infotech Limited",
    location: "Ahmedabad, India",
    duration: "Sep 2024 - Present",
    responsibilities: [
      "Developed and optimized mobile games across Match-3, Bubble Shooter, Racing, and Ludo genres",
      "Improved gameplay, UI/UX, and performance optimization",
      "Integrated Firebase services (Auth, Firestore, Realtime DB, Analytics, Crashlytics, Cloud Messaging)",
      "Implemented Ads monetization systems",
      "Modularized and restructured codebases for scalability",
      "Built AI-driven mixed reality character using Unreal Engine (Blueprints)",
      "Developing real-time multiplayer Housie game using Socket.io & WebSockets",
      "Managed Android & iOS builds using Play Console and App Store Connect",
    ],
  },
  {
    id: 2,
    role: "Game Developer",
    company: "Samyak Infotech Pvt. Ltd.",
    location: "Ahmedabad, India",
    duration: "Jul 2023 - Aug 2024",
    responsibilities: [
      "Worked on VR and Mixed Reality projects",
      "Developed game for Apple VisionOS platform",
      "Built immersive sniper-based gameplay experience",
      "Focused on innovative mechanics and immersive design",
    ],
  },
  {
    id: 3,
    role: "Software Developer Intern",
    company: "Samyak Infotech Pvt. Ltd.",
    location: "Ahmedabad, India",
    duration: "Jan 2023 - Jun 2023",
    responsibilities: [
      "Worked with .NET for Web API development",
      "Developed 3D endless runner game using Unity",
      "Integrated AR face detection and gesture controls",
      "Published game on Google Play Store",
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    name: "G-Wheel Jump",
    category: "Arcade",
    description:
      "A fast-paced arcade jump game where precision, timing, and quick decisions keep you alive on a giant spinning wheel.",
    techStack: ["Unity", "C#", "Firebase", "Ads Integration"],
    features: [
      "One-Tap Precision Controls",
      "Broken & Collapsing Cabins",
      "Endless Increasing Difficulty",
      "Strategic Power-Ups",
    ],
    images: ["/games/g-wheel-jump.webp"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.shonstudio.gwheeljump",
    appStoreLink: "https://apps.apple.com/in/app/g-wheel-jump/id6759653409",
  },
  {
    id: 2,
    name: "Road Runner",
    category: "Endless Runner",
    description:
      "A fast and exciting endless runner where you swipe to dodge cars, jump obstacles, collect coins, and survive as long as possible on a busy highway.",
    techStack: ["Unity", "C#", "Firebase", "Analytics"],
    features: [
      "Fast-Paced Highway Action",
      "Simple Swipe Controls",
      "Dynamic Traffic & Obstacles",
      "Powerful Boosts",
    ],
    images: ["/games/road-runner.webp"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.shonstudio.roadrunner",
    appStoreLink: "https://apps.apple.com/in/app/road-runner-2025/id6756487279",
  },
  {
    id: 3,
    name: "Fastlane Racing",
    category: "Racing",
    description:
      "Race endlessly through jungle, city & desert highways! Unlock cars, conquer modes & master racing skills.",
    techStack: ["Unity", "C#", "Firebase", "Ads"],
    features: [
      "Endless Highway Racing",
      "Multiple Game Modes",
      "Diverse Environments",
      "Unlock & Upgrade Cars",
    ],
    images: ["/games/fastlane-racing.webp"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.shonstudio.fastlaneracing",
    appStoreLink: "https://apps.apple.com/us/app/fastlane-racing/id6754088789",
  },
  {
    id: 4,
    name: "Sphinx Bubble Blast",
    category: "Puzzle",
    description:
      "Embark on a magical bubble-shooting journey through ancient Egypt! Match bubbles, unlock Egyptian powers, and solve puzzles.",
    techStack: ["Unity", "C#", "Firebase", "Analytics"],
    features: [
      "Egyptian Power-Ups",
      "500+ Challenging Levels",
      "Stunning Visuals",
      "Strategic Gameplay",
    ],
    images: ["/games/sphinx-bubble-blast.webp"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.indianic.sphinxbubble",
    appStoreLink: "https://apps.apple.com/us/app/sphinx-bubble-blast/id6741888983",
  },
  {
    id: 5,
    name: "Choco Crunch",
    category: "Match-3",
    description:
      "The ultimate match-3 puzzle game! Match colorful candies, complete fun challenges, and join charming chefs on their sweet adventure.",
    techStack: ["Unity", "C#", "Firebase", "Leaderboards"],
    features: [
      "Exciting Match-3 Gameplay",
      "Hundreds of Levels",
      "Daily Rewards & Surprises",
      "Leaderboard & Social Fun",
    ],
    images: ["/games/choco-crunch.webp"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.indianic.chococrunch&hl=en_IN",
    appStoreLink: "https://apps.apple.com/us/app/choco-crunch/id6740224710",
  },
  {
    id: 6,
    name: "AI-Driven Mixed Reality Character",
    category: "AR/VR",
    description:
      "3D AI-powered human character capable of real-time conversational interactions in mixed reality.",
    techStack: ["Unreal Engine", "Blueprints", "AI Integration", "MR"],
    features: [
      "Interactive dialogue system",
      "Real-time AI responses",
      "Immersive MR experience",
      "Interview-style interaction design",
    ],
    images: [],
    link: "https://www.linkedin.com/in/rameshwar-ghanekar-9a037523a/",
  },
  {
    id: 7,
    name: "Multiplayer Housie (Tambola) Game",
    category: "Multiplayer",
    description:
      "Real-time multiplayer tambola game with live synchronization using Socket.io and WebSockets.",
    techStack: ["Unity", "Socket.io", "WebSockets", "Firebase"],
    features: [
      "Real-time multiplayer system",
      "Live player sync",
      "Backend integration",
      "End-to-end game development",
    ],
    images: [],
  },
  {
    id: 8,
    name: "Sniper Game for Apple VisionOS",
    category: "VR/MR",
    description: "Immersive sniper-based game designed for Apple VisionOS platform.",
    techStack: ["Unity", "VR", "MR", "VisionOS"],
    features: [
      "VR + MR integration",
      "Immersive gameplay mechanics",
      "Advanced interaction systems",
    ],
    images: [],
  },
];

export const education = {
  degree: "Bachelor of Technology (Information Technology)",
  institution: "Sagar Institute of Research and Technology",
  location: "Bhopal, India",
  duration: "2019 - 2023",
};
