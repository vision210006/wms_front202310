"use client";
import { Row, Container, Card } from "react-bootstrap";
import { PageHeading } from "widgets";
import { Storing } from "sub-components";

const storing = () => {
  return (
    <Container fluid className="p-6">
      <PageHeading heading="입고현황" />
      {/* content */}
      <div className="py-6">
        <div>
          <Storing />
        </div>
      </div>
    </Container>
  );
};

export default storing;
