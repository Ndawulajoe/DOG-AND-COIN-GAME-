function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
const player = document.querySelector('#player');
const coin = document.querySelector('#coin');
const score= document.querySelector('#score');
const sco= document.querySelector('#sco');

let counter = 0;
score.value=0;

let scored=0;
    sco.value=0;
    let increase =50;
window.addEventListener('keydown',function(e){
    if(e.key==='ArrowDown'||e.key==='Down'){
        const currVal=extractPos(player.style.top)
        player.style.top=`${currVal+50}px`
        player.style.transform='scale(1,1)'
       
    }
    else if(e.key==='ArrowUp'||e.key==='up'){
        const currVal=extractPos(player.style.top)
        player.style.top=`${currVal-50}px`
        player.style.transform='scale(-1,1)'
        
    }
    else if(e.key==='ArrowRight'||e.key==='Right'){
        const currVal=extractPos(player.style.left)
        player.style.left=`${currVal+50}px`
        player.style.transform='scale(1,1)'
        
    }
    else if(e.key==='ArrowLeft'||e.key==='Left'){
        const currVal=extractPos(player.style.left)
        player.style.left=`${currVal-50}px`
        player.style.transform='scale(-1,1)'
        
    }
    if(isTouching (player,coin)){
		moveCoin()
		addCounter()
        addTimes()
		grow()
	}
    
    
})


function extractPos(pos){
    if(!pos){
        return 100;
    }else{
        return parseInt(pos.slice(0,-2))
    } 
}
const addCounter=()=>{
    counter=counter+5
    score.value=counter
}
const addTimes=()=>{
    scored=scored+1
    sco.value=scored
}
const grow=()=>{
    increase=increase+50;
player.style.height=`${increase}px`
player.style.width=`${increase}px`
}


function moveCoin() {
    const width = Math.floor(Math.random() * window.innerWidth);
    const height = Math.floor(Math.random() * window.innerHeight);
    coin.style.top = `${width}px`;
    coin.style.left = `${height}px`;
}
moveCoin();