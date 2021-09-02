const readline = require('readline');

const MAX_TRY_COUNT = 9;
const ANSWER_NUMS = [0, 0, 0];
let gTryCount;
let gBallCount;
let gStrikeCount;

const term = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

term
  .on('line', line => {
    if (line === 'q') endGame();
    if (line === 'r') return resetGame();

    if (!isValidInput(line)) {
      return printQuestion();
    }

    // for (let i = 0; i < ANSWER_NUMS.length; i++) {
    //   if (ANSWER_NUMS.includes(Number(line[i]))) {
    //     if (ANSWER_NUMS[i] == line[i]) gStrikeCount++;
    //     else gBallCount++;
    //   }
    // }
    for (let i = 0; i < ANSWER_NUMS.length; i++) {
      if (ANSWER_NUMS[i] == line[i]) {
        gStrikeCount++;
      } else if (
        line[i] == ANSWER_NUMS[(i + 1) % 3] ||
        line[i] == ANSWER_NUMS[(i + 2) % 3]
      ) {
        gBallCount++;
      }
    }

    if (gStrikeCount === 3 || ++gTryCount > MAX_TRY_COUNT) return endGame();

    console.log(`${line} ==> (${gBallCount}B ${gStrikeCount}S)\n`);

    gBallCount = gStrikeCount = 0;
    printQuestion();
  })
  .on('close', () => {
    process.exit();
  });

const printQuestion = () => {
  term.output.write(
    'Try ' + gTryCount + ': Input the Unique 3 Numbers(q: quit, r: restart): '
  );
};

const isValidInput = inputStr => {
  let msg;
  if (Number.isNaN(inputStr)) msg = 'Input the Number Only!';
  else if (inputStr.length !== 3) msg = 'Input 3 length Number!';
  else if (hasDupNumber(inputStr))
    msg = 'Do Not Input the Duplicated(Same) Number (Non-Zero)!';

  if (msg) {
    console.log(` => Warn: ${msg}\n`);
    return false;
  }

  return true;
};

const hasDupNumber = val =>
  val[0] == 0 ||
  val[1] == 0 ||
  val[2] == 0 ||
  val[0] === val[1] ||
  val[0] === val[2] ||
  val[1] === val[2];

const setAnswerNums = () => {
  do {
    const randNum = Math.floor(Math.random() * 10000) % 1000;
    ANSWER_NUMS[2] = randNum % 10;
    ANSWER_NUMS[0] = Math.floor(randNum / 100);
    ANSWER_NUMS[1] = Math.floor((randNum % 100) / 10);
  } while (hasDupNumber(ANSWER_NUMS));
};

const endGame = () => {
  if (gStrikeCount === 3) console.log('\n\nConguratulations! You Win!!!!!!!');
  else console.log('\n\nYou Fail!!');
  console.log('\nSee u Next Time~');
  term.close();
};

const resetGame = () => {
  gTryCount = 1;
  gBallCount = 0;
  gStrikeCount = 0;
  // console.clear();
  console.log('\nNew Game Started.\n');
  setAnswerNums();
  printQuestion();
};

resetGame();
