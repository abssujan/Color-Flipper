const colorBtnElement = document.getElementById('color-btn');
const currentColor = document.getElementById('current-color');

const hexValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function getRandomHexValue(){
    const randomIndexPosition = Math.floor(
        Math.random() * hexValue.length
    );
    const randomHexValue = hexValue[randomIndexPosition];
    //console.log(randomHexValue)
    return randomHexValue;
}

function getRandomString(stringLength){
    let hexstring = '';
    for(let i = 0; i < stringLength; i++){
        hexstring += getRandomHexValue();
    }
    return hexstring;
}
colorBtnElement.addEventListener('click', () => {
    const randHexString = '#' +  getRandomString(6)
    document.body.style.setProperty(
        'background-color', randHexString
    )
    currentColor.textContent = randHexString;
})