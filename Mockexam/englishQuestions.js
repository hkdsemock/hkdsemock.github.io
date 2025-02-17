// This file exports an array of question objects for the English subject.

// Store the passage text
const passage = `
<div class="english-passage">
  <p>"But there is one way in this country in which all men are created equal—there is one human institution that makes a pauper the equal of a Rockefeller, the stupid man the equal of an Einstein, and the ignorant man the equal of any college president. That institution, gentlemen, is a court.</p>
  
  <p>It can be the Supreme Court of the United States or the humblest J.P. court in the land, or this honorable court which you serve. Our courts have their faults, as does any human institution, but in this country, our courts are the great levelers, and in our courts, all men are created equal.</p>
  
  <p>I'm no idealist to believe firmly in the integrity of our courts and in the jury system—that is no ideal to me, it is a living, working reality. Gentlemen, a court is only as sound as its jury, and a jury is only as sound as the men who make it up. I am confident that you gentlemen will review without passion the evidence you have heard, come to a decision, and restore this defendant to his family. In the name of God, do your duty."</p>
</div>`;

// Create the questions array
const englishQuestions = [
  {
    question: "Question 1",
    description: '<p>What does Atticus mean when he says, "A court is only as sound as its jury"?</p>',
    options: {
      A: "The law is more important than the jury.",
      B: "The jury's integrity determines whether justice is served.",
      C: "Judges are more important than juries.",
      D: "Laws are absolute and cannot be interpreted differently."
    },
    correct: "B"
  },
  {
    question: "Question 2",
    description: '<p>Why does Atticus mention figures like Rockefeller and Einstein?</p>',
    options: {
      A: "To highlight the power of wealth in America.",
      B: "To show that intelligence and money do not define justice.",
      C: "To emphasize that juries should be made up of educated men.",
      D: "To suggest that only the wealthy can receive justice."
    },
    correct: "B"
  },
  {
    question: "Question 3",
    description: '<p>Why does Atticus have to raise the example of the supreme court and the humblest J.P. court in the land?</p>',
    options: {
      A: "Because he believes only these two court are great levelers",
      B: "Because he believes these two court are NOT great levelers",
      C: "To insinuate that all courts in the world are great levelers by raising an example of the most powerful and least powerful court.",
      D: "These two are the most powerful courts in the United States."
    },
    correct: "C"
  },
  {
    question: "Question 4",
    description: '<p>In the phrase "our courts are the great levelers", what does the word "levelers" mean?</p>',
    options: {
      A: "A person who controls which level an elevator stops at.",
      B: "A supreme high court judge",
      C: "A peacekeeper",
      D: "A person who advocates the abolition of social distinction."
    },
    correct: "D"
  },
  {
    question: "Question 5",
    description: '<p>What is the main theme of this passage?</p>',
    options: {
      A: "The importance of wealth in society.",
      B: "The failures of the American education system.",
      C: "The role of justice and morality in the legal system.",
      D: "The dangers of mob mentality in small towns."
    },
    correct: "C"
  },
  {
    question: "Question 6",
    description: '<p>How does Atticus\'s tone contribute to the effectiveness of his argument?</p>',
    options: {
      A: "His tone is calm, logical, and appeals to reason.",
      B: "His tone is angry and accusatory.",
      C: "His tone is sarcastic and mocking.",
      D: "His tone is indifferent and detached."
    },
    correct: "A"
  },
  {
    question: "Question 7",
    description: '<p>What does Atticus think is the only way for all men to be treated equally?</p>',
    options: {
      A: "By killing all mockingbirds in the country",
      B: "By removing poverty",
      C: "Through the court and rule of law",
      D: "He does not think it is possible"
    },
    correct: "C"
  },
  {
    question: "Question 8",
    description: '<p>In the phrase "I am confident that you gentlemen will review without passion the evidence you have heard", what does "without passion" mean in this context?</p>',
    options: {
      A: "Without bias",
      B: "Without interest.",
      C: "Without intelligence.",
      D: "Without love."
    },
    correct: "A"
  },
  {
    question: "Question 9",
    description: '<p>What does Atticus hope to be the outcome of the trial?</p>',
    options: {
      A: "For the defendant to be found guilty",
      B: "For the defendant to be declared innocent",
      C: "He is completely indifferent",
      D: "It cannot be derived from the passage"
    },
    correct: "B"
  }
];

export default englishQuestions;
export const instruction = `<p>Please read the following extract from To Kill a Mockingbird and answer the following questions.</p>`;
export { passage }; 