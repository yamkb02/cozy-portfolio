// src/components/About.js
import React from 'react';
import '../styles/About.css'; // Import the custom CSS

function About() {
  const funFacts = [
    { emoji: "🐱", fact: "I absolutely adore cats and could spend hours watching funny cat videos." },
    { emoji: "💚", fact: "Green is my favorite color – it reminds me of the beauty of nature." },
    { emoji: "🌿", fact: "I love exploring nature and find peace in the outdoors." },
    { emoji: "🎮", fact: "I enjoy playing Overwatch and always look forward to exciting matches." },
    { emoji: "📱", fact: "Social media is my go-to for connecting with people and following my favorite influencers." },
    { emoji: "🎵", fact: "I love music – rap, pop, and musicals are my favorites." },
    { emoji: "☮️", fact: "I'm a natural peacekeeper and value harmony in all aspects of life." },
    { emoji: "🏡", fact: "I'm a homebody and love cozy days at home, especially in cold weather." },
    { emoji: "🔬", fact: "Science excites me – I’m always curious about how the world works." },
    { emoji: "💻", fact: "Technology is a passion of mine, and I enjoy keeping up with the latest trends." },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="title">About Me</h2>
        <p className="intro">
          Here's a little glimpse into my life outside work. From hobbies to random quirks, these are
          the things that make me, well, me!
        </p>
        <div className="fun-facts">
          {funFacts.map((item, index) => (
            <div key={index} className="fact-item">
              <span className="emoji">{item.emoji}</span>
              <p>{item.fact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
