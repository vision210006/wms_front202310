// import React, { useState } from "react";
// import "./basic";
// import "./New.css";
// import Basic from "./basic";

// const New = (props) => {
//   const [isEdit, setIsEdit] = useState(false);

//   const SaveDataHandler = (enteredestimateData) => {
//     const estimateData = {
//       ...enteredestimateData,
//       id: Math.random().toString(),
//     };
//     props.OnAddList(estimateData);
//     setIsEdit(false);
//   };

//   const startEditHandler = () => {
//     setIsEdit(true);
//   };
//   const stopEditHandler = () => {
//     setIsEdit(false);
//   };

//   return (
//     <div className="new-expense">
//       {!isEdit && <button onClick={startEditHandler}>견적서 작성</button>}
//       {isEdit && (
//         <Basic onSaveData={SaveDataHandler} onCancel={stopEditHandler} />
//       )}
//     </div>
//   );
// };

// export default New;
import React, {useState} from "react";
import './basic';
import './New.css'
import Basic from "./basic";

const New = (props) => {
    const [isEdit, setIsEdit] = useState(false);

    const SaveDataHandler = (enteredestimateData) => {
        const products = {
            ...enteredestimateData,
            id: Math.random().toString()
        };
        props.OnAddList(products);
        setIsEdit(false);
    };

    const startEditHandler = () => {
        setIsEdit(true);
    };
    const stopEditHandler = () => {
        setIsEdit(false);
    };

    return <div className="new-expense">
        {!isEdit && <button onClick={startEditHandler}>견적서 작성</button>}
        {isEdit && <Basic onAddProducts={SaveDataHandler} onCancel={stopEditHandler}/>}
    </div>

};

export default New;