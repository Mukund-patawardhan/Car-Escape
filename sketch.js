var car,police1,police2;
var carsGroup;
var helicopter;
var r;
var car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13,car14,car15,car16,car17,car18,car19,car20,car21,car22,car23,car24,car25,car26,car27,car28,car29,car30,car31;
var life=10,lifeCount,life1,life2,life3,life4,life5,life6,life7,life8,life9,life10;
var boomIMG,blankIMG,boom;
var policeIMG,bikerIMG;
var distance=0;
var house,houseIMG;
var rightSide,leftSide;
var numb=30;

function preload(){
   helicopter=loadAnimation("helicopter1.png","helicopter2.png","helicopter3.png","helicopter4.png");

   car1=loadImage("car 1.png");
   car2=loadImage("car 2.png");
   car3=loadImage("car 3.png");
   car4=loadImage("car 4.png");
   car5=loadImage("car 5.png");
   car6=loadImage("car 6.png");
   car7=loadImage("car 6.png");
   car8=loadImage("car 8.png");
   car9=loadImage("car 9.png");
   car10=loadImage("car 10.png");
   car11=loadImage("car 11.png");
   car12=loadImage("car 12.png");
   car13=loadImage("car 13.png");
   car14=loadImage("car 14.png");
   car15=loadImage("car 15.png");
   car16=loadImage("car 16.png");
   car17=loadImage("car 17.png");
   car18=loadImage("car 18.png");
   car19=loadImage("car 19.png");
   car20=loadImage("car 20.png");
   car21=loadImage("car 21.png");
   car22=loadImage("car 22.png");
   car23=loadImage("car 23.png");
   car24=loadImage("car 24.png");
   car25=loadImage("car 25.png");
   car26=loadImage("car 26.png");
   car27=loadImage("car 27.png");
   car28=loadImage("car 28.png");
   car29=loadImage("car 29.png");
   car30=loadImage("car 30.png");
   car31=loadImage("car 31.png");
 
   life1=loadImage("Life1.png");
   life2=loadImage("Life2.png");
   life3=loadImage("Life3.png");
   life4=loadImage("Life4.png");
   life5=loadImage("Life5.png");
   life6=loadImage("Life6.png");
   life7=loadImage("Life7.png");
   life8=loadImage("Life8.png");
   life9=loadImage("Life9.png");
   life10=loadImage("Life10.png");
   lifeCount=createSprite(1180,100);

   boomIMG=loadImage("boom1.png");
   blankIMG=loadImage("blank.png");
   boom=createSprite(0,0,1300,600);

   policeIMG=loadImage("police1.png");

   bikerIMG=loadImage("bike.png");

   houseIMG=loadImage("House.png");

}

function setup(){
    createCanvas(1355,624);
    house=createSprite(680,-30700);

    car = createSprite(170,110);
    car.addImage(bikerIMG);
    car.scale=0.2;

    police2=createSprite(600,800,20,20);
    police2.setCollider("rectangle",0,0,100,500);
    police2.addAnimation("h",helicopter);

    carsGroup=createGroup();

    police1 = createSprite(170,820);
    police1.addImage(policeIMG);

    rightSide=createSprite(1355,-20000,10,40000);
    leftSide=createSprite(0,-20000,10,40000);
    
}

