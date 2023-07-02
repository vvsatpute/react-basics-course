import React, {useState} from "react";

const withHover = (Component, propName="hovering", props) => {
    return (
        () => {
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
                    {<Component />}
                </div>
            )
        }
    )
}
