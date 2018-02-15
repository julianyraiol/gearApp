var ativo = 0;
var t0 = 0;
var cont = 0;

function onDeviceMotion(event){
    var x = event.acceleration.x.toFixed(2);
    var y = event.acceleration.y.toFixed(2);
    var z = event.acceleration.z.toFixed(2);
    var t = ((new Date().getSeconds() + 60) - t0)%60;
    
    if(ativo && t <= 30){
    	 var components = {
    		x: x,
    		y: y,
    		z: z,
    		t : t
    	 }
    	
    	counter.innerHTML = cont++;
    	start.innerHTML = components.t;

    	console.log(components.x + " " + components.y + " " + components.z + " " + components.t+ " " + new Date().getSeconds() );
    	
    }
    else{
    	start.innerHTML = "Start";
    }
}

window.addEventListener('devicemotion', onDeviceMotion);

var start = document.querySelector("#seconds");
var counter = document.querySelector("#counter");

start.addEventListener('click', function(){
	
	ativo^=1;
	
	if(ativo){
		t0 = new Date().getSeconds();
	}
	else{
		cont = t0 = 0;
		start.innerHTML = "Start";
	}
	
});


