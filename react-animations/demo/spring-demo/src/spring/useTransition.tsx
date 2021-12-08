import { config, useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const NUM_TRANS = [
  {
    fig: 1,
    op: { range: [0.75, 1], output: [0, 1] },
    trans: { range: [0.75, 1], output: [-40, 0], extrapolate: "clamp" },
  },
  {
    fig: 2,
    op: { range: [0.25, 0.5], output: [0, 1] },
    trans: {
      range: [0.25, 0.5],
      output: [-40, 0],
      extrapolate: "clamp",
    },
  },
  {
    fig: 3,
    op: { range: [0, 0.25], output: [0, 1] },
    trans: { range: [0, 0.25], output: [-40, 0], extrapolate: "clamp" },
  },
  {
    fig: 4,
    op: { range: [0.5, 0.75], output: [0, 1] },
    trans: {
      range: [0.5, 0.75],
      output: [-40, 0],
      extrapolate: "clamp",
    },
  },
];

export function TransitionArray() {
  const [items, setItems] = useState(NUM_TRANS);

  const transitions = useTransition(items, {
    from: { opacity: 0, type: "from" },
    enter: { opacity: 1, type: "enter" },
    leave: { opacity: 0, type: "leave" },
    delay: 200,
    config: config.molasses,
    onRest: () => {
      setItems((items) => {
        return items.length === 0 ? items : [];
      });
    },
  });

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(NUM_TRANS);
      }, 2000);
    }
  }, [items]);

  console.log("items", items);

  return (
    <div style={{ display: "flex" }}>
      {transitions((values, item) => {
        const { opacity, type } = values;
        console.log(item.fig, "values.type", type.goal, opacity.goal);

        return (
          <animated.div
            style={{
              opacity: opacity.to(item.op),
              transform: opacity
                // .to((x) => {
                //   console.log(item.fig, "x", x);
                //   return x;
                // })
                .to(item.trans as any)
                .to((y) => `translate3d(0,${y}px,0)`),
            }}
          >
            {item.fig}
          </animated.div>
        );
      })}
    </div>
  );
}
