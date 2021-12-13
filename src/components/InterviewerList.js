import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem.js";

export default function DayList(props) {
  let parsedInterviewer = props.interviewers.map(interviewer => {
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.interviewer === interviewer.id}
      setInterviewer={() => props.setInterviewer(interviewer.id)}
    />
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewer}</ul>
    </section>
  );
}
