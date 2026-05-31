const layout = [

["S","",""],

["","X",""],

["","","E"]

]

const grid = document.getElementById("grid")

let current=[0,0]

let visited=["0-0"]

let seconds=0

let gameOver=false

let timer=null



function startTimer(){

timer=setInterval(()=>{

if(gameOver){

clearInterval(timer)

return

}

seconds++

document.getElementById(
"timer"
).innerText=

seconds+"s"

},1000)

}



function draw(){

grid.innerHTML=""

layout.forEach((row,r)=>{

row.forEach((cell,c)=>{

const div=

document.createElement(
"div"
)

div.className="cell"

if(cell==="X"){

div.classList.add(
"block"
)

}

const key=r+"-"+c

if(
visited.includes(key)
){

div.classList.add(
"selected"
)

}

if(
r===current[0]
&&
c===current[1]
){

div.style.border=
"4px solid blue"

}

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

if(gameOver)return

if(
layout[r][c]==="X"
)return


const distance=

Math.abs(
r-current[0]
)

+

Math.abs(
c-current[1]
)

if(distance!==1)return


const key=r+"-"+c

if(
visited.includes(key)
)return


visited.push(key)

current=[r,c]

draw()


if(
layout[r][c]==="E"
){

gameOver=true

clearInterval(timer)

document.getElementById(
"message"
).innerText=

"🏆 Solved in "

+

seconds

+

" seconds"

}

}



function resetGame(){

clearInterval(timer)

location.reload()

}



draw()

startTimer()
