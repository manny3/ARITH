// let isPlaying = false, isEnd = false //開始及結束變數
// let score = 0, time = 60, ans = 0	
// let playing 
// const startBtn = document.querySelector('.startBtn') //開始紐
// const timeNode = document.querySelector('.time') //
// const subjectNode = document.querySelector('.subject')
// const ansNode = document.querySelector('.answer')
// const scoreNode = document.querySelector('.score')
// const reStart = document.querySelector('.btnRestart')
// startBtn.addEventListener('click', startGame)
// reStart.addEventListener('click', startGame)
// ansNode.addEventListener('keyup', checkAns)

// function startGame () {
// 	isPlaying = true
// 	isEnd = false
// 	score = 0
// 	time = 60
// 	ans = 0
// 	scoreNode.innerHTML = `${score}`
// 	checkStatus()	
// 	gaming()
// }
// function gaming () {
// 	createSubject()
// 	playing = setInterval(()=>{
// 		if (time <= 0) {
// 			isEnd = true
// 			checkStatus()
// 		}
// 		timeNode.innerHTML = `00 : ${time < 10 ? '0' + time : time}`
// 		if (time > 0) time--		
// 	}, 1000)
// }
// function createSubject () {
// 	const t = parseInt(Math.random() * 4)	
// 	if (time > 40) {
// 		subjectType(parseInt(Math.random() * 10), parseInt(Math.random() * 10), t)
// 	} else if (time > 20) {
		// subjectType(parseInt(Math.random() * 90) + 10, parseInt(Math.random() * 90) + 10, t)
// 	} else {
// 		subjectNode.style.fontSize = '80px'
		// subjectType(parseInt(Math.random() * 900) + 100, parseInt(Math.random() * 900) + 100, t)
// 	}
// }
// function subjectType (num1, num2, t) {
// 	let type = ''
// 	switch (t) {
// 		case 0:
// 			ans = ~~(num1 + num2)//~~取整數
// 			type = '+'
// 			break
// 		case 1:
// 			ans = ~~(num1 - num2)
// 			type = '−'
// 			break
// 		case 2:
// 			ans = ~~(num1 * num2)
// 			type = '×'
// 			break
// 		default:
// 			ans = ~~(num1 / num2)
// 			type = '÷'
// 			break
// 	}
// 	subjectNode.innerHTML = `<span>${num1}</span><span>${type}</span><span>${num2}</span><span>=</span>`
// 	// `${num1} <span class="white">${type}</span> ${num2} <span class="white">=</span>`
							
// }
// function checkAns(e) {
// 	if (e.key === 'Enter') {
// 		const playerAns = parseInt(this.value)
// 		this.value = ''
// 		if (playerAns === ans) {
// 			(time > 20) ? score++ : score += 5
// 		} else {
// 			if (score > 0) score--
// 		}
// 		scoreNode.innerHTML = `${score}`
// 		createSubject()
// 	}
// }
// function checkStatus () {
// 	const start = document.querySelector('.start')
// 	const main = document.querySelector('.gaming')
// 	const restart = document.querySelector('.end')
// 	start.style.display = 'none'
// 	main.style.display = 'none'
// 	restart.style.display = 'none'
// 	if (!isPlaying && !isEnd) {
// 		start.style.display = 'flex'
// 	} else if (isPlaying && !isEnd) {
// 		main.style.display = 'flex'
// 	} else {
// 		restart.style.display = 'flex'
// 		document.querySelector('.finalScore').innerHTML = `${score}`
// 		window.clearInterval(playing)
// 	}
// }
// checkStatus()



let isPlaying = false, isEnd = false; 
let score = 0, time = 60, ans = 0;
let playing;
const startBtn = document.querySelector('.startBtn');
const scoreNode = document.querySelector('.score');
const timeNode = document.querySelector('.time');
const subject = document.querySelector('.subject');
const ansNode = document.querySelector('.answer');
const finalScore = document.querySelector('.finalScore');
const btnRestart = document.querySelector('.btnRestart');
startBtn.addEventListener('click', startGame)
btnRestart.addEventListener('click', startGame)
// ansNode.addEventListener(keyup,checkAns)

function startGame(){
    isPlaying = true;
	isEnd = false
	score = 0
	time = 60
    ans = 0
    scoreNode.innerHTML = `${score}` 
    checkStatus();
    gaming()
}

function gaming(){
    // createSubject()
    playing = setInterval (()=>{
        if (time <=0){
            isPlaying = false;
            isEnd = true;
            checkStatus();
        }
        timeNode.innerHTML = `00 : ${time < 10 ? '0' + time : time}`
        if (time > 0){
            time--
        }
    },1000)
}

function createSubject(){
    const t = parseInt(Math.random()*4)
    if (time > 40) {
        subjectType(parseInt(Math.random() * 10,parseInt(Math.random() * 10,t)
    }else if (time > 20) {
        subjectType(parseInt(Math.random() * 90) + 10,parseInt(Math.random() * 90) + 10,t)
    }else {
        subjectType(parseInt(Math.random() * 900) + 100, parseInt(Math.random() * 900) + 100, t)
    }
}

function subjectType(num1,num2,t){

}

// function checkAns(){

// }

function checkStatus(){
    const start = document.querySelector('.start');
    const gaming = document.querySelector('.gaming');
    const end = document.querySelector('.end');
    start.style.display = 'none';
    gaming.style.display = 'none';
    end.style.display = 'none';

    if (!isPlaying == false && isEnd == false){
        gaming.style.display = 'flex';
    }else if (isPlaying == false && !isEnd == false){
        end.style.display = 'flex';
    }else {
        start.style.display = 'flex';
    }
}

checkStatus()