import React from "react";

const SpaceBar = React.memo(({ children, className, pt, pb }) => {
    const classNames = [];

    if (pt !== null) {
        classNames.push("pt-20");
    }

    if (pb !== null) {
        classNames.push("pb-20");
    }

    return (
        <div className={[...classNames, className].join(" ")}>{children}</div>
    );
});

export default SpaceBar;
