
console.log("Sneaky person, checking the console and stuff");

let direction = null;
let oldScroll = 0;
window.onscroll = function(e) {
  // print "false" if direction is down and "true" if up
 if(this.oldScroll > this.scrollY) {
   if(direction !== "down") {
     document.getElementById("box").style.transform = "";
   }
   direction = "down"
 } else {
   if(direction !== 'up'){
     document.getElementById("box").style.transform = "rotate(180deg)";
   }
   direction = "up";
 }
  this.oldScroll = this.scrollY;
}