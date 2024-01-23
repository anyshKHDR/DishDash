import React, { useRef } from "react";

const DishSuggestion = ({title})=>{
    console.log(title)

    // Custom scroll function: Uses moodSectionRef to access the DOM's scrollLeft for horizontal scrolling.
    // useRef and ref are React's API for referencing DOM nodes. scrollLeft is a Web API property.
    const elementRef = useRef(null);

    const scroll=(scrollOffset)=>{
        elementRef.current.scrollLeft += scrollOffset;
    }

    return(
        <div className="mood">
            <div className="moodDiv">
                <div className="moodTitleDiv">
                    <h1 className="moodTitle">{title}</h1>
                    <div className="arrowContainer">
                        <div className="arrow" onClick={()=>scroll(-400)}>
                            <button>←</button>
                        </div>
                        <div className="arrow" onClick={()=>scroll(400)}>
                            <button>→</button>
                        </div>
                    </div>
                </div>
                <section className="moodSec" ref={elementRef}>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                    <section>
                        <img src="https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg" alt="" />
                        <h4>Ramen</h4>
                    </section>
                </section>
            </div>
        </div>
    )
};

export default DishSuggestion;