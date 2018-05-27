// @flow
import type {Card, CardsArray} from '../types/card';
import features from './cardFeatures';
import {getRandomInt, shuffleArray} from '../utils/arrayUtils';

const createSets = (cards: CardsArray): CardsArray => {
    // get five random number between 0 and the number of all cards
    const setCards = [];

    while (setCards.length < 5) {
        const number = getRandomInt(0, cards.length - 1);
        if (!setCards.includes(cards[number])) {
            setCards.push(cards[number]);
        }
    }

    return shuffleArray(createCombinations(setCards, completeSet, cards));
};

const completeSet = (firstCard: Card, secondCard: Card, allcards: CardsArray): Card => {
    const newCard = {};

    Object.keys(firstCard).forEach(key => {
        if (Object.prototype.hasOwnProperty.call(features, key)) {
            if (firstCard[key] === secondCard[key]) {
                newCard[key] = firstCard[key];
            } else {
                newCard[key] = features[key]
                    .find(feature => feature !== firstCard[key] && feature !== secondCard[key]);
            }
        }
    });

    return allcards.find(card => card.color === newCard.color &&
        card.shading === newCard.shading &&
        card.number === newCard.number &&
        card.shape === newCard.shape);
};

const createCombinations = (
    currentCards: CardsArray,
    completeSetFunc: () => Card,
    allCards: CardsArray
): CardsArray => {
    let combinations = [...currentCards];

    for (let i = 0; i < 5; i += 1) {
        for (let j = i + 1; j < 5; j += 1) {
            const card = completeSetFunc(currentCards[i], currentCards[j], allCards);

            if (!combinations.includes(card)) {
                combinations = combinations.concat(card);
            }

            if (combinations.length === 12) {
                return combinations;
            }
        }
    }
};


export default createSets;

