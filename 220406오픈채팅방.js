// lev2 오픈채팅방 
// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
	let answer = [];
	let userName = {};
	for(let i = 0; i < record.length; i++){
		let [state, userId, name] = record[i].split(' ');
		if(state === 'Enter'){
			answer.push([userId, '님이 들어왔습니다.']);
		}
		if(state === 'Leave'){
			answer.push([userId, '님이 나갔습니다.'])
		}
		userName[userId] = name;
	}
	return answer.map(el => userName[el[0]] + el[1]);
}
// 6점..

let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

console.log(solution(record))

// 답안
function solution(record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }

    record.forEach((v) => {
        const [state, id, nick] = v.split(' ');

        if(state !== "Change") {
            action.push([state, id]);
        }

        if(nick) {
            userInfo[id] = nick;
        }
    })

    return action.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`;    
    })
}
