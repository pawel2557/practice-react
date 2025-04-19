import { useParams } from "react-router-dom"
export const ProductDetail = () => {
    const product = useParams();
    return (
        <div className="component">Product {product.id} - ProductDetail</div>
    )
}