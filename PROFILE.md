# Rameshwar Ghanekar - Profile & Portfolio Dossier

> **Game Developer | Unity & AR/VR/Mixed Reality Specialist**  
> 📍 Betul, MP / Ahmedabad, India  
> 📞 +91 8269428474  
> ✉️ [rameshwar.ghanekar05@gmail.com](mailto:rameshwar.ghanekar05@gmail.com)  
> 🔗 [LinkedIn Profile](https://www.linkedin.com/in/rameshwar-ghanekar-9a037523a/)  
> 📄 [Curriculum Vitae (PDF)](file:///Users/indianic/Documents/Portfolio/Rameshwar%20Ghanekar.pdf)

---

## 🎯 Professional Summary & Objective

Results-driven **Game Developer with 3+ years of professional experience** specializing in **Unity (3D/2D)**, **AR/VR/Mixed Reality**, and **mobile game development**. Proven track record in building scalable mobile games across diverse genres (Match-3, Bubble Shooter, Racing, Endless Runner, Ludo/Board games), engineering real-time multiplayer networking systems, integrating end-to-end Firebase backend services, and pioneering spatial computing experiences on **Apple VisionOS** and **Unreal Engine**.

Strong advocate of **DevOps automation** and **AI-accelerated engineering**, having designed and built automated CI/CD pipeline generators for Unity (generating Android `.apk`/`.aab` and executing post-Unity Xcode builds for iOS `.ipa`, paired with Google Cloud service account integrations).

---

## 🛠️ Skills & Technical Competencies

| Domain | Technologies & Capabilities |
| :--- | :--- |
| **Game Engines** | Unity (2D/3D, URP), Unreal Engine (Blueprints & Visual Scripting) |
| **Programming Languages** | C#, .NET (Basics / Web API), JavaScript (React / WebGL) |
| **Game Development & Spatial** | 3D Mobile Games, AR (Augmented Reality), VR (Virtual Reality), Mixed Reality (MR), Apple VisionOS development, Face Tracking & Gesture Mechanics, Physics & Collision Optimization |
| **Backend & Networking** | Firebase (Auth, Firestore, Realtime Database, Cloud Messaging, Cloud Functions), RESTful APIs, WebSockets, Socket.io (Real-time Multiplayer Synchronization) |
| **CI/CD & DevOps Automation** | GitLab CI/CD, GitHub Actions, Unity Batchmode Command-Line Builds, **Android APK & AAB Generation**, **Post-Unity Automated Xcode Builds (`.ipa`)**, **Google Cloud Platform (GCP) Configuration & Service Accounts**, App Store Connect API, Fastlane/Xcode CLI |
| **AI-Assisted Development** | LLM-Driven Rapid Prototyping, Prompt Engineering, AI Coding Assistants (Antigravity IDE, Claude, Copilot) for tool design & workflow automation |
| **Monetization & LiveOps** | In-App Purchases (IAP), Ads Monetization (Google AdMob, Unity Ads, IronSource), Push Notifications, Remote Config, Firebase Analytics, Crashlytics |
| **Platforms & Deployment Tools** | Google Play Console (Android publishing), App Store Connect (iOS publishing), Apple Xcode, Postman, Visual Studio, Git/GitHub, Cloudflare |

---

## 💼 Professional Experience

### 1. Unity 3D Programmer
**IndiaNIC Infotech Limited** | Ahmedabad, Gujarat, India  
*September 2024 – Present*

* **Mobile Game Engineering**: Developed, restructured, and optimized Unity mobile games for Android and iOS across multiple genres (Match-3, Bubble Shooter, 3D Racing, and Board/Ludo games).
* **CI/CD Automation & Tooling (AI-Accelerated)**: Designed and implemented a web-based **Unity CI/CD Pipeline Configurator** leveraging AI coding tools to streamline automated multi-platform builds for both Android (**`.apk` testing builds & `.aab` production bundles**) and iOS (**secondary Xcode builds to signed `.ipa`**), coupled with **zero-touch post-build auto-deployment** to **Google Play Console (Internal Testing)** via GCP service accounts (`google-play-upload.js`) and **Apple TestFlight** via App Store Connect API.
* **Architecture & Performance**: Modularized and refactored legacy game codebases to improve code maintainability, memory management, and frame rates on mid-to-low tier devices.
* **Backend & Live Services Integration**: Integrated comprehensive Firebase suites including Authentication, Cloud Firestore, Realtime Database, Analytics, Crashlytics, and Firebase Cloud Messaging (FCM).
* **Monetization Pipelines**: Implemented rewarded, interstitial, and banner ad monetization networks alongside in-app purchasing mechanics.
* **AI-Driven Mixed Reality**: Designed and built an interactive 3D AI-driven mixed reality human character in **Unreal Engine**, implementing scene management, actor lifecycles, and interactive conversational dialogue systems via Blueprints.
* **Multiplayer Systems & AI Backend**: Spearheading the engineering of a real-time multiplayer Housie (Tambola) game in Unity; engineered the complete backend using **AI tools** (Node.js, Express, Socket.io, Redis, PostgreSQL) for low-latency state sync, distributed table locking, and anti-cheat validation.
* **Store Release Management**: Managed end-to-end build generation, signing, and store deployments using Google Play Console, App Store Connect, and Xcode.

---

### 2. Game Developer
**Samyak Infotech Pvt. Ltd.** | Ahmedabad, Gujarat, India  
*July 2023 – August 2024*

* **Virtual & Mixed Reality**: Contributed to VR/MR simulation and interactive game projects utilizing Unity.
* **Apple VisionOS Development**: Engineered a spatial game targeting the Apple VisionOS platform, seamlessly blending Virtual Reality and Mixed Reality mechanics.
* **Innovative Mechanics**: Developed a sniper-based tactical game featuring precision aiming, spatial physics, realistic ballistic feedback, and spatial audio.
* **Cross-Disciplinary Collaboration**: Partnered with 3D modelers and UX designers to create responsive, intuitive spatial UI elements.

---

### 3. Software Developer Intern
**Samyak Infotech Pvt. Ltd.** | Ahmedabad, Gujarat, India  
*January 2023 – June 2023*

* **Web APIs**: Acquired hands-on backend expertise utilizing Microsoft .NET technologies for RESTful Web API development.
* **3D Endless Runner Game**: Conceptualized, programmed, and published a 3D endless runner game (Temple Run-inspired) built in Unity.
* **AR & Computer Vision**: Integrated innovative mobile camera gesture controls and real-time AR face-detection mechanics into the core gameplay loop.
* **Store Publishing**: Orchestrated the release and store listing optimization on the Google Play Store.

---

## 🎮 Portfolio & Shipped Projects

### 1. Unity CI/CD Pipeline Configurator & Code Generator
* **Category**: DevOps & Developer Tooling / Web Tool
* **Tech Stack**: JavaScript, HTML5/CSS3, GitLab CI, GitHub Actions, Unity Batchmode, Xcode CLI, Google Cloud Platform (GCP), AI Coding Tools
* **Overview**: A specialized, beginner-friendly web application designed and built with the aid of modern **AI coding tools** to eliminate the friction of configuring continuous integration for Unity games. It dynamically generates custom, production-ready CI/CD pipelines (`.gitlab-ci.yml`, `github-actions.yml`) and automated deployment scripts.
* **Key Features**:
  * **Dual Android Artifact Generation**: Supports generating both testing **`.apk`** builds and store-ready **`.aab`** Android App Bundles.
  * **Automated Post-Unity Xcode Builds**: Automates the required secondary compilation phase from Unity’s exported Xcode project into a signed iOS **`.ipa`** file using command-line tools.
  * **Zero-Touch Post-Build Auto-Deployment**: Direct automated publishing to **Google Play Console (Internal Testing track)** using GCP service accounts (`google-play-upload.js`) and to **Apple TestFlight** using App Store Connect API keys.
  * **Dynamic Store Version Incrementing**: Automatically queries live store tracks (`get-play-store-version.js` & `get-app-store-version.js`) to increment build and version numbers automatically without build failures.
  * **Google Cloud & Play Console API Setup**: Step-by-step guidance and script generation for Google Cloud Platform (GCP) service accounts and Google Play Developer API keys.
  * **AI-Accelerated Engineering**: Entirely conceived, structured, and implemented using advanced AI tools for rapid prototyping and robust script generation.
  * **Modular Wizard & Drag-and-Drop Guidance**: Interactive UI wizard that filters out unused scripts based on user selections and provides clear visual drag-and-drop instructions for repository root placement.

---

### 2. G-Wheel Jump
* **Category**: Fast-Paced Arcade Action
* **Tech Stack**: Unity, C#, Firebase, Ads Monetization
* **Overview**: A high-precision timing jump game where quick reflexes and strategic power-up usage keep the player alive on a giant rotating mechanical wheel with collapsing and broken cabins.
* **Key Features**: One-tap precision jump mechanics, destructible dynamic platforms, procedural difficulty scaling, and high-score leaderboards.
* **Stores**:
  * [Google Play Store](https://play.google.com/store/apps/details?id=com.shonstudio.gwheeljump)
  * [Apple App Store](https://apps.apple.com/in/app/g-wheel-jump/id6759653409)

---

### 3. Road Runner
* **Category**: 3D Endless Runner / Action
* **Tech Stack**: Unity, C#, Firebase, Analytics
* **Overview**: An adrenaline-fueled highway runner where players swipe to weave through dense traffic, hurdle obstacles, trigger nitro speed boosts, and collect coins.
* **Key Features**: Fluid swipe and lane-switch mechanics, procedural obstacle generation, dynamic traffic AI, and custom power-up timers.
* **Stores**:
  * [Google Play Store](https://play.google.com/store/apps/details?id=com.shonstudio.roadrunner)
  * [Apple App Store](https://apps.apple.com/in/app/road-runner-2025/id6756487279)

---

### 4. Fastlane Racing
* **Category**: 3D Highway Racing
* **Tech Stack**: Unity, C#, Firebase, Mobile Ads
* **Overview**: Endless high-speed arcade highway racer across diverse biomes including dense jungles, modern cityscapes, and vast desert highways.
* **Key Features**: Vehicle upgrades and unlock system, multiple game modes (One-Way, Two-Way, Time Attack), realistic vehicle audio, and customizable paint jobs.
* **Stores**:
  * [Google Play Store](https://play.google.com/store/apps/details?id=com.shonstudio.fastlaneracing)
  * [Apple App Store](https://apps.apple.com/us/app/fastlane-racing/id6754088789)

---

### 5. Sphinx Bubble Blast
* **Category**: Casual Bubble Shooter & Puzzle
* **Tech Stack**: Unity, C#, Firebase, Analytics
* **Overview**: An Egyptian-themed puzzle adventure where players aim, bounce, and match mystical colored spheres to clear ancient ruins and unlock pharaonic spells.
* **Key Features**: Over 500+ handcrafted puzzle levels, trick-shot trajectory prediction, dynamic board clearing visual effects, and daily reward systems.
* **Stores**:
  * [Google Play Store](https://play.google.com/store/apps/details?id=com.indianic.sphinxbubble)
  * [Apple App Store](https://apps.apple.com/us/app/sphinx-bubble-blast/id6741888983)

---

### 6. Choco Crunch
* **Category**: Match-3 Puzzle
* **Tech Stack**: Unity, C#, Firebase, Social Leaderboards
* **Overview**: A vibrant, confectionery-themed match-3 game featuring combo cascades, pastry chef companions, and hundreds of progressive levels.
* **Key Features**: Cascading grid logic, special candy bomb combinations, score leaderboards, and offline gameplay support.
* **Stores**:
  * [Google Play Store](https://play.google.com/store/apps/details?id=com.indianic.chococrunch&hl=en_IN)
  * [Apple App Store](https://apps.apple.com/us/app/choco-crunch/id6740224710)

---

### 7. Challas Aath
* **Category**: Traditional Board / Indian Ludo
* **Tech Stack**: Unity, C#, Local AI, Offline Multiplayer
* **Overview**: Modern digital adaptation of the ancient Indian turn-based tactical board game (Ashta Chamma / Challas Aath) with traditional aesthetics and intelligent AI opponents.
* **Key Features**: Authentic traditional rulesets, pass-and-play local multiplayer, and responsive board animations.

---

### 8. AI-Driven Mixed Reality Character (Unreal Engine)
* **Category**: Spatial Computing & Conversational AI
* **Tech Stack**: Unreal Engine 5, Blueprints, AI APIs, Mixed Reality (MR)
* **Overview**: 3D interactive virtual human capable of real-time speech dialogue, contextual answers, and natural facial gestures within an MR environment.
* **Key Features**: Blueprint-driven dialogue state machines, automated lip-sync integration, and spatial user awareness.

---

### 9. Real-Time Multiplayer Housie / Tambola
* **Category**: Live Multiplayer Board Game
* **Tech Stack**: Unity (C#), Node.js, Socket.io, Redis, PostgreSQL, AI Tools
* **Overview**: Synchronized live digital Tambola game in Unity paired with a scalable real-time backend engineered entirely using AI tools for multi-instance lobbies, distributed table locking, and anti-cheat validation.
* **Key Features**: Complete backend built using AI tools (Node.js/Express/Redis), server-authoritative win claim validation, server-side IAP receipt verification, dynamic ticket generation, and deep-link room invites.

---

### 10. Apple VisionOS Sniper Experience
* **Category**: VR / Spatial Computing
* **Tech Stack**: Unity (VisionOS SDK), Spatial Audio, Hand/Eye Tracking
* **Overview**: Tactile spatial precision sniper simulation developed for Apple VisionOS blending stereoscopic 3D environments with immersive focal mechanics.

---

### 11. Gesture & AR Face Detection Runner
* **Category**: AR Innovation / Prototype
* **Tech Stack**: Unity, AR Foundation / Face Tracking, Android Sensors
* **Overview**: Endless runner prototype where character maneuvers, jumps, and duck actions are driven by real-time player facial expressions and head tilting.

---

## 🎓 Education

* **Bachelor of Technology (B.Tech) in Information Technology**  
  *Sagar Institute of Research and Technology (SIRT), Bhopal, MP, India*  
  *Duration: 2019 – 2023*

---

## 🌐 Web Portfolio Technology Architecture

The web portfolio showcase is built with a cyberpunk/arcade aesthetic:
* **Frontend Framework**: React 19 + Vite 6
* **Styling**: Tailwind CSS v4 + Vanilla CSS Design System with custom CRT Scanline & Neon palettes
* **3D Visuals**: Three.js & React Three Fiber (`@react-three/fiber`, `@react-three/drei`, `maath`)
* **Interactive Mini-Games**:
  * In-Browser 2D Space Defender Arcade Game ([PlayableArcade.jsx](file:///Users/indianic/Documents/Portfolio/Portfolio/src/components/PlayableArcade.jsx))
  * Simulated Voice & Text AI Assistant Console ([AiAvatarConsole.jsx](file:///Users/indianic/Documents/Portfolio/Portfolio/src/components/AiAvatarConsole.jsx))
* **Audio**: Procedural Web Audio API sound synthesis ([soundEffects.js](file:///Users/indianic/Documents/Portfolio/Portfolio/src/utils/soundEffects.js))
* **Deployment**: Cloudflare Pages / Workers via Wrangler
