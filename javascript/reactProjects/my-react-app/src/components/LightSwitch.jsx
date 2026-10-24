import React, { useState } from 'react';

function LightSwitch() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>The light is {isOn ? '💡ON' : '⚫OFF'}</h1>

            <button onClick={() => setIsOn(!isOn)}>
                Switch
            </button>
        </div>
    );
}

export default LightSwitch;