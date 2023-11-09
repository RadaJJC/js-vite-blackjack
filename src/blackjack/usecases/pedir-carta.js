/** Esta función me permite pedir una carta
 * 
 * @param {Array<String>} deck  es un arreglo de string
 * @returns {<String>}  rotorna la carta del deck
 */


export const pedirCarta = ( deck) => {

    if ( !deck || deck.length === 0 ) {
        throw Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}
