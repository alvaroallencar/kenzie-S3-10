let firstPlace = 'Rafael';
let secondPlace = 'Manoel';
let lastPlace = 'Daniel';
let podio = [];

function positions(firstPlace, secondPlace, lastPlace) {

    if (firstPlace == 'Daniel') {
        podio[0] = firstPlace;
        podio[1] = secondPlace;
        podio[2] = lastPlace;
    }

    if (secondPlace == 'Daniel') {
        podio[0] = secondPlace;
        podio[1] = firstPlace;
        podio[2] = lastPlace;
    }

    if (lastPlace == 'Daniel') {
        podio[0] = firstPlace;
        podio[1] = lastPlace;
        podio[2] = secondPlace;
    }

    console.log('1° Colocado: ' + podio[0]);
    console.log('2° Colocado: ' + podio[1]);
    console.log('3° Colocado: ' + podio[2]);
}

positions(firstPlace, secondPlace, lastPlace);

console.log(podio);

