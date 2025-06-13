import { defineStore } from 'pinia'

const POSITIONS = {
    2: [
        { top: '95%', left: '50%' },
        { top: '5%', left: '50%' }
    ],
    3: [
        { top: '95%', left: '50%' },
        { top: '10%', left: '10%' },
        { top: '10%', left: '90%' }
    ],
    4: [
        { top: '95%', left: '50%' },
        { top: '50%', left: '5%' },
        { top: '5%', left: '50%' },
        { top: '50%', left: '95%' }
    ],
    5: [
        { top: '95%', left: '50%' },
        { top: '70%', left: '10%' },
        { top: '20%', left: '25%' },
        { top: '20%', left: '75%' },
        { top: '70%', left: '90%' }
    ],
    6: [{ top: '95%', left: '50%' },
        { top: '75%', left: '10%' },
        { top: '25%', left: '10%' },
        { top: '5%', left: '50%' },
        { top: '25%', left: '90%' },
        { top: '75%', left: '90%' }
    ],
};
const SUITS = ['♠', '♥', '♦', '♣'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export const usePokerStore = defineStore('poker', {
    state: () => ({
        players: [],
        numberOfPlayers: 6,
        places: [],
        placesOfPlayers: 6,
        showAllCards: false,
    }),

    getters: {
        playerDisplayData(state) {
            const positions = POSITIONS[state.numberOfPlayers];
            if (!positions) return [];

            return state.players.map((player, index) => ({
                ...player,
                style: {
                    top: positions[index].top,
                    left: positions[index].left,
                    transform: 'translate(-50%, -50%)',
                },
            }));
        },
        placesDisplayData(state) {
            const positions = POSITIONS[6];
            if (!positions) return [];

            return state.places.map((place, index) => ({
                ...place,
                style: {
                    top: positions[index].top,
                    left: positions[index].left,
                    transform: 'translate(-50%, -50%)',
                },
            }));
        },
    },

    actions: {
        generatePlayers() {
            const newPlayers = [];
            for (let i = 0; i < this.numberOfPlayers; i++) {
                newPlayers.push({
                    id: i,
                    name: `Игрок ${i + 1}`,
                    cards: [],
                    isHero: i === 0,
                });
            }
            this.players = newPlayers;
            this.showAllCards = false;
        },

        generatePlaces() {
            const newPlaces = [];
            for (let i = 0; i < 6; i++) {
                newPlaces.push({});
            }
            this.places = newPlaces;
            console.log(this.places)
        },

        setNumberOfPlayers(count) {
            this.numberOfPlayers = count;
            this.generatePlayers();
        },

        dealCards() {
            console.log(123)
            const deck = [];
            for (const suit of SUITS) {
                for (const rank of RANKS) {
                    deck.push({ rank, suit });
                }
            }

            for (let i = deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
            console.log(this.places)
            this.places.forEach(place => {
                if (place.hasOwnProperty('cards')) {
                    place.cards = []
                }
            });
            this.showAllCards = false;

            for (let i = 0; i < 2; i++) {
                for (const place of this.places) {
                    if (place.hasOwnProperty('cards')) {
                        if (deck.length > 0) {
                            place.cards.push(deck.pop());
                        }
                    }
                }
            }
        },

        toggleVisibility() {
            this.showAllCards = !this.showAllCards;
        },

        setUserPlace(index) {
            if (this.places.every(i => !Object.keys(i).length)) {
                this.places[index] = {
                    id: index,
                    name: 'Игрок',
                    cards: [],
                    isHero: true,
                }
            } else if (!Object.keys(this.places[index]).length) {

                this.places[index] = {
                    id: index,
                    name: `AIBot ${index}`,
                    cards: [],
                    isHero: false,
                }
            }
        }
    }
})