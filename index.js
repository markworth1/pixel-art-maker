let selColor = 'white';
document.getElementById('selected-color').innerText = "Selected color: " + selColor

const outerContainer = document.querySelector('.outer-container')
const paletteContainer = document.querySelector('.palette-container')

let row = []
let box = []

for (let j = 1; j <= 50; j++) {
    row[j] = document.createElement('div')
    row[j].className = 'row'
    outerContainer.appendChild(row[j])

    for (let i = 1; i <= 100; i++) {
        box[i] = document.createElement('div')
        box[i].className = 'box'
        box[i].id = 'row' + j + 'box' + i
        row[j].appendChild(box[i])
    }
}





//
outerContainer.addEventListener('click',(e) => {
    console.log(e)
    let boxClicked = document.getElementById(e.srcElement.id)
    boxClicked.style.backgroundColor = selColor
    console.log('you clicked: ' + boxClicked.id)
})

paletteContainer.addEventListener('click',(e) => {
    console.log(e)
    let boxClicked = document.getElementById(e.srcElement.id)
    selColor = boxClicked.id
    console.log('you clicked: ' + selColor)
    document.getElementById('selected-color').innerText = "Selected color: " + selColor

})

