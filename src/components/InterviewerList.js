import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem.js";

export default function DayList(props){
  const intVals = Object.values(props.interviewers);
  console.log(props.interviewers)
  const parsedInterviewer = intVals.map(interviewer => <InterviewerListItem key={interviewer.id}
                                                                            //id={interviewer.id} no need to pass it due to props drilling 
                                                                            name={interviewer.name} 
                                                                            avatar={interviewer.avatar} 
                                                                            selected={props.interviewer === interviewer.id}
                                                                            setInterviewer={() => props.onChange(interviewer.id)}// props.setInterviewer}
                                                       />);
  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewer}</ul>
    </section>
  )
}
