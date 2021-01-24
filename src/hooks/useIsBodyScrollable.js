import { useEffect, useState } from 'react';

export function useIsBodyScrollable(scrollable = true) {
    const [isBodyScrollable, setIsBodyScrollable] = useState(scrollable);

    useEffect(() => {
        if(!isBodyScrollable) document.body.classList.add('body-no-scroll');
        else document.body.classList.remove('body-no-scroll');
    
        return (()=> {
            document.body.classList.remove('body-no-scroll');
        })
    }, [isBodyScrollable, setIsBodyScrollable])

    return [isBodyScrollable, setIsBodyScrollable];
}
