const bluescore = document.querySelector('#bluescore');

const move_minus = document.querySelector('#move_minus');
const lower_minus = document.querySelector('#lower_minus');
const outer_minus = document.querySelector('#outer_minus');
const inner_minus = document.querySelector('#inner_minus');
const climb_minus = document.querySelector('#climb_minus');
const balancedclimb_minus = document.querySelector('#balancedclimb_minus');

const move_plus = document.querySelector('#move_plus');
const lower_plus = document.querySelector('#lower_plus');
const outer_plus = document.querySelector('#outer_plus');
const inner_plus = document.querySelector('#inner_plus');
const climb_plus = document.querySelector('#climb_plus');
const balancedclimb_plus = document.querySelector('#balancedclimb_plus');


const move_plusclick = document.querySelector('#move_plusclick');
const lower_plusclick = document.querySelector('#lower_plusclick');
const outer_plusclick = document.querySelector('#outer_plusclick');
const inner_plusclick = document.querySelector('#inner_plusclick');
const climb_plusclick = document.querySelector('#climb_plusclick');
const balancedclimb_plusclick = document.querySelector('#balancedclimb_plusclick');

let bluetotal = 0

let move_plusclicktotal = 0;

let lower_plusclicktotal = 0;

let outer_plusclicktotal = 0;

let inner_plusclicktotal = 0;

let climb_plusclicktotal = 0;

let balancedclimb_plusclicktotal = 0;


move_minus.addEventListener('click', () =>{
    bluetotal -= 5;
    bluescore.innerText = bluetotal;
    move_plusclicktotal -= 1
    move_plusclick.innerText = move_plusclicktotal;
})

move_plus.addEventListener('click', () =>{
    bluetotal += 5;
    bluescore.innerText = bluetotal;
    move_plusclicktotal += 1
    move_plusclick.innerText = move_plusclicktotal;
})


lower_minus.addEventListener('click', () =>{
    bluetotal -= 1;
    bluescore.innerText = bluetotal;
    lower_plusclicktotal -= 1
    lower_plusclick.innerText = lower_plusclicktotal;
})

lower_plus.addEventListener('click', () =>{
    bluetotal += 1;
    bluescore.innerText = bluetotal;
    lower_plusclicktotal += 1
    lower_plusclick.innerText = lower_plusclicktotal;
})

outer_minus.addEventListener('click', () =>{
    bluetotal -= 2;
    bluescore.innerText = bluetotal;
    outer_plusclicktotal -= 1
    outer_plusclick.innerText = outer_plusclicktotal;
})

outer_plus.addEventListener('click', () =>{
    bluetotal += 2;
    bluescore.innerText = bluetotal;
    outer_plusclicktotal += 1
    outer_plusclick.innerText = outer_plusclicktotal;
})

inner_minus.addEventListener('click', () =>{
    bluetotal -= 3;
    bluescore.innerText = bluetotal;
    inner_plusclicktotal -= 1
    inner_plusclick.innerText = inner_plusclicktotal;
})

inner_plus.addEventListener('click', () =>{
    bluetotal += 3;
    bluescore.innerText = bluetotal;
    inner_plusclicktotal += 1
    inner_plusclick.innerText = inner_plusclicktotal;
})

climb_minus.addEventListener('click', () =>{
    bluetotal -= 25;
    bluescore.innerText = bluetotal;
    climb_plusclicktotal -= 1
    climb_plusclick.innerText = climb_plusclicktotal;
})

climb_plus.addEventListener('click', () =>{
    bluetotal += 25;
    bluescore.innerText = bluetotal;
    climb_plusclicktotal += 1
    climb_plusclick.innerText = climb_plusclicktotal;
})

balancedclimb_minus.addEventListener('click', () =>{
    bluetotal -= 15;
    bluescore.innerText = bluetotal;
    balancedclimb_plusclicktotal -= 1
    balancedclimb_plusclick.innerText = balancedclimb_plusclicktotal;
})

balancedclimb_plus.addEventListener('click', () =>{
    bluetotal += 15;
    bluescore.innerText = bluetotal;
    balancedclimb_plusclicktotal += 1
    balancedclimb_plusclick.innerText = balancedclimb_plusclicktotal;
})

const redscore = document.querySelector('#redscore');

const redmove_minus = document.querySelector('#redmove_minus');
const redlower_minus = document.querySelector('#redlower_minus');
const redouter_minus = document.querySelector('#redouter_minus');
const redinner_minus = document.querySelector('#redinner_minus');
const redclimb_minus = document.querySelector('#redclimb_minus');
const redbalancedclimb_minus = document.querySelector('#redbalancedclimb_minus');

const redmove_plus = document.querySelector('#redmove_plus');
const redlower_plus = document.querySelector('#redlower_plus');
const redouter_plus = document.querySelector('#redouter_plus');
const redinner_plus = document.querySelector('#redinner_plus');
const redclimb_plus = document.querySelector('#redclimb_plus');
const redbalancedclimb_plus = document.querySelector('#redbalancedclimb_plus');

const redmove_plusclick = document.querySelector('#redmove_plusclick');
const redlower_plusclick = document.querySelector('#redlower_plusclick');
const redouter_plusclick = document.querySelector('#redouter_plusclick');
const redinner_plusclick = document.querySelector('#redinner_plusclick');
const redclimb_plusclick = document.querySelector('#redclimb_plusclick');
const redbalancedclimb_plusclick = document.querySelector('#redbalancedclimb_plusclick');

let redtotal = 0

let redmove_plusclicktotal = 0;

let redlower_plusclicktotal = 0;

let redouter_plusclicktotal = 0;

let redinner_plusclicktotal = 0;

let redclimb_plusclicktotal = 0;

