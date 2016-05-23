var player = new Player(getCookie("name"), getCookie("atkPow"), getCookie("def"), getCookie("evade"), getCookie("luck"), getCookie("health"));
var enemy = new tempBoss('bernie', player );

//var oname = "Bernie";
//var olevel = 5;
//var oHP = 100;
//oAttacks = [flameThrower, dragonClaw, ember, growl];

var pname = getCookie("name");
var plevel = 1;

//var pHP = player.health;
var playerTurn = true;

$("#opHp").text(enemy.bossHealth);
$("#myHp").text(Math.round(player.health));

function playerAttack(num){
    var damage;
    
    if(playerTurn){
        damage = player.attack(num);
        enemy.takeDam(damage);
        playerTurn = false;
        
        $('#opHp').text(Math.round( enemy.bossHealth ) );
    
    }
    
}
function burn(){
    this.message="Bernie used Burn!";
    document.getElementById('message').innerHTML = Math.round( message );
}
function freeCollegeTution(){
    this.message="Bernie used Free College Tuition.";
    document.getElementById('message').innerHTML = Math.round( message );

}
function internetSupport(){
    this.message="Bernie used internet support."
    document.getElementById('message').innerHTML = Math.round( message );
}
function fingerOfJustice(){
    this.message="Bernie used Finger of Justice!"
    document.getElementById('message').innerHTML = Math.round( message );
}

function enemyAttack(){
    if(!playerTurn){
        var damage = enemy.attack();
        player.takeDamage(damage);
    }
    $('#myHp').text(Math.round(player.health));
}

    

$( document ).ready(function() {
    $( ".oname" ).text("Bernie");
    $( ".olevel" ).text(1);
    $( ".oimage").attr('src',"./images/Bernie/sprite.gif");
    
    $( ".pname" ).text(pname);
    $( ".plevel" ).text(plevel);
    $( ".pimage").attr('src',"./images/Player/guybattle.gif");
});




