import React, { useEffect } from 'react';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';

// The duration for each phase of the transition
// So the total duration will be _twice_ this
const timeout = 450;

const styles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms cubic-bezier(0.645, 0.045, 0.355, 1)`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms cubic-bezier(0.645, 0.045, 0.355, 1)`,
    opacity: 0
  },
};

const updatePageScroll = () => {
    window.scrollTo(0, 0)
}

// const transitionDelay = 450;

// export const shouldUpdateScroll = ({
//     routerProps: { location },
//     getSavedScrollPosition
//   }) => {
//     if (location.action === "PUSH") {
//       window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
//     } else {
//       const savedPosition = getSavedScrollPosition(location);
//       window.setTimeout(
//         () => window.scrollTo(...(savedPosition || [0, 0])),
//         transitionDelay
//       );
//     }
//     return false;
//   };


const PageTransitionTest = ({ children, location }) => {

    let isFirstExit = true;

    useEffect(() => {
        const transitionDelay = 450;
        // window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
    }, [location.pathname])

    return (
        <TransitionGroup>
            <ReactTransition key={location.pathname} timeout={timeout}>
            {(status) => {
                console.log('transition group testing', status);
                // if(status === 'exited' && !isFirstExit) updatePageScroll();
                isFirstExit = false;
                return (
                <div style={styles[status]}>
                {children}
                </div>
            )
            }}
            </ReactTransition>
        </TransitionGroup>
    )
};

export default PageTransitionTest;