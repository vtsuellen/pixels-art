//botão para gerar cores aleatórias para a paleta de cores
const button = document.getElementById("button-random-color");


function getColorArray () {
    const colors = document.querySelectorAll('.color');
    const colorArray = [];
console.log(colors)
    colors.forEach(element => {
        colorArray.push(element.classList[1]);       
    });
    return colorArray;
};
const classes = ['Violet', 'MediumOrchid', 'MediumPurple', 'BlueViolet', 'SlateBlue', 'DarkSlateBlue', 'Aqua', 'DarkTurquoise', 'DeepSkyBlue', 'DodgerBlue', 'MediumBlue', 'MidnightBlue', 'RoyalBlue'];

const coresAleatorias = () => {
    const randomIndex = Math.floor(Math.random() * classes.length)
    const randomColor = classes[randomIndex];
    console.log(randomColor)
    return randomColor;
};

const colors = getColorArray();
console.log(colors)
button.addEventListener('click', () => otherColours());

coresAleatorias();

const div = document.getElementsByClassName('color')

const otherColours = () => {
    const primeira = coresAleatorias();
    const segunda = coresAleatorias();
    const terceira = coresAleatorias();
    div[1].className =`color ${primeira}`
    div[2].className = `color ${segunda}`
    div[3].className = `color ${terceira}`
}
 otherColours()

 