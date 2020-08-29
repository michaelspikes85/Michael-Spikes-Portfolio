import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const githubLink = 'https://github.com/michaelspikes85';
  const linkedInLink = 'https://www.linkedin.com/in/michael-spikes-8a012739/';

  const routeTo = (link) => window.open(link, '_blank');

  return (
    <nav className="Footer w-100 nav bg-warning">
      <div className="container d-flex align-items-center justify-content-between">
        <span>Email: michael.spikes85@gmail.com</span>
        <span className="FooterIcons">
          <a className="mr-2" onClick={() => routeTo(linkedInLink)}>
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a onClick={() => routeTo(githubLink)}>
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </span>
        <span>Phone: (912) 661-0148</span>
      </div>
    </nav>
  );
};

export default Footer;
