export const SET_DAY = "SET_DAY";
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_INTERVIEW = "SET_INTERVIEW";

// Functions to update available spots upon cancelling or booking a new interview
function getRemainingSpotsForDay(day, appointments) {
  const spotsForTheDay = day.appointments;
  let remainingSpots = 0;
  for (const spot of spotsForTheDay) {
    if (appointments[spot].interview === null) {
      remainingSpots++;
    }
  }
  return remainingSpots;
}

function loadTotalSpotsForDays(days, appointments) {
  const lDays = days.map((day) => ({
    ...day,
    spots: getRemainingSpotsForDay(day, appointments),
  }));
  return lDays;
}

// Reducer function
export default function reducer(state, action) {
  switch (action.type) {
    case SET_DAY:
      return { ...state, day: action.day };
    case SET_APPLICATION_DATA:
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers,
      };
    case SET_INTERVIEW: {
      const appointments = {
        ...state.appointments,
        [action.id]: {
          ...state.appointments[action.id],
          interview: action.interview === null ? null : { ...action.interview },
        },
      };
      const days = loadTotalSpotsForDays(state.days, appointments);
      return { ...state, days, appointments };
    }
    default:
      throw new Error(
        `Reduce encountered unhandled action type: ${action.type}`
      );
  }
}
