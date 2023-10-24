'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signupUser } from 'app/api/User';
import { useDispatch } from 'react-redux';

// import hooks
import useMounted from 'hooks/useMounted';

const SignUp = () => {
  const hasMounted = useMounted();
  const h1style ={
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'blue'
  };

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async data => {
    const response = await signupUser({ 
      emailAddress: data.email, 
      password: data.password,
      phoneNumber: data.phoneNumber,
      userId: data.email,
      userName: data.userName,
     });
    

    const result = response.json;

    if (result.code === 'OK') {
      
      router.push("/authentication/sign-in");
      
    } 
  };
  const onError = errors => console.log(errors);



  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <p style={h1style}>회원가입</p>
              <p className="mb-6">회원정보를 입력하십시오.</p>
            </div>
            {/* Form */}
            {hasMounted && 
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
              {/* UserID */}
              <Form.Group className="mb-3" controlId="userid">
                <Form.Label>ID(email)</Form.Label>
                <Form.Control 
                type="email" 
                name="userid" 
                placeholder="ID(email)를 기입하세요" 
                required="" 
                {...register('email', {
                  required: true,
                })}
                />
              </Form.Group>


              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control 
                type="password" 
                name="password"
                placeholder="**************" 
                required="" 
                {...register('password', {
                  required: true,
                })}
                />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="confirm-password">
                <Form.Label>비밀번호 재입력</Form.Label>
                <Form.Control type="password" name="confirm-password" placeholder="**************" required="" />
              </Form.Group>

              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>이름</Form.Label>
                <Form.Control 
                type="text" 
                name="username"
                placeholder="이름을 기입하세요" 
                required=""
                {...register('userName', {
                  required: true,
                })}
                 />
              </Form.Group>

              {/*number*/}
              <Form.Group className='mb-3' controlId='phone-number'>
                <Form.Label>전화번호</Form.Label>
                <Form.Control 
                type='text' 
                name='phone-number' 
                placeholder='전화번호를 적으세요' 
                required=""
                {...register('phoneNumber', {
                  required: true,
                })}
                />
              </Form.Group>

              {/* Checkbox */}
              <div className="mb-3">
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>
                    I agree to the <Link href="#"> Terms of Service </Link> and <Link href="#"> Privacy Policy.</Link>
                  </Form.Check.Label>
                </Form.Check>
              </div>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">회원가입</Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <h5>이미 회원이신가요?</h5>
                  <div className="mb-2 mb-md-0">
                    <Link href="/authentication/sign-in" className="fs-5">Login </Link>
                  </div>
                  <div className='mb-2 mb-md-0'>
                      <Link href="/authentication/forget-id" className="text-inherit fs-5">ID 찾기</Link>
                    </div>
                  <div className='mb-2 mb-md-0'>
                    <Link href="/authentication/forget-password" className="text-inherit fs-5">비밀번호 찾기</Link>
                  </div>
                </div>
              </div>
            </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SignUp