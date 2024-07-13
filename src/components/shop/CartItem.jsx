import { QuantityButton, CloseIcon } from "../index";
import { formatPrice } from "../../utils/formatPrice";

const CartItem = ({ item, onRemove, onQuantityChange }) => (
    <li className="[&:not(:last-child)]:border-b-[1px] border-solid border-gray-200 pb-4">
        <div className="relative">
            <div className="gap-4 flex justify-between">
                <div>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-[90px] h-[90px] object-cover"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex flex-col pt-2">
                        <h6>{item.name}</h6>
                        <ul className="gap-1 flex items-center text-xs">
                            <li>
                                <span>Size: </span>
                                <span>XL</span>,
                            </li>
                            <li>
                                <span>Color: </span>
                                <span>Blue</span>
                            </li>
                        </ul>
                        <button
                            className="top-2 right-0 w-4 h-4 flex items-center justify-center absolute cursor-pointer"
                            onClick={() => onRemove(item.id)}
                        >
                            <CloseIcon width={8} height={8} />
                        </button>
                    </div>
                    <div className="gap-4 flex items-center justify-between">
                        <QuantityButton
                            quantity={item.quantity}
                            onIncrement={() =>
                                onQuantityChange(item.id, item.quantity + 1)
                            }
                            onDecrement={() =>
                                onQuantityChange(item.id, item.quantity - 1)
                            }
                            disabledDecrement={item.quantity <= 1}
                        />
                        <div>
                            <span>$</span>
                            <span className="text-lg">
                                {formatPrice(item.price)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
);

export default CartItem;
