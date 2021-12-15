import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW,
} from "components/reducers/application";

// Functions used to update state upon booking and cancelling an Interview
export default function useApplicationData() {
  function bookInterview(id, interview) {
    
  
  }

  function cancelInterview(id) {
   
  }



  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers"),
    ]).then((arrPromiseResponse) => {
     
    });
  }, []);
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
