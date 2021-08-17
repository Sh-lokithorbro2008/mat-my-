var number1="";
var number2="";
var question_turn="player1";
var answer_turn="player2";
var player_1_name=localStorage.getItem("player1name");
var player_2_name=localStorage.getItem("player2name");
var player_1_score=0;
var player_2_score=0;

document.getElementById("player_1_name").innerHTML=player_1_name;
document.getElementById("player_2_name").innerHTML=player_2_name;
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML="Question turn- " + player_1_name;
document.getElementById("player_answer").innerHTML="Answer turn- " + player_2_name;

function send()
{
    number1=document.getElementById("num_1").value;
    number2=document.getElementById("num_2").value;
    actual_answer=parseInt(number1) * parseInt(number2);

    document.getElementById("output").innerHTML="<h1>QUESTION=" + number1 + "x" + number2 + "</h1>" + "<br>" + "<h2>A.<input type='text' id='answer' class='form-control' placeholder='answer'></h2>" + "<br>" + "<button id='check' onclick='check()'>CHECK</button>";

    document.getElementById("num_1").value=" ";
    document.getElementById("num_2").value=" ";
}

function check()
{
    get_answer=document.getElementById("answer").value;

    if(get_answer==actual_answer)
    {
        if(answer_turn=="player1")
        {
            player_1_score=player_1_score + 1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
        }
        else
        {
            player_2_score=player_2_score + 1;
            document.getElementById("player_2_score").innerHTML=player_2_score;
        }
    }

    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn- " + player_2_name;
    }
    else
    {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn- " + player_1_name;
    }

    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn- " + player_2_name;
    }
    else
    {
        question_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn- " + player_1_name;
    }

   document.getElementById("output").innerHTML=" ";
}