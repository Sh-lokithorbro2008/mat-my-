var score="";

function get_score()
{
    score=localStorage.getItem("score");
    document.getElementById("score").innerHTML="<h1>SCORE IS " + score + "</h1>";
}

function back()
{
    window.location="activity_1.html"
}