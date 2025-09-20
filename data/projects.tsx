import { LuMap, LuUser, LuTv, LuGamepad2 } from "react-icons/lu"

const PROJECTS = [
  {
    name: "Portfolio",
    description: "This website",
    demo: "https://itsdante.com",
    github: "https://github.com/daannte/www",
    icon: <LuUser size={32} />,
  },
  {
    name: "Aegis",
    description: "Survivor simulator for CPSC 383",
    github: "https://github.com/AEGIS-GAME/aegis",
    icon: <LuGamepad2 size={32} />
  },
  {
    name: "Pico",
    description: "Minimal Jellyfin Web Client",
    demo: "https://pico.itsdante.com",
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
