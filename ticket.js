const classes = 'Economy';
let totalPrice = 0;
const ticketPrice = 550;
let seatCount = 0;
let seatLeft = 40;


const busSeats = document.querySelectorAll('.seats');

for(let i = 0; i<busSeats.length; i++){
    const seat = busSeats[i];

    seat.addEventListener("click", function(){

        // get the title
        const title = seat.querySelector("span").innerText;

        const titleContainer = document.getElementById('title-container');

        const p = document.createElement("p");
        p.innerText = title+" "+classes+" "+ticketPrice;
        titleContainer.appendChild(p);

        // seat count and left
        seatCount++;
        document.getElementById('seat-count').innerText = seatCount;
        seatLeft--;
        document.getElementById('seat-left').innerText = seatLeft;

        // total price
        totalPrice += ticketPrice;
        document.getElementById('total-price').innerText = totalPrice;
        // seat disabled
        seat.disabled = true;
        seat.style.backgroundColor = 'rgb(29,209,0)';
        
    });
};



