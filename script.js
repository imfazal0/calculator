let srt = '';
let result;
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () =>{
    let keydata = key.dataset.value;
        if (keydata === '=')  {
        result = eval(srt);
        console.log( result);
        document.getElementById('in-out').innerHTML = `${result}`
    } 
    else if(keydata === 'AC'){
        srt = ''
        document.getElementById('in-out').innerHTML = `${srt}`
    }
    else if (keydata ==='C'){
        srt = srt.slice(0,-1)
        console.log(srt)
        document.getElementById('in-out').innerHTML = `${srt}`
        
    }
    else{
        srt += keydata;
        document.getElementById('in-out').innerHTML = `${srt}`
    }
    });
});
