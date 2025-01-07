"use client"

import Spline from '@splinetool/react-spline';

interface SplineAssetProps {
  scene: string;
}

export default function SplineAsset({ scene }: SplineAssetProps) {
  return (
    <div className="w-full h-[400px]">
      <Spline scene={scene} />
    </div>
  );
}

