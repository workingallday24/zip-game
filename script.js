const layout=[

["S","",""],

["","X",""],

["","","E"]

]

const grid=

document.getElementById(

"grid"

)

let path=[]

let seconds=0

setInterval(()=>{

seconds++

document

.getElementById(

"timer"

)

.innerText=

seconds+"s"

},1000)

function draw(){

grid.innerHTML=""

layout.forEach(

(row,r)=>{

row.forEach(

(cell,c)=>{

const div=

document

.createElement(

"div"

)

div.className=

"cell"

if(cell==="X")

div.classList

.add("block")

div.innerText=

cell==="S"

?"🟢"

:

cell==="E"

?"🔒"

:""

div.onclick=

()=>clickCell(

r,c,div

)

grid.appendChild(

div

)

})

})

}

function clickCell(

r,c,div

){

if(

layout[r][c]

==="X"

)

return

div.classList.toggle(

"selected"

)

path.push([r,c])

checkWin()

}

function checkWin(){
const last=

path[path.length-1]

if(

last[0]===2

&&

last[1]===2

){

document

.getElementById(

"message"

)

.innerText=

"YOU WON"

}

}

function resetGame(){

location.reload()

}

draw()
