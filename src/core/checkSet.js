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
                return `Not a set! Two are ${featureValues[0]} and one is not!`;
            }
            return `Not a set! Two are ${featureValues[1]} and one is not!`;
        }
    }
    return 'Correct!';
}
