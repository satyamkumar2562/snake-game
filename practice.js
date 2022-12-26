 


 
var  a = "Hello";
var b = 5.5;
var c = 10;
d = b + c;

 

 
document.write("Hello");
document.write("World");
 
console.log("World");
 

fun();


function fun(){
    console.log("having fun in game dev webinar!");
}


//funtoo();

//Another way to write the fn - These type of fns are not hoisted.

//var apple = 10;

var funtoo = function(){
    apple = 50;  //Globabl Variable
    console.log("Too much Fun!");
    return 5;
}
funtoo();

console.log(apple);

//Arrays and Loops 

a = ["Apple","Mango","Guava",10,20.5];

console.log(a);

for(var i=0;i<a.length;i++){
    console.log(i +" = "+a[i]);   
}
// For Each Loop
a.forEach(function(fruit){
    console.log(fruit);
});

//Operations over the arrays 
// Push = End of array
// Pop = Remove from end
// Unshift = Adds to the front
// Shift Removes from the front 
// Linear Search - indexOf()


if(5>3){
    console.log("Yes, greater");
}
else{
    console.log("No its not!");
}


//You basically need to fetch the div from the html

myDiv = document.getElementById('mydiv');
console.log(mydiv);

function mousePressed(someInfo){
    console.log("You pressed the mouse!");
    console.log(someInfo.clientX +" ," + someInfo.clientY);
}

 
myDiv.addEventListener('mousedown',mousePressed);
 

var bird = {
    x : 10,
    y : 30,
    color : "green",
    eggs : [1,2,3,4,5],
    
    fly: function(){
        console.log("Bird is flying"); 
        console.log(this.x);
        console.log(this.color);
    }  
};
console.log(bird.x); 



