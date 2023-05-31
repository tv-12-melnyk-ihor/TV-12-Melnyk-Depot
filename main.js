function goBack(){
  window.history.back();
}


const seats = document.getElementsByClassName('row-seat');

for (let i = 0; i < seats.length; i++) {
  seats[i].addEventListener('click', function() {
    this.classList.add('booked');
  });
}