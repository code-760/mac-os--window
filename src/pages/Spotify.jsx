import React from 'react'
import Window from './window'
import './Spotify.scss';

export default function Spotify({ onClose }) {
  return (
    <div>
      <Window onClose={onClose}>
        <div className="spotify-window">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/playlist/66S3hh95eIONsmXdJG2InI?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </Window>
    </div>
  );
}


