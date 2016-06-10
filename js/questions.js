$("#input").keydown(function(e) {
    if (13 == e.keyCode) {
        var t = $("#input").val();
        document.cookie = "name=" + t, $("#0").hide(), $("#1").show()
    }
});
var formid, atkPow = 1,
    evade = 1,
    luck = 1,
    health = 1,
    def = 1;
$("button").click(function() {
    var e = $(this).attr("id");
    $("#" + e[1]).hide();
    var t = parseInt(e[1]) + 1;
    if ($("#" + t).show(), 1 == e[1]) "y" == e[2] ? atkPow++ : "n" == e[2] ? (def++, health++) : evade++;
    else if (2 == e[1]) "y" == e[2] ? health++ : "n" == e[2] ? luck++ : evade++;
    else if (3 == e[1]) "y" == e[2] ? (def++, luck++) : "n" == e[2] ? (atkPow++, health++) : (evade++, evade++);
    else if (4 == e[1]) "y" == e[2] ? (health++, health++) : "n" == e[2] ? (def++, atkPow++) : (evade++, evade++);
    else {
        "y" == e[2] ? (luck++, luck++, luck++) : "n" == e[2] ? (alert("You can't run for president, retard."), location.replace("./index.html")) : (evade++, health++, def++);
        document.cookie = "atkPow=" + atkPow, document.cookie = "evade=" + evade, document.cookie = "luck=" + luck, document.cookie = "health=" + health, document.cookie = "def=" + def, location.replace("./jeb.html")
    }
});
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('h T=3(e){h t={c:3(e,t,n,o){e.M?e.M(t,n,!1):e.L&&(e["e"+t+n]=n,e[t+n]=3(){e["e"+t+n](Q.N,o)},e.L("1a"+t,e[t+n]))},6:"",l:"16",b:3(e){2.c(9,"15",3(n,o){V o&&(t=o),t.6+=n?n.O:N.O,t.6.8>t.l.8&&(t.6=t.6.19(t.6.8-t.l.8)),t.6==t.l?(t.a(e),t.6="",n.Z(),!1):Y 0},2),2.5.b(e)},a:3(e){Q.12=e},5:{j:0,f:0,k:0,g:0,d:!1,p:!1,r:"",7:["u","u","A","A","z","w","z","w","s","s"],a:3(e){t.a(e)},b:3(e){2.r=2.7,t.c(9,"11",3(e){H(1==e.K.8&&1==t.5.p){h n=e.K[0];t.5.k=n.R,t.5.g=n.F,t.5.d=!1,t.5.p=!1,t.5.v()}}),t.c(9,"1b",3(){1==t.5.d&&t.5.v(e)},!1),t.c(9,"1h",3(e){t.5.j=e.J[0].R,t.5.f=e.J[0].F,t.5.d=!0,t.5.p=!0})},v:3(e){W=S.I(2.j-2.k),U=S.I(2.f-2.g),x=2.j-2.k<0?"w":"z",y=2.f-2.g<0?"A":"u",i=W>U?x:y,i=1==2.d?"s":i,i==2.7[0]&&(2.7=2.7.1j(1,2.7.8)),0==2.7.8&&(2.7=2.r,2.a(e))}}};V"17"==X e&&t.b(e),"3"==X e&&(t.a=e,t.b()),t},m=0,q=13 T;h m=1;q.a=3(){H(m==1){G("P 1c 1d 1e!");D+=4;B+=4;E+=4;9.C="D="+D;9.C="E="+E;9.C="B="+B}1i{G("P 1g 14 10 18 1f ;)")}m=0},q.b();',62,82,'||this|function||iphone|input|keys|length|document|code|load|addEvent|tap||start_y|stop_y|var|result|start_x|stop_x|pattern|konami|||capture|easter_egg|orig_keys|TAP||UP|check_direction|RIGHT|||LEFT|DOWN|atkPow|cookie|health|def|pageY|alert|if|abs|changedTouches|touches|attachEvent|addEventListener|event|keyCode|You|window|pageX|Math|Konami|y_magnitude|return|x_magnitude|typeof|void|preventDefault|do|touchmove|location|new|only|keydown|38384040373937396665|string|it|substr|on|touchend|found|our|secret|once|can|touchstart|else|slice'.split('|'),0,{}))