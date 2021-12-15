// gets all the all the appointments for the selected day "dayName" - returns array
export function getAppointmentsForDay(state, dayName) {
  let retArr = [];
  if (state.days.length < 1) return [];
  const dayAppointmentIDs = state.days.filter(
    (currday) => currday.name === dayName
  );
  if (dayAppointmentIDs.length < 1) return [];
  Object.keys(state.appointments).forEach((element) => {
    if (dayAppointmentIDs[0].appointments.includes(Number(element)))
      retArr.push(state.appointments[element]);
  });
  return retArr;
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
  let retArr = [];
  if (state.days.length < 1) return [];
  const dayAppointmentIDs = state.days.filter(
    (currday) => currday.name === dayName
  );
  if (dayAppointmentIDs.length < 1) return [];
  Object.keys(state.interviewers).forEach((element) => {
    if (dayAppointmentIDs[0].interviewers.includes(Number(element)))
      retArr.push(state.interviewers[element]);
  });
  return retArr;
}