function generatorBackground(){
    var colors = [
        'red',
        'green',
        'yellow',
        'pink',
        'skyblue'
    ];
    var color1 = colors[Math.floor(Math.random()*colors.length)];
    var color2 = colors[Math.floor(Math.random()*colors.length)];

    var background = document.getElementById('background');
    background.style.background = 'linear-gradient(to right ,' +color1 +', '+color2+')';
}