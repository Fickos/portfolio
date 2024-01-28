import React, { useState } from "react";
import styles from "../styles/Projects.module.scss";
import { hobbyProjects } from "../data";
import ProjectCard from "./ProjectCard";

export default function HobbyProjects() {

    return (
        <div>
          <div className={styles.ProjectsContainer}>
            <div className={styles.ProjectsTitleContainer}>
               <div className={`${styles.ProjectsTitle} ${styles.active}`}>Hobby </div>
              <div className={styles.ProjectsTitle} style={{ marginLeft: "0.5em" }}> Projects</div>
            </div>
            {
              hobbyProjects.map((item, i) => (
                <ProjectCard key={i} item={item} />
              ))
            }
          </div>  
        </div>
    )
}