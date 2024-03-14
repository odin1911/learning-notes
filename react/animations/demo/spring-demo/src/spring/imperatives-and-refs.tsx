import { config, useSpring, useSpringRef } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useEffect } from "react";

export function BackwardsCompatability() {
  const [styles, api] = useSpring(() => ({
    from: { x: -50, opacity: 1 },
  }));

  useEffect(() => {
    api.start({
      x: 50,
      opacity: 1,
      loop: { reverse: true },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const springRef = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: "100%",
      background: "white",
    },
  });

  useEffect(() => {
    // this will give you access to the same API documented above
    console.log(springRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#46e891",
        borderRadius: 16,
        ...styles,
      }}
    />
  );
}
