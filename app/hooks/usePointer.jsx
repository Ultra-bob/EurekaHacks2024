import { useState, useEffect } from "react";

// Possibly use this:

/*<motion.div
    ref={ref}
    animate={{ x, y }}
    transition={{
        type: "spring",
        damping: 25,
        stiffness: 50,
        restDelta: 0.001,
    }}
>*/

export function useFollowPointer(ref) {
    const [point, setPoint] = useState({ x: -75, y: 0 });

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current;

            // Only affect the element if pointer is within 100px of the element
            if (
                clientX < element.offsetLeft - 150 ||
                clientX > element.offsetLeft + element.offsetWidth + 150 ||
                clientY < element.offsetTop - 150 ||
                clientY > element.offsetTop + element.offsetHeight + 150
            ) {
                setPoint({ x: -75, y: 0 });
                return;
            }

            const x =
                0 - (clientX - element.offsetLeft - element.offsetWidth / 2);
            const y =
                0 - (clientY - element.offsetTop - element.offsetHeight / 2);
            setPoint({ x, y });
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () =>
            window.removeEventListener("pointermove", handlePointerMove);
    }, [ref]);

    return point;
}
