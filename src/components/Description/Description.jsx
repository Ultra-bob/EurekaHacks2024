import React from "react";
import "./Description.css";

// import Description from "../../assets/" i can't find the image

export default function Description() {
    return (
        <div>
            <div className="description">
                <div className="description-left">
                    Abbey Park's Very Own Hackathon!
                    <h6 className="description-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor eu nisi sed consectetur. Praesent ullamcorper ante sem. Cras sed imperdiet arcu. Cras faucibus, mi sed mattis tristique, metus libero interdum lectus, vel vestibulum enim ipsum in libero. Pellentesque dictum vulputate semper. Nullam varius tempus nulla, ac lacinia mauris mattis vel. Nulla eu quam ut ante ultricies tincidunt eget in urna.</h6>
                </div>
                <img className="description-right glow" src="https://via.placeholder.com/300" alt="placeholder" />
            </div>

        </div>
    );
}
