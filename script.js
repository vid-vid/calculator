function get(num){

var input=document.getElementById("input");
switch(num){

    case 1:
        input.value += '1';
    break;

    case 2:
        input.value += '2';
    break;

    case 3:
        input.value += '3';
    break;

    case 4:
        input.value += '4';
    break;

    case 5:
        input.value += '5';
    break;

    case 6:
        input.value += '6';
    break;

    case 7:
        input.value += '7';
    break;
    
    case 8:
        input.value += '8';
    break;
    
    case 9:
        input.value += '9';
    break;

    case 0:
        input.value += '0';
    break;

}
}

function clearScreen(){

document.getElementById('input').value="";
document.getElementById('answer').value="";

}

function operand(operand){
    var input=document.getElementById("input");
    switch(operand){

        case "+":
        input.value += '+';
        break;

        case "-":
        input.value += '-';
        break;

        case 'x':
        input.value += '*';
        break;

        case "/":
        input.value += '/';
        break;

        case "+/-":
        input.value += '-'+input.value;
        break;
        
    }
}

function backsapce(){
    var input=document.getElementById("input");
    var x=input.value;

    if(x.length > 0){
x=x.substring(0 , x.length-1);
input.value=x;

    }
}

function compet(){
    var input=document.getElementById("input");
    ans=Number(+eval(input.value));
    document.getElementById('answer').value='='+ ans;
}

var i=0;
function brackets() {
    var input=document.getElementById("input");
if(i==0){
input.value += '(';
i=1;}
else if(i==1){
input.value += ')';
i=0;
}

}

