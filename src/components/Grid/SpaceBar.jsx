export default function SpaceBar({ children, className, pt, pb }) {
    const classNames = [];

    if (!pt) {
        classNames.push("pt-20");
    }

    if (!pb) {
        classNames.push("pb-20");
    }

    return (
        <div className={[...classNames, className].join(" ")}>{children}</div>
    );
}
