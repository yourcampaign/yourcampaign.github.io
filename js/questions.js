$("#input").keydown(function(e){if(13==e.keyCode){var t=$("#input").val();document.cookie="name="+t,$("#0").hide(),$("#1").show()}});var formid,atkPow=1,evade=1,luck=1,health=1,def=1;$("button").click(function(){var e=$(this).attr("id");$("#"+e[1]).hide();var t=parseInt(e[1])+1;if($("#"+t).show(),1==e[1])"y"==e[2]?atkPow++:"n"==e[2]?(def++,health++):evade++;else if(2==e[1])"y"==e[2]?health++:"n"==e[2]?luck++:evade++;else if(3==e[1])"y"==e[2]?(def++,luck++):"n"==e[2]?(atkPow++,health++):(evade++,evade++);else if(4==e[1])"y"==e[2]?(health++,health++):"n"==e[2]?(def++,atkPow++):(evade++,evade++);else{"y"==e[2]?(luck++,luck++,luck++):"n"==e[2]?(alert("You can't run for president, retard."),location.replace("./index.html")):(evade++,health++,def++);document.cookie="atkPow="+atkPow,document.cookie="evade="+evade,document.cookie="luck="+luck,document.cookie="health="+health,document.cookie="def="+def,location.replace("./jeb.html")}});var Konami=function(e){var t={addEvent:function(e,t,n,o){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(e["e"+t+n]=n,e[t+n]=function(){e["e"+t+n](window.event,o)},e.attachEvent("on"+t,e[t+n]))},input:"",pattern:"38384040373937396665",load:function(e){this.addEvent(document,"keydown",function(n,o){return o&&(t=o),t.input+=n?n.keyCode:event.keyCode,t.input.length>t.pattern.length&&(t.input=t.input.substr(t.input.length-t.pattern.length)),t.input==t.pattern?(t.code(e),t.input="",n.preventDefault(),!1):void 0},this),this.iphone.load(e)},code:function(e){window.location=e},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:!1,capture:!1,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],code:function(e){t.code(e)},load:function(e){this.orig_keys=this.keys,t.addEvent(document,"touchmove",function(e){if(1==e.touches.length&&1==t.iphone.capture){var n=e.touches[0];t.iphone.stop_x=n.pageX,t.iphone.stop_y=n.pageY,t.iphone.tap=!1,t.iphone.capture=!1,t.iphone.check_direction()}}),t.addEvent(document,"touchend",function(){1==t.iphone.tap&&t.iphone.check_direction(e)},!1),t.addEvent(document,"touchstart",function(e){t.iphone.start_x=e.changedTouches[0].pageX,t.iphone.start_y=e.changedTouches[0].pageY,t.iphone.tap=!0,t.iphone.capture=!0})},check_direction:function(e){x_magnitude=Math.abs(this.start_x-this.stop_x),y_magnitude=Math.abs(this.start_y-this.stop_y),x=this.start_x-this.stop_x<0?"RIGHT":"LEFT",y=this.start_y-this.stop_y<0?"DOWN":"UP",result=x_magnitude>y_magnitude?x:y,result=1==this.tap?"TAP":result,result==this.keys[0]&&(this.keys=this.keys.slice(1,this.keys.length)),0==this.keys.length&&(this.keys=this.orig_keys,this.code(e))}}};return"string"==typeof e&&t.load(e),"function"==typeof e&&(t.code=e,t.load()),t},konami=0,easter_egg=new Konami;easter_egg.code=function(){0==konami&&(health+=4,document.cookie="health="+health)},easter_egg.load();