import React, { useEffect, useState } from "react";

function Home() {

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
      window.scrollTo(0, 0);
      window.history.scrollRestoration = 'manual';
  }, []);

  const handlePageLoad = () => {
    setIsPageLoaded(true);
  }

  return (
      <body className="body-homepage">
        <div className={`fade-up ${isPageLoaded ? 'loaded' : ''}`}
          onLoad={handlePageLoad}>
          <div className="div-profile-container">
            <div className="div-profile-pic">
              <img src="harish-image-1.jpg"
                alt="sample_image"
              >
              </img>
            </div>

            <div className="about-profile">
              <h1>Hello</h1>
              <h2>A Bit About Me</h2>
              <p className="about-profile-description">
                During the past two years, I have worked as a software engineer,
                solving numerous business problems by providing simple, robust solutions and collaborated with the business stake holders for product improvements.
              </p>
            </div>
          </div>
        </div>
      </body>
  );
}

export default Home;
