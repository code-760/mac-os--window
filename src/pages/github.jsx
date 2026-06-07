import React, { useState } from 'react';
import Window from './window';
import './github.scss';
import gitdata from '../assets/github.json';

export default function Github({ onClose }) {
  // Local JSON data ko seedhe yahan pass kar diya taaki infinite loop na bane
  const [data, setdata] = useState(gitdata);

  return (
    <Window onClose={onClose}>
      <div className="git-main">
        {data.map((projcet, key) => {
          return (
            <div key={key}>
              <GithubCard data={projcet} />
            </div>
          );
        })}
      </div>
    </Window>
  );
}

export const GithubCard = ({ data }) => {
  let { demoLink, description, image, repoLink, tags, title } = data;
  return (
    <div className="github-wrapper">
      <div className="card-container">
        <div className="project-card">
          {/* 1. इमेज सेक्शन */}
          <div className="card-image">
            <img src={image} alt={title} />
            <div className="image-overlay">
              <span>
                View Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </div>
          </div>

          {/* 2. कंटेंट सेक्शन */}
          <div className="card-content">
            <h3 className="project-name">{title}</h3>
            <p className="project-description">{description}</p>
          </div>

          {/* 3. टैग्स सेक्शन */}
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* 4. एक्शंस सेक्शन */}
          <div className="card-actions">
            {demoLink ? (
              <a href={demoLink} className="btn btn-primary" target="_blank" rel="noreferrer">
                <i className="fa-solid fa-laptop"></i> Live Demo
              </a>
            ) : null}

            <a href={repoLink} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
