function generateQuiz() {
    // Get the user's input text
    const userInput = document.getElementById("text-input").value;
  
    // Split the text into sentences
    const sentences = userInput.split(". ");
  
    // Generate a list of questions
    const questions = [];
    for (const sentence of sentences) {
      const words = sentence.split(" ");
      if (words.length > 4) {
        // Choose a random word to ask a question about
        const index = Math.floor(Math.random() * words.length);
        const questionWord = words[index];
  
        // Generate four answer choices
        const answerChoices = [questionWord];
        while (answerChoices.length < 4) {
          const newChoice = words[Math.floor(Math.random() * words.length)];
          if (!answerChoices.includes(newChoice)) {
            answerChoices.push(newChoice);
          }
        }
        answerChoices.sort(() => Math.random() - 0.5);
  
        // Create the question string
        let question = `What word in the sentence '${sentence}' means: `;
        answerChoices.forEach((choice, index) => {
          question += `\n${index + 1}. ${choice}`;
        });
  
        // Add the question to the list
        questions.push(question);
      }
    }
  
    // Display the questions
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
      const questionElement = document.createElement("div");
      questionElement.innerHTML = `
        <p>Question ${i + 1}:</p>
        <p>${questions[i]}</p>
        <hr>
      `;
      quizContainer.appendChild(questionElement);
    }
  }