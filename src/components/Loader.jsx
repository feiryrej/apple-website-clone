import { Html } from '@react-three/drei'
import React from 'react'

// Define the Loader component
function Loader() {
  return (
    // Use the Html component to render HTML within the 3D canvas
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          Loading...
        </div>
      </div>
    </Html>
  )
}

export default Loader