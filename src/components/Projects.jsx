import React, { useState } from "react";
import styles from "../styles/Projects.module.scss";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

export default function Projects() {

    return (
        <div className={styles.ProjectsContainer}>
          <div className={styles.ProjectsTitleContainer}>
            <div className={styles.ProjectsTitle}>Projects</div>
          </div>
            {
                projects.map((item, i) => (
                    <ProjectCard key={i} item={item} />
                ))
            }
        </div>
    )
}
