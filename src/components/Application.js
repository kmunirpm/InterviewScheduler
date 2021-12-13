import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay
} from './helpers/selectors.js';
export default function Application(props) {
  // const [days, setDays] = useState([]);
  // const [day, setDay] = useState("Monday");
  // const [interviewer, setInterviewer] = useState();
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  const dailyAppointments = [];

  const setDay = day => setState(prev => ({ ...prev, day }));
  const setDays = (days) => setState(prev => ({ ...prev, days }));


  useEffect(() => {
    const baseURL = `http://localhost:8001/api`;
    const daysPromise = axios.get(`${baseURL}/days`);
    const appointmentsPromise = axios.get(`${baseURL}/appointments`);
    const interviewersPromise = axios.get(`${baseURL}/interviewers`);
    
    const promises = [daysPromise, appointmentsPromise, interviewersPromise];

    Promise.all(promises)
      .then(arrOfReslts => {
        setDays(arrOfReslts[0].data);
      });
  }, []);
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList
          days={state.days}
          value={"Monday"}
          onChange={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        <Appointment />
      </section>
    </main>
  );
}
