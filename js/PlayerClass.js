class Player {
    constructor(name,atkPow,def,evade,luck,health,level) {
        this.name = name;
        this.atkPow = atkPow;
        this.def = def;
        this.evade = evade;
        this.luck = luck;
        this.level = level;
        this.attacked = 0;
        this.hp = health * 10 + 40;
    }
    update() {
        if (this.hp < 0) {
            this.hp = 0;
            $("#myHp").text(Math.round(this.hp));
            $('.message').text('You lost! You\'ll have to do better.' );
            location.replace("./index.html");
        } else {
            $("#myHp").text(Math.round(this.hp));
        }
    }
    attack(num, enemy){
        if (this.attacked == 1) {
            $('.message').text('You have already moved! Press continue.');
        } else {
        var damage = 0;
        if(num == 0){
            if(this.hit(12)){
                //document.getElementById('message').innerHTML = name + " used Give Speech! ";
                $('.message').text(this.name + ' used Give Speech!');
                if (this.crit()){
                    this.hp += 10 * 2;
                }
                else{
                    this.hp += 10;
                }
            } else {
                $('.message').text(this.name + ' Missed!');
            }//end miss
            
        } else if(num==1){
            if(this.hit(11)){
                $('.message').text(this.name + ' used Shady Tweet!');
                if (this.crit() ){
                    damage = this.calcDam(12) * 2;
                }
                else{
                    damage= this.calcDam(12);
                }
            }
            else{
                $('.message').text(this.name + ' Missed!');
            }
        } else if(num == 2){
            if(this.hit(7)){
                $('.message').text(this.name + ' used Riot!');
                if (this.crit()){
                    damage = this.calcDam(15) * 2;
                }
                else{
                    damage = this.calcDam(15);
                }
            }
            else{
                $('.message').text(this.name + ' Missed!');
            }
        } else {
            if(this.hit(11)){
                $('.message').text(this.name + ' used Commercial Ad!');
                if (this.crit() ){
                    damage = this.calcDam(12) * 2;
                }
                else{
                    damage = this.calcDam(12);
                }
            }
            else{
                $('.message').text(this.name + ' Missed!');
            }
        }
        this.attacked = 1;
        enemy.takeDam(damage);
        this.update();
        enemy.update()
        var audio = new Audio('../audio/smack.mp3');
        audio.play();
        var r = Math.round(Math.random() * 4);
        setTimeout(function(){
            enemy.attack(r);
        }, 1500);
        } // end if else moved already
    }
    
    hit(chance){
        var evade = chance > Math.random() * 20 - 5;
        return evade;
    }
    crit(){
         var v = Math.round( (2* Math.log(this.luck + 1) ) );
         var x = Math.floor( Math.random() * 10 );
         return v>x;
    }
    calcDam(pow){
        var dam;
        dam = pow * Math.sqrt(this.atkPow);
        //var rand =  Math.random() * (playerStats[1] / 4) + (playerStats[1] / 4);
        dam = Math.round(dam );
        return dam;
    }
    takeDam(dam){
        console.log(dam)
        this.hp -= Math.round( dam ) - this.def;
    }
}