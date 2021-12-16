import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW,
} from "components/reducers/application";

// Function used to update state upon booking and cancelling an Interview
export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},	
    interviewers: {},
  });
  const setDay = (day) => dispatch({ type: SET_DAY, day: day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    dispatch({
      type: SET_INTERVIEW,
      id: id,
      interview: interview,
    });

    return axios.put(`api/appointments/${id}`, { interview });
  }

  function cancelInterview(id) {
    const delAppointment = { ...state.appointments[id], interview: null };
    const appointments = { ...state.appointments, [id]: delAppointment };
    dispatch({ type: SET_INTERVIEW, id: id, interview: null });
    return axios.delete(`api/appointments/${id}`);
  }

  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers"),
    ]).then((arrPromiseResponse) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        days: arrPromiseResponse[0].data,
        appointments: arrPromiseResponse[1].data,
        interviewers: arrPromiseResponse[2].data,
      });
    });
  }, []);
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}