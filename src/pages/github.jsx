import Window from './window';

import React from "react";
import Window from "./Window";
import "./github.scss";
import gitdata from "../assets/github.json";


export default function Github({ onClose }) {
  return (
    <Window onClose={onClose}>
      <div className="git-main">
   {gitdata.map((projcet, key) => {
     
          
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

export const GithubCard = ({data}) => {
  console.log(data);

  let { demoLink, description, image, repoLink, tags, title, id } = data;
  return (
    <div className="github-wrapper">
      <div className="card-container">
        {/* प्रीमियम प्रोजेक्ट कार्ड */}
        <div className="project-card">
          {/* 1. इमेज सेक्शन */}
          <div className="card-image">
            <img src={image} alt={title} />
            <div className="image-overlay">
              <span>
                View Project{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
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

          <div className="card-actions">
            {/* अगर demoLink होगा, तभी यह बटन रेंडर होगा */}

            {
              demoLink?<a
                href={demoLink}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"

              >
                <i className="fa-solid fa-laptop"></i> Live Demo
              </a>:null
            }
             <a
              href={repoLink}
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i> Source Code
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};
// {demoLink && (
//               <a
//                 href={demoLink}
//                 className="btn btn-primary"
//                 target="_blank"
//                 rel="noreferrer"

//               >
//                 <i className="fa-solid fa-laptop"></i> Live Demo
//               </a>
//             )}

        
           