
let computerNumber = Math.floor(Math.random() * 100 + 1);
console.log(computerNumber);

let history = [];
let chanceCnt = document.getElementsByClassName("result-cnt");
let goButton = document.getElementById("GoButton");



const guess = (event) => {
  event.preventDefault();
  const userNumber = document.getElementById("guessNumber").value;
  
  //이미 입력한 번호가 있는지 확인
  if(history.includes(userNumber)) {
    alert("이미입력한 번호입니다.");
    return;
  }

  //정답, UP, DOWN, 
  let resultHTML = ``;
  if (computerNumber == userNumber) {
    resultHTML = `<img src="https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif"/ width=300 height=168>
    <h1 class="result-text">정답!</h1>`;
    return;
  } else if (computerNumber < userNumber) {
    resultHTML = `<img src="https://giphy.com/gifs/247grad-arrow-pointing-pointingdown-WFf3qdyxZ6NUExf5Mr"/ width=300 height=168>
      <h1 class="result-text">Down!</h1>
      <h1 class="result-cnt">기회는 총${4 - history.length}번</h1>`;
  } else if (computerNumber > userNumber) {
    resultHTML = `<img src="https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif"/ width=300 height=168>
      <h1 class="result-text">Up!</h1>
      <h1 class="result-cnt">기회는 총${4 - history.length}번</h1>`;
  }

  //기회를 5번을 다 이용했을때
  if(history.length > 3) {
    resultHTML = `<img src="https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif"/ width=300>
      <h1 class="result-text">땡땡땡땡땡땡!!!!!!!!!</h1>`;
      goButton.disabled = true;
  }
  history.push(userNumber);  
  console.log(history)
  console.log(history.length)

  document.getElementById("resultArea").innerHTML = resultHTML;
  document.getElementById("guessNumber").value = ``;
};


//리셋버튼
const reset = () => {
  computerNumber = Math.floor(Math.random() * 100 + 1);
  console.log(computerNumber);
  history = [];
  goButton.disabled = false;
  document.getElementById(
    "resultArea"
  ).innerHTML = `<img src="https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif"/ width=300>
    <h1 class="result-text">죽기싫다면 맞춰라!</h1>`;
};