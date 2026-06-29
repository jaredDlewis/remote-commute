import './Scenery.css'

// A horizontally-scrolling parallax band. We render the same tile twice
// side by side and slide the pair left by exactly one tile width, so the
// loop is perfectly seamless. Farther layers get a longer duration.
function ParallaxLayer({ className, duration, children }) {
  return (
    <div className={`layer ${className}`}>
      <div
        className="layer__track"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="layer__tile">{children}</div>
        <div className="layer__tile" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

// --- seamless SVG tiles (left edge height === right edge height) ---

function Clouds() {
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
      <g fill="rgba(255,255,255,0.85)">
        <ellipse cx="160" cy="120" rx="120" ry="42" />
        <ellipse cx="250" cy="100" rx="90" ry="40" />
        <ellipse cx="70" cy="140" rx="80" ry="34" />
        <ellipse cx="640" cy="180" rx="140" ry="46" />
        <ellipse cx="740" cy="160" rx="100" ry="42" />
        <ellipse cx="980" cy="90" rx="110" ry="38" />
      </g>
      <g fill="rgba(255,255,255,0.5)">
        <ellipse cx="430" cy="240" rx="150" ry="40" />
        <ellipse cx="1080" cy="210" rx="130" ry="40" />
      </g>
    </svg>
  )
}

function Mountains() {
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice">
      <path
        fill="#8a7fa6"
        d="M0 600 V360 L120 300 L260 380 L380 280 L520 400 L660 300 L820 410 L980 320 L1120 400 L1200 360 V600 Z"
      />
      <path
        fill="#6f6593"
        opacity="0.95"
        d="M0 600 V440 L160 380 L320 460 L470 360 L640 470 L820 380 L1000 470 L1160 400 L1200 440 V600 Z"
      />
    </svg>
  )
}

function Hills() {
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice">
      <path
        fill="#7aa86b"
        d="M0 600 V470 C200 400 360 520 600 460 C840 400 1010 520 1200 470 V600 Z"
      />
      <path
        fill="#5e9457"
        d="M0 600 V520 C260 470 420 560 700 510 C940 470 1060 560 1200 520 V600 Z"
      />
    </svg>
  )
}

function Field() {
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice">
      <rect y="540" width="1200" height="60" fill="#3f7a43" />
      <path
        fill="#4d8a4a"
        d="M0 560 C300 520 500 580 800 545 C1000 522 1100 560 1200 545 V600 H0 Z"
      />
      {/* little bushes dotted along the bank */}
      <g fill="#356b39">
        <ellipse cx="120" cy="552" rx="46" ry="22" />
        <ellipse cx="470" cy="560" rx="52" ry="24" />
        <ellipse cx="820" cy="550" rx="48" ry="22" />
        <ellipse cx="1080" cy="558" rx="44" ry="22" />
      </g>
    </svg>
  )
}

function Near() {
  // Foreground telephone poles + wires that flick past quickly.
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice">
      {/* drooping wires between poles */}
      <path
        d="M40 150 Q300 250 600 150 Q900 250 1160 150"
        stroke="#2a2330"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      <g fill="#2a2330">
        <rect x="34" y="150" width="12" height="450" />
        <rect x="-6" y="170" width="92" height="10" />
        <rect x="594" y="150" width="12" height="450" />
        <rect x="554" y="170" width="92" height="10" />
        <rect x="1154" y="150" width="12" height="450" />
        <rect x="1114" y="170" width="92" height="10" />
      </g>
    </svg>
  )
}

export default function Scenery() {
  return (
    <div className="scenery">
      <div className="layer layer--sky" />
      <div className="sun" />
      <ParallaxLayer className="layer--clouds" duration={120}>
        <Clouds />
      </ParallaxLayer>
      <ParallaxLayer className="layer--mountains" duration={70}>
        <Mountains />
      </ParallaxLayer>
      <ParallaxLayer className="layer--hills" duration={34}>
        <Hills />
      </ParallaxLayer>
      <ParallaxLayer className="layer--field" duration={16}>
        <Field />
      </ParallaxLayer>
      <ParallaxLayer className="layer--near" duration={7}>
        <Near />
      </ParallaxLayer>
    </div>
  )
}
