import React, {useState} from "react";
import Slider from "react-slick";
import {Modal, Box, Typography, Button}from "@mui/material"
import { useNavigate } from "react-router-dom";

//images
import mock10 from '../assets/images/FilmateCaseStudy/mock10.png';
import gmtk2026 from '../assets/images/GameJamsPrototypes/gmtk2026.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Project.scss";

//Project data definition
const projectsData = [
    {
        id: 1,
        title: "Filmate AI",
        longDescription: "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
        image: mock10,
        link: "https://www.filmate.club/",
        slug: "filmate-ai", // This will be used later for your full page URL route!
        tags: ["AI Implementation", "NLP", "UI/UX Design"]
    },
    {
        id: 2,
        title: "GameJams and Prototypes",
        longDescription: "Game development projects and prototypes created during various game jams.",
        image: gmtk2026,
        link: "https://www.filmate.club/",
        slug: "gamejams-prototypes", // This will be used later for your full page URL route!
        tags: ["GameJam", "Prototypes", "Game Development", "Unity", "Unreal", "C#", "Blueprints"]
    }
]

//Inline styling for MUI modal container
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '600px',
  boxShadow: 24,
  p: 4,
  borderRadius: '12px',
  outline: 'none',
};

function Project() {
    const navigate = useNavigate();
    
    //track the state
    const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

    //configure carousel
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px", 
        slidesToShow: 1,       
        speed: 500,
        dots: true,
        slidesToScroll: 1,
        arrows: true
    }

    return(
    <div className="projects-container" id="projects">
      
      <h1>Projects I have worked on</h1>
      
      <div className="projects-carousel-wrapper">
        <Slider {...settings}>
          {projectsData.map((project) => (
            <div key={project.id} className="project-slide">
                
                {/* trigger state change for displayed project */}
                <div className="project-content-card" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>

                <div className="project-image-box">
                    <img src={project.image} className="zoom" alt={project.title} />
                </div>

                <div className="project-info-box">
                    <h2>{project.title}</h2>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>

                  <p>{project.longDescription}</p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

    {/* MODAL OVERVIEW COMPONENT */}
  <Modal
      open={Boolean(selectedProject)}
      onClose={() => setSelectedProject(null)}
      aria-labelledby="modal-title"
    >
      <Box sx={modalStyle} className="custom-theme-modal">
        {selectedProject && (
          <div>
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
            
            <Typography id="modal-title" variant="h4" component="h2" fontWeight="bold">
              {selectedProject.title}
            </Typography>

            <div className="project-tags" style={{ margin: '12px 0' }}>
              {selectedProject.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            {/* UPDATED: Changed hardcoded #555 to look at your theme variable */}
            <Typography sx={{ mt: 2, color: 'var(--modal-text-secondary)', lineHeight: '1.6' }}>
              {selectedProject.longDescription}
            </Typography>

            <Button 
              variant="contained" 
              color="primary"
              sx={{ mt: 4, width: '100%', textTransform: 'none', fontWeight: 'bold', borderRadius: '8px', padding: '10px' }}
              onClick={() => {
                if (selectedProject) {
                  setSelectedProject(null); 
                  navigate(`/project/${selectedProject.slug}`);
                }
              }}
            >
              Read Full Technical Case Study ↗
            </Button>
          </div>
        )}
      </Box>
    </Modal>

    </div>
    );
}

export default Project;