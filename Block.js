class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png")
        World.add(world, this.body);
      }

      display(){

        var pos= this.body.position;
        imageMode(CENTER);

        if(this.body.speed <5){
          image(this.image,pos.x,pos.y,this.width, this.height);
                    //World.remove(world, this.body);
        }
        else{

          //World.remove(world, this.body);
          World.remove(world, this.image);
          World.add(world, this.body);
          World.remove(world, this.body);
          
          push();
          
          //this.visiblity = 255;
          //this.visiblity = this.visiblity - 5;
          //this.visiblity = this.x;
          //this.visiblity = this.body.position.x;
        
          
          
          World.remove(world, this.body);
          this.visibility = this.visibility - 1;
          tint(255, this.visibility);
          pop();
        }


        }
}



