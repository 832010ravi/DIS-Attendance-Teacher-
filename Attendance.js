
const currentYear = new Date().getFullYear();

const currentMonth = new Date().getMonth() + 1;

const currentDay = new Date().getDate();

var together = [currentDay, currentMonth, currentYear].join('-');
console.log(together);


function save() {
  var r1 = document.getElementById("pa1");
  var r2 = document.getElementById("pa2");
  var r3 = document.getElementById("pa3");
  var r4 = document.getElementById("pa4");
  var r5 = document.getElementById("pa5");
  var r6 = document.getElementById("pa6");
  var r7 = document.getElementById("pa7");
  var r8 = document.getElementById("pa8");
  var r9 = document.getElementById("pa9");
  var r10 = document.getElementById("pa10");
  var r11 = document.getElementById("pa11");
  var r12 = document.getElementById("pa12");
  var r13 = document.getElementById("pa13");
  var r14 = document.getElementById("pa14");
  var r15 = document.getElementById("pa15");
  var r16 = document.getElementById("pa16");
  var r17 = document.getElementById("pa17");
  var r18 = document.getElementById("pa18");
  var r19 = document.getElementById("pa19");
  var r20 = document.getElementById("pa20");


  if(r1.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        1:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        1:"a"
      });
}
  
if(r2.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        2:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        2:"a"
      });
}

if(r3.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        3:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        3:"a"
      });
}

if(r4.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        4:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        4:"a"
      });
}

if(r5.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        5:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        5:"a"
      });
}

if(r6.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        6:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        6:"a"
      });
}

if(r7.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        7:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        7:"a"
      });
}

if(r8.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        8:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        8:"a"
      });
}

if(r9.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        9:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        9:"a"
      });
}

if(r10.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        10:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        10:"a"
      });
}

if(r11.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        11:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        11:"a"
      });
}

if(r12.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        12:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        12:"a"
      });
}

if(r13.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        13:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        13:"a"
      });
}

if(r14.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        14:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        14:"a"
      });
}

if(r15.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        15:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        15:"a"
      });
}

if(r16.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        16:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        16:"a"
      });
}

if(r17.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        17:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        17:"a"
      });
}

if(r18.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        18:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        18:"a"
      });
}

if(r19.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        19:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        19:"a"
      });
}

if(r20.checked) {
  console.log("p");
  firebase.database().ref("/").child(together).update({
        20:"p"
      });
}else {
  console.log("a");

  firebase.database().ref("/").child(together).update({
        20:"a"
      });
}
}