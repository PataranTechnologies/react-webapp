import React, { useState, useEffect, useRef } from 'react';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styles from "./Carousel.module.css";

const Carousel = () => {
    const [slides] = useState([
        "https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
        "https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      ]);
      const [slidesPrimaryText] = useState([
        "Unfold Digital Marketing Secrets and reach the ladder of success",
        "Unfold Mobile Development Secrets and reach to the top!",
        "Let's build an amazing app together, your golden chance",
        "Let's build an awesome website together",
      ]);
      const [slidesSecondaryText] = useState([
        "No more escalations at work, ride to the top with Softuvo",
        "Be one of the bests in the industry with highly skilled mentors at Softuvo",
        "From app idea to app delivery, let Softuvo help you",
        "From User Experience to User Interface, let us give you the best of both worlds.",
      ]);
      const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

      const autoPlayRef = useRef();

      const firstSlideIndex = 0;
      const lastSlideIndex = slides.length - 1;
    
      const leftBtnClickedHandler = () => {
        setCurrentSlideIndex((currentSlideIndex) => {
            if(currentSlideIndex === firstSlideIndex){
                return lastSlideIndex;
            }
            else{
                return currentSlideIndex - 1;
            }
        });
      };
    
      const rightBtnClickedHandler = () => {
      setCurrentSlideIndex((currentSlideIndex) => {
          if(currentSlideIndex === lastSlideIndex){
              return firstSlideIndex;
          }
          else{
              return currentSlideIndex + 1;
          }
      });
      };

      useEffect(() => {
        autoPlayRef.current = rightBtnClickedHandler;
      });

      useEffect(() => {
        const autoPlay = () => {
          autoPlayRef.current();
        }
        setInterval(autoPlay, 5000);
      }, []);

    return (
        <main className={styles.mainCarouselComponent}>
        <div className={styles.slidesContainer}>
          <div className={styles.singleSlideContainer}>
            <img
              className={styles.singleSlide}
              src={slides[currentSlideIndex]}
              alt="slide"
            />
            <h1 className={styles.primarySlideText}>
              {slidesPrimaryText[currentSlideIndex]}
            </h1>
            <h2 className={styles.secondarySlideText}>
              {slidesSecondaryText[currentSlideIndex]}
            </h2>
            <button className={styles.leftBtn} onClick={leftBtnClickedHandler}>
              <ChevronLeftIcon />
            </button>
            <button className={styles.rightBtn} onClick={rightBtnClickedHandler}>
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </main>
    );
};

export default Carousel;
