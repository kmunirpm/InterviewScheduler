import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW,
} from "components/reducers/application";

// Function used to update state upon booking and cancelling an Interview
export default function useApplicationData() {
  function bookInterview(id, interview) {
    
  }

  function cancelInterview(id) {
    
  }

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},	
    interviewers: {},
  });

  const setDay = (day) => dispatch({ type: SET_DAY, day: day });

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