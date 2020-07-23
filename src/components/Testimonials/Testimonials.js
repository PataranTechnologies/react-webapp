import React, { useState, useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const [testimonies] = useState([
    {
      text:
        "Softuvo helped us in setting up a new business in Poland with its amazing development process. It has helped us reach new heights of success.",
      tag: "Best for development process",
    },
    {
      text:
        "The team at Softuvo makes sure that they leave no stone unturned while helping a client.",
      tag: "Praiseworthy and brilliant team",
    },
    {
      text:
        "Softuvo's work ethics are greatest among all other competitors. It has world class solutions for any problem of yours.",
      tag: "Best in the Industry!",
    },
    {
      text:
        "Simply Awesome. The results my business has obtained after collaborating with Softuvo are beyond our expectations, a very dedicated team to work with.",
      tag: "Performance Elevator",
    },
  ]);

  const [state, setState] = useState({ translate: 0, activeIndex: 0});

  const getWidth = () => window.innerWidth;

  const nextRef = useRef();

  useEffect(() => {
      nextRef.current = nextTestimony;
  });

  useEffect(() => {
    const autoPlay = () => {
        nextRef.current();
    }
    const interval = setInterval(autoPlay, 3000);
    return () => {
        clearInterval(interval);
    }
  }, []);

  const nextTestimony = () => {
    if (state.activeIndex === testimonies.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }

    setState({
      ...state,
      activeIndex: state.activeIndex + 1,
      translate: (state.activeIndex + 1) * getWidth()
    });
  }

  return (
    <>
    <h2>Testimonials</h2>
    <div className={styles.testimonials}>
      <div className={styles.allTestimonies} style={{width: `${getWidth() * testimonies.length}px`, transform: `translateX(-${state.translate}px)`}}>
          {testimonies.map((testimony, index) => {
              return (
                  <div key={testimony+index} className={styles.singleTestimony}>
                      <p>"{testimony.text}"</p>
                      <h3>{testimony.tag}</h3>
                  </div>
              );
          })}
      </div>
    </div>
    </>
  );
};

export default Testimonials;
