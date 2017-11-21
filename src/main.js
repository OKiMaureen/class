//base class
class Vehicle{
    constructor(color,type,year){
        this.name='Vehicle';
        this.color =color;
        this.type =type;
        this.year =year;

    }
    accelerate(){
        return this.name+"move forward";
    }
    

}
//instatiating a car model of a vehicle
let v = new Vehicle(red,car);
 return "This is a " + v.red +v.name;



//inheritance to class 'car' from class 'vehicle'
class Car extends Vehicle{
  constructor(color,type,year){
    super();
    this.color=color;
    this.type=type;
    this.year =year;

}
}
//encapsulating class Car into toyota
 let toyota = new Car('red','new',2012);
   

   
   class Truck extends Vehicle{
    constructor(color,type,year){
      super();
      this.color=color;
    }
      accelerate(){
        return this.name+"move forward";  
        }
        
      }

let Hiace = new Truck
 




 