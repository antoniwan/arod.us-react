import React from 'react';
import { Helmet } from "react-helmet";

import './About.css';

function About() {
  return (
    <div className="about wrapper">

      <Helmet>
        <title>About Antonio Rodriguez</title>
      </Helmet>

      <h1>About Me</h1>
      <p>Building software brings me immense satisfaction.  I own experience leading teams, mentoring interns, as a software engineer, as a project manager, as an external consultant, as a digital marketing technologist and hacking my way through any technical challenge that showed its beautiful face. Check out my <a href="https://www.linkedin.com/in/antoniwan" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>. Two out of two of the companies that I've built, or helped built, have been acquired. Boom!</p>
      <p>I'm <a href="https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/12289489_10153699583289820_7136316665375631056_n.jpg?oh=c6c5f9e54e98a7c082eb5caac13bd2e9&oe=59E63C9E" target="_blank" rel="noopener noreferrer">happily married</a> and currently living in Miami, Florida. English is my second language and I may or may not be a horrible writer.</p>

      <h3>Technology</h3>
      <p>I'm eternally grateful to my college professors, and parents, for instilling what has become an addiction for learning. In our field of work, it has to be this way because continuous education must be a serious commitment. My academic background, mainly in computer science, permits me to jump around languages, frameworks, and design patterns with, what I think, is relative ease. And in the end of the day, I don't want to marry myself with any specific technology; <span title="Sometimes we learn the most by making the wrong decisions 😭">one must choose the correct tool for each situation</span>.</p>
      <p>For most projects, I will default to working with the LAMP or MEAN stacks, but my 'production' proficiency is not limited to these. I'm always encouraging my teams to try the next thing, make proof-of-concepts, and share the learning with the rest of the team. We feel this is metaphorically similar to how Batman maintains his belt tools <span role="img" aria-label="Flex muscles">💪🏼</span>.</p>
      <p>I absolutely LOVE git, zsh, scaffolding tools like Yeoman, Sass, JavaScript, the BEM methodology, linters, how accessible AI is nowadays, the "Ballmer Peak" and concise documentation. This year I'm focusing my learning efforts on conversational interfaces, ES6, Angular, React, React Native, WebPack, TypeScript, NodeJS and artificial intelligence PaaS.</p>
      <p>A regret I have, one which I hope to remedy soon, is my lack of work on open source projects. I feel shitty about not contributing back!</p>

      <h3>#AdLife</h3>
      <p>Working out of a marketing agency lets me build and deploy things insanely fast and I love this! My teams ship out hundred of projects each year, each with variable scopes of work and duration. Our top deliverables are websites, promotional apps, chatbots and 'custom' tools.</p>
      <p>My favorite project at the moment is our MINE data platform. It's a badass analytics, insights and reporting tool that consolidates data from hundreds of media campaigns (Talend -> BigQuery -> custom management tools -> Tableau) from over 36 data sources of media, social, traffic, placement, and revenue. I consider this the heart of our <a href="https://m8agency.com" target="_blank" rel="noopener noreferrer">agency</a>.</p>

      <h3>Something extra</h3>
      <ul>
        <li>We have a 12-year old boy, who is a TOTAL BADASS!</li>
        <li>I can effortlessly eat two large pizzas by myself.</li>
        <li>Before college I was an avid athlete, practicing Shotokan and gymnastics competitively! Nowadays I partake in pick-up basketball and DOTA2. </li>
        <li>I achieved some certifications while attending high-school (CCNA, MSCE, Net+ and A+) and worked as a network specialist at the University of Puerto Rico for several months.</li>
        <li>When I moved to Miami I founded the "<a href="https://www.facebook.com/groups/1395203817368867/" target="_blank" rel="noopener noreferrer">Below-Amateur Athletes Club</a>" because we couldn't find  people to play basketball with. I love <span role="img" aria-label="Basketball">🏀</span>!</li>
        <li>My little sister is an <a href="https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/11393191_10153328947409820_1059553607370195283_n.jpg?oh=6ab1d39eb0a43741167e83983c4bfe94&oe=59E725A5" target="_blank" rel="noopener noreferrer">inspiration for me</a>.</li>
        <li>While working as a network specialist at the University of Puerto Rico's main precinct, a friend and I challenged the Dean of Technology to let us rebuild the aging website... he accepted and I quickly became the Lead Web Developer for the whole precinct! I built a suite of web-based student services: enrollment, tuition payments, online grades, schedules, academic progress evaluations, and other services. These web services are still in use to this date, hopefully with updated source code <span role="img" aria-label="Sweating happily">😅</span>!</li>
        <li>During "the big 2010 student strike" at the University of Puerto Rico I built the first secure electronic referendum system employed by any governmental or educational institution in Puerto Rico. It was called the "Sistema de Consulta al Estudiante". It was a glorious disaster.</li>
        <li>Started my first business with a great friend, Jorge Suarez (he's now the head of product for a fancy new startup called Hyp3r) and the experience was just mind-blowing. It was a creative web development studio called "Kolapse Interactive". Business was good. Eventually, a digital marketing agency from Miami acquired Kolapse.</li>
        <li>I love <a href="https://scontent.xx.fbcdn.net/v/t1.0-9/1609626_10152222065329820_2114747425_n.jpg?oh=2d7c930b55cace33e8c91051b7255d2e&oe=596450B6" target="_blank" rel="noopener noreferrer">hackathons</a>!</li>
        <li>My wife and I met on Twitter.</li>
      </ul>
    </div>
  )
}

export default About;
