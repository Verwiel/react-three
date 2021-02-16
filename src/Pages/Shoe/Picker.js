import React from "react"
import { HexColorPicker } from "react-colorful"
import { useProxy } from "valtio"

function Picker({ state }) {
  const snap = useProxy(state)
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1 className="picker-title">{snap.current}</h1>
    </div>
  )
}

export default Picker
