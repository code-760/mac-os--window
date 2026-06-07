import "./futer.scss";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import Window from "../pages/window";
import Github from "../pages/github";
import Email from "../pages/Email";
import Notes from "../pages/Notes";

import Cal from "../pages/cal";
import Linkdine from "../pages/linkdine";
import Pdf from "../pages/pdf";
import Terminle from "../pages/terminle";
import Spotify from "../pages/Spotify";

const SCALE = 2.25;
const DISTANCE = 110;
const NUDGE = 40;

const SPRING = {
  mass: 0.1,
  stiffness: 170,
  damping: 12,
};

const APPS = [
  { id: "github", name: "GitHub", src: "/mca-icons/github.png" },
  { id: "email", name: "Email", src: "/mca-icons/Emali.png", url: "mailto:himanshu760kumawat@gmail.com" },
  { id: "notes", name: "Notes", src: "/mca-icons/notes.png" },
  { id: "calendar", name: "Calendar", src: "/mca-icons/calendar.png" ,url: "https://calendar.google.com/" },
  { id: "linkdine", name: "Link", src: "/mca-icons/linkedin.png" ,url:"https://www.linkedin.com/in/himanshu-kumawat-465192369/" },
  { id: "pdf", name: "PDF", src: "/mca-icons/pdf.png" },
  { id: "spotify", name: "Spotify", src: "/public/mca-icons/spotify.png" ,},
  

  { id: "terminal", name: "Terminal", src: "/mca-icons/Terminal.png" },
];

export default function Dock() {
  const mouseLeft = useMotionValue(-Infinity);
  const mouseRight = useMotionValue(-Infinity);

  const left = useTransform(mouseLeft, [0, 40], [0, -40]);
  const right = useTransform(mouseRight, [0, 40], [0, -40]);

  const leftSpring = useSpring(left, SPRING);
  const rightSpring = useSpring(right, SPRING);

  const [openApps, setOpenApps] = useState([]);

  const openWindow = (app) => {
    if (app.url) {
      window.open(app.url, "_blank"); // Quote fix kiya
    } else if (!openApps.includes(app.name)) {
      // 'eles' ko 'else if' kiya
      setOpenApps((prev) => [...prev, app.name]);
    }
  };

  const closeWindow = (appName) => {
    setOpenApps((prev) => prev.filter((name) => name !== appName));
  };

  return (
    <>
      <div className="dock-wrapper">
        <motion.div
          className="dock"
          onMouseMove={(e) => {
            const { left, right } = e.currentTarget.getBoundingClientRect();

            mouseLeft.set(e.clientX - left);
            mouseRight.set(right - e.clientX);
          }}
          onMouseLeave={() => {
            mouseLeft.set(-Infinity);
            mouseRight.set(-Infinity);
          }}
        >
          <motion.div
            className="dock-bg"
            style={{
              left: leftSpring,
              right: rightSpring,
            }}
          />

          {APPS.map((app, index) => (
            <AppIcon key={index} app={app} mouseLeft={mouseLeft} openWindow={() => openWindow(app)} />
          ))}
        </motion.div>
      </div>

      {openApps.includes('GitHub') && <Github onClose={() => closeWindow('GitHub')} />}

      {openApps.includes('Email') && <Email onClose={() => closeWindow('Email')} />}

      {openApps.includes('Notes') && <Notes onClose={() => closeWindow('Notes')} />}

      {openApps.includes('Calendar') && <Cal onClose={() => closeWindow('Calendar')} />}

      {openApps.includes('Link') && <Linkdine onClose={() => closeWindow('Link')} />}

      {openApps.includes('PDF') && <Pdf onClose={() => closeWindow('PDF')} />}

      {openApps.includes('Spotify') && <Spotify onClose={() => closeWindow('Spotify')} />}

      {openApps.includes('Terminal') && <Terminle onClose={() => closeWindow('Terminal')} />}
    </>
  );
}

function AppIcon({ mouseLeft, app, openWindow }) {
  const ref = useRef(null);

  const distance = useTransform(() => {
    const bounds = ref.current
      ? {
          x: ref.current.offsetLeft,
          width: ref.current.offsetWidth,
        }
      : { x: 0, width: 0 };

    return mouseLeft.get() - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1]);

  const x = useTransform(() => {
    const d = distance.get();

    if (d === -Infinity) return 0;

    if (d < -DISTANCE || d > DISTANCE) {
      return Math.sign(d) * -NUDGE;
    }

    return (-d / DISTANCE) * NUDGE * scale.get();
  });

  const scaleSpring = useSpring(scale, SPRING);
  const xSpring = useSpring(x, SPRING);

  const y = useMotionValue(0);

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.button
            ref={ref}
            className="dock-icon"
            style={{
              x: xSpring,
              scale: scaleSpring,
              y,
            }}
            onClick={() => {
              animate(y, [0, -40, 0], {
                duration: 0.7,
                repeat: 1,
              });
              openWindow(app.name);
            }}
          >
            <img src={app.src} alt={app.name} />
          </motion.button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content sideOffset={10} className="dock-tooltip">
            {app.name}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
