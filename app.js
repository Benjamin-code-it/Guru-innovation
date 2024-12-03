const imgQr = document.querySelector('.imgQr');

const imgQrCode= document.getElementById('imgQrCode');
const qrbtn = document.querySelector('.qrBtn')
  

qrbtn.addEventListener('click', () => {
    const qrText = document.querySelector('.qrText').value
    if(qrText == ''){
        alert('Please input a text')
        return
    }
    const value = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${qrText}`
    imgQrCode.setAttribute('src',value)
})
