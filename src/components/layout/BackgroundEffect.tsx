"use client";

import LightRays from "@reactbits/LightRays";

export default function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <LightRays
        raysOrigin="top-center"
        raysColor="#b583d3"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1.5}
        saturation={1}
      />
    </div>
  );
}
