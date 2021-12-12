import React from "react";
import DayListItem from "components/DayListItem.js";

export default function DayList(props){
  const daysVals = Object.values(props.days);
  const parsedDays = daysVals.map(days => <DayListItem key={days.id}
                                                       value={days.name} 
                                                       spots={days.spots} 
                                                       selected={days.name === props.day}
                                                       setDay={props.onChange}
                                          />);
  return(
    <ul>
      {parsedDays}
    </ul>
  )
}
