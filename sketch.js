


function keyReleased() {
    if(keyCode === 32){
       cannon.attach(bomb.body);
       bomb.trajectory=[];
       Matter.Body.setPosition(bird.body,{x:200,y:50});
    }
}