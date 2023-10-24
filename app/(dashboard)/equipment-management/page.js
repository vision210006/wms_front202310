'use client'
// import node module libraries
import { Col, Row, Container, Table } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import {
  QnaTable,
  QnaDetail,
  EquipmentTable
} from 'sub-components'

const EqipmentManagement = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="기자재 관리"/>

      {/* content */}
      <div className="py-6">
        <Row>
          
          {/* noticeTable */}
          <EquipmentTable />

        </Row>
      </div>

    </Container>
  )
}

export default EqipmentManagement