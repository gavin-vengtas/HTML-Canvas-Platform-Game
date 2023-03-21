const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let pressed = false;

console.log(ctx);

class Player{
    constructor(x,y,height,width,velocity){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.velocity = velocity;
			this.dir = null;
			this.gravity = 0.1;
    }
	
	render(){
		//color player object
		ctx.fillStyle = "#ff00ff";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
	update(){
		//adds gravity
		this.y+=this.gravity;
		
		//adds direction
		if(pressed===true){
			if(this.dir==='left'){
				this.x-=this.velocity;
			}else if(this.dir==='right'){
				this.x+=this.velocity;
			}else if(this.dir==='up'){
				this.y-=this.velocity;
			}
		}else{
			this.dir = null;
		}
	}
}

//instantiate player object
const player = new Player(10,10,10,10,10);

//keeps on running
const animate = () => {	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	window.requestAnimationFrame(animate);
	player.render();
	player.update();
}

animate();

//listen for button press and start action
window.addEventListener("keydown",({code})=>{
	pressed = true;
	console.log("Pressed: "+code);
	
	if(code==='KeyD'){
		player.dir = 'right';
	}else if(code==='KeyA'){
		player.dir = 'left';
	}else if(code==='KeyA'){
		player.dir = 'up';
	}
});

//listen for key release and stop action
window.addEventListener("keyup",({code})=>{
	pressed = false;
	console.log("Pressed: "+code);
});