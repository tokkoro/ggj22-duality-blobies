import { Meteor } from 'meteor/meteor';
import {CardsCollection, Card, startDeck} from '/imports/data/card-data';
import {GameCollection} from "/imports/data/game";

function insertCard(card: Card) {
  CardsCollection.insert(card);
}

Meteor.startup(() => {
  // If the Cards collection is empty, add some data.
  if (CardsCollection.find().count() === 0) {
    startDeck.forEach((card) => {
      insertCard(card)
    })
  }
});

Meteor.publish('games', function () {
  return GameCollection.find({})
});