// '/dev/stdin'

// let input = require('fs').readFileSync('./example.txt').toString().split(' ');
// let n = parseInt(input[0]);
// let m = parseInt(input[1]);
// let check = new Array(n + 1).fill(false);
// let result = '';

function solution(ingredient) {
  let answer = 0;
  let hamburger = '1231';
  let arr = [...ingredient];
  let curHamburger = '';

  while (true) {
    let isEnd = true;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (hamburger.startsWith(curHamburger + arr[i])) {
        isEnd = false;
        curHamburger += arr[i];
        arr = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)];
        if (hamburger === curHamburger) {
          answer++;
          curHamburger = '';
        }
        break;
      }
    }
    if (isEnd) break;
  }

  return answer;
}
