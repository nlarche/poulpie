export default function clubs(state = [], action) {
  switch (action.type) {
    case 'ADD_CLUB':
    console.log(action.club);
      return [...state, {
        ...action.club
      }];
    default:
  return state;
  }
}

export function selectedClub(state = null, action) {
  switch (action.type) {
    case 'SELECT_CLUB':
      return {
        ...action.club
      };
    default:
      return state;
  }
}

