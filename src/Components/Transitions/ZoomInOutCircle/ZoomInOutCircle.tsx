import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ZoomInOutCircle.css"; // Import the CSS file
import { ZoomableCircleProps } from "../ZoomableCircle/ZoomableCircle";

export type ZoomInOutCircleProps = {
    onCircleWidthExceedsScreenWidth?: () => void;
    onCircleWidthCollapses?: () => void;
  }

const ZoomInOutCircle = (props?: ZoomableCircleProps) => {

const screenWidth = window.innerWidth/4;

const [circleWidth, setCircleWidth] = useState<CircleWidths>({scrollY: 0, scrollY2: screenWidth})
const [circleZIndex, setCircleZIndex] = useState<number>(2);


type CircleWidths = {
    scrollY: number,
    scrollY2: number
}
const [isScrollActive, setIsScrollActive] = useState<boolean>(false)

const handleScroll = (scrollDirection: string) => {
    if (!isScrollActive) return;
      setCircleWidth((prevCircle) => {
        if(scrollDirection === "down") {
            if(prevCircle.scrollY2 >= screenWidth) {
                return {scrollY: prevCircle.scrollY + 5, scrollY2: prevCircle.scrollY2}
            }
            else {
                return {scrollY: prevCircle.scrollY, scrollY2: prevCircle.scrollY2 + 5}
            }
        }
        else if(scrollDirection === "up") {
            if(prevCircle.scrollY == 0) {
                return {scrollY: prevCircle.scrollY, scrollY2: prevCircle.scrollY2 - 5}
            }
            else {
                return {scrollY: prevCircle.scrollY - 5, scrollY2: prevCircle.scrollY2}
            }
        }
        else {
            return prevCircle
        }
      })
       
  };

    useEffect(() => {
    const scrollHandler = (event: WheelEvent) => {
        const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
        handleScroll(scrollDirection);
    };
    window.addEventListener('wheel', scrollHandler);

    return () => {
        window.removeEventListener('wheel', scrollHandler);
    };
    }, [isScrollActive]);

  const circleSize = Math.min(circleWidth.scrollY / 4, 900);

  const outerCircleSize = Math.min(circleWidth.scrollY2 / 4, 900);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (circleSize * 11 > screenWidth) {
        props?.onCircleWidthExceedsScreenWidth && props.onCircleWidthExceedsScreenWidth();
    }
    }, [circleSize]);

    useEffect(() => {
        if (outerCircleSize == 0) {
            props?.onCircleWidthExceedsScreenWidth && props.onCircleWidthExceedsScreenWidth();
        }
        setCircleZIndex(outerCircleSize < screenWidth/8 ? 999 : 2);

    }, [outerCircleSize]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsScrollActive(true);
        }, 1200);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

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

  const outerCircleProps = {
    initial: {
      width: screenWidth,
      height: screenWidth,
      opacity: 0,
      x: "-50%",
      y: "-50%",
    },
    animate: {
      width: outerCircleSize + "vw",
      height: outerCircleSize + "vw",
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
    <>
        <motion.div className="circle" {...circleProps}>
        {circleSize > 0 && <div className="ring"></div>}
        </motion.div>

        <motion.div className="circle2" style={{ zIndex: circleZIndex }} {...outerCircleProps}>
        {circleSize > 0 && <div className="ring2"></div>}
        </motion.div>
    </>
  );
};

export default ZoomInOutCircle;
