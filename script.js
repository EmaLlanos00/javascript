
//al principio hice esto pero me parecía algo muy chiquito y no tenía muchas ideas
/*  for (let i = 3; i > 0; i--) {
       
        let numero1 = parseInt(prompt('Ingresá número'))
        let numero2 = parseInt(prompt('Ingresá otro número'))
        let suma = numero1 + numero2;
        let promedio = suma / 2;
        alert('el promedio es ' + '=' + promedio);
} */
//me decanté por hacer este algoritmo que muestra los divisores de un número n
//testeando números me salió que 71 tiraba solo un divisor (1), y me acordé de los numeros primos
for (let i = 3; i > 0; i--) {
        let valor = prompt('Ingresá un número')

        let inputNumber = parseInt(valor)
        console.log('Divisores del ' + inputNumber)

        if (inputNumber % 2 === 0) {
                console.log(1)
                for (let i = 2; i <= inputNumber / 2; i++) {
                        if (inputNumber % i === 0) {
                                console.log(i)
                        }
                }


        } else
                for (let i = 1; i < inputNumber / 2; i++) {
                        if (inputNumber % i === 0) {
                                console.log(i);

                        }
                }
        console.log(inputNumber)//puse este log para que el 1 no quede solito en console

        //me rompí un poco la cabeza con esto, en internet hay soluciones que involucran otros conceptos
        let i = 2;
        while (inputNumber % i !== 0 && i < inputNumber / 2) {
                i++;
        }
        //tuve que ponerle el switch para descartar 0 y 1
        switch (inputNumber) {

                case 0:
                        console.log('0 no es ni primo ni compuesto')
                        alert('0 no es ni primo ni compuesto');
                        break;
                case 1:
                        console.log('1 no es ni primo ni compuesto')
                        alert('1 no es ni primo ni compuesto');
                        break;
                default:

                        if (inputNumber % i !== 0) {
                                console.log(inputNumber + ' es primo')
                                alert('El número es primo');
                        } else {
                                console.log(inputNumber + ' es compuesto')
                                alert('El número no es primo, es compuesto');
                        }
        }



        //aquí algunos números interesante para probar: 0, 1, 2, 61, 71, 81, 111, 1238, 16661, 18181,
}
