export default function clubs(state = [], action) {
  switch (action.type) {
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

