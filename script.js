const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');

const count=document.getElementById('count');
const total=document.getElementById('total');

const movieSelect=document.getElementById('movie');

let price = +movieSelect.value;


container.addEventListener('click',e=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelected();
    }
});
movieSelect.addEventListener('change',e=>{
    price= +e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value);
    updateSelected();
});
function updateSelected(){
    const selectedSeat=document.querySelectorAll('.row .seat.selected');
    const countseat=selectedSeat.length;
    const seatsIndex=[...selectedSeat].map(seat=>[...seats].indexOf(seat));
    localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex));
    count.innerText=countseat;
    total.innerText=countseat*price;
}
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem("movieIndex",movieIndex);
    localStorage.setItem("movieIndex",moviePrice);
    
}
function showDatatoUI(){
    const selectedSeats=JSON.parse(localStorage.getItem("selectedSeats")); // 24-27
    const selectmoveIndex=localStorage.getItem("movieIndex"); // ตำแหน่งหนังที่เรากดจองไว้
    seats.forEach((seat,index)=>{
        if(selectedSeats.indexOf(index)>-1){
            seat.classList.add('selected');
        }
    });
    if(selectmoveIndex !=null){
        movieSelect.selectedIndex=selectmoveIndex;
    }
}

showDatatoUI();
updateSelected();