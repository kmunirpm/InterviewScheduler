import { useState } from "react";

// Hook function passed to Appointment/index to update state for transitions
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([]);
  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory((prev) => [...prev]);
    } else {
      setHistory((prev) => [...prev, mode]);
    }
    setMode(newMode);
  };
  const back = () => {
    if (history.length < 1) return;
    setMode(history.pop());
  };
  return { mode, transition, back };
}
