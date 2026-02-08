import { LuMap, LuUser, LuTv, LuGamepad2, LuLock } from "react-icons/lu"

const PROJECTS = [
  {
    name: "Aegis",
    description: "Survivor simulator for CPSC 383",
    github: "https://github.com/AEGIS-GAME/aegis",
    icon: <LuGamepad2 size={32} />
  },
  {
    name: "Proton Pass Raycast",
    description: "Proton Pass Extension for Raycast",
    github: "https://github.com/daannte/proton-pass-raycast",
    icon: <LuLock size={32} />
  },
  {
    name: "Portfolio",
    description: "This website",
    demo: "https://itsdante.com",
    github: "https://github.com/daannte/www",
    icon: <LuUser size={32} />,
  },
  {
    name: "Pico",
    description: "Minimal Jellyfin Web Client",
    github: "https://github.com/daannte/pico",
    icon: <LuTv size={32} />
  },
  {
    name: "Travlr",
    description: "Itinerary Planner",
    github: "https://github.com/daannte/travlr",
    icon: <LuMap size={32} />,
  },
]

export default PROJECTS
