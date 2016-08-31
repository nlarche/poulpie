// Select Club
export function selectClub(club) {
  return {
    type: 'SELECT_CLUB',
    club,
  };
}

// Create club
export function addClub(club) {
  return {
    type: 'ADD_CLUB',
    club,
  };
}
