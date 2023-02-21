

let timer = 600
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timer == -1) {
        clearTimeout(timerId);
        document.querySelector('#timer').innerHTML = 'Votre temps est écoulé. Vous avez perdu.';
    } else {
        document.querySelector('#timer').innerHTML = timer;
        timer--;
    }
}



//On crée la fonction change color et on prend comme paramètre l'id le résultat de la question, le choix 1, le choix 2 et le choix 3.

function changeColor(id, resultat, choix1, choix2, choix3) {

    allDiv = document.querySelectorAll('input');
    nomImage = 'image' + id;

    document.getElementById(nomImage).style.display = "block";

    switch (id) {
        case 1:
            if (resultat === choix1) {
                changeColorInput('1.1', 'green');
                changeColorInput('1.2', 'red');
                changeColorInput('1.3', 'red');


            } else if (resultat === choix2) {
                changeColorInput('1.1', 'red');
                changeColorInput('1.2', 'green');
                changeColorInput('1.3', 'red');

            } else {

                changeColorInput('1.1', 'red');
                changeColorInput('1.2', 'red');
                changeColorInput('1.3', 'green');

            }
            break;
        case 2:
            if (resultat === choix1) {
                changeColorInput('2.1', 'green');
                changeColorInput('2.2', 'red');
                changeColorInput('2.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('2.1', 'red');
                changeColorInput('2.2', 'green');
                changeColorInput('2.3', 'red');

            } else {
                changeColorInput('2.1', 'red');
                changeColorInput('2.2', 'red');
                changeColorInput('2.3', 'green');

            }
            break;
        case 3:
            if (resultat === choix1) {
                changeColorInput('3.1', 'green');
                changeColorInput('3.2', 'red');
                changeColorInput('3.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('3.1', 'red');
                changeColorInput('3.2', 'green');
                changeColorInput('3.3', 'red');

            } else {
                changeColorInput('3.1', 'red');
                changeColorInput('3.2', 'red');
                changeColorInput('3.3', 'green');

            }
            break;
        case 4:
            if (resultat === choix1) {
                changeColorInput('4.1', 'green');
                changeColorInput('4.2', 'red');
                changeColorInput('4.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('4.1', 'red');
                changeColorInput('4.2', 'green');
                changeColorInput('4.3', 'red');

            } else {
                changeColorInput('4.1', 'red');
                changeColorInput('4.2', 'red');
                changeColorInput('4.3', 'green');

            }
            break;
        case 5:
            if (resultat === choix1) {
                changeColorInput('5.1', 'green');
                changeColorInput('5.2', 'red');
                changeColorInput('5.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('5.1', 'red');
                changeColorInput('5.2', 'green');
                changeColorInput('5.3', 'red');

            } else {
                changeColorInput('5.1', 'red');
                changeColorInput('5.2', 'red');
                changeColorInput('5.3', 'green');

            }
            break;
        case 6:
            if (resultat === choix1) {
                changeColorInput('6.1', 'green');
                changeColorInput('6.2', 'red');
                changeColorInput('6.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('6.1', 'red');
                changeColorInput('6.2', 'green');
                changeColorInput('6.3', 'red');

            } else {
                changeColorInput('6.1', 'red');
                changeColorInput('6.2', 'red');
                changeColorInput('6.3', 'green');

            }
            break;
        case 7:
            if (resultat === choix1) {
                changeColorInput('7.1', 'green');
                changeColorInput('7.2', 'red');
                changeColorInput('7.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('7.1', 'red');
                changeColorInput('7.2', 'green');
                changeColorInput('7.3', 'red');

            } else {
                changeColorInput('7.1', 'red');
                changeColorInput('7.2', 'red');
                changeColorInput('7.3', 'green');

            }
            break;
        case 8:
            if (resultat === choix1) {
                changeColorInput('8.1', 'green');
                changeColorInput('8.2', 'red');
                changeColorInput('8.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('8.1', 'red');
                changeColorInput('8.2', 'green');
                changeColorInput('8.3', 'red');

            } else {
                changeColorInput('8.1', 'red');
                changeColorInput('8.2', 'red');
                changeColorInput('8.3', 'green');

            }
            break;
        case 9:
            if (resultat === choix1) {
                changeColorInput('9.1', 'green');
                changeColorInput('9.2', 'red');
                changeColorInput('9.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('9.1', 'red');
                changeColorInput('9.2', 'green');
                changeColorInput('9.3', 'red');

            } else {
                changeColorInput('9.1', 'red');
                changeColorInput('9.2', 'red');
                changeColorInput('9.3', 'green');

            }

            break;
        case 10:
            if (resultat === choix1) {
                changeColorInput('10.1', 'green');
                changeColorInput('10.2', 'red');
                changeColorInput('10.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('10.1', 'red');
                changeColorInput('10.2', 'green');
                changeColorInput('10.3', 'red');

            } else {
                changeColorInput('10.1', 'red');
                changeColorInput('10.2', 'red');
                changeColorInput('10.3', 'green');

            }
            break;
        case 11:
            if (resultat === choix1) {
                changeColorInput('11.1', 'green');
                changeColorInput('11.2', 'red');
                changeColorInput('11.3', 'red');

            } else if (resultat === choix2) {
                changeColorInput('11.1', 'red');
                changeColorInput('11.2', 'green');
                changeColorInput('11.3', 'red');

            } else {
                changeColorInput('11.1', 'red');
                changeColorInput('11.2', 'red');
                changeColorInput('11.3', 'green');

            }
            break;
    }

}

function changeColorInput(id, color) {
    document.querySelector("input[id='" + id + "']").style.backgroundColor = color;
}



