class tempBoss{ 

constructor(name, Player){
    this.name = name;
    this.level ;
        //attack, def, evasiveness, luck, health
    this.stats = [1, 1, 1, 1, 1];
    this.playerStats = Player.getStats();
    
    this.bossHealth = 20;
    console.log(this.bossHealth);
    this.playerStats = Player.getStats();
    this.createBoss();
    
    
    
 
 
}
createBoss(){
    if(this.name == 'jeb'){
        this.level = 1;
        this.stats = [2, 4, 1, 5, 2];
        }
    else if(this.name == 'cruz'){
        this.level = 2;
        this.stats = [3, 2, 3, 3, 6];
        }
    else if(this.name == 'hillary'){
        this.level = 3;
        this.stats = [4, 2, 8, 3, 5];
        }
    else if(this.name == 'bernie'){
        this.level = 4;
        this.stats = [3, 4, 1, 3, 8];
        }
    else if(this.name == 'trump'){
        this.level = 5;
        this.stats = [6, 4, 6, 6, 7];
        }
    else if(this.name == 'obama'){
        this.level = 7;
        this.stats = [6, 4, 6, 8, 10];
       }
    else{
        this.level = 50;
        this.stats = [50, 50, 50, 50, 50];
       }
       this.bossHealth = 20;
    }

    
getHP(){
    return this.bossHealth;
}
attack(){
    var num = Math.floor(Math.random() * 4 );
    //var num = 0;
    var damage = 0;
    //bernie
    if(this.name == 'bernie'){
        if(num == 0){
            if(this.hit(10)){
                $('.message').text('Bernie used Burn!');
                if( this.crit() ){
                    damage = this.calcDam(5) * 2;
                }//end crit attack 1
                else{
                    damage = this.calcDam(5);
                }//end not crit attack 1
            }//end hit attack 1
            else{
                $('.message').text('Bernie used Burn\nAttack Missed!');
            }//end miss
        }else if(num==1){
            if(this.hit(6)){
                $('.message').text('Bernie used Finger of Justice!');
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                }
                else{
                    damage= this.calcDam(10);
                }
            }
            else{
                $('.message').text('Finger of Justice\nAttack Missed!');
            }
        }else if(num == 2){
            if(this.hit(6)){
                $('.message').text('Bernie used Internet Support!');
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                    //this.bossHealth += 10;
                }
                else{
                    damage= this.calcDam(10);
                    //this.bossHealth+=5;
                }
            }
            else{
                $('.message').text('Bernie used Internet Support\nAttack Missed!');
            }
        }else{
            if(this.hit(5)){
                $('.message').text('Bernie used Free College!');
                if (this.crit() ){
                    this.stats = [5, 5, 5, 5, 5];
                }
            }
            else{
                $('.message').text('Free College\nAttack Missed!');
            }
        }
    }//end bernie
    
    else if(this.name == 'cruz'){
        if(num == 0){
            if(this.hit(5)){
                $('.message').text('Cruz used Power of the Zodiac!');
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                }
                else{
                    damage= this.calcDam(10);
                }
            }
            else{
                $('.message').text('Cruz used Power of the Zodiac!\n Attack Missed!');
            }
        }else if(num==1){
            if(this.hit(8)){
                $('.message').text('Cruz used Christian Nation!');
                if (this.crit() ){
                    damage = this.calcDam(5) * 2;
                }
                else{
                    damage= this.calcDam(5);
                }
            }
            else{
                $('.message').text('Cruz used Power Christian Nation!\n Attack Missed!');
            }
        }else if(num == 2){
            if(this.hit(10)){
                $('.message').text('Cruz used Slack-Jawed Gaze!');
                if (this.crit() ){
                    damage = this.calcDam(2) * 2;
                }
                else{
                    damage= this.calcDam(2);
                }
            }
            else{
                $('.message').text('Cruz used Slack-Jawed Gaze!\n Attack Missed!');
            }
        }else{
            if(this.hit(10)){
                $('.message').text('Cruz used Slack-Jawed Gaze!');
                if (this.crit() ){
                    damage = this.calcDam(2) * 2;
                }
                else{
                    damage= this.calcDam(2);
                }
            }
            else{
                $('.message').text('Cruz used Slack-Jawed Gaze!\n Attack Missed!');
            }
        }
    }//end cruz
    else if(this.name == 'hillary'){
        if(num == 0){
            if(this.hit(10)){
                $('.message').text('Hillary acuses you of Sexism!');
                if (this.crit() ){
                    damage = this.calcDam(5) * 2;
                }
                else{
                    damage= this.calcDam(5);
                }
            }
            else{
                $('.message').text('Hillary acuses you of Sexism!\n Attack Missed!');
            }
        }else if(num==1){
            if(this.hit(8)){
                $('.message').text('Hillary plays the woman card!');
                if (this.crit() ){
                    damage = this.calcDam(6) * 2;
                }
                else{
                    damage= this.calcDam(6);
                }
            }
            else{
                $('.message').text('Hillary plays the woman card!\n Attack Missed!');
            }
        }else if(num == 2){
            
                $('.message').text('Hillary lies her way out of another situation!\nShe regains 10 health.');
                this.bossHealth+=10;
                
            
            
        }else{
            if(this.hit(5)){
                $('.message').text('Hillary uses her death-stare!');
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                }
                else{
                    damage= this.calcDam(10);
                }
            }
            else{
                $('.message').text('Hillary uses her death-stare!\n Attack Missed!');
            }
        }
    }//end hillary
    else if(this.name == 'jeb'){
        if(num == 0){
            if(this.hit(6)){
                $('.message').text('Jeb Bush uses his speech!');
                if (this.crit() ){
                    damage = this.calcDam(4) * 2;
                }
                else{
                    damage = this.calcDam(4);
                }
            }
            else{
                $('.message').text('Jeb Bush uses his speech!\nBut attack missed!!');
            }
        }else if(num==1){
            if(this.hit(2)){
                $('.message').text('Jeb Bush uses his stare!');
            
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                }
                else{
                    damage = this.calcDam(10);
                }
            }
            else{
                $('.message').text('Jeb Bush uses his speech!\nBut attack missed!!');
            }
        }else if(num == 2){
            if (this.hit(5)){
                $('.message').text('Jeb Bush uses his face!');
                if (this.crit() ){
                    damage = this.calcDam(6) * 2;
                }
                else{
                    damage = this.calcDam(6);
                }
            }
            else{
                $('.message').text('Jeb Bush uses his face!\nBut attack missed!!');
            }
        }
    }//end jep
    else if(this.name == 'trump') {
        if (num == 0) {
            
                $('.message').text('Cant stump the Trump!\nTrump gets an attack bonus!');
                this.stats[1]+=2;
        } else if(num==1){
            if(this.hit(10)){
                $('.message').text('Trump blames the Mexicans!');
                if (this.crit() ){
                    damage = this.calcDam(5) * 2;
                }
                else{
                    damage= this.calcDam(5);
                }
            }
            else{
                $('.message').text('Trump blames the Mexicans!\n Attack Missed!');
            }
        }else if(num == 2){
            if(this.hit(5)){
                $('.message').text('Trump demands your birth certificate!');
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                }
                else{
                    damage= this.calcDam(10);
                }
            }
            else{
                $('.message').text('Trump demands your birth certificate!\n Attack Missed!');
            }
        } else{
            if(this.hit(5)){
                $('.message').text('Trump sends his hair to attack you!');
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                }
                else{
                    damage= this.calcDam(10);
                }
            }
            else{
                $('.message').text('Trump sends his hair to attack you!\n Attack Missed!');
            }
        }
    } else if (this.name == 'obama') {
        if(num == 0){
            if(this.hit(7)){
                $('.message').text('Obama uses dimplomacy!');
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                }
                else{
                    damage= this.calcDam(10);
                }
            }
            else{
                $('.message').text('Obama uses dimplomacy!\n Attack Missed!');
            }
        }else if(num==1){
            if(this.hit(6)){
                $('.message').text('Obama uses Martial Law!');
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                }
                else{
                    damage= this.calcDam(10);
                }
            }
            else{
                $('.message').text('Obama uses Martial Law!\n Attack Missed!');
            }
        }else if(num == 2){
            if(this.hit(10)){
                $('.message').text('Obama uses Veto!');
                if (this.crit() ){
                    damage = this.calcDam(7) * 2;
                }
                else{
                    damage= this.calcDam(7);
                }
            }
            else{
                $('.message').text('Obama uses Veto!\n Attack Missed!');
            }
        }else{
            if(this.hit(10)){
                $('.message').text('Obama uses his powerful rhetoric!');
                if (this.crit() ){
                    damage = this.calcDam(7) * 2;
                }
                else{
                    damage= this.calcDam(7);
                }
            }
            else{
                $('.message').text('Obama uses his powerful rhetoric!\nit Missed!');
            }
            
            if(damage < 0)
                damage = 10;
            console.log(damage);
            return damage;
        }
    }//end obama
    else{
        if(num == 0){
            $('.message').text('Deez Nuts says, \"That\'s what she said!\"\nIt was not very effective...');
        }else if(num==1){
            $('.message').text('Deez Nuts says, \"Yolo!\"\nIt was not very effective...');
        }else if(num == 2){
            $('.message').text('Deez Nuts says, \"Swag!\"\nIt was not very effective...');
        }else{
            $('.message').text('Deez Nuts says, \"Legallize marijuana!\"\nIt was not very effective...');
        }
    }//end else
       
   return damage; 
}//end attack


 hit(chan){
        var chan = Math.round( (chan - (2* Math.log(this.playerStats[2] + 1) ) + 1) );
            if(chan <1)
                chan = 1;
        var x = Math.floor( Math.random() * 10 );
        
                
        //return chan > x;
        return true;
    }
     crit(){
         var v = Math.round( (2* Math.log(this.playerStats[3] + 1) ) );
         var x = Math.floor( Math.random() * 10 );
         return v>x;
    }
     calcDam(pow){
        var dam;
        dam = pow * Math.sqrt(this.stats[0]);
        //var rand =  Math.random() * (playerStats[1] / 4) + (playerStats[1] / 4);
        dam = Math.round(dam );
        
        /*
        if(dam <= playerStats[4] ){
            dam = playerStats[4];
        }
        */

        return dam;
    }
    takeDam(dam){
                console.log(dam);

        var rand =  Math.random() * (this.stats[1] / 2) + (this.stats[1] / 4);
            dam -= rand;
                    console.log(dam);

        if(dam < this.stats[4] ){
            dam = this.stats[4];
        }
        console.log(dam);
        this.bossHealth -= dam;
        console.log(this.bossHealth);
    }
     isAlive(){
        return this.bossHealth > 0;
    }
    
}