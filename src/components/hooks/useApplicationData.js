import { useReducer, useEffect } from "react";
import axios from "axios";


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
