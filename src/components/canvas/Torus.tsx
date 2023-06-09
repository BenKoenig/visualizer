/* eslint-disable */
// @ts-nocheck
import React, {useRef} from 'react'
import { useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
extend({OrbitControls})

const Torus: React.FC = () => {
  const {camera, gl} = useThree()
  const cubeRef = useRef()
  const groupRef = useRef()
  useFrame((state, delta) => {
/*     const angle = state.clock.elapsedTime
    state.camera.position.x = Math.sin(angle) * 8
    state.camera.position.z = Math.cos(angle) * 8
    state.camera.lookAt(0,0,0) */
    cubeRef.current.rotation.y += delta
  })
  return(
    <>
      <orbitControls args={ [camera, gl.domElement] } />


      <directionalLight position={[1,2,3]} intensity={1.5} />
      <ambientLight intensity={0.5}/>

      <group ref={groupRef}>
        <mesh ref={cubeRef}  rotation-y={ Math.PI * 0.21 } scale={ 1.5 } position={[5, 2, 5]}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple"  />
        </mesh>
        <mesh scale={ 1.5 } position={[0, 0, 5]}>
          <sphereGeometry />
          <meshStandardMaterial color="orange"  />
        </mesh>
      </group>
    </>
  )
}

export default Torus
