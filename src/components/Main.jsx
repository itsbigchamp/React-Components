import React, { useState } from "react";

function Main(){
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1)
    return (
        <main>
            <h2> Main section here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum, officia laudantium vitae, quae eaque temporibus soluta molestias architecto eveniet quos velit sed quis quo quisquam, alias exercitationem maxime necessitatibus.</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </main>
    )
}

export default Main;