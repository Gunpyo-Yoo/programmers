// lev2 문자열 압축
// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
	let answer = s.length;
	// 1개 단위로, 2개 단위로, 3개 단위 ... 로 나눠서 비교 (첫조건 단위(max s.length/2))
	for(let i = 1; i < s.length/2 + 1; i++){
		let repeat = ''; // 반복할 문자
		let preRepeat = ''; // 전에 반복된 문자
		let cnt = 1; // 반복횟수
		let newS = '';
		for(let j = i; j < s.length + i; j+= i){
			repeat = s.slice(j,j+i); 
			preRepeat = s.slice(j-i,j);

			if(repeat === preRepeat){
				cnt ++;
			}
			else{
				if(cnt > 1){
					newS += `${cnt}${preRepeat}`;
					cnt = 1;
				}
				else{
					newS += preRepeat;
				}	
			}
		}
		answer = Math.min(newS.length, answer)
	}
	return answer;
}
// 100점

let s = "aabbaccc"
// s = "ababcdcdababcdcd"
// s = "abcabcdede"
// s = "abcabcabcabcdededededede"	
// s = "xababcdcdababcdcd"

console.log(solution(s))

// 답안 
//1
const solution = s => {
  const range = [...Array(s.length)].map((_, i) => i + 1);
  return Math.min(...range.map(i => compress(s, i).length));
};

const compress = (s, n) => {
  const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
  return make(
    chunk(s, n).reduce(
      ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
      ['', '', 0]
    )
  );
};

const chunk = (s, n) =>
  s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];

//2
function solution(s) {
    if(s.length === 1 ) return 1;
    let min = 1000;
    for (let i = 1; i <= s.length / 2; i++) {
        let str1 = '';
        let str2 = '';
        let ans = '';
        let count = 1;
        for (let j = 0; j < s.length; j += i) {
            if( j === 0 ) {
                str1 = s.slice(j, j + i);
            }else{
                str2 = s.slice(j, j + i)
                if(str1 === str2){
                    count++;
                    if(j+i === s.length) ans += `${count}${str1}`;

                }else{
                    if( count > 1 ){
                        ans += `${count}${str1}`
                    }else{
                        ans += str1;
                    }
                    count = 1;
                    if(str1.length > str2.length){
                        ans += str2;
                    }
                    str1 = str2;
                    if(j+i === s.length) ans += str2;
                }
            }
        }
        min = Math.min(ans.length, min);
    }
    return min;
}
