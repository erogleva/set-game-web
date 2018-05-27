// @flow
import React, {Component} from 'react';
import createSets from '../core/createSets';
import type {CardsArray} from '../types/card';
import {checkSet} from '../core/checkSet';
import {checkIfMatrixContainsItem, equals} from '../utils/arrayUtils';
import cards from '../data/cards';
import {toast, ToastContainer} from 'react-toastify';
import '../assets/css/toasts.css'

type Props = {};
type State = {
    cards: CardsArray,
    selected: Array<string>,
    setsFound: Array<Array<string>>,
    feedback: string
};

export default class CardsGrid extends Component<Props, State> {
    props: Props;
    state: State;

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            selected: [],
            setsFound: [],
            elapsed: 0,
            start: Date.now()
        };

        this.timer = setInterval(this.tick, 50)

    }

    componentDidMount() {
        /* eslint-disable react/no-did-mount-set-state */
        this.setState({cards: createSets(cards)});
    }

    componentDidUpdate(prevProps, prevState) {
        if (equals(prevState.selected, this.state.selected)) {
            return;
        }
        /* eslint-disable react/no-did-update-set-state */
        if (this.state.selected.length === 3) {
            const cards: CardsArray = this.state.selected
                .map(cardId => this.state.cards
                    .find(card => card.id === cardId));

            const result = checkSet(cards);

            if (result === 'Correct!') {
                const sorted = this.state.selected.sort((a, b) => a.localeCompare(b));
                if (checkIfMatrixContainsItem(this.state.setsFound, sorted)) {
                    toast.error("You already found that one!");
                } else {
                    const newSets: Array<Array<string>> = this.state.setsFound.slice();
                    newSets.push(sorted);
                    this.setState({setsFound: newSets});
                    toast.success("Set identified correctly!");
                }
            } else {
                toast.error(result);
            }

            window.setTimeout(() => {
                this.setState({selected: []});
            }, 700);

            window.setTimeout(() => {
                toast.dismiss();
            }, 1500)

        }

        if(this.state.setsFound.length === 7 ){
            clearInterval(this.timer)
        }
    }

    handleClick = (id: string): void => {
        this.setState(prevState => {
            if (prevState.selected.includes(id)) {
                return {
                    selected: prevState.selected.filter(e => e !== id)
                };
            }
            return {
                selected: [...prevState.selected, id]
            };
        });
    };

    tick = () => {
        this.setState({elapsed: new Date() - this.state.start});
    };

    render() {
        const elapsed = Math.round(this.state.elapsed / 100);
        const seconds = (elapsed / 10).toFixed(1);

        return (
            <div className='cards-grid-page'>
                <div className='container'>
                    {this.state.cards.map((card) => {
                        return (
                            <div
                                key={card.id}
                                onClick={() => this.handleClick(card.id)}
                                className={this.state.selected.includes(card.id) ? 'selected' : undefined}
                            >
                                <img src={card.source} draggable="false"/>
                            </div>)
                    })}
                    <ToastContainer autoClose={7000}/>
                </div>
                <div className='results'>
                    {this.state.setsFound.map((set, i) => <div key={i} className='circle-set circle-set-found'/>)}
                    {[...Array(7 - this.state.setsFound.length)].map((e, i) => <div key={i} className='circle-set'/>)}
                </div>
                <div className='timer'>
                    <h2>{seconds}</h2>
                </div>
            </div>);

    }
}
