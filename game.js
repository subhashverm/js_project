let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let msgcontainer=document.querySelector('.msg-container');
let msgs=document.querySelector('#msg');
let newgamebtn=document.querySelector('#new-game');
let turn0 = true;
let winpattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
const show_winner=(winner)=>{
    msgs.innerText= (`congratulation ( ${winner} )  on the game`);
   msgcontainer.classList.remove("hide");   
    disabledboxs();
}
const disabledboxs=()=>{
    for (let box in boxes)
    {
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for (let box in boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = "o";
            turn0 = false;
        }
        else {
            box.innerText = "x";
            turn0 = true
        }
        box.disabled = true;
        checkwinner();
    });
    const checkwinner = () => {
        for (let pattern of winpattern){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 !="" && pos2 !="" && pos3 != "") {
        if (pos1 === pos2 && pos2 === pos3) {
            show_winner(pos1);
        }
    }
}
}
});
newgamebtn.addEventListener("click", resetgame); 
resetbtn.addEventListener("click",resetgame);
