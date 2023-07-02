import React, {useState} from "react";

const Tooltip = ({children, element}) => {
    const [hovering, setHovering] = useState(false);

    const Container = {
        position: "relative",
        display: "flex"
    }

    const mouseOver = () => {
        setHovering(true);
    }
    const mouseOut = () => {
        setHovering(false);
    }

    return (
        <div onMouseOver={mouseOver} onMouseOut={mouseOut} style={Container}>

            {hovering && element}
            {children}
        </div>
    )
}

export default Tooltip;
