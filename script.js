
/* for(let i=3; i>0; i--){
        let valor = prompt('Ingresá un número')
        let inputNumber = parseInt(valor)

        if(isNaN(inputNumber)){
                alert('Por favor, colocá un número')
        }else{

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
                console.log(inputNumber)

        
                let i = 2;
                while (inputNumber % i !== 0 && i < inputNumber / 2) {
                        i++;
                }
                //---------------------switch para descartar 0 y 1
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

                                if (inputNumber % i !== 0 || inputNumber == 2) {
                                        console.log(inputNumber + ' es primo')
                                        alert('El número ' + inputNumber + ' es primo');
                                } else {
                                        console.log(inputNumber + ' es compuesto')
                                        alert('El número ' + inputNumber + ' es compuesto');
                                }
                }

        }
        
} */

//script para resolver las raíces de una función cuadrática (formula resolvente)

let result;
do {
        //Primero se ejecuta el script, al menos una vez
        let numA = parseFloat(prompt('Siendo ax\xb2 + bx + c. Indique a.'))
        let numB = parseFloat(prompt('Siendo ax\xb2 + bx + c. Indique b.'))
        let numC = parseFloat(prompt('Siendo ax\xb2 + bx + c. Indique c.'))

        //función flecha para ahorrar líneas
        let discriminante = (numA, numB, numC) => (numB * numB - 4 * numA * numC);
        console.log(discriminante(numA, numB, numC))
        let disc = discriminante(numA, numB, numC)
        function discValue(disc) {

                if ((!isNaN(disc)) && (disc > 0)) {
                        return true;
                } else {
                        return false;
                }
        }
        console.log(discValue(disc))

        function numSoluciones(discValue) {
                //determinamos el Nro de sol. 
                if (discValue(disc)) {
                        return 'Hay dos soluciones.';
                } else if ((!discValue(disc)) && (disc == 0)) {
                        return 'Hay una solución'
                } else if (!discValue(disc)) {
                        return 'No hay soluciones reales'
                }
        }
        console.log(numSoluciones(discValue))
        let sol = numSoluciones(discValue)
        function resolvente(sol) {
                //Finalmente, obtenemos las raíces
                if (sol == 'Hay dos soluciones.') { // No encontré forma mejor de que me tire 2 resultados el primer if
                        return { x1: (-numB + Math.sqrt(disc)) / (numA * 2), x2: (-numB - Math.sqrt(disc)) / (numA * 2) }
                        
                } else if (sol == 'Hay una solución') {
                        return { x1: (-numB + Math.sqrt(disc)) / (numA * 2) }
                }
                else if ('No hay soluciones reales') {
                        return 'No hay soluciones reales'
                }
        }
        console.log(resolvente(sol))

        //se puede repetir indefinidamete si se quiere
        result = prompt('¿Continuar? Dale a aceptar' + '\n¿Terminar? Escribí algo / Cancelá');

} while ((typeof (result) == 'null') || (result.length == 0));


