import React, { useRef } from "react";
import SuggestionItem from "./SuggestionItem";

const Suggestion = ({title})=>{

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
                    <SuggestionItem />
                </section>
            </div>
        </div>
    )
};

export default Suggestion;