class Player {
    constructor(name,atkPow,def,evade,luck,health,level) {
        this.name = name;
        this.atkPow = atkPow;
        this.def = def;
        this.evade = evade;
        this.luck = luck;
        this.health = health;
        this.level = level;
        this.stats = [atkPow, def, evade, luck, health];
    }
    toString(){
        return this.name + this.atkPow + this. def + this.evade + this.luck + this.health;
    }
    getHealth(){
        return this.health;
    }
    
    getName(){
        return this.name;
    }
    getStats() {
        return this.stats;
    }
    getLevel() {
        return this.level;
    }
    attack(){
        var damage = this.atkPow;
        return damage;
        
    }
    attack(num){
        
        
        var damage = 0;
        if(num == 0){
            if(this.hit(10)){
                //document.getElementById('message').innerHTML = name + " used Give Speech! ";
                $('.message').text(this.name + 'used Give Speech!');
                this.health+= 10;
                }//end not crit attack 1
            
            else{
                $('.message').text('Attack Missed!');
            }//end miss
        }else if(num==1){
            if(this.hit(6)){
                $('.message').text(this.name + 'used Shady Tweet!');
                if (this.crit() ){
                    damage = this.calcDam(8) * 2;
                }
                else{
                    damage= this.calcDam(8);
                }
            }
            else{
                $('.message').text('Attack Missed!');
            }
        }else if(num == 2){
            if(this.hit(5)){
                $('.message').text(this.name + 'used Riot!');
                if (this.crit() ){
                    damage = this.calcDam(10) * 2;
                }
                else{
                    damage= this.calcDam(10);
                }
            }
            else{
                $('.message').text('Attack Missed!');
            }
        }else{
            if(this.hit(10)){
                $('.message').text(this.name + 'used Commercial Ad!');
                if (this.crit() ){
                    damage = this.calcDam(5) * 2;
                }
                else{
                    damage= this.calcDam(5);
                }
            }
            else{
                $('.message').text('Attack Missed!');
            }
        }
        return damage + 10;
    }
    takeDamage(dam){
        var rand =  Math.random() * (this.atkPow / 2) + (this.atkPow / 4);
        dam -= rand;
        if(dam < this.health ){
            dam = this.health;
        }
        this.pubSup -= Math.round( dam );
    
    }
    hit(chan){
        var chan = Math.round( (chan - (2* Math.log(this.evade + 1) ) + 1) );
            if(chan <1)
                chan = 1;
        var x = Math.floor( Math.random() * 10 );
        
                
        return chan > x;
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
        
        /*
        if(dam <= playerStats[4] ){
            dam = playerStats[4];
        }
        */

        return dam;
    }
    takeDam(dam){
        var rand =  Math.random() * (this.def / 2) + (this.def / 4);
            dam -= rand;
        if(dam < this.health ){
            dam = this.health;
        }
        this.health -=Math.round( dam );
        console.log(this.health);
    }
    
     isAlive(pHp){
        return pHp > 0;
    }
}