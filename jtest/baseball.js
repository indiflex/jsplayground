const readline = require('readline');

const MAX_TRY_COUNT = 9;
const ANSWER_NUMS = [0, 0, 0];
let gStrikeCount;
let gBallCount;
let gTryCount;

function setAnswer() {
  do {
    let randNum = Math.floor(Math.random() * 100000) % 1000;

    ANSWER_NUMS[2] = randNum % 10;
    ANSWER_NUMS[0] = Math.floor(randNum / 100);
    ANSWER_NUMS[1] = Math.floor((randNum % 100) / 10);
  } while (!hasDuplicatedAndZeroNumber(setAnswer));
}

const isValidNum = inputStr => {
  let msg;
  if (Number.isNaN(inputStr)) {
    msg = 'Input Number only!';
  } else if (inputStr.length !== 3) {
    msg = 'Input the 3 length number!';
  } else if (hasDuplicatedAndZeroNumber(inputStr)) {
    msg = 'Do not Input Duplicated(Same) Number and Zero!';
  }

  if (msg) {
    console.log(msg);
    return false;
  }

  return true;
};

const hasDuplicatedAndZeroNumber = val =>
  hasZero(val) || val[0] === val[1] || val[1] === val[2] || val[0] === val[2];

const hasZero = val => val[0] == 0 || val[1] == 0 || val[2] == 0;

const term = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

term.on('line', line => {
  if (line === 'q') return closeGame();
  if (line === 'r') return resetGame();

  if (!isValidNum(line)) return printQuestion();

  // for (let i = 0; i < ANSWER_NUMS.length; i++) {
  //   if (ANSWER_NUMS.includes(Number(line[i]))) {
  //     if (ANSWER_NUMS[i] === Number(line[i])) gStrikeCount++;
  //     else gBallCount++;
  //   }
  // }

  for (let i = 0; i < ANSWER_NUMS.length; i++) {
    if (ANSWER_NUMS[i] === Number(line[i])) gStrikeCount++;
    else if (
      line[i] == ANSWER_NUMS[(i + 1) % 3] ||
      line[i] == ANSWER_NUMS[(i + 2) % 3]
    )
      gBallCount++;
  }

  if (gStrikeCount === 3 || ++gTryCount > MAX_TRY_COUNT) {
    endGame();
  }

  console.log(`Try-${gTryCount} : ${line} => ${gBallCount}B ${gStrikeCount}S`);
  gBallCount = gStrikeCount = 0;
  printQuestion();
});

const printQuestion = () => {
  term.output.write('Input the 3 Numbers(q: Quit, r: Retry): ');
};

const endGame = () => {
  if (gStrikeCount === 3) console.log('Congratulation!! U Win!!');
  else return console.log('You Fail!!');

  closeGame();
};

const closeGame = () => {
  console.log('See u Next Time~~');
  term.close();
};

const resetGame = () => {
  gStrikeCount = 0;
  gBallCount = 0;
  gTryCount = 0;
  console.clear();

  console.log('New Game Started.\n');
  printQuestion();
  setAnswer();
};

resetGame();
