// "use client";
// import React, { useState } from "react";
// import "./page.css";
// import { makePdf } from "sub-components";
// import { ContentsPdf } from "sub-components";
// import ProjectsData from "data/dashboard/ProjectsData";

// const Contract = () => {
//   const [datas, setData] = useState(ProjectsData);
//   const addHandler = (data) => {
//     setData((prevData) => {
//       return [data, ...prevData];
//     });
//   };

//   const pdf = makePdf();

//   const onClick = async (e) => {
//     e.preventDefault();
//     await pdf.viewWithPdf();
//   };

//   return (
//     <div className="div_container">
//       <div className="div_paper">
//         <div>
//           <div>
//             <h1>계약서</h1>
//             <p>우리 계약했다.</p>
//             <br></br>
//             <br></br>
//             <br></br>
//           </div>
//           <div>
//             <p>견적사항</p>
//             <ContentsPdf items={datas} />
//           </div>
//           <div>
//             <br />
//             <br />
//             <br />
//             <div>
//               <p>
//                 대표자: <button>전자서명 첨부</button>
//               </p>
//             </div>
//           </div>
//           <div>
//             <br />
//             <br />
//             <br />
//             <br />
//             <a href="/pages/current/contract">계약 완료</a>
//           </div>
//         </div>
//       </div>
//       <button onClick={onClick}>pdf로 보기</button>
//     </div>
//   );
// };

// export default Contract;
"use client";
import React, { useState, useEffect, useCallback } from "react";
import "./page.css";
import { makePdf } from "sub-components";
import { ContentsPdf } from "sub-components";
import router from "next/router";


const Contract = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const pdf = makePdf();

  const onClick = async (e) => {
    e.preventDefault();
    await pdf.viewWithPdf();
  };



  const fetchHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://wmsproject-ac359-default-rtdb.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("오류가 생겼습니다!!");
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

  let content;
  if (products.length > 0) {
    content = <ContentsPdf products={products} />;
  }

  return (
    <React.Fragment>
      <div className="div_container">
        <div className="div_paper">
          <section>
            <h1>계약서</h1>
            <br />
            <br />
            <br />
            <h3>우리 계약했다.</h3>
          </section>
          <br />
          <br />
          <br />
          <section>
            <h1>견적사항</h1>
          </section>
          <br />
          <section>{content}</section>
          <br />
          <br />
          <section>
            대표자 : <button>전자서명 첨부</button>
          </section>
          <section>
            <br />
            <br />
            <br />
            <br />
            <a href="/pages/current/contract">계약 완료</a>
          </section>
        </div>
        <button onClick={onClick}>pdf로 보기</button>
      </div>
    </React.Fragment>
  );
};

export default Contract;
