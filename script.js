const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialChars = ["%","*","/","-","+","="];
let output = "";

//Define function to calculate based on button clicked.
const calculate = (btnVa1ue) => {
    if (btnVa1ue === "=" && output !== ""){
        output = eval(output.replace("%","/100"));
    }else if(btnVa1ue === "AC"){
        output = "";
    }else if(btnVa1ue === "DEL"){
        output = output.toString().slice(0,-1);
    }else{
        if(output === "" && specialChars.includes(btnVa1ue)) return;
        output += btnVa1ue;
    }
    display.value = output;
};

buttons.forEach(button => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