function draw(){
    background("black");

    police2.depth=100000;

    numb=30;

    boom.addImage(blankIMG);
    frameRate(60);

    boom.x=car.x;
    boom.y=car.y;

    police1.displace(car,Crash);
    police2.displace(car,Explosion);
    carsGroup.displace(car,Crash);

    house.addImage(houseIMG);
    house.scale=1.5;
    
    imageMode(CENTER);
    //image(trackIMG,680,-15600,1355,31200);

    if(keyDown(LEFT_ARROW)){
        changePosition(car,-30,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(car,30,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(car,0,-10);
    }else if(keyDown(DOWN_ARROW)){
        changePosition(car,0,-30);
        police2.attractionPoint(20,car.x,car.y);
        numb=5;
    }

    Cars();

    for (var i = 31000; i > -30500; i=i-100) {
        stroke("white");
        strokeWeight(5);
        line(339*1,i,339*1,i-50);
        line(339*2,i,339*2,i-50);
        line(339*3,i,339*3,i-50);
     }


    if(car.y-police2.y>-500 && car.y-police2.y<500){
        camera.position.x = 680;
        camera.position.y = car.y;
        textSize(60);
        textFont("Jokerman");
        text("POLICE HELICOPTER APPROACHING",car.x,car.y+200);
        Lives(car.y-250);
    }else{
        if(car.y-police1.y>-600){
            camera.position.x = 680;
            camera.position.y = car.y;
            textSize(60);
            textFont("Jokerman");
            text("POLICE CAR APPROACHING",car.x,car.y+100);
            Lives(car.y-250);
        }else{
            camera.position.x = 680;
            camera.position.y = car.y-250;
            Lives(car.y-470);
            if(car.y>-30000){
            textSize(20);
            text("INSTRUCTIONS-- Use  Arrow  Keys  to  Escape  The  Incoming  Cars , UP  ARROW  To  Move  Front",20,car.y-500);
            text("Press  Down  Arrow  for  Boost ,  But  Beware,  Boost  Can  Attract  Police  And  Increase  The  Number  of  Cars  Incoming",20,car.y-450);
            text("Beware  Of  POLICE  Car  And  Helicopter",20,car.y-400);
            text("If  You  crash  onto  a  police  Car  or  any  normal  Car ,  You  Lose  1  Life",20,car.y-350);
            text("If  Helicopter  Finds  And  Reaches  You,  The Helicopter's  Bombs  will  Destroy  You",20,car.y-300);
            text("Escape  Everything  And  Reach  Your  House  To  Win",20,car.y-250);
            }
        }
    }

    if(frameCount%40===0){
        r=random(-180,0);
    }
    if(frameCount>100){
    police2.setSpeed(random(5,25),r);
    if(frameCount%50<10){
        police2.attractionPoint(15,car.x,car.y);
    }
    }else{
        police2.setSpeed(0,0);
    }
    police2.frameDelay=1.5;

    rightSide.displace(car);
    leftSide.displace(car);
    rightSide.displace(police2);
    leftSide.displace(police2);

    police1.x=car.x;
    if(frameCount%10===0){
    police1.velocityY=random(-25,10);
    }

    if(car.y<-30500){
        textSize(140);
        textFont("Jokerman");
        text("YOU                   WIN",0,car.y-300);
        carsGroup.removeSprites();
        frameRate(0);
    }

    drawSprites();
}

function changePosition(object,x,y){
    object.x = object.x + x;
    object.y = object.y + y;
}

function Cars(){
    console.log(numb);
     if(frameCount%numb===0){
         var Car=createSprite(680,car.y-600);
         Car.shapeColor="green";
         Car.x=Math.round(random(0,1360));
         Car.velocityY=random(5,15);
         var rand=Math.round(random(1,31));
         switch(rand) {
                case 1: Car.addImage(car1);
                    break;
                case 2: Car.addImage(car2);
                    break;
                case 3: Car.addImage(car3);
                    break;
                case 4: Car.addImage(car4);
                    break;
                case 5: Car.addImage(car5);
                    break;
                case 6: Car.addImage(car6);
                    break;
                case 7: Car.addImage(car7);
                    break;
                case 8: Car.addImage(car8);
                    break;
                case 9: Car.addImage(car9);
                    break;
                case 10: Car.addImage(car10);
                    break;
                case 11: Car.addImage(car11);
                    break;
                case 12: Car.addImage(car12);
                    break;
                case 13: Car.addImage(car13);
                    break;   
                case 14: Car.addImage(car14);
                    break;
                case 15: Car.addImage(car15);
                    break;
                case 16: Car.addImage(car16);
                    break;
                case 17: Car.addImage(car17);
                    break;
                case 18: Car.addImage(car18);
                    break;
                case 19: Car.addImage(car19);
                    break;
                case 20: Car.addImage(car20);
                    break;
                case 21: Car.addImage(car21);
                    break;
                case 22: Car.addImage(car22);
                    break;
                case 23: Car.addImage(car23);
                    break;
                case 24: Car.addImage(car24);
                    break;
                case 25: Car.addImage(car25);
                    break;
                case 26: Car.addImage(car26);
                    break;
                case 27: Car.addImage(car27);
                    break;
                case 28: Car.addImage(car28);
                    break;
                case 29: Car.addImage(car29);
                    break;
                case 30: Car.addImage(car30);
                    break;
                case 31: Car.addImage(car31);
                    break;
            default: break;
         }
         Car.scale=0.5;
         carsGroup.add(Car);
     }
}

function Crash(){
    life=life-1;
    carsGroup.removeSprites();
    police1.y=car.y+800;
    frameRate(5);
    boom.addImage(boomIMG);
}

function Explosion(){
    life=0;
    boom.addImage(boomIMG);
    boom.scale=3;
    textSize(100);
    textFont("Jokerman");
    text("BUSTED",680,car.y-450);
    carsGroup.removeSprites();
    
}

function Lives(y){
    lifeCount.y=y;
    switch(life) {
        case 0: lifeCount.addImage(blankIMG);
                textSize(100);
                textFont("Jokerman");
                text("BUSTED",680,car.y-450);
                frameRate(0);
                break;
        case 1: lifeCount.addImage(life1);
                lifeCount.scale=0.2;
                lifeCount.y=lifeCount.y+50;
                break;
        case 2: lifeCount.addImage(life2);
                lifeCount.scale=0.2;
                lifeCount.y=lifeCount.y+50;
                break;
        case 3: lifeCount.addImage(life3);
                lifeCount.scale=0.2;
                lifeCount.y=lifeCount.y+50;
                break;
        case 4: lifeCount.addImage(life4);
                lifeCount.scale=0.2;
                lifeCount.y=lifeCount.y+50;
                break;
        case 5: lifeCount.addImage(life5);
                lifeCount.scale=0.2;
                lifeCount.y=lifeCount.y-50;
                break;
        case 6: lifeCount.addImage(life6);
                lifeCount.scale=0.5;
                break;
        case 7: lifeCount.addImage(life7);
                lifeCount.scale=0.5;
                break;
        case 8: lifeCount.addImage(life8);
                lifeCount.scale=0.5;  
                break;
        case 9: lifeCount.addImage(life9);
                lifeCount.scale=0.5;
                break;
        case 10: lifeCount.addImage(life10);
                lifeCount.scale=0.5;
                break;
        default: break;
      }
}
