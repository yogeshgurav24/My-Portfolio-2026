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

  }, 3000);

  return () => clearInterval(interval);

}, [selectedProject, isHolding]);

  
  const projects = [
    {
      title: "AI Smart Note",
      technologies:
        "Kotlin, XML, Gemini API, SQLite, Firebase Authentication, Firebase Firestore",
      description:
        "Developed an Android note application using Kotlin with features to create, edit, delete, search, pin, and archive notes. Implemented SQLite for local note storage and Firebase Authentication for user login and registration.Integrated Gemini API using Retrofit to provide features such as title generation, note summarization, rewriting, grammar correction, and translation. Added speech-to-text functionality, allowing users to create notes by speaking instead of typing, making the application easier and more convenient for users who are not comfortable with typing. Added note colour customization to help users visually organize and identify their notes. Implemented user-specific note management so each registered user can access and manage their own notes.Designed the application with simple and easy-to-use features to make note-taking accessible to users with different levels of technical knowledge.",
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
        "Implemented customer management features including customer registration, profile management, contact actions, and account status tracking. Added daily delivery tracking with On Day / Off Day and Provided / Not Provided status management. Developed automated billing calculations based on monthly targets, daily delivery quantities, collected amounts, and pending balances. Implemented payment tracking with support for pending payments and carry-forward balances across multiple billing periods. Integrated automated email notifications to inform customers when their monthly bill is generated. Added customer communication features such as direct calling from the customer list. Designed Firebase Realtime Database structure for multi-shop and customer-specific data management.",
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
      title: "Elite Saloon",
      technologies:
        "MERN Stack",
      description:
        "Built a full-stack web application enabling online appointment booking, service management, and admin dashboard. Integrated a payment gateway (Test Mode) enabling secure online transactions for salon services. Developed RESTful APIs with proper HTTP methods, improving system maintainability. Implemented a multi-salon and multi-owner architecture, allowing customers to select specific salons, services, staff, and appointment slots. Designed and integrated MongoDB database models for customers, salon owners, staff, services, appointments, and payment information. Implemented dynamic appointment scheduling and slot availability with conflict checking to prevent double bookings. Developed separate customer, owner, and admin functionalities for efficient management of appointments and salon services. Integrated Razorpay APIs for order creation, payment verification, and retrieving transaction details.Implemented appointment status management including Pending, Confirmed, Cancelled, and Completed states.",
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
        "The Event Management System is a web-based application developed using PHP, MySQL, HTML, CSS, and JavaScript to simplify the process of creating, managing, and organizing events. The system allows administrators to add, update, delete, and view event details such as event name, date, time, location, description, and organizer information. MySQL is used as the backend database and can be managed through phpMyAdmin for storing and retrieving event-related data. The project uses PHP to handle server-side operations and database connectivity, while HTML and CSS provide a responsive and user-friendly interface. The system can be further enhanced with features such as user registration and login, event registration, attendee management, booking, payment processing, notifications, and an admin dashboard.",
      screenshots: [
        // "/assets/projects/event-management/1.png",
        // "/assets/projects/event-management/2.png",

         "/assets/projects/event-management/image1.png",
        "/assets/projects/event-management/image2.png",
        "/assets/projects/event-management/image3.png",
        "/assets/projects/event-management/image4.png",
        "/assets/projects/event-management/image5.png",
        "/assets/projects/event-management/image6.png",
        "/assets/projects/event-management/image7.png",
        "/assets/projects/event-management/image8.png",
        "/assets/projects/event-management/image9.png",
        "/assets/projects/event-management/image10.png",
        "/assets/projects/event-management/image11.png",
        "/assets/projects/event-management/image12.png",
        "/assets/projects/event-management/image13.png",
        "/assets/projects/event-management/image14.png",
        "/assets/projects/event-management/image15.png",
        "/assets/projects/event-management/image16.png",
        "/assets/projects/event-management/image17.png",
        "/assets/projects/event-management/image18.png",
        "/assets/projects/event-management/image19.png",
        "/assets/projects/event-management/image20.png",


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
        "Search Car is an Android application designed to help users explore and search for available cars. Firebase Realtime Database is used to manage the application data. This project is created for learning a Firebase realtime database. In this project I perform simple crud operations to understand Firebase realtime database.",
      screenshots: [
        "/assets/projects/search-car/img1.png",
        "/assets/projects/search-car/img2.png",
        "/assets/projects/search-car/img3.png",
        "/assets/projects/search-car/img4.png",
        "/assets/projects/search-car/img5.png",
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