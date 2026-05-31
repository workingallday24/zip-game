const layout = [

["S","",""],

["","X",""],

["","","E"]

]

const grid =
document.getElementById(
"grid"
)

let current=[0,0]

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
document.createElement(
"div"
)

div.className=
"cell"

if(cell==="X")
div.classList.add(
"block"
)

if(
r===current[0]
&&
c===current[1]
)

div.classList.add(
"selected"
)

div.innerText=

cell==="S"
?"🟢"

:

cell==="E"
?"🔒"

:""

div.onclick=
()=>move(r,c)

grid.appendChild(div)

})

})

}

function move(r,c){

if(
layout[r][c]==="X"
)

return

const distance=

Math.abs(
r-current[0]
)

+

Math.abs(
c-current[1]
)

if(distance!==1)

return

current=[r,c]

draw()

if(
layout[r][c]
==="E"
){

document
.getElementById(
"message"
)

.innerText=

"YOU WON IN "
+
seconds
+
" seconds"

}

}

function resetGame(){

location.reload()

}

draw()
