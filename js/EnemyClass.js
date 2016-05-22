class Enemy {
    constructor(name,atkPow,def,evade,luck,health,level, atkList) {
        this.name = name;
        this.atkPow = atkPow;
        this.def = def;
        this.evade = evade;
        this.luck = luck;
        this.level = level;
        this.atk0 = atkList[0];
        this.atk1 = atkList[1];
        this.atk2 = atkList[2];
        this.atk3 = atkList[3];
        this.hp = health * 10 + 40;
    }
    update() {
        if (this.hp < 0) {
            this.hp = 0;
            $("#opHp").text(Math.round(this.hp));
            $('.message').text(this.name + ' lost the game!' );
            $("body").trigger("domChanged");
        } else {
            $("#opHp").text(Math.round(this.hp));
        }
    }
    attack(num){
        var damage = 0;
        if(num == 0){
            if(this.hit(this.atk0[2])){
                //document.getElementById('message').innerHTML = name + " used Give Speech! ";
                $('.message').text(this.name + ' used ' + this.atk0[0] +'!');
                if (this.atk0[1] < 0) {
                    if (this.crit()){
                        this.hp -= this.atk0[1] * 2;
                    }
                    else {
                        this.hp -= this.atk0[1];
                    }
                }
                else {
                    if (this.crit()){
                        damage = this.calcDam(this.atk0[1]) * 2;
                    }
                    else{
                        damage= this.calcDam(this.atk0[1]);
                    }
                }
            } else {
                $('.message').text(this.name + ' Missed!');
            }//end miss
            
        } else if(num==1){
            if(this.hit(this.atk1[2])){
                $('.message').text(this.name + ' used ' + this.atk1[0] +'!');
                if (this.atk1[1] < 0) {
                    if (this.crit()){
                        this.hp -= this.atk1[1] * 2;
                    }
                    else {
                        this.hp -= this.atk1[1];
                    }
                }
                else {
                    if (this.crit()){
                        damage = this.calcDam(this.atk1[1]) * 2;
                    }
                    else{
                        damage= this.calcDam(this.atk1[1]);
                    }
                }
            }
            else{
                $('.message').text(this.name + ' Missed!');
            }
        } else if(num == 2){
            if(this.hit(this.atk2[2])){
                $('.message').text(this.name + ' used ' + this.atk2[0] +'!');
                if (this.atk2[1] < 0) {
                    if (this.crit()){
                        this.hp -= this.atk2[1] * 2;
                    }
                    else {
                        this.hp -= this.atk2[1];
                    }
                }
                else {
                    if (this.crit()){
                        damage = this.calcDam(this.atk2[1]) * 2;
                    }
                    else{
                        damage= this.calcDam(this.atk2[1]);
                    }
                }
            }
            else{
                $('.message').text(this.name + ' Missed!');
            }
        } else {
            if(this.hit(this.atk3[2])){
                $('.message').text(this.name + ' used ' + this.atk3[0] +'!');
                if (this.atk3[1] < 0) {
                    if (this.crit()){
                        this.hp -= this.atk3[1] * 2;
                    }
                    else {
                        this.hp -= this.atk3[1];
                    }
                }
                else {
                    if (this.crit()){
                        damage = this.calcDam(this.atk3[1]) * 2;
                    }
                    else{
                        damage= this.calcDam(this.atk3[1]);
                    }
                }
            }
            else{
                $('.message').text(this.name + ' Missed!');
            }
        }
        player.takeDam(damage);
        player.attacked = 0;
        player.update();
        this.update();
        var audio = new Audio('smack.mp3');
        audio.play();
    }
    
    
    hit(chance){
        var evade = chance > Math.random() * 17;
        return evade;
    }
    crit(){
         var v = Math.round( (2* Math.log(this.luck) ) );
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