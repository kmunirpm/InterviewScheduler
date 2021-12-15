// gets all the all the appointments for the selected day "dayName" - returns array
export function getAppointmentsForDay(state, dayName) {
  let retarr = [];
  if (state.days.length < 1) return [];
  const dayAppointmentIDs = state.days.filter(
    (currday) => currday.name === dayName
  );
  if (dayAppointmentIDs.length < 1) return [];
  Object.keys(state.appointments).forEach((element) => {
    if (dayAppointmentIDs[0].appointments.includes(Number(element)))
      retarr.push(state.appointments[element]);
  });
  return retarr;
}

// gets info about the selected interview "interview" - returns an object with student & interviewer names
export function getInterview(state, interview) {
  if (!interview) return null;
  const ivObj = {
    student: interview.student,
  };

  ivObj.interviewer = state.interviewers[interview.interviewer];
  return ivObj;
}

//gets all the interviews for the selected day "dayName" - returns array
export function getInterviewersForDay(state, dayName) {
  const valDayNames = state.days.map(dayObj => dayObj.name);
  if (!dayName || !valDayNames.includes(dayName)) return [];

  const todayObj = state.days.filter(dayObj => dayObj.name === dayName)[0];
  const interviewersObj = todayObj.interviewers.map(
    interId => state.interviewers[interId]
  );
  return interviewersObj;
}