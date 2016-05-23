function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

document.onkeypress = function (e) { 
    e = e || window.event; 
    var charCode = e.charCode || e.keyCode, 
      c = String.fromCharCode(charCode); 
    if (c == "1") {
        player.attack(0, enemy);
    } else if (c == "2") {
        player.attack(1, enemy);
    } else if (c == "3") {
        player.attack(2, enemy);
    } else if (c == "4") {
        player.attack(3, enemy);
    } else {
      console.log(c);
    }
      
};