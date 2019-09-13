// all variables for game
let player1 = 0;
let player2 = 0;
let play1 = $("#b1");
let play2 = $("#b2");
let win = $("#winning");
let g1 = $("#p1");
let g2 = $("#p2");
let newg = $("#newgame");
let color = $("#colors");
let side = $("aside");
let sec = $("section");
let bet  = $(".extra");
let bod = $("body");
let mou = $("#mouse");

// Pressing P1 button
play1.on("click", function () {
    //Score keeping for P1
    player1++;
    //Debug
    console.log(player1);
    //Replacing and displaying score
    g1.text(`${player1}`);
    //Win condition for P1(Stop the game)
    if (player1 === 15){
        alert("Player 1 Wins!!!!!");
        win.text("Tied");
        player1 = 0;
        player2 = 0;
        g1.text(`${player1}`);
        g2.text(`${player2}`);
    }
    //Updating leader
    else if (player1 > player2) {
        win.text("Player 1");
    }
    else if (player2 > player1) {
        win.text("Player 2");
    }
    else if(player1 === player2){
        win.text("Tied");
    }

});

// Pressing P2 button
play2.on("click", function () {
    //Score keeping for P2
    player2++;
    //Debug
    console.log(player2);
    //Replacing and displaying score
    g2.text(`${player2}`);
    //Win condition for P1(Stop the game)
    if (player2 === 15){
        alert("Player 2 Wins!!!!!");
        win.text("Tied");
        player1 = 0;
        player2 = 0;
        g1.text(`${player1}`);
        g2.text(`${player2}`);
    }
    //Updating leader
    else if (player1 > player2) {
        win.text("Player 1");
    } else if (player2 > player1) {
        win.text("Player 2");
    } else if (player2 === player1){
        win.text("Tied");
    }
});

//Starting a new game
newg.on("click", function () {
    if (player1 > player2) {
        alert("Player 1 Wins!!!!!\nReseting board!!");
        win.text("Tied");
        player1 = 0;
        player2 = 0;
        g1.text(`${player1}`);
        g2.text(`${player2}`);
    }
    else if (player2 > player1) {
        alert("Player 2 Wins!!!!!\nReseting board!!");
        win.text("Tied");
        player1 = 0;
        player2 = 0;
        g1.text(`${player1}`);
        g2.text(`${player2}`);
    }
    else if (player2 === player1){
        alert("Tie Game!!!!\nReseting board!!");
        win.text("Tied");
        player1 = 0;
        player2 = 0;
        g1.text(`${player1}`);
        g2.text(`${player2}`);
    }
});
//Challenge 2
color.on("click", function () {
    side.addClass("neonb");
    sec.addClass("neonr");
    bet.addClass("neonl");
    bod.addClass("neony");
    play1.addClass("neonr");
    play2.addClass("neonl");
    g1.addClass("neonr");
    g2.addClass("neonl");
    win.addClass("neonb");
    newg.addClass("neony");
    color.addClass("neony");
    mou.addClass("neony");
});