import React from "react";

export const ProjectThumbnail = ({title, description, img}) => {
    return (
        <div className="project-thumbnail">
        <h3>{title}</h3>
        <img src={img} alt="project thumbnail" />
        <p>{description}</p>
        </div>
    );
}

export default ProjectThumbnail;