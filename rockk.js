let x=0;
let y=0;
let z=0;
document.getElementById("rock1").onclick=function(){
    x=Math.floor(Math.random()*3);
    console.log(x);
    if(x==0)
    {
        document.getElementById("player").innerHTML="player: Rock";
        document.getElementById("computer").innerHTML="computer: Rock";
        document.getElementById("result").innerHTML="result: Draw";
    }
    else if(x==1)
    {
        document.getElementById("player").innerHTML="player: Rock";
        document.getElementById("computer").innerHTML="computer: Paper";
        document.getElementById("result").innerHTML="result: Lose";
    }
    else if(x==2)
    {
        document.getElementById("player").innerHTML="player: Rock";
        document.getElementById("computer").innerHTML="computer: Scissor";
        document.getElementById("result").innerHTML="result: Win";
    }
}
document.getElementById("scissor").onclick=function(){
    y=Math.floor(Math.random()*3);
    if(y==0)
    {
        document.getElementById("player").innerHTML="player: Scissor";
        document.getElementById("computer").innerHTML="computer: Rock";
        document.getElementById("result").innerHTML="result: Lose";
    }
    else if(y==1)
    {
        document.getElementById("player").innerHTML="player: Scissor";
        document.getElementById("computer").innerHTML="computer: Paper";
        document.getElementById("result").innerHTML="result: Win";
    }
    else if(y==2)
    {
        document.getElementById("player").innerHTML="player: Scissor";
        document.getElementById("computer").innerHTML="computer:Scissor";
        document.getElementById("result").innerHTML="result:Draw";
    }
}
document.getElementById("paper").onclick=function(){
    z=Math.floor(Math.random()*3);
    if(z==0)
    {
        document.getElementById("player").innerHTML="player:Paper";
        document.getElementById("computer").innerHTML="computer:Rock";
        document.getElementById("result").innerHTML="result:Win";
    }
    else if(z==1)
    {
        document.getElementById("player").innerHTML="player:Paper";
        document.getElementById("computer").innerHTML="computer:Paper";
        document.getElementById("result").innerHTML="result:Draw";
    }
    if(z==2)
    {
        document.getElementById("player").innerHTML="player:Paper";
        document.getElementById("computer").innerHTML="computer:Scissor";
        document.getElementById("result").innerHTML="result:Lose";
    }
}