import { pedirCarta, valorCarta, crearCartaHTML } from "./";


/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck
 * @param {HTMLElement} puntosHTML para mostrar las cartas
 */




export const turnoComputadora = ( puntosMinimos, puntosHTML , divCartasComputadora, deck =[] ) => {

    if ( !puntosMinimos ) throw new Error( 'Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error( 'Argumento puntosHTMLes necesario');
    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
