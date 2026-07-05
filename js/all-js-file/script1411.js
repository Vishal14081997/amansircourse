document.querySelector('#text').innerHTML =`<i class="fa-solid fa-user"></i>`


const data = document.querySelectorAll('.para');

for( let i=0; i<data.length; i++){
    data[i].style.color = 'red'
}
