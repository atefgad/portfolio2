import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProjectCard.module.css";

const ProjectCard = ({ item }) => {
  const { id, title, img, category } = item;
  return (
    <div className={`${classes.pro__item}`}>
      <div className={`${classes.thumbnail}`}>
        <Link to={`/projects/${id}`}>
          <img src={img[0]} alt={title} height={400} />
        </Link>
      </div>
      <div className={`${classes.content}`}>
        <p>{category}</p>
        <div className="d-flex justify-content-between align-items-center">
          <h4>
            <Link to={`/projects/${id}`}>{title}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
