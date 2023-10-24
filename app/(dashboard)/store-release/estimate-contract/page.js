// 'use client'
// import React, {useState} from 'react';
// import { New } from 'sub-components';
// import ProjectsData from 'data/dashboard/ProjectsData';
// import List from 'sub-components/estimate/list/list';



// const Estimate = () => {
//     const [datas, setDatas] = useState(ProjectsData);

//     const addEstimateDataHandler = (data) => {
//         setDatas((prevDatas) => {
//             return [data, ...prevDatas];
//         });
//     };

//     return (
//         <div>
//             <New OnAddList={addEstimateDataHandler}/>
//             <List items = {datas}/>
//         </div>
//     );
// }

// export default Estimate;

"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import { PageHeading } from "widgets";
import { New } from "sub-components";
import List from "sub-components/estimate/list/list";

function Estimate() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://wmsproject-ac359-default-rtdb.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("오류가 생겼습니다!");
      }
      const data = await response.json();

      //저장한 상품을 불러오자
      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          company: data[key].company,
          phone: data[key].phone,
          productName: data[key].productName,
          storing_quantity: data[key].storing_quantity,
          classification: data[key].classification,
          location: data[key].location,
          pallet_quantity: data[key].pallet_quantity,
          pallet_size: data[key].pallet_size,
        });
      }
      setProducts(loadedProducts);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  async function addProductHandler(product) {
    const response = await fetch(
      "https://wmsproject-ac359-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  let content = <p>상품이 없습니다.</p>;
  if (products.length > 0) {
    content = <List products={products} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>연결 중...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <New OnAddList={addProductHandler} />
      </section>
      <Container>
        <PageHeading heading="견적사항" />
        <section>
          <button onClick={fetchHandler}>새로고침</button>
        </section>
        <section>{content}</section>
      </Container>
    </React.Fragment>
  );
}

export default Estimate;
