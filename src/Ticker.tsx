import React, {FunctionComponent, useState} from 'react';

type TickerProps = {
    title?: string
}

const Ticker: FunctionComponent<TickerProps> = ({title}) => {

    const [tick, setTick] = useState(0)

    return <div>
        <h2>{title}</h2>
        <p>Nuvarande tick: {tick}</p>
        <button onClick={() => setTick(tick + 1)}>Öka tick</button>
    </div>
}


export default Ticker;