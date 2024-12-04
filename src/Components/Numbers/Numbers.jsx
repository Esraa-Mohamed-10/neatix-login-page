import React, { useEffect, useState } from 'react'

const Numbers = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < 100) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ fontSize: '24px', textAlign: 'center', marginTop: '20px' }}>
            <p>Customers Served:</p>
            <p>{count}</p>
        </div>
    );
}

export default Numbers