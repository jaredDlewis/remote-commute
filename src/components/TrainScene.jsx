import Scenery from './Scenery.jsx'
import './TrainScene.css'

export default function TrainScene() {
  return (
    // .shake gently rocks the whole view like a moving carriage
    <div className="scene">
      <div className="shake">
        <div className="window">
          <Scenery />
          {/* soft sunlight + reflection sliding across the glass */}
          <div className="window__glass" aria-hidden="true" />
          <div className="window__rays" aria-hidden="true" />
        </div>

        {/* train interior framing the window */}
        <div className="interior" aria-hidden="true">
          <div className="interior__wall interior__wall--top" />
          <div className="interior__sill" />
        </div>
      </div>
    </div>
  )
}
