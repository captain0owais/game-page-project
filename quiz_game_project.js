var p1_name=localStorage.getItem("Player 1");
var p2_name=localStorage.getItem("Player 2");
var p1_score=0;
var p2_score=0;
document.getElementById("player1_name").innerHTML=p1_name + " : ";
document.getElementById("player2_name").innerHTML=p2_name + " : ";
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;
document.getElementById("player_Q").innerHTML="Question turn -" + p1_name;
document.getElementById("player_A").innerHTML="Answer turn -" + p2_name;

function send(){
    var number1="";
    var number2="";

number1=document.getElementById("Number_1").value;
number2=document.getElementById("Number_2").value;
    var actual_answer=parseInt(number1) * parseInt(number2);

    var question_number="<h4 id='number_display'>Q." + number1 + "X" + number2 + "</h4>";
    var input_box="<br><br>Answer: &nbsp; &nbsp; <input type='number' id='check_box' placeholder='Type Answer'>";
    var check_button="<br><br><button class='btn btn-danger' onClick='check()'>Check</button>";
    var row=question_number + input_box + check_button;
    document.getElementById("question").innerHTML=row;
    document.getElementById("Number_1").value="";
    document.getElementById("Number_2").value="";
}