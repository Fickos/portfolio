import React, { useState } from "react";
import styles from "../styles/Projects.module.scss";

const TechnologyColors = {
  "React.js": "#e97bfa",
  "Node.js": "#a3e635",
  "Redux": "#01d8ff",
  "Express.js": "#0a8968",
  "Java": "#f26522",       // Bright orange
  "Material UI": "#8cc4f6",
  "SpringBoot": "#59b529",
  "SASS": "#f75ca7",
  "Firebase": "#cf0d07",
  "Javascript": "#d7e072",
  "Typescript": "#c2e8af",
  "CSS": "#3a5cd1",
  "Expo": "green",
  "AWS": "#ff9900",        
  "Docker": "#0db7ed",    
  "Pulumi": "#f168ff",     
  "Microservices": "#ffcc00",
  "Kubernetes": "#326ce5",      
  "Jenkins": "#d24939",        
  "Python": "#306998",         
  "Tensorflow": "#ff6f61",  
  "Keras": "#d00000",     
  "GoogleColab": "#f9ab00",    
  "RabbitMQ": "#ff5e00",        
  "Redis": "#b5041a",          
  "Microservice": "#ffcc00", 
  "Nunjucks": "#8e44ad",           
  "Code generation": "#3498db",     
  "Drools": "#2ecc71",              
  "ElasticSearch": "#3498db",       
  "Kibana": "#ffca28",              
  "Logstash": "#e74c3c",            
};


export default function ProjectCard({ item }) {
    const [blur, setBlur] = useState(false);
    return (
        <div 
          style={{ position: "relative" }} 
          onMouseOver={() => setBlur(true)}
          onMouseLeave={() => setBlur(false)}
          onClick={() => setBlur(!blur)}
        >
        <div 
          className={`${styles.ProjectCard} ${blur && styles.blur}`}
        >
          {
            item.image &&
            <img 
              className={`${styles.Image} ${item.background && styles.withBg}`}
              src={item.image}
              alt="project-logo"
            />
          }
          <div className={styles.ContentContainer}>
            <div className={styles.ContentHeader}>
              <div className={styles.ContentTitle}>{item.title}</div>
              <div className={styles.TechnologyCardContainer}>
                {
                  item.techStack?.map((tech, i) => (
                    <div 
                      key={i}
                      className={styles.TechnologyCard}
                      style={{ backgroundColor: TechnologyColors[tech] }}
                    >
                      {tech}
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={styles.Content}>{item.description}</div>
          </div>
        </div>
        {
          blur && (
            <>
              {
                item.view && (
                  <a href={item.view}>
                    <img
                      src="eye.svg"
                      style={{
                        position: "absolute",
                        bottom: "calc(50% - 20px)",
                        left: item?.github ? "calc(33% - 20px)" : "calc(50% - 20px)",
                        height: "40px",
                        width: "40px",
                      }}
                    />
                  </a>
                )
              }
              {
                item.github && (
                  <a href={item.github}>
                    <img
                      src="github-white.svg"
                      style={{
                        position: "absolute",
                        bottom: "calc(50% - 20px)",
                        left: item?.view ? "calc(66% - 20px)" : "calc(50% - 20px)",
                        height: "40px",
                        width: "40px",
                      }}
                    />
                  </a>
                )
              }
            </>
          )
        }
        </div>
    )
}
