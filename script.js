

var num = 0;
var colorWall = document.getElementById('body-color');
var colorCircle = document.getElementById('circle-ice');

function colorSwitchRight() {
    if (num == 0) {
        colorWall.style.backgroundColor = '#69A9FF';
        colorCircle.style.backgroundColor = '#9FC8FF';
        num++;
    }
    else if (num == 1) {
        colorWall.style.backgroundColor = '#FCC850';
        colorCircle.style.backgroundColor = '#FCDC92';
        num++;
    }
};

function colorSwitchLeft() {
    if (num == 2) {
        colorWall.style.backgroundColor = '#69A9FF';
        colorCircle.style.backgroundColor = '#9FC8FF';
        num--;
    }
    else if (num == 1) {
        colorWall.style.backgroundColor = '#FEAFC3';
        colorCircle.style.backgroundColor = '#FFCBD8';
        num--;
    }
};
