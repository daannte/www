import { LuMap, LuUser, LuTv } from "react-icons/lu"

const PROJECTS = [
  {
    name: "Travlr",
    description: "Itinerary Planner",
    demo: "https://travlr-9c098.web.app/",
    github: "https://github.com/daannte/travlr",
    icon: <LuMap size={32} />,
  },
  {
    name: "Portfolio",
    description: "This website",
    demo: "https://shamblesroom.com",
    github: "https://github.com/daannte/www",
    icon: <LuUser size={32} />,
  },
  {
    name: "Pico",
    description: "Minimal Jellyfin Web Client",
    demo: "https://pico.shamblesroom.com",
    github: "https://github.com/daannte/pico",
    icon: <LuTv size={32} />
  },
]

export default PROJECTS
