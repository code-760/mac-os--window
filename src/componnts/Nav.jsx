import React, { useEffect, useState } from "react";
import "./nav.scss";

export default function Nav() {
  const manu = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];

  const formatDate = (d = new Date(), withSeconds = false) => {
    // Example output: "July 17 2:30:05 AM" when withSeconds=true
    const opts = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    if (withSeconds) opts.second = "2-digit";
    return d.toLocaleString("en-US", opts).replace(/,/, "");
  };

  const [timeStr, setTimeStr] = useState(() => formatDate(new Date(), true));

  useEffect(() => {
    const tick = () => setTimeStr(formatDate(new Date(), true));
    const id = setInterval(tick, 1_000); // update every second
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <nav>
        <div className="left">
          <img src="/navpag/apple.svg" alt="Apple" />
          <div>
            <ul className="manu-item">
              {manu.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <img src="/navpag/wifi.svg" alt="wifi" />
          <div className="time">{timeStr}</div>
        </div>
      </nav>
    </div>
  );
}
