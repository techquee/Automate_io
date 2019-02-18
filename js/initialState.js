
/*
 This is the initial state of the Redux Store. I store it in a separate file because I also use
 it in the reducers when we do the Reset action.
 It returns a function instead of an object to make sure no one can change the initial state.
 */

import {uniqueId} from 'lodash'

module.exports = function () {
  var firstId = uniqueId();

  return {
    notes: [
      {
        id: firstId,
        t: 'demo note taker',
        c: 'type your content',
        d: +new Date()
      },
      {
        id: uniqueId(),
        t: 'Enjoy',
        c: 'declutter your mind',
        d: +new Date()
      }
    ],
    selectedNoteId: firstId
  };
};
