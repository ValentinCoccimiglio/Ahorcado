let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'CAMION',
    'MAÑANA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'AMIGO',
    'DOLOR',
    "AMOR"
];


export function getRandomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];
    
}