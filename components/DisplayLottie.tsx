import React, { useEffect, useState } from "react";

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    import("react-lottie").then(mod => {
      setLottie(() => mod.default);
    });
  }, []);

  if (!animationPath || !Lottie) {
    return <div style={{ minHeight: "250px" }} />;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
