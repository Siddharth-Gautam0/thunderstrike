import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./zoomableCircle.css"; // Import the CSS file
import { log } from "console";

export type ZoomableCircleProps = {
    onCircleWidthExceedsScreenWidth?: () => void;
  }

const ZoomableCircle = (props?: ZoomableCircleProps) => {

const [scrollY, setScrollY] = useState<number>(0)

const handleScroll = (scrollDirection: string) => {
    // Your scroll handling logic here

    setScrollY((prevScrollY) => {
      if (scrollDirection === 'down') {
        return prevScrollY + 10;
      } else {
        if (prevScrollY > 10) {
          return prevScrollY - 10;
        } else if (prevScrollY > 0 && prevScrollY <= 10) {
          return 0;
        }
      }
      return prevScrollY; // return previous state if no changes
    });
  };

    useEffect(() => {
    const scrollHandler = (event: WheelEvent) => {
        const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
        handleScroll(scrollDirection);
    };

    window.addEventListener('wheel', scrollHandler);

    // Remove the event listener when the component unmounts
    return () => {
        window.removeEventListener('wheel', scrollHandler);
    };
    }, []);

  // Calculate the circle size based on the scroll position
  const circleSize = Math.min(scrollY / 7, 900);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (circleSize * 11 > screenWidth) {
        props?.onCircleWidthExceedsScreenWidth && props.onCircleWidthExceedsScreenWidth();
    }
    }, [circleSize]);

  // Define the initial and animate props for the motion component
  const circleProps = {
    initial: {
      width: 0,
      height: 0,
      opacity: 0,
      x: "-50%",
      y: "-50%",
    },
    animate: {
      width: circleSize + "vw",
      height: circleSize + "vw",
      opacity: 1,
      x: "-50%",
      y: "-50%",
    },
    transition: {
      duration: 0,
      ease: "easeOut",
    },
  };

  return (
    <motion.div className="circle" {...circleProps}>
      {circleSize > 0 && <div className="ring"></div>}
    </motion.div>
  );
};

export default ZoomableCircle;
