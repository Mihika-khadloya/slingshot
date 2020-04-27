class Boxes{

    constructor(x,y){
        var options={
            friction: 0.5,
            restitution:0.8
        }
        this.body = Bodies.rectangle(x,y,25,35,options);
        this.width = 25;
        this.height = 35;
        World.add(world,this.body);
    }
    display(){
       
        rectMode(CENTER);
        strokeWeight(3);
        stroke("red");
        fill("white");
        rect(this.body.position.x,this.body.position.y,25,35);
       
    }
}