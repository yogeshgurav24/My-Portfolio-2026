// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import "./Projects.css";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isHolding, setIsHolding] = useState(false);


useEffect(() => {

  if (!selectedProject || isHolding) {
    return;
  }

  const interval = setInterval(() => {

    setCurrentImage((previous) => {

      if (
        previous ===
        selectedProject.screenshots.length - 1
      ) {
        return 0;
      }

      return previous + 1;
    });

  }, 5000);

  return () => clearInterval(interval);

}, [selectedProject, isHolding]);

  
  const projects = [
    {
      title: "AI Smart Note",
      technologies:
        "Kotlin, XML, Gemini API, SQLite, Firebase Authentication, Firebase Firestore",
      description:
        "AI Smart Note is a modern Android note-taking application designed to help users create, manage and organize notes. It includes AI-powered features for generating titles, summarizing content, rewriting text and improving notes.",
      screenshots: [
        "/assets/projects/ai-smart-note/AppLogo.png",
        "/assets/projects/ai-smart-note/splash.png",
        "/assets/projects/ai-smart-note/image1.png",
        "/assets/projects/ai-smart-note/image2.png",
        "/assets/projects/ai-smart-note/image3.png",
        "/assets/projects/ai-smart-note/image4.png",
        "/assets/projects/ai-smart-note/image5.png",
        "/assets/projects/ai-smart-note/image6.png",
        "/assets/projects/ai-smart-note/image7.png",
        "/assets/projects/ai-smart-note/image8.png",
        "/assets/projects/ai-smart-note/image9.png",
        "/assets/projects/ai-smart-note/image10.png",
        "/assets/projects/ai-smart-note/image11.png"
      ]
    },

    {
      title: "Garland Shop",
      technologies:
        "Kotlin, XML, Firebase Realtime Database",
      description:
        "Garland Shop is an Android application designed to manage customers, garland orders, daily entries and billing information. Firebase Realtime Database is used for storing and managing application data.",
      screenshots: [
        "/assets/projects/garland-shop/app_logo.png",
        // "/assets/projects/garland-shop/splash.png",
        "/assets/projects/garland-shop/NewSplash.png",
        "/assets/projects/garland-shop/image1.png",
        "/assets/projects/garland-shop/image2.png",
        "/assets/projects/garland-shop/image3.png",
        "/assets/projects/garland-shop/image4.png",
        "/assets/projects/garland-shop/image5.png",
        "/assets/projects/garland-shop/image6.png",
        "/assets/projects/garland-shop/image7.png",
        "/assets/projects/garland-shop/image8.png",
        "/assets/projects/garland-shop/image9.png",
        "/assets/projects/garland-shop/image10.png",
        "/assets/projects/garland-shop/image11.png",
        "/assets/projects/garland-shop/image12.png",
        "/assets/projects/garland-shop/image13.png",
        "/assets/projects/garland-shop/image14.png",
        "/assets/projects/garland-shop/image15.png",
        "/assets/projects/garland-shop/image16.png",

      ]
    },

    {
      title: "Elite Salon",
      technologies:
        "MERN Stack",
      description:
        "Elite Salon is a web-based salon management project designed to provide a modern interface for salon services and customer management.",
      screenshots: [
        "/assets/projects/elite-salon/img1.png",
        "/assets/projects/elite-salon/img2.png",
        "/assets/projects/elite-salon/img3.png",
        "/assets/projects/elite-salon/img4.png",
        "/assets/projects/elite-salon/img5.png",
        "/assets/projects/elite-salon/img6.png",
        "/assets/projects/elite-salon/img7.png",
        "/assets/projects/elite-salon/img8.png",
        "/assets/projects/elite-salon/img9.png",
        "/assets/projects/elite-salon/img10.png",
        "/assets/projects/elite-salon/img11.png",

      ]
    },

    {
      title: "Event Management System",
      technologies:
        "HTML, CSS, JavaScript, PHP, MySQL",
      description:
        "Event Management System is a web application designed to manage events and related information. PHP and MySQL are used for backend processing and database management.",
      screenshots: [
        "/assets/projects/event-management/1.png",
        "/assets/projects/event-management/2.png"
      ]
    },

    {
      title: "My Portfolio",
      technologies:
        "React.js, CSS3, Responsive Design, Animations",
      description:
        "This portfolio website showcases my education, technical skills, projects and contact information. It is developed using React and custom CSS animations.",
      screenshots: [
        "/assets/projects/portfolio/img1.png",
        "/assets/projects/portfolio/img2.png",
        "/assets/projects/portfolio/img3.png",
        "/assets/projects/portfolio/img4.png",
        "/assets/projects/portfolio/img5.png",
        "/assets/projects/portfolio/img6.png",
        "/assets/projects/portfolio/img7.png",
      ]
    },

    {
      title: "Search Car",
      technologies:
        "Kotlin, XML, Firebase Realtime Database",
      description:
        "Search Car is an Android application designed to help users explore and search for available cars. Firebase Realtime Database is used to manage the application data.",
      screenshots: [
        "/assets/projects/search-car/1.png",
        "/assets/projects/search-car/2.png"
      ]
    }
  ];

  // Open project details
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  // Close project details
  const closeProject = () => {
    setSelectedProject(null);
  };

  // Next screenshot
  const nextImage = () => {
    setCurrentImage((previous) =>
      previous === selectedProject.screenshots.length - 1
        ? 0
        : previous + 1
    );
  };

  // Previous screenshot
  const previousImage = () => {
    setCurrentImage((previous) =>
      previous === 0
        ? selectedProject.screenshots.length - 1
        : previous - 1
    );
  };

  return (
    <div className="back">

      <section className="section" id="projects">

        <h2 className="section-title">Projects</h2>

        <div className="section-line"></div>

        {/* PROJECT CARDS */}

        <div className="project-container">

          {projects.map((project, index) => (

            <div
              className="project-card glow-hover"
              key={index}
            >

              <h3>{project.title}</h3>

              <p>
                {project.technologies}
              </p>

              <button
                className="details-btn"
                onClick={() => openProject(project)}
              >
                View Details
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* ==============================
          PROJECT DETAILS MODAL
      ============================== */}

      {selectedProject && (

        <div
          className="project-modal"
          onClick={closeProject}
        >

          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="modal-close"
              onClick={closeProject}
            >
              ×
            </button>


            {/* PROJECT TITLE */}

            <h2>{selectedProject.title}</h2>


            {/* TECHNOLOGIES */}

            <div className="modal-tech">

              <strong>Technologies:</strong>

              <p>
                {selectedProject.technologies}
              </p>

            </div>


            {/* DESCRIPTION */}

            <div className="modal-description">

              <h3>About Project</h3>

              <p>
                {selectedProject.description}
              </p>

            </div>


            {/* SCREENSHOT SLIDER */}

            <div className="slider-container">

              <h3>Project Screenshots</h3>

              <div className="slider">

                <button
                  className="slider-btn previous"
                  onClick={previousImage}
                >
                  ❮
                </button>


                <img
                    src={selectedProject.screenshots[currentImage]}
                    alt={`${selectedProject.title} screenshot`}
                    className={`project-screenshot ${
                      isHolding ? "image-holding" : ""
                    }`}

                    onMouseDown={() => setIsHolding(true)}

                    onMouseUp={() => setIsHolding(false)}

                    onMouseLeave={() => setIsHolding(false)}

                    onTouchStart={() => setIsHolding(true)}

                    onTouchEnd={() => setIsHolding(false)}

                    onTouchCancel={() => setIsHolding(false)}

                    onContextMenu={(e) => e.preventDefault()}
                />


                <button
                  className="slider-btn next"
                  onClick={nextImage}
                >
                  ❯
                </button>

              </div>


              {/* DOTS */}

              <div className="slider-dots">

                {selectedProject.screenshots.map(
                  (_, index) => (

                    <span
                      key={index}
                      className={
                        currentImage === index
                          ? "dot active"
                          : "dot"
                      }
                      onClick={() =>
                        setCurrentImage(index)
                      }
                    ></span>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Projects;