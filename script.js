const getColor= ()=>{
    let randomno = Math.floor(Math.random()*16777215);
    const randomCode= "#" + randomno.toString(16);

    document.body.style.backgroundColor= randomCode;
    const text= document.getElementById('color-code');
    
    text.innerText= randomCode;
    navigator.clipboard.writeText(randomCode);
}


getColor();

document.getElementById("btn").addEventListener('click', ()=>{
    getColor();
});

