import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();

    return (
        <h2>{params.productId}</h2>
    )
}

export default ProductDetail;