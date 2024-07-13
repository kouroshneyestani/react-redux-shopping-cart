import { withLoading } from "../../hocs";
import { useProducts } from "../../hooks";
import ProductItem from "../ProductsItem";
import { Container } from "../index";

/**
 * Products component displaying available products.
 * @returns {JSX.Element} - The Products component.
 */
const Products = () => {
    const { products } = useProducts();

    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
        </Container>
    );
};

export default withLoading(Products);
