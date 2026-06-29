import TrainScene from './components/TrainScene.jsx'
import Timer from './components/Timer.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <TrainScene />

      <div className="ui">
        <header className="ui__header">
          <h1 className="ui__title">morning commute</h1>
          <p className="ui__subtitle">a quiet ride to clear your head</p>
        </header>

        <Timer />
      </div>

      {/* lofi film grain + vignette over everything */}
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
    </div>
  )
}
