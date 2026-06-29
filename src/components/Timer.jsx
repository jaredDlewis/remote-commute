import { useEffect, useRef, useState } from 'react'
import './Timer.css'
import { DEFAULT_TIMER_DURATION_MINUTES } from '../constants/timerConstants'

export default function Timer({ minutes = DEFAULT_TIMER_DURATION_MINUTES }) {
  const totalSeconds = minutes * 60
  const [remaining, setRemaining] = useState(totalSeconds)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  // Drive the countdown with a 1s interval while running.
  useEffect(() => {
    if (!running) return
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current)
          setRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [running])

  const finished = remaining === 0

  function toggle() {
    if (finished) {
      setRemaining(totalSeconds)
      setRunning(true)
      return
    }
    setRunning((r) => !r)
  }

  function reset() {
    setRunning(false)
    setRemaining(totalSeconds)
  }

  const mins = Math.floor(remaining / 60)
  const secs = remaining % 60
  const label = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

  // Progress ring geometry.
  const R = 86
  const C = 2 * Math.PI * R
  const progress = 1 - remaining / totalSeconds
  const dashOffset = C * (1 - progress)

  return (
    <section className="timer" aria-label="Mindfulness timer">
      <div className="timer__ring-wrap">
        <svg
          className="timer__ring"
          viewBox="0 0 200 200"
          width="200"
          height="200"
        >
          <circle className="timer__track" cx="100" cy="100" r={R} />
          <circle
            className="timer__progress"
            cx="100"
            cy="100"
            r={R}
            strokeDasharray={C}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div className="timer__readout">
          <span className="timer__time">{finished ? 'done' : label}</span>
          <span className="timer__hint">
            {finished
              ? 'breathe out slowly'
              : running
                ? 'be here, now'
                : `${minutes} min session`}
          </span>
        </div>
      </div>

      <div className="timer__controls">
        <button className="btn btn--primary" onClick={toggle}>
          {finished ? 'again' : running ? 'pause' : 'start'}
        </button>
        <button
          className="btn"
          onClick={reset}
          disabled={remaining === totalSeconds && !running}
        >
          reset
        </button>
      </div>
    </section>
  )
}
