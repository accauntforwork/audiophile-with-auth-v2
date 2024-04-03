import { React, useState, useEffect } from "react";
import ButtonShop from "./buttons/Button-Shop.jsx";
import products from "../data/products.json";

function ProductCategoryCard({ imgUrl, alt, category }) {
  return (
    <li>
      <div className="relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto">
        <img
          className="w-1/2 h-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={imgUrl}
          alt={alt}
        />
        <h6 className="text-mobileMenu lg:text-h6">{category}</h6>
        <ButtonShop to={`/${category.toLowerCase()}`}></ButtonShop>
      </div>
    </li>
  );
}

function ProductCategoryHome() {
  // Massivdagi mahsulotlarni 'slug' nomi bo'yicha filtrlaydi.
  // Filtrlashda, faqat 'xx99-mark-one-headphones',
  // 'zx9-speaker' va 'yx1-earphones' slug nomlari mos keladigan mahsulotlar qoladi.
  const filteredProducts = products
    .filter(
      (product) =>
        product.slug === "xx99-mark-one-headphones" ||
        product.slug === "zx9-speaker" ||
        product.slug === "yx1-earphones"
    )
    // Filtrlangan mahsulotlar 'category' bo'yicha tartiblanadi. Mahsulotlar
    // kategoriyasiga qarab, 'headphones' bo'lganlari avval, keyin
    // 'speakers' bo'lganlari, va oxirida 'earphones' bo'lganlari tartiblanadi.
    .sort((a, b) => {
      const categoryOrder = { headphones: 0, speakers: 1, earphones: 2 };
      return categoryOrder[a.category] - categoryOrder[b.category];
    });

  return (
    <div className="bg-pureWhite mb-[120px] md:px-4">
      <ul className="pt-[92px] md:pt-[110px] flex flex-col md:grid md:grid-cols-3 gap-[68px] md:gap-[10px] lg:gap-[30px] md:max-w-[689px] lg:max-w-[1110px] mx-auto items-center">
        {filteredProducts.map((product) => (
          <ProductCategoryCard
            key={product.id}
            imgUrl={`/${product.categoryImage.categoryPreview}`}
            alt={product.name}
            category={product.category.toUpperCase()}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductCategoryHome;