let redbalancedclimb_plusclicktotal = 0;


redmove_minus.addEventListener('click', () =>{
    redtotal -= 5;
    redscore.innerText = redtotal;
    redmove_plusclicktotal -= 1
    redmove_plusclick.innerText = redmove_plusclicktotal;
})

redmove_plus.addEventListener('click', () =>{
    redtotal += 5;
    redscore.innerText = redtotal;
    redmove_plusclicktotal += 1
    redmove_plusclick.innerText = redmove_plusclicktotal;
})


redlower_minus.addEventListener('click', () =>{
    redtotal -= 1;
    redscore.innerText = redtotal;
    redlower_plusclicktotal -= 1
    redlower_plusclick.innerText = redlower_plusclicktotal;
})

redlower_plus.addEventListener('click', () =>{
    redtotal += 1;
    redscore.innerText = redtotal;
    redlower_plusclicktotal += 1
    redlower_plusclick.innerText = redlower_plusclicktotal;
})

redouter_minus.addEventListener('click', () =>{
    redtotal -= 2;
    redscore.innerText = redtotal;
    redouter_plusclicktotal -= 1
    redouter_plusclick.innerText = redouter_plusclicktotal;
})

redouter_plus.addEventListener('click', () =>{
    redtotal += 2;
    redscore.innerText = redtotal;
    redouter_plusclicktotal += 1
    redouter_plusclick.innerText = redouter_plusclicktotal;
})

redinner_minus.addEventListener('click', () =>{
    redtotal -= 3;
    redscore.innerText = redtotal;
    redinner_plusclicktotal -= 1
    redinner_plusclick.innerText = redinner_plusclicktotal;
})

redinner_plus.addEventListener('click', () =>{
    redtotal += 3;
    redscore.innerText = redtotal;
    redinner_plusclicktotal += 1
    redinner_plusclick.innerText = redinner_plusclicktotal;
})

redclimb_minus.addEventListener('click', () =>{
    redtotal -= 25;
    redscore.innerText = redtotal;
    redclimb_plusclicktotal -= 1
    redclimb_plusclick.innerText = redclimb_plusclicktotal;
})

redclimb_plus.addEventListener('click', () =>{
    redtotal += 25;
    redscore.innerText = redtotal;
    redclimb_plusclicktotal += 1
    redclimb_plusclick.innerText = redclimb_plusclicktotal;
})

redbalancedclimb_minus.addEventListener('click', () =>{
    redtotal -= 15;
    redscore.innerText = redtotal;
    redbalancedclimb_plusclicktotal -= 1
    redbalancedclimb_plusclick.innerText = redbalancedclimb_plusclicktotal;
})

redbalancedclimb_plus.addEventListener('click', () =>{
    redtotal += 15;
    redscore.innerText = redtotal;
    redbalancedclimb_plusclicktotal += 1
    redbalancedclimb_plusclick.innerText = redbalancedclimb_plusclicktotal;
})

const redfoul_minus = document.querySelector('#redfoul_minus');
const redtechfoul_minus = document.querySelector('#redtechfoul_minus');

const redfoul_plusclick = document.querySelector('#redfoul_plusclick');

const redtechfoul_plusclick = document.querySelector('#redtechfoul_plusclick');

let redfoul_plusclicktotal = 0;

let redtechfoul_plusclicktotal = 0;

redfoul_minus.addEventListener('click', ()=>{
    bluetotal -= 3;
    bluescore.innerText = bluetotal;
    redfoul_plusclicktotal -= 1
    redfoul_plusclick.innerText = redfoul_plusclicktotal;
})

redfoul_plus.addEventListener('click', ()=>{
    bluetotal += 3;
    bluescore.innerText = bluetotal;
    redfoul_plusclicktotal += 1
    redfoul_plusclick.innerText = redfoul_plusclicktotal;
})

redtechfoul_minus.addEventListener('click', ()=>{
    bluetotal -= 15;
    bluescore.innerText = bluetotal;
    redtechfoul_plusclicktotal -= 1
    redtechfoul_plusclick.innerText = redtechfoul_plusclicktotal;
})

redtechfoul_plus.addEventListener('click', ()=>{
    bluetotal += 15;
    bluescore.innerText = bluetotal;
    redtechfoul_plusclicktotal += 1
    redtechfoul_plusclick.innerText = redtechfoul_plusclicktotal;
})

const foul_minus = document.querySelector('#foul_minus');
const techfoul_minus = document.querySelector('#techfoul_minus');

const foul_plusclick = document.querySelector('#foul_plusclick');

const techfoul_plusclick = document.querySelector('#techfoul_plusclick');

let foul_plusclicktotal = 0;

let techfoul_plusclicktotal = 0;

foul_minus.addEventListener('click', ()=>{
    redtotal -= 3;
    redscore.innerText = redtotal;
    foul_plusclicktotal -= 1
    foul_plusclick.innerText = foul_plusclicktotal;
})

foul_plus.addEventListener('click', ()=>{
    redtotal += 3;
    redscore.innerText = redtotal;
    foul_plusclicktotal += 1
    foul_plusclick.innerText = foul_plusclicktotal;
})

techfoul_minus.addEventListener('click', ()=>{
    redtotal -= 15;
    redscore.innerText = redtotal;
    techfoul_plusclicktotal -= 1
    techfoul_plusclick.innerText = techfoul_plusclicktotal;
})

techfoul_plus.addEventListener('click', ()=>{
    redtotal += 15;
    redscore.innerText = redtotal;
    techfoul_plusclicktotal += 1
    techfoul_plusclick.innerText = techfoul_plusclicktotal;
})

const reset = document.querySelector('#reset');

reset.addEventListener('click', ()=> {
    window.location.reload();

})