import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Ex from './ex';
import Modal from 'react-bootstrap/Modal';


const Button = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <ButtonGroup>
                <DropdownButton
                    as={ButtonGroup}
                    title="지역"
                    id='bg-nested-dropdown'

                >
                    <Dropdown.Item eventKey="1" onClick={handleShow} >서울-A</Dropdown.Item>
                    <div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header>
                                <Modal.Title>서울-A창고</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Ex />
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn_close" variant="secondary" onClick={handleClose}>
                                    닫기
                                </button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <Dropdown.Item eventKey="2">서울-B</Dropdown.Item>
                    <Dropdown.Item eventKey="3">대전-A</Dropdown.Item>
                    <Dropdown.Item eventKey="4">대전-B</Dropdown.Item>
                    <Dropdown.Item eventKey="5">부산-A</Dropdown.Item>
                    <Dropdown.Item eventKey="6">부산-B</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>

        </div>

    )
}

export default Button