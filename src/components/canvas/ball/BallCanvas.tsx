import React, { Suspense } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { CanvasLoader } from '../canvasLoader';
import { Ball } from './Ball';

type BallCanvasType = {
  icon: any;
};

export const BallCanvas = (props: BallCanvasType) => {
  const { icon } = props;

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
