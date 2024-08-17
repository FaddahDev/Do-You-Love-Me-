let yes=document.getElementById('yes')
let no=document.getElementById('no')
let word=document.getElementById('word')
let container=document.getElementById('container')

let conRec=container.getBoundingClientRect();
let btnRec=no.getBoundingClientRect();

yes.addEventListener('click',()=>{
    word.innerHTML="I Love You Too..&#x2763;&#x2763;";
    word.style.color='rgb(122, 74, 74)'
    document.querySelector('h2').innerHTML="&#x1F60D;&#x1F60D;";
})

no.addEventListener('mouseover',()=>{
    let i=Math.floor(Math.random()*(conRec.width-btnRec.width))+1;
    let j=Math.floor(Math.random()*(conRec.height-btnRec.height))+1;
    no.style.left=i+'px'
    no.style.top=j+'px'
    no.innerHTML="No..???!"
    document.querySelector('h2').innerHTML="❓❓❓❗"
    word.innerHTML="Don't You Love Me..?"
    word.style.color="black"
    
})