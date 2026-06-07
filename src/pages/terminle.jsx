import React from 'react';
import Window from './window';
import Terminal from 'react-console-emulator';
import './Terminle.scss';

export default function Terminle({ onClose }) {
  // react-console-emulator ke standard format ke hisab se fn() function lagayi hai
  const portfolioCommands = {
    about: {
      description: 'Fetches the developer personal profile.',
      fn: () => `
BIOGRAPHY:
----------
Name       : Himanshu Kumawat[cite: 1]
Role       : Junior Full Stack Developer & UI/UX Specialist[cite: 1]
Base       : Jaipur, Rajasthan, India

Summary:
  I am a passionate Full Stack Developer who bridges the gap between clean backend architecture
  and pixel-perfect UI/UX designs.[cite: 1] I specialize in constructing scalable web architectures using 
  the MERN ecosystem and Next.js, alongside crafting immersive 3D interfaces.[cite: 1]

Current Focus:
  Actively building complex digital solutions and exploring advanced integrations of 
  Generative AI within production-grade web products at Sheryians Coding School (Cohort 2.0).[cite: 1]
      `,
    },
    skills: {
      description: 'Inspects the full technology matrix.',
      fn: () => `
TECH MATRIX:
------------
🟢 FRONTEND          : HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS[cite: 1]
🔵 BACKEND           : Node.js, Express.js RESTful Architectures[cite: 1]
🟡 DATABASES         : MongoDB (Aggregation, Data Modeling)[cite: 1]
🟣 ARCHITECTURES & AI: Generative AI Services, LLM Client Integrations, WebGL/3D Web Layouts[cite: 1]
⚙️ TOOLS & WORKFLOWS : Git, GitHub, npm Package Ecosystem, VS Code, Linux CLI[cite: 1]
      `,
    },
    projects: {
      description: 'Lists flagship deployment logs.',
      fn: () => `
DEPLOYMENT LOGS (KEY PROJECTS):
-------------------------------
1. MONSTA – Premium Furniture E-Commerce Solution [Status: ONGOING][cite: 1]
   • Concept     : A high-end full-stack digital product storefront focused on high-fidelity UX.[cite: 1]
   • Engineering : Implemented structural global state handling, secure user auth pipelines, 
                   and dynamic modular product distribution systems.[cite: 1]
   • Technology  : MongoDB, Express.js, React.js, Node.js, Tailwind CSS[cite: 1]

2. MYNTRA UI REPLICA – Pixel-Perfect Interface Challenge [Status: RELEASION MILESTONE][cite: 1]
   • Concept     : Designed as a visual fidelity sprint to replicate structural design patterns.[cite: 1]
   • Engineering : Handled complex cross-browser layouts, fluid product discovery mechanics, 
                   and highly responsive styling benchmarks.[cite: 1]
   • Technology  : HTML5, CSS3, Modern JS, Tailwind Utility-First Engine[cite: 1]
      `,
    },
    education: {
      description: 'Queries academic and boot-camp history.',
      fn: () => `
ACADEMIC & CREDENTIALS REGISTRY:
--------------------------------
🎓 Specialized Training: Full Stack Web Development with Generative AI
   • School/Cohort   : Sheryians Coding School | Cohort 2.0[cite: 1]
   • Scope           : Next.js server actions, production deployments, and LLM application design.[cite: 1]

📜 Professional Cert: MERN Stack Web Development Certificate
   • Institute       : WsCube Tech[cite: 1]
   • Mentorship      : Undergone rigorous industry-oriented full stack logic training.[cite: 1]

🎓 Formal Degree     : Diploma in Computer Science & Engineering
   • Institution     : Government Polytechnic College, Nagaur[cite: 1]
   • Core Studies     : OOPs concepts, fundamental algorithms, operating systems, and computing basics.[cite: 1]
      `,
    },
    contact: {
      description: 'Outputs developer communication relays.',
      fn: () => `
COMMUNICATION CHANNELS:
-----------------------
📧 Email    : himanshu760kumawat@gmail.com
📞 Phone    : +91 XXXXX XXXXX
💼 LinkedIn : https://www.linkedin.com/in/ankur-prajapati-177542231/
🐙 GitHub   :https://github.com/code-760

Feel free to ping me for internships, entry-level web engineer positions, or code collaboration![cite: 1]
      `,
    },
  };

  const welcomeMessage = `Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about      - Learn about me[cite: 1]
  • skills     - View my technical skills[cite: 1]
  • projects   - Check out my work[cite: 1]
  • education  - See my academic & training history[cite: 1]
  • contact    - Get in touch

Happy exploring! 🚀`;

  return (
    <Window onClose={onClose}>
      <div className="terminle-window">
        <Terminal
          commands={portfolioCommands}
          welcomeMessage={welcomeMessage}
          promptLabel="Himanshu@kumawat:~$ "
          autoFocus={true}
        />
      </div>
    </Window>
  );
}
