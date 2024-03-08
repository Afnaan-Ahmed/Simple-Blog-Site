let likes1 = 0;
let likes2 = 0;
let likes3 = 0;
let likes4 = 0;


function like1(id) {
    likebtn = document.getElementById(id)
    likes1++;
    likebtn.innerText="👍"+likes1;
}
function like2(id) {
    likebtn = document.getElementById(id)
    likes2++;
    likebtn.innerText="👍"+likes2;
}
function like3(id) {
    likebtn = document.getElementById(id)
    likes3++;
    likebtn.innerText="👍"+likes3;
}
function like4(id) {
    likebtn = document.getElementById(id)
    likes4++;
    likebtn.innerText="👍"+likes4;
}

