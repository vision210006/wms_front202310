'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';

const ForgetID = () => {
  const hasMounted = useMounted();
  const h1style ={
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'blue'
  };
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <p style={h1style}>ID 찾기</p>
              <p className="mb-6">다음 정보를 기입하면 ID를 찾을 수 있습니다.</p>
            </div>
            {/* Form */}
            {hasMounted && 
            <Form>
              {/* Email */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" name="username" placeholder="이름을 입력하세요" />
              </Form.Group>

              {/*number*/}
              <Form.Group className='mb-3' controlId='phone-number'>
                <Form.Label>전화번호</Form.Label>
                <Form.Control type='text' name='phone-number' placeholder='전화번호를 입력하세요' required=""/>
              </Form.Group>

              {/* Button */}
              <div className="mb-3 d-grid">
                <Button variant="primary" type="submit">ID 찾기</Button>
              </div>
              <span>아직 회원이 아니신가요?? <Link href="/authentication/sign-up">가입하기</Link></span>
            </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default ForgetID