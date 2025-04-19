import { useParams } from "react-router-dom"
export const ProductDetail = () => {
    const product = useParams();
    return (
        <main>

            <div className="component">Product {product.id} - ProductDetail</div>
        </main>
    )
}