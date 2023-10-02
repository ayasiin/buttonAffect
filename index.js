const btnEl = document.querySelector('.btn')
btnEl.addEventListener('mouseover', (event)=>{
    const m =  (event.pageM - btnEl.offseLeft)

    const n = (event.pageN - btnEl.offseRight);
    btnEl.style.setPropert('--xPos', m + 'px')
    btnEltnEl.style.setPropert('--xPos', n+ 'px')

})