import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Confirm from "components/Appointment/Confirm.js";
import Error from "components/Appointment/Error.js";
import Form from "components/Appointment/Form.js";
import Show from "components/Appointment/Show.js";
import Status from "components/Appointment/Status.js";
//import InterviewerListItem from "components/InterviewerListItem.js";

export default function Appointment(props){
  
  return(
    <article className="appointment">{props.time ? 'Appointment at ' + props.time:'No Appointments'}</article>
  )
}
