const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
  ];
  
  const prompt = document.getElementById("prompt");
  const input = document.getElementById("input");
  const subButton = document.getElementById("subButton");
  const hintButton = document.getElementById("hintButton");
  const output = document.getElementById("output");
  
  let currIndex = 0;
  let guesses = 3;
  
  displayCurrentPrompt();
  
  function displayCurrentPrompt() {
    prompt.innerHTML = movies[currIndex].explanation;
  }
  
  function verifyGuess() {
    let Mov = movies[currIndex].title;
    return Mov;
  }
  
  function getGuess(event) {
    event.preventDefault();
    guesses--;
    let guess = input.value;
    let currMovie = verifyGuess();
  
    if (guess.toLowerCase() === currMovie.toLowerCase()) {
      output.innerHTML = "You got it!";
      input.value = "";
  
      currIndex++;
  
      if (currIndex >= movies.length) {
        output.innerHTML += "<br><br>Game Over";
        subButton.disabled = true;
        hintButton.disabled = true;
        return;
      }
  
      displayCurrentPrompt();
      guesses = 3;
      return;
    }
  
    output.innerHTML = "Sorry, that was not the correct answer. You have " + guesses + " more guesses.";
  
    if (guesses === 0) {
      output.innerHTML += "<br>Game Over. The correct answer was: " + currMovie;
      input.value = "";
  
      currIndex++;
  
      if (currIndex >= movies.length) {
        output.innerHTML += "<br><br>Game Over";
        subButton.disabled = true;
        hintButton.disabled = true;
        return;
      }
  
      displayCurrentPrompt();
      guesses = 3;
      return;
    }
  }
  
  function getHint(event) {
    event.preventDefault();
    output.innerHTML = movies[currIndex].hint;
  }
  
  subButton.addEventListener("click", getGuess);
  hintButton.addEventListener("click", getHint);
  