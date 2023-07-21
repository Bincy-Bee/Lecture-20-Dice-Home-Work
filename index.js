let min = 1;
let max = 6;
let diceNum = Math.round(Math.random()*(max - min)) + min;
console.log(diceNum);

document.getElementById("diceimg").addEventListener("click",()=>{

    const random=()=>{
        let min = 1;
        let max = 6;
        let diceNum = Math.round(Math.random()*(max - min)) + min;
        
        document.getElementById("result").innerHTML="Random Number between 1 to 6 =" + " "+ diceNum;
    }
    random()
})
