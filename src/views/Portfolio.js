import React, { Component } from 'react';

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-1 col-md-8 about-background" id="top-border">
          <h1>Portfolio</h1>
          <hr width="95%" />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-1 col-md-6" id="tl-border">
          <a
            href="https://michaelspikes85.github.io/Checkpoint/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/Checkpoint-screenshot.jpg"
              alt="Word Guess"
              className="img-thumbnail"
            />
          </a>
          <div className="caption">
            <p>Checkpoint</p>
          </div>
        </div>
        <div className="col-xs-1 col-md-6">
          <a
            href="https://github.com/michaelspikes85/Checkpoint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/Checkpoint-screenshot.jpg"
              alt="Checkpoint Repository"
              className="img-thumbnail"
            />
          </a>
          <div className="caption">
            <p>Checkpoint Repository</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-1 col-md-6">
          <a
            href="https://michaelspikes85.github.io/Code-Trivia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/Code-Trivia-screenshot.jpg"
              alt="Code Trivia"
              className="img-thumbnail"
            />
          </a>
          <div className="caption">
            <p>Code Trivia</p>
          </div>
        </div>
        <div className="col-xs-1 col-md-6">
          <a
            href="https://github.com/michaelspikes85/Code-Trivia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/Code-Trivia-screenshot.jpg"
              alt="Code Trivia Repository"
              className="img-thumbnail"
            />
          </a>
          <div className="caption">
            <p>Code Trivia Repository</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-1 col-md-6" id="bl-border">
          <a
            href="https://michaelspikes85.github.io/Weather-App/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/Weather-App-screenshot.jpg"
              alt="Weather App"
              className="img-thumbnail"
            />
          </a>
          <div className="caption">
            <p>Weather App</p>
          </div>
        </div>
        <div className="col-xs-1 col-md-6" id="br-border">
          <a
            href="https://github.com/michaelspikes85/Weather-App/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/Weather-App-screenshot.jpg"
              alt="Weather App Repository"
              className="img-thumbnail"
            />
          </a>
          <div className="caption">
            <p>Weather App Repository</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
