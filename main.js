function dlete(){
    document.getElementById('span2').innerHTML  = ''
    document.getElementById('span1').innerHTML  = '' 
}



function reset(){
    document.getElementById('span1').innerHTML  = document.getElementById('span1').innerHTML.slice(0,-1)
}

function seven(){
    document.getElementById('span1').innerHTML += 7
}
function eight(){
    document.getElementById('span1').innerHTML += 8
}
function nine(){
    document.getElementById('span1').innerHTML += 9
}
function four(){
    document.getElementById('span1').innerHTML += 4
}
function five(){
    document.getElementById('span1').innerHTML += 5
}
function six(){
    document.getElementById('span1').innerHTML += 6
}
function one(){
    document.getElementById('span1').innerHTML += 1
}
function two(){
    document.getElementById('span1').innerHTML += 2
}
function three(){
    document.getElementById('span1').innerHTML += 3
}
function zero(){
    document.getElementById('span1').innerHTML += 0
}
function zeroo(){
    document.getElementById('span1').innerHTML += 0
}
function zerooo(){
    document.getElementById('span1').innerHTML += '.'
}
function plus(){
    document.getElementById('span1').innerHTML += '+'
}
function minus(){
    document.getElementById('span1').innerHTML += '-'
}
function equal(){
    document.getElementById('span2').innerHTML = eval(document.getElementById('span1').innerHTML)
}
function divide(){
    document.getElementById('span1').innerHTML += '/'
}
function multi(){
    document.getElementById('span1').innerHTML += '*'

}

function ope(){
    document.getElementById('span1').innerHTML += Number('(')
}
function clos(){
    document.getElementById('span1').innerHTML += Number()
}
function sin(){ 
    document.getElementById('span2').innerHTML= Math.sin(document.getElementById('span1').innerHTML * Math.PI/180)
    
}
function log(){ 
    document.getElementById('span2').innerHTML= Math.log10(document.getElementById('span1').innerHTML)
    
}
function cos(){ 
    document.getElementById('span2').innerHTML= Math.cos(document.getElementById('span1').innerHTML * Math.PI/180)
    
}
function tan(){ 
    document.getElementById('span2').innerHTML= Math.tan(document.getElementById('span1').innerHTML * Math.PI/180)
    
}
function round(){ 
    document.getElementById('span2').innerHTML= Math.round(document.getElementById('span1').innerHTML)
    
}

function square(){
    document.getElementById('span2').innerHTML = Math.pow(document.getElementById('span1').innerHTML,2)
}
