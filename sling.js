class Chain {
    constructor(body1,point2){
    var options={
         bodyA:body1,
         pointB:point2,
         stiffness:0.05,
         length:5
    }
        this.bodyA=body1
        this.pointB=point2
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyA=null
    }
     attach(body){
        this.chain.bodyA=body
     }
    display(){
        
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB
        strokeWeight(3);
        push();
        if(pointA.x<300){
            strokeWeight(3);
            stroke("#44DDD2");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
           
        }
        else{
            strokeWeight(3);
            stroke("#44DDD2");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
        pop();
        }
    }
    
}