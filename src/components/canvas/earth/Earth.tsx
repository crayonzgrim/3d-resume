import React from 'react';
import { useGLTF } from '@react-three/drei';

export const Earth = () => {
  const earthGLTF = useGLTF('./planet/scene.gltf');

  return (
    <primitive
      object={earthGLTF.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};
