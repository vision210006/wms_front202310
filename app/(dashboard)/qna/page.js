'use client'
// import node module libraries
import { Col, Row, Container, Table } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import {
  QnaTable,
  QnaDetail
} from 'sub-components'

const Qna = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="문의사항"/>

      {/* content */}
      <div className="py-6">
        <Row>
          
          {/* noticeTable */}
          <QnaTable />

        </Row>
      </div>

    </Container>
  )
}

export default Qna