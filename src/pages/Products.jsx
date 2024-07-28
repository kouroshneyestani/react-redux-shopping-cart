import React, { useMemo } from "react";
import { useProducts } from "../hooks";
import {
    SpaceBar,
    Container,
    Breadcrumb,
    ProductItem,
} from "../components/index";

/**
 * Products component displaying available products.
 * @returns {JSX.Element} - The Products component.
 */
const Products = () => {
    const { products } = useProducts();

    const breadcrumbItems = useMemo(() => {
        console.log("Calculating breadcrumbItems");
        return [
            { label: "Home", link: "/" },
            { label: "Products", link: "/" },
        ];
    }, []);

    const productItems = useMemo(() => {
        console.log("Calculating productItems");
        return products.map((product) => (
            <ProductItem key={product.id} {...product} />
        ));
    }, [products]);

    return (
        <>
            <SpaceBar pb={null} />
            <Container>
                <div className="flex items-center justify-between">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productItems}
                </div>
            </Container>
            <SpaceBar pt={null} />
        </>
    );
};

export default Products;
