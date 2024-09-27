import Spline from '@splinetool/react-spline/next';
import SpaceButton from './Button';

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Spline Scene */}
      <Spline
        className="absolute inset-0 w-full h-full z-10"
        scene="https://prod.spline.design/9SSZCjna5DJOFcK1/scene.splinecode"
      />

      {/* Space Button centered at the bottom */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <SpaceButton />
      </div>
    </div>
  );
}
