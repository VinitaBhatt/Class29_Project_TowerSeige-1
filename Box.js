class Box{
    constructor(x,y,color){
        var options ={
            restitution:0.5,
            friction : 0.5

        }

        this.body = Bodies.rectangle(x,y,40,40,options);
        this.width=40;
        this.height=40;
        this.color=color;
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.position.angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
    }
}