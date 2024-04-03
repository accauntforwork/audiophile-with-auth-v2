import React from "react";
import ProductTitleHeader from "../components/ProductTitleHeader";
import ProductPreviewCard from "../components/ProductPreviewCard";
import productData from "../data/products.json";
import ProductCategory from "../components/ProductCateogry";

function Earphones() {
  const earphones = productData.filter(
    (product) => product.category === "earphones"
  );

  return (
    <div>
      <ProductTitleHeader title="Earphones" />
      <div className="flex flex-col gap-[120px] lg:mb-[120px]">
        {earphones
          .sort((a, b) => b.new - a.new || a.id - b.id)
          .map((earphone, index) => (
            <ProductPreviewCard
              key={earphone.id}
              image={earphone.categoryImage}
              name={earphone.name}
              description={earphone.description}
              newProduct={earphone.new}
              id={earphone.id}
              slug={earphone.slug}
              isReversed={index % 2 === 1}
            />
          ))}
      </div>
      <ProductCategory />
    </div>
  );
}

export default Earphones;
