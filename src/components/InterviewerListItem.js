import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const styleClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  return (
    <li className={styleClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}


// previous version was: <li className={styleClass} onClick={() => props.setInterviewer(props.id)}>  due to props drilling we do not need id in this component