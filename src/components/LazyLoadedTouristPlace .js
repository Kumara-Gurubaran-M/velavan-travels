import React, { Suspense } from 'react';

const LazyLoadedTouristPlace = React.lazy(() => import('./TouristPlace'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyLoadedTouristPlace />
        </Suspense>
    );
}

export default App;
