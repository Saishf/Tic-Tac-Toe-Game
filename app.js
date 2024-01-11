let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newgame = document.querySelector(".new-game");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let turno = true;

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count =0;
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
       if(turno){
        box.innerText ="O";
        box.style.color = "red";
        turno = false;
        count++;
       } else {
        box.innerText="X";
        box.style.color = "blue";
        turno=true;
        count++;
       }
       box.disabled = true;

       checkWinner();
       checkDraw();
    });
});

let resetgame = () =>{
    turno = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
    
}
const enabledboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const disabledboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let showWinner = (winner) =>{
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();

}
let checkDraw = () =>{
    if(count===9 && !checkWinner){
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
        disabledboxes();
        count=0;
    }
}
const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!=""  ){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                
            }
        }
    }
}

newgame.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);