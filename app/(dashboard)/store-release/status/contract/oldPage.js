// 'use client'
// import React from "react";
// import { Row, Container } from 'react-bootstrap';
// import { PageHeading } from 'widgets';
// import Button from 'react-bootstrap';
// import {Current} from 'sub-components';

// const Contract = () => {
    

//     return (
//         <Container fluid className="p-6">
//             <PageHeading heading="계약현황" />


//             <div className="py-6">
//              <Current/>
//             </div>

//         </Container>
//     )

// }

// export default Contract
"use client";
import { Container } from "react-bootstrap";
import { PageHeading } from "widgets";
import React from "react";
import Current from "sub-components/contract/current";

const Contract = () => {

// let content;
//   if (showDataList.length > 0) {
//     content = <Current showDataList={showDataList} />;
//     console.log(showDataList + "showDataList");
//   }

  return (
    <Container fluid className="p-6">
      <PageHeading heading="계약현황" />

      <section className="py-6">
        <div>
          <select name="searchType">
            <option value="company">회사명</option>
            <option value="classification">상품분류</option>
          </select>

          <input type="text" name="keyword" />

          <button type="button">검색</button>
        </div>
      </section>
      {/* <section>{content}</section> */}
      <section><Current/></section>
    </Container>
  );
};

export default Contract;
