// @flow
import cardFeatures from './cardFeatures';
import type {CardsArray} from '../types/card';

export function checkSet(cards: CardsArray): string {

    const features: Array<string> = Object.keys(cardFeatures);

    for (const feature of features) {
        const featureValues: Array<string> = cards.map(card => card[feature]);
        const uniqueValues: Array<string> = Array.from(new Set(featureValues));

        if (uniqueValues.length === 2) {
            if (featureValues[0] === featureValues[1] || featureValues[0] === featureValues[2]) {
                return createErrorMessage(featureValues[0])
            }
            return createErrorMessage(featureValues[1])
        }
    }
    return 'Correct!';
}

function createErrorMessage(featureValue) {
    
    switch (featureValue){
        case cardFeatures.number[0]:
            return `Not a set! Two have one symbol and one does not!`;
        case cardFeatures.number[1]:
            return `Not a set! Two have two symbols and one does not!`;
        case cardFeatures.number[2]:
            return `Not a set! Two have three symbols and one does not!`;
        case cardFeatures.shape[0]:
        case cardFeatures.shape[1]:
        case cardFeatures.shape[2]:
            return `Not a set! Two are ${featureValue}s  and one is not!`;
        default:
            return `Not a set! Two are ${featureValue} and one is not!`

    }
}
