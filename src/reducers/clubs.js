export default function clubs(state = [], action) {
  switch (action.type) {
    case 'ADD_CLUB':
      return [...state, {
        ...action.club,
        id: (state.length + 1).toString(),
      }
      ];
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

