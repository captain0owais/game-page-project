var p1_name=localStorage.getItem("Player 1");
var p2_name=localStorage.getItem("Player 2");
var actual_answer="";
var p1_score=0;
var p2_score=0;
document.getElementById("player1_name").innerHTML=p1_name + " : ";
document.getElementById("player2_name").innerHTML=p2_name + " : ";
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;
document.getElementById("player_Q").innerHTML="Question turn -" + p1_name;
document.getElementById("player_A").innerHTML="Answer turn -" + p2_name;

var number1="";
var number2="";

function send(){

    number1=document.getElementById("Number_1").value;
    console.log("number 1 = " + number1);
    number2=document.getElementById("Number_2").value;
    console.log("number 2 = " + number2);
    actual_answer=parseInt(number1) * parseInt(number2);
    console.log("actual answer " + " = ----> " + number1 + " X " + number2 + " = " + actual_answer);

    var question_number="<h4 id='number_display'>Q." + number1 + " X " + number2 + "</h4>";
    var input_box="<br>Answer: &nbsp; &nbsp; <input type='number' id='check_box' placeholder='Type Answer'>";
    var check_button="<br><br><button class='btn btn-danger' onClick='check()'>Check</button>";
    var row=question_number + input_box + check_button;
    document.getElementById("question").innerHTML=row;
    document.getElementById("Number_1").value="";
    document.getElementById("Number_2").value="";
}

var Q_turn=p1_name;
var A_turn=p2_name;
var p_answer="";

function check(){
    p_answer=parseInt(document.getElementById("check_box").value);

    if(p_answer == actual_answer)
    {
        document.getElementById("comment").innerHTML=" 😎 YES! YOU GOT IT RIGHT";
        if(A_turn == p1_name){
            p1_score = p1_score + 1;
            document.getElementById("player1_score").innerHTML=p1_score;
            console.log(p1_name + "'s score = " + p1_score)
        }else{
            p2_score = p2_score + 1;
            document.getElementById("player2_score").innerHTML=p2_score;
            console.log(p2_name + "'s score = " + p2_score)
        }
    }else{
        document.getElementById("comment").innerHTML=" 😔 BETTER LUCK NEXT TIME";
        if(Q_turn == p1_name){
            p1_score = p1_score + 1;
            document.getElementById("player1_score").innerHTML=p1_score;
            console.log(p1_name + "'s score = " + p1_score)
        }else{
            p2_score = p2_score + 1;
            document.getElementById("player2_score").innerHTML=p2_score;
            console.log(p2_name + "'s score = +1")
        }
    }

    if(Q_turn == p1_name){
        Q_turn=p2_name;
        document.getElementById("player_Q").innerHTML="Question turn -" + p2_name;
        console.log("question turn = " + p2_name)
    }else{
        Q_turn=p1_name;
        document.getElementById("player_Q").innerHTML="Question turn -" + p1_name;
        console.log("question turn = " + p1_name)
    }

    if(A_turn == p1_name){
        A_turn=p2_name;
        document.getElementById("player_A").innerHTML="Answer turn -" + p2_name;
        console.log("answer turn = " + p2_name)
    }else{
        A_turn=p1_name;
        document.getElementById("player_A").innerHTML="Answer turn -" + p1_name;
        console.log("answer turn = " + p1_name)
    }


    document.getElementById("question").innerHTML="";
}