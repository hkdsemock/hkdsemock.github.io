// This file exports an array of question objects for the Physics subject.
const physicsQuestions = [
  {
    question: "Question 1",
    description: `
      <p>Two solid substances A and B of equal mass are heated by two identical heaters at the same power. The temperature-time graph is given below.</p>
      
      <img src="./images/PHYQ1.png" alt="Temperature-time graph for substances A and B">
      
      <p>Which of the following statements is INCORRECT?</p>`,
    options: {
      A: "The melting point of solid A is 120°C.",
      B: "The specific latent heat of fusion of solid B is greater than that of solid A.",
      C: "The specific heat capacity of solid A is less than that of solid B.",
      D: "The melting point of solid B is higher than that of solid A."
    },
    correct: "C"
  },
  {
    question: "Question 2",
    description: `
      <p>A woman ties a tyre and runs to the right in a fitness training. What are the directions of the friction acting on the woman's shoes and the friction acting on the tyre?</p>
      
      <img src="./images/PHYQ2.jpg" alt="Woman pulling a tyre in fitness training">
      <th> X: on the shoes \xa0  Y: on the tyre</th>`,
    options: {
      A: "X: right; Y: right",
      B: "X: right; Y: left",
      C: "X: left; Y: right",
      D: "X: left; Y: left"
    },
    correct: "B"
  },
  {
    question: "Question 3",
    description: `
      <p>A block is released from rest on a rough inclined plane. The above graph shows the variation of the velocity of the block with time. Among the following angles, which is the smallest possible angle of inclination of the plane?</p>
      
      <img src="./images/PHYQ3.png" alt="Velocity-time graph for block on inclined plane">`,
    options: {
      A: "15°",
      B: "20°",
      C: "25°",
      D: "30°"
    },
    correct: "B"
  },
  {
    question: "Question 4",
    description: `The acceleration of objects due to gravity on the Earth is 6 times that on the Moon. An artificial satellite revolves in a circular orbit above the Moon's surface at a height equal to 3 times the radius of the Moon. Find the acceleration of the satellite in terms of the acceleration due to gravity g on the Earth's surface.`,
    options: {
      A: "$ \\frac{g}{18} $",
      B: "$ \\frac{g}{24} $",
      C: "$ \\frac{g}{54} $",
      D: "$ \\frac{g}{96} $"
    },
    correct: "C"
  },
  {
    question: "Question 5",
    description: `
      <p>Figure (a) shows the equilibrium position of particles E to N in a medium. At time t = 0, a longitudinal wave starts travelling from left to right. At time t = 1 s, the positions of the particles are shown in Figure (b).</p>
      
      <img src="./images/PHYQ5.png" alt="Longitudinal wave particles diagram showing positions at t=0 and t=1s">
      
      <p>Which of the following statements MUST be correct?</p>`,
    options: {
      A: "The distance between particles F and N is equal to the wavelength of the wave.",
      B: "The period of the wave is 1 s.",
      C: "Particle E is moving to the right at t = 1 s.",
      D: "Particle I is momentarily at rest at t = 1 s."
    },
    correct: "A"
  },
  {
    question: "Question 6",
    description: `
      <p>The diagram shows the interference pattern caused by two sources, S1 and S2, vibrating at the same frequency. Each wavefront represents a crest at an instant. The dotted line is equidistant from the sources.</p>
      
      <img src="./images/PHYQ6.png" alt="Wave interference pattern diagram showing two sources S1 and S2">
      
      <p>Which of the following statements is/are true?</p>
      
      <div class="statement-list">
        (1) There are four antinodal lines in the pattern.<br>
        (2) The dotted line represents an antinodal line.<br>
        (3) S1 and S2 are separated by 2.5 wavelengths.
      </div>`,
    options: {
      A: "(1) only",
      B: "(3) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    correct: "A"
  },
  {
    question: "Question 7",
    description: "A, B and C are three light balls suspended by insulating threads. In which of the following situations are there the most number of uncharged balls?",
    options: { 
      A: "A and B repel, while A and C attract each other", 
      B: "A and B do not attract or repel, while A and C attract each other.", 
      C: "When any two of them are brought close to each other, they repel.", 
      D: "When any two of them are brought close to each other, they attract each other." },
    correct: "B"
  },
  {
    question: "Question 8",
    description: `
      <p>The following figure shows a simple d.c. motor.</p>
      
      <img src="./images/PHYQ8.jpg" alt="Simple DC motor diagram">
      
      <p>Which of the following statements about the motor are correct?</p>
      
      <div class="statement-list">
        (1) The rotating speed can be increased by increasing the area of the coil.<br>
        (2) The direction of the current flowing through the coil remains unchanged.<br>
        (3) If a curved pole magnet is used, the rotating speed of the coil can be increased.
      </div>`,
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    correct: "B"
  },
  {
    question: "Question 9",
    description: `
      <p>Two neutrons and two protons can fuse to form a helium nucleus by the following reaction:</p>
      
      <div class="math-container">
        $$ 2^1_0n + 2^1_1p \\rightarrow {}^4_2He $$
      </div>
      
      <p>Which of the following statements about the reaction is/are correct?</p>
      
      <div class="statement-list">
        (1) Energy is released in this reaction.<br>
        (2) The mass of helium nucleus formed is greater than the sum of masses of the neutrons and protons<br>
        (3) This reaction can be carried out at room temperature.
      </div>`,
    options: {
      A: "(1) only",
      B: "(1) and (2) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    correct: "A"
  }
];

export default physicsQuestions; 