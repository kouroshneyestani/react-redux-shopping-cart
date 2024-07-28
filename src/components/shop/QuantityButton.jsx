const QuantityButton = ({
    quantity,
    onIncrement,
    onDecrement,
    disabledDecrement,
}) => (
    <div className="gap-1 flex items-center">
        <button
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={onDecrement}
            disabled={disabledDecrement}
        >
            -
        </button>
        <span>{quantity}</span>
        <button
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={onIncrement}
        >
            +
        </button>
    </div>
);

export default QuantityButton;
