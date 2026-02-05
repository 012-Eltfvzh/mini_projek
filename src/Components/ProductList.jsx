import React from "react";
import ProductCard from "./ProductCard";


function ProductList({ products, onAddToCart }) {
    if (products.length === 0) {
        return <p style={{ textAlign: "center" }}>Belum ada produk yang dijual.</p>;
    }


    return (
        <div className="product-grid">
            {products.map((item) => (
                <ProductCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
}


export default ProductList;