import { useSpring, animated } from "react-spring";

export const Basic1 = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return <animated.div style={props}>I will fade in</animated.div>;
};

export const Basic2 = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
    cancel: (key) => {
      console.log("key", key, key === "x");

      return key === "x";
    },
  });

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
};
