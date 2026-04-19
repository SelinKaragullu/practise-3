import { useState } from "react";

export default function ImageSlider() {

    const [currentSlide, setCurrentSlide] = useState(0)

    return <><button onClick={handlePrevious}> Previous </button>
<h1>{currentSlide}</h1>
    <button onClick={handleNext}> Next </button>
    </>
}