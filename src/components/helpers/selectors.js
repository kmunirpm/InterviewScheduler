export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  let retarr = [];
  if (state.days.length<1)
    return retarr;
  const dayAppointmentIDs = state.days.filter(currday => currday.name === day);
  if (dayAppointmentIDs.length<1)
    return retarr;
  Object.keys(state.appointments).forEach(element => {
    if (dayAppointmentIDs[0].appointments.includes(Number(element)))
      retarr.push(state.appointments[element])
  });  
  return retarr;
}
