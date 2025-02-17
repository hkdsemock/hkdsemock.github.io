// This file exports an array of question objects for the Math subject.
const mathQuestions = [
  {
    question: "Question 1",
    description: `
      <p>If $a > b$, which of the following must be true?</p>
      
      <div class="statement-list">
        I. $-a < -b$<br>
        II. $a^2 > b^2$<br>
        III. $a + 1 > b + 1$
      </div>`,
    options: {
      A: "I and II only",
      B: "I and III only",
      C: "II and III only",
      D: "I, II and III"
    },
    correct: "B"
  },
  {
    question: "Question 2",
    description: `
      <p>The figure shows the graph of $y = x^2 + bx + c$, where $b$ and $c$ are constants.</p>
      
      <img src="./images/MATHQ2.png" alt="Graph of quadratic function showing parabola crossing y-axis at (0,5)">
      
      <p>The equation of the axis of symmetry of the graph is</p>`,
    options: {
      A: "$x = -3$",
      B: "$x = 3$",
      C: "$x = 5$",
      D: "$y = 5$"
    },
    correct: "B"
  },
  {
    question: "Question 3",
    description: `
      <p>In the figure, $L_1: ax + by = c$ and $L_2: px + qy = r$ have the same y-intercept.</p>
      
      <img src="./images/MATHQ3.png" alt="Graph showing two intersecting lines L1 and L2 with same y-intercept">
      
      <p>Which of the following must be true?</p>
      
      <div class="statement-list">
        I. $\\frac{c}{a} > 0$<br>
        II. $pr > 0$<br>
        III. $ar = pc$<br>
        IV. $br = qc$
      </div>`,
    options: {
      A: "II only",
      B: "I and IV only",
      C: "II and III only",
      D: "II and IV only"
    },
    correct: "D"
  },
  {
    question: "Question 4",
    description: `
      <p>The base radius of a right circular cone is 3 times the base radius of a right circular cylinder while the height of the circular cylinder is 2 times the height of the circular cone. If the volume of the circular cylinder is $24\\pi$ cm$^3$, then the volume of the circular cone is</p>`,
    options: {
      A: "$12\\pi$ cm$^3$",
      B: "$36\\pi$ cm$^3$",
      C: "$48\\pi$ cm$^3$",
      D: "$108\\pi$ cm$^3$"
    },
    correct: "B"
  },
  {
    question: "Question 5",
    description: `
      <p>If the graph of $y = \\log x$ is translated upwards by 1 unit, it becomes the graph of</p>`,
    options: {
      A: "$y = \\log(x + 1)$",
      B: "$y = \\log(x - 1)$",
      C: "$y = \\log(10x)$",
      D: "$y = \\log\\left(\\frac{x}{10}\\right)$"
    },
    correct: "C"
  },
  {
    question: "Question 6",
    description: `
      <p>Let $f(x)$ be a quadratic function.</p>
      
      <img src="./images/MATHQ6.png" alt="Graph showing a quadratic function and its transformation">
      
      <p>The figure shows the graph of $y = f(x)$ and the graph of</p>`,
    options: {
      A: "$y = f(-x)$",
      B: "$y = -f(x)$",
      C: "$y = f(x - 3)$",
      D: "$y = f(x + 3)$"
    },
    correct: "A"
  },
  {
    question: "Question 7",
    description: `
      <p>In the figure, $OPQR$ is a rhombus. $O$ is the centre of the circle $PRS$ and $QRS$ is a straight line. $PS$ and $OR$ intersect at $T$. If $\\angle PSQ = 35°$, then $\\angle OTP =$</p>
      
      <img src="./images/MATHQ7.png" alt="Geometric figure showing rhombus OPQR with circle PRS and angle measurements">`,
    options: {
      A: "$55°$",
      B: "$70°$",
      C: "$75°$",
      D: "$85°$"
    },
    correct: "C"
  },
  {
    question: "Question 8",
    description: `
      <p>In the figure, $AB$, $AD$ and $DE$ are the tangents to the circle at $B$, $C$ and $E$ respectively. $BE$ is a diameter of the circle. If $AB = 4$ cm and $DE = 9$ cm, then $BE =$</p>
      
      <img src="./images/MATHQ8.png" alt="Circle with tangents AB, AD, DE and diameter BE">`,
    options: {
      A: "6 cm",
      B: "10 cm",
      C: "12 cm",
      D: "13 cm"
    },
    correct: "C"
  },
  {
    question: "Question 9",
    description: `
      <p>In a test, there are 5 multiple-choice questions. Each question has 4 choices and only one of them is correct. If Andy guesses all answers randomly, find the probability that he answers at most 4 questions correctly.</p>`,
    options: {
      A: "$\\frac{1}{1024}$",
      B: "$\\frac{243}{1024}$",
      C: "$\\frac{781}{1024}$",
      D: "$\\frac{1023}{1024}$"
    },
    correct: "D"
  }
];

export default mathQuestions; 