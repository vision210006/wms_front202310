import React, { Fragment } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ProjectsData from "data/dashboard/ProjectsData";

const Modals = (stockData) => {      
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}            
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                인천-1동-1층
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>            
              {ProjectsData.map((item, index) => {
                  if(stockData.id == item.id){
                                    return (
                                    <tr key={index}>
                                    <tr className="align-bottom">등록번호 : {item.number}</tr>
                                    <tr className="align-bottom">회사명 : {item.company}</tr>
                                    <tr className="align-bottom">입고제품명 : {item.projectName}</tr>
                                    <tr className="align-bottom">상품분류 : {item.classification}</tr>
                                    <tr className="align-bottom">입고수량 : {item.storing_quantity}</tr>
                                    <tr className="align-bottom">입고위치 : {item.location}</tr>
                                    <tr className="align-bottom">입고일 : {item.storing}</tr>
                                    <tr className="align-bottom">계약일 : {item.contract_day}</tr>
                                    <tr className="align-bottom">전화번호 : {item.phone}</tr>
                                    <tr className="align-bottom">고객주소 : {item.address}</tr>
                                    </tr>
                                        )}
                                    })}                                
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>닫기</Button>
            </Modal.Footer>
          </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Fragment> 
            <Button variant="primary" onClick={() => setModalShow(true)}>
                상세보기 
            </Button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </Fragment>
    )
}

export default Modals