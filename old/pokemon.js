var player = new Player('player1', 2,2,2,2,2);
var enemy = new Enemy('Hillary', player );

var oname = "Hillary";
var olevel = 5;
var oHP = 100;
//oAttacks = [flameThrower, dragonClaw, ember, growl];

var pname = "Trump";
var plevel = 3;
var pHP = 100;
var pMove = 0;
//burn, poison, confusion will take health each turn
var pCondition;

$( document ).ready(function() {
    $( ".oname" ).text(oname);
    $( ".olevel" ).text(olevel);
    $( ".oimage").attr('src',"./images/"+oname+"/sprite.gif");
    
    $( ".pname" ).text(pname);
    $( ".plevel" ).text(plevel);
    $( ".pimage").attr('src',"./images/"+pname+"/sprite.gif");
});

function takeDamage(id) {
    
    
}

function waterCannon() {
    if (pMove == 0 && pHP != 0) {
        var miss = Math.floor( (Math.random() * 10) + 1 );
        if (miss == 1) {
            $('#message').text(pname + "'s attack missed! ");
        } else {
            $('#message').text(pname + " used water cannon.");
            var critical = Math.floor((Math.random() * 10) + 1); // critical
            if (critical == 4) {
                for(var x = 0; x < 2; x++) {
                    oHP = oHP - 30; // yes critical
                    $('#message').text("Critical hit!");
                }
            } else {
                oHP = oHP - 30; // no critical
            }
            
            if (oHP < 0) { 
                oHP = 0 
                $('#message').text(oname + " fainted! ") // update message
            } //faint
            
            $('#oHP').text(oHP); // update hp
            
        }
        
        pMove = 1;
    }
}

function waterPulse() {
    if (pMove == 0 && pHP != 0) {
        var miss = Math.floor( (Math.random() * 10) + 1 );
        if (miss == 1) {
            $('#message').text(pname + "'s attack missed! ");
        } else {
            $('#message').text(pname + " used water pulse.");
            var critical = Math.floor((Math.random() * 10) + 1); // critical
            if (critical == 4) {
                for(var x = 0; x < 2; x++) {
                    oHP = oHP - 30; // yes critical
                    $('#message').text("Critical hit!");
                }
            } else {
                oHP = oHP - 30; // no critical
            }
            
            if (oHP < 0) { 
                oHP = 0 
                $('#message').text(oname + " fainted! ") // update message
            } //faint
            
            $('#oHP').text(oHP); // update hp
            
        }
        
        pMove = 1;
    }
}

function surf() {
    if (pMove == 0 && pHP != 0) {
        var miss = Math.floor( (Math.random() * 10) + 1 );
        if (miss == 1) {
            $('#message').text(pname + "'s attack missed! ");
        } else {
            $('#message').text(pname + " used surf.");
            var critical = Math.floor((Math.random() * 10) + 1); // critical
            if (critical == 4) {
                for(var x = 0; x < 2; x++) {
                    oHP = oHP - 30; // yes critical
                    $('#message').text("Critical hit!");
                }
            } else {
                oHP = oHP - 30; // no critical
            }
            
            if (oHP < 0) { 
                oHP = 0 
                $('#message').text(oname + " fainted! ") // update message
            } //faint
            
            $('#oHP').text(oHP); // update hp
            
        }
        
        pMove = 1;
    }
}

function tackle() {
    if (pMove == 0 && pHP != 0) {
        var miss = Math.floor( (Math.random() * 10) + 1 );
        if (miss == 1) {
            $('#message').text(pname + "'s attack missed! ");
        } else {
            $('#message').text(pname + " used tackle.");
            var critical = Math.floor((Math.random() * 10) + 1); // critical
            if (critical == 4) {
                for(var x = 0; x < 2; x++) {
                    oHP = oHP - 30; // yes critical
                    $('#message').text("Critical hit!");
                }
            } else {
                oHP = oHP - 30; // no critical
            }
            
            if (oHP < 0) { 
                oHP = 0 
                $('#message').text(oname + " fainted! ") // update message
            } //faint
            
            $('#oHP').text(oHP); // update hp
            
        }
        
        pMove = 1;
    }
}

