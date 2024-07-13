export default function Container({ children, className }) {
    return (
        <div className={`container mx-auto max-w-screen-lg ${className}`}>{children}</div>
    );
}
