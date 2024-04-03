import React, { useState, useEffect } from "react";
import ProductTitleHeader from "../components/ProductTitleHeader";
import ProductPreviewCard from "../components/ProductPreviewCard";
import ProductCategory from "../components/ProductCateogry";
import useAaFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

function Speakers() {
  const [speakers, setSpeakers] = useState([]);
  // json server product.json faylini 6 ta endpointga bo'lib berayapti bu birlashtirish uchun
  const { data, isLoading, error } = useAaFetch("http://localhost:4000/4");
  // const { data1 } = useAaFetch("http://localhost:4000/1");
  // const { data2 } = useAaFetch("http://localhost:4000/2");
  // const { data3 } = useAaFetch("http://localhost:4000/3");
  // const { data4 } = useAaFetch("http://localhost:4000/4");
  // const { data5 } = useAaFetch("http://localhost:4000/5");

  useEffect(() => {
    // console.log(17, allProducts);
    // console.log("isloading 18", isLoading);
    // const dates = [data, data1, data2, data3, data4, data5];
    console.log(data);
    if (data && Array.isArray(data)) {
      setSpeakers(data);
    }
    // console.log(data);
    // console.log(speakers);
    // if (data) {
    //   console.log(data);
    //   setSpeakers(data.filter((product) => product.category === "speakers"));
    //   console.log(data);
    //   // console.log(22, error);
    //   // console.log(23, allProducts);
    // }
  }, [data]);

  // !quyidagicha usul ham ishlamadi
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const endpoints = [
  //   "http://localhost:4000/0",
  //   "http://localhost:4000/1",
  //   "http://localhost:4000/2",
  //   "http://localhost:4000/3",
  //   "http://localhost:4000/4",
  //   "http://localhost:4000/5",
  // ];

  // useEffect(() => {
  //   setIsLoading(true);

  //   const fetchData = async () => {
  //     try {
  //       const responses = await Promise.all(
  //         endpoints.map((url) => useAaFetch(url)) // Fetch data from all endpoints
  //       );
  //       const combinedData = responses.flatMap((response) => response.data);
  //       setData(combinedData);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {error && (
        <p className="p-20 min-h-[80vh] text-6xl w-[100vw] flex justify-center items-center text-red-600">
          {error}
        </p>
      )}
      {speakers.length > 0 && (
        <>
          <ProductTitleHeader title="Speakers" />
          <div className="flex flex-col gap-[120px] lg:mb-[120px]">
            {speakers
              .sort((a, b) => b.new - a.new || a.id - b.id)
              .map((speaker, index) => (
                <ProductPreviewCard
                  key={speaker.id}
                  image={speaker.categoryImage}
                  name={speaker.name}
                  description={speaker.description}
                  newProduct={speaker.new}
                  id={speaker.id}
                  slug={speaker.slug}
                  isReversed={index % 2 === 1}
                />
              ))}
          </div>
          <ProductCategory />
        </>
      )}
      {speakers.length === 0 && !isLoading && !error && (
        <p className="p-20 h-[80vh] text-6xl w-[100vw] flex justify-center items-center text-red-600">
          No speakers found.
        </p>
      )}
    </div>
  );
}

export default Speakers;

// import React from "react";
// import ProductTitleHeader from "../components/ProductTitleHeader";
// import ProductPreviewCard from "../components/ProductPreviewCard";
// import productData from "../data/products.json";
// import ProductCategory from "../components/ProductCateogry";

// function Speakers() {
//   const speakers = productData.filter(
//     (product) => product.category === "speakers"
//   );

//   return (
//     <div>
//       <ProductTitleHeader title="Speakers" />
//       <div className="flex flex-col gap-[120px] lg:mb-[120px]">
//         {speakers
//           .sort((a, b) => b.new - a.new || a.id - b.id)
//           .map((speaker, index) => (
//             <ProductPreviewCard
//               key={speaker.id}
//               image={speaker.categoryImage}
//               name={speaker.name}
//               description={speaker.description}
//               newProduct={speaker.new}
//               id={speaker.id}
//               slug={speaker.slug}
//               isReversed={index % 2 === 1}
//             />
//           ))}
//       </div>
//       <ProductCategory />
//     </div>
//   );
// }

// export default Speakers;
