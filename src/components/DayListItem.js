import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const styleClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots < 1 ? true : false,
  });
  return (
    <li
      className={styleClass}
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}

const formatSpots = function (spots) {
  if (spots > 1) {
    return spots + " spots remaining";
  } else if (spots === 1) {
    return "1 spot remaining";
  } else {
    return "no spots remaining";
  }
};
