// lev2 멀쩡한사각형
// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
    var answer = 0;
		let area = w * h; // 사각형 갯수
		let extra = 0;
		let bigN = Math.max(w,h);
		let smallN = Math.min(w,h);
		//조건이 2가지 (작은/큰 나머지 0, 0 < 1 기준)
		if(bigN%smallN === 0){
			extra = smallN * (bigN / smallN) ;
		}
		if(bigN%smallN > 0){
			extra = smallN * (Math.ceil(bigN / smallN));
		}
		answer = area - extra;
    return answer;
} // 50점

let w = 8, h = 12;
console.log(solution(w,h))

// 답안
function solution(w,h){
    const slope = h / w;
    let result = 0;

    for(let i = 1; i <= w; i++){
        result += Math.ceil(slope * i);
    }

    return ((h * w) - result) * 2;
}