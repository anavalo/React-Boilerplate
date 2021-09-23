import React from 'react';

const ViewContext = React.createContext({
    isSmall: false,
    isMedium: false,
    isLarge: false,
});

const smallScreenMaxWidth = 579;
const mediumScreenMaxWidth = 768;

function getCurrentView() {
    const width = window.innerWidth;
    return {
        isSmall: width <= smallScreenMaxWidth,
        isMedium: width > smallScreenMaxWidth && width <= mediumScreenMaxWidth,
        isLarge: width > mediumScreenMaxWidth,
        width: window.innerWidth,
    };
}

function differenceBetweenCurrentAndNewView(currentView, newView) {
    return Object.keys(newView).filter(key => currentView[key] !== newView[key]);
}

function ViewProvider({ children }) {
    const [screen, setScreen] = React.useState(getCurrentView);

    React.useEffect(() => {
        let resizeTimeoutId = null;
        const resizer = () => {
            clearTimeout(resizeTimeoutId);
            resizeTimeoutId = setTimeout(() => {
                const numberOfChanges = differenceBetweenCurrentAndNewView(screen, getCurrentView());
                if (numberOfChanges.length > 0) {
                    return setScreen(getCurrentView());
                }
            }, 150);
        };

        window.addEventListener('resize', resizer);
        return () => window.removeEventListener('resize', resizer);
    }, [screen]);
    return <ViewContext.Provider value={screen}>{children}</ViewContext.Provider>;
}

function useScreen() {
    const context = React.useContext(ViewContext);
    if (context === undefined) {
        throw new Error('useScreen must be used inside of a ViewProvider');
    }
    return context;
}
export { ViewProvider, useScreen };
