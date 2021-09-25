class snow{
constructor(x,y,width,height){
    var options={
        restitution: 1,
        friction: 0,
        isStatic:false
    }
   
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.image=loadImage("snow5.webp");
     World.add(world,this.body);
     this.x=x
     this.y=y
     this.width=height
     this.height=width
}
display(){
    var pos=this.body.position;

    translate(pos.x,pos.y)
    image(this.image,this.x,this.y,100,100)
}

}