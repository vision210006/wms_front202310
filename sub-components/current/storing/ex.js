import { Row, Col, Card, Table } from "react-bootstrap";
import SAstorage from "data/dashboard/SAstorage";


const Ex = () => {
    return(
       
                <Table responsive className="text-nowrap mb-0">
                    <thead className="table-light">
                        <tr>
                            <th>회사명</th>
                            <th>연락처</th>
                            <th>상품명</th>
                            <th>상품수량</th>
                            <th>상품분류</th>
                            <th>창고내위치</th>
                            <th>pallet수량</th>
                            <th>pallet규격</th>
                        </tr>
                    </thead>
                    <tbody>
                        { SAstorage.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className="align-middle">{item.company}</td>
                                    <td className="align-middle">{item.phone}</td>
                                    <td className="align-middle">{item.projectName}</td>
                                    <td className="align-middle">{item.storing_quantity}</td>
                                    <td className="align-middle">{item.classification}</td>
                                    <td className="align-middle">{item.SA_location}</td>
                                    <td className="align-middle">{item.pallet_quantity}</td>
                                    <td className="align-middle">{item.pallet_size}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            
     
    )
}

export default Ex