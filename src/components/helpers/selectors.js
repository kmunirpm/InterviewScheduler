export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  let retarr = [];
  if (state.days.length < 1) return [];
  const dayAppointmentIDs = state.days.filter(
    (currday) => currday.name === day
  );
  if (dayAppointmentIDs.length < 1) return [];
  Object.keys(state.appointments).forEach((element) => {
    if (dayAppointmentIDs[0].appointments.includes(Number(element)))
      retarr.push(state.appointments[element]);
  });
  return retarr;
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const ivObj = {
    student: interview.student,
  };

  ivObj.interviewer = state.interviewers[interview.interviewer];
  return ivObj;
}

export function getInterviewersForDay(state, dayName) {
  const validDayNames = state.days.map(dayObj => dayObj.name);
  if (!dayName || !validDayNames.includes(dayName)) return [];

  const todayObj = state.days.filter(dayObj => dayObj.name === dayName)[0];
  const interviewersObj = todayObj.interviewers.map(
    interId => state.interviewers[interId]
  );
  return interviewersObj;
}