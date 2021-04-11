import { useEffect, useState } from "react"

// only getting the Y scroll position for now
// => X position isn't needed yet
export function useScrollPosition() {

    const [scrollPosition, setScrollPosition] = useState(0);
    // const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let isScrolling = false;

        const handleScrollSetting = () => isScrolling = true;

        const handleScrollLogic = () => { // throttling scroll event
        
            setInterval( function() {
                if ( isScrolling ) {
                  window.requestAnimationFrame(function() {
                    setScrollPosition(window.pageYOffset);
                    isScrolling = false;
                    console.log('running', scrollPosition);
                    handleScrollLogic();              
                  })
                }
              }, 100 );
        }

        window.addEventListener('scroll', handleScrollSetting);
        handleScrollLogic() 
    
        return () => {
            isScrolling = false;
            window.removeEventListener('scroll', handleScrollSetting)
        }
    }, [])
  
    return [scrollPosition];
}
