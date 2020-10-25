function showImage(){
  document.getElementById('secretImage').style.visibility = document.getElementById('secretImage').style.visibility == 'visible' ? 'hidden' : 'visible';
}
const pressed = [];
const secretCode = '39846977807669798338';
window.addEventListener('keyup', (e) => {
console.log(e.keyCode);
pressed.push(e.keyCode);
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
if(pressed.join('').includes(secretCode)){
console.log('DING DING!');
showImage();
}
console.log(pressed);
if (e.keyCode === 32) {
window.location.reload(false);
};
});