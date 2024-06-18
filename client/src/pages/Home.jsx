// src/Home.jsx
import React from "react";
import "./Home.css"; // Import the CSS file for styling
import { styles } from "../styles";

// Importing images
import logo1 from "../assets/wiee_logo.png";
import logo2 from "../assets/spit_logo.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background">
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5"></div>

          <div>
            <h1 className={`${styles.heroHeadText} text-gray-700`}>
              IEEE <span className="text-[#8E44AD]">WIE SPIT</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 font-mono`}>
              Student Branch WIE Affinity Group of{" "}
              <br className="sm:block hidden" />
              Sardar Patel Institute of Technology
              <br className="sm:block hidden" /> located in Region 10
            </p>
          </div>
        </div>

        <div className="logo-container">
          <img src={logo1} alt="Logo 1" className="logo1" />
          <img src={logo2} alt="Logo 2" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
