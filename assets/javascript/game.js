// 1.create random generator for computer
// 2.create radom number generator for each crystals
// 3.set variables for syntax and link to HTML
// 4.create reset function restting user total to zero
// 5.create win/loss functions with alert and link to reset function
// 6.create event listener click to activate the gem and start counter
// 7.check and refine elements; possiblity to simplify script further


$( document ).ready(function() {

    var imageChange = "assets/images/equal.jpg";
    var randomNum = Math.floor(Math.random()*80+30);
    
    $("#number-guess").text(randomNum);
    
    var randGem1 = Math.floor(Math.random()*12+1);
    var randGem2 = Math.floor(Math.random()*12+1);
    var randGem3 = Math.floor(Math.random()*12+1);
    var randGem4 = Math.floor(Math.random()*12+1);
    
    var userTotal= 0;
    var wins = 0;
    var losses = 0;
    
    $("#user-win").text(wins);
    $("#user-lose").text(losses);
    
    function reset() {
        randomNum = Math.floor(Math.random()*80+30);
        //console.log(randomNum);//
        $("#number-guess").text(randomNum);
        randGem1 = Math.floor(Math.random()*12+1);
        randGem2 = Math.floor(Math.random()*12+1);
        randGem3 = Math.floor(Math.random()*12+1);
        randGem4 = Math.floor(Math.random()*12+1);
        userTotal = 0;
        $("#user-score").text(userTotal);
    }
    
    function winner() {
        alert("Yes you WON!!");
        wins++;
        $("#user-win").text(wins);
        document.getElementById("infoP").style.backgroundImage='url(assets/images/equal.jpg)';
        reset();
    }
    
    function loser() {
        alert("Too bad you LOSE...Try again!!");
        losses++;
        $("#user-lose").text(losses);
        document.getElementById("infoP").style.backgroundImage='url(assets/images/notequal.jpg)';
        reset();
    }
    
    $("#gem1").on("click", function() {
        userTotal = userTotal + randGem1 ;
        console.log("New userTotal " + userTotal);
        $("#user-score").text(userTotal);
    
        if (userTotal === randomNum) {
            winner()
        }
        else if (userTotal > randomNum) {
            loser()
        } 
    })

    $("#gem2").on("click", function() {
        userTotal = userTotal + randGem2 ;
        console.log("New userTotal " + userTotal);
        $("#user-score").text(userTotal);
    
        if (userTotal === randomNum) {
            winner()
        }
        else if (userTotal > randomNum) {
            loser()
        } 
    })

    $("#gem3").on("click", function() {
        userTotal = userTotal + randGem3 ;
        console.log("New userTotal " + userTotal);
        $("#user-score").text(userTotal);
    
        if (userTotal === randomNum) {
            winner()
        }
        else if (userTotal > randomNum) {
            loser()
        } 
    })

    $("#gem4").on("click", function() {
        userTotal = userTotal + randGem4 ;
        console.log("New userTotal " + userTotal);
        $("#user-score").text(userTotal);
    
        if (userTotal === randomNum) {
            winner()
        }
        else if (userTotal > randomNum) {
            loser()
        } 
    })

});


//some test reference for exploration later:
//var image = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
//var crystal = $("<img>");
//crystal.attr({
//    "class": 'crystal',
//    "data-random": 1,
//    "src": image,
//    "height": '100px',
//    "width": '100px'
//});
//
//$(".crystals").append(crystal);