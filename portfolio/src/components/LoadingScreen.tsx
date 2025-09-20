import { useEffect } from "react";

type LoadingScreenProps = {
  onComplete: () => void;
};

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      onComplete();
    }, 1000);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-xl gap-2 md:text-2xl lg:text-3xl font-bold">
      <i className="fa-solid fa-spinner fa-spin-pulse"></i>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
