import React from 'react';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import useVisualMode from 'components/hooks/useVisualMode';
import 'components/Appointment/styles.scss';
import Status from './Status';
import Confirm from 'components/Appointment/Confirm';
import Error from 'components/Appointment/Error';

// Transition View States
const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const DELETING = 'DELETING';
const EDITING = 'EDITING';
const CONFIRMING = 'CONFIRMING';
const ERROR_SAVE = 'ERROR_SAVE';
const ERROR_DELETE = 'ERROR_DELETE';

export default function Appointment(props) {
  // Save an appointment
  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };
    props
      .bookInterview(props.id, interview)
      .then(response => {
        transition(SHOW);
      })
      .catch(error => transition(ERROR_SAVE, true));
  }

  // Delete an appointment
  function deleting() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(error => transition(ERROR_DELETE, true));
  }

  function edit() {
    transition(EDITING);
  }

  function confirmation() {
    transition(CONFIRMING);
  }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article data-testid="appointment" className="appointment">
      
    </article>
  );
}
