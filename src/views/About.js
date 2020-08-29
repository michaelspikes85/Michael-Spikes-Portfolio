import React from 'react';

const About = () => {
  return (
    <div className="About">
      <h1>About Me</h1>
      <main className="d-flex align-items-center">
        <div className="col-6 mt-3 mr-5">
          <img
            className="img-fluid"
            src="/images/me-at-wedding.jpg"
            alt="Michael Spikes, professional web developer"
          />
        </div>
        <div className="AboutBody">
          <p>
            My name is Michael Spikes, I am 34 years old. I live in Guyton,
            Georgia with my wife Samantha, 14 year old Kage, and 5 year old
            Legend. I currently work at Rockstar Energy as a Sales
            Representative.
          </p>
          <p>
            I started my adult career by joining the Air National Guard as a
            Network Infrastructure Engineer in 2008. I continued in the
            Information Technology field until 2016 when I found another passion
            for craft beer, I then pursued a career as a craft beer specialist.
            After being in alcohol sales for a while I came to the realization
            that I am tired of constantly being on the road and decided to move
            to a more stationary career. I enrolled in Georgia Tech's Full Stack
            Development Bootcamp and learned the following skills.
          </p>
          <hr className="bg-warning"></hr>

          <h4>Skills</h4>
          <p className="pl-3">
            Node.Js., Express, JavaScript, jQuery, React.js, JSX, GIT, GitHub,
            MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap, APIs,
            Heroku, Terminal, AJAX, Restful API, ES6, React Hooks, JSON,
            Sequelize, Security+
          </p>
          <h4>Certifications</h4>
          <ul className="list-unstyled">
            <li className="pl-3">Full Stack Developer - Georgia Tech</li>
            <li className="pl-3">Security Plus - CompTIA</li>
            <li className="pl-3">Security Clearance - Top Secret (Military)</li>
          </ul>
          <a className="text-warning" href="../../images/Michael_Spikes_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <h4><u>Resume</u></h4>
          </a>
        </div>
      </main>
    </div>
  );
};

export default About;
