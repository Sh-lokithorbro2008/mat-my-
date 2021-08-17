var player1name="";
var player2name="";

function next()
{
    player1name=document.getElementById("p1_input").value;
    player2name=document.getElementById("p2_input").value;

    localStorage.setItem("player1name",player1name);
    localStorage.setItem("player2name",player2name);

    window.location="game_page.html"
}