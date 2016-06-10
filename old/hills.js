var player = new Player("Justin ", 5, 5, 5, 5, 5, 5);
var playerTurn = true;
var oHp = 100;
var pHp = player.health * 10;

player.health = 100;

function playerAttack(num){
    
    if(playerTurn == true && player.isAlive(pHp) && oHp > 0){
        playerTurn = false;
        var damage = player.attack(num);
        oHp = oHp - damage;
        if(oHp < 0){oHp = 0};
        document.getElementById('opHp').innerHTML = oHp;}
    
     if(oHp < 0){
            document.getElementById("demo").innerHTML = 'You Win!';
            
        }
        else if(pHp < 0){
            document.getElementById("demo").innerHTML = 'You Lose!';
        }
    
}

function enemyAttack(){
     //$('.message').text('function works!');
    if(playerTurn == false && player.isAlive(pHp) && oHp>0){
        // $('.message').text('button triggers!');
        playerTurn = true;
        
        var damage;
        var num = Math.floor(Math.random() * 4 );
        if(num == 0){
            $('.message').text('Hillary acuses you of Sexism!');
            damage = 20;
        }else if(num == 1){
            $('.message').text('Hillary plays the woman card!');
            damage = 30;
        }else if(num == 2){
            $('.message').text('Hillary lies her way out of another situation!');
            damage = 5;
        }else{
            $('.message').text('Hillary uses her death-stare!');
            damage = 10;
        }
        
        pHp -= damage;
        if(pHp < 0)
            pHp = 0;
        document.getElementById('myHp').innerHTML = pHp;
        
        if(oHp < 0){
            document.getElementById("demo").innerHTML = 'You Win!';
            
        }
        else if(pHp < 0){
            document.getElementById("demo").innerHTML = 'You Lose!';
        }
        
    }
    
}