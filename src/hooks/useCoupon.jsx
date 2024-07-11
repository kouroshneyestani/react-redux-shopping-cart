import { useState } from "react";

/**
 * Custom hook for managing coupon functionality.
 * @returns {{ couponCode: string, applyCoupon: (code: string) => void }}
 */
export const useCoupon = () => {
    const [couponCode, setCouponCode] = useState("");

    const applyCoupon = (code) => {
        setCouponCode(code);
    };

    return { couponCode, applyCoupon };
};
