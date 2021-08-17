var score=0;

function update_score()
{
    score=score + 1 ;
    document.getElementById("score").innerHTML="ze score zis equal 2 ze number after the equal sign = " + score;
}

function save_score()
{
    localStorage.setItem("score",score);
}

function next()
{
    window.location="activity_2.html";
}