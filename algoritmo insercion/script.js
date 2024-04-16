function insercion(arreglo) {
    // Calculamos la longitud del arreglo que se recibirá 
    const longitud = arreglo.length;

    // Recorremos el arreglo empezando desde el segundo elemento
    for (let i = 1; i < longitud; i++) {
        let numero = arreglo[i];  // Tomamos el elemento actual
        let j = i - 1;  // Índice del elemento anterior al actual


     // Movemos los elementos mayores hacia adelante para hacer espacio
        // y encontrar la posición correcta para el elemento actual
        while (j >= 0 && arreglo[j] > numero) {
            arreglo[j + 1] = arreglo[j];  // Movemos el elemento anterior hacia adelante
            j--;  // Avanzamos al siguiente elemento anterior
        }

        arreglo[j + 1] = numero;  // Colocamos el elemento actual en su posición correcta
    }

    return arreglo;  // Devolvemos el arreglo ordenado
}

// Arreglo desordenado
const numerosalea = [8, 22, 12, 1, 5, 6];

// Ordenamos el arreglo usando la función de inserción
const numerosor = insercion(numerosalea);

// Mostramos el arreglo ordenado
console.log(numerosor);
