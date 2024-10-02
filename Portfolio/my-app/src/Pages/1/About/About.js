import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Highly motivated Information Technology student with hands-on experience in front-end technologies
including JavaScript, React, and Redux. Seeking an SDE Intern position at Blitz to apply my technical skills in building scalable,
user-friendly web and mobile applications while collaborating with engineers, designers, and product managers to drive
innovative UI/UX solutions.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;