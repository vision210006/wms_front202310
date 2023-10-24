'use client'

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
//import { HiLockClosed } from 'react-icons/hi'
//import { ErrorMessage } from '@hookform/error-message';

import { loginUser } from 'app/api/User';
import { SET_TOKEN } from 'sub-components/auth/token/accessToken';
import { setRefreshToken } from 'sub-components';

import { useRouter } from "next/navigation";

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';
import { ColorSchemesCode } from 'data/code/NavbarsCode';
import { colorBrewer } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const SignIn = () => {
  const hasMounted = useMounted();
  const h1style = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'blue'
  };

  const router = useRouter();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  
  const onSubmit = async data => {
    const response = await loginUser({ userId: data.email, password: data.password });
    

    const result = response.json;

    if (result.code === 'OK') {
      dispatch(SET_TOKEN(result.data.accessToken));
      console.log(result.data.accessToken);
      typeof window !== 'undefined' ? sessionStorage.setItem("accessToken", result.data.accessToken) : null;
      
      router.push("/");
      
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
              <p style={h1style}>로그인</p>
              <p className="mb-6">새로운 물류경험을 시작하세요</p>
            </div>
            {/* Form */}
            {hasMounted &&
              <Form onSubmit={handleSubmit(onSubmit, onError)}>
                {/* Username */}
                <Form.Group className="mb-3" controlId="userid">
                  <Form.Label>ID(email)</Form.Label>
                  <Form.Control 
                  type="email" 
                  name="userid" 
                  placeholder="Enter address here" 
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

                {/* Checkbox */}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>ID/Password 기억하기</Form.Check.Label>
                  </Form.Check>
                </div>
                <div>
                  {/* Button */}
                  <div className="d-grid">
                    <Button variant="primary" type='submit' >Login</Button>
                  </div>
                  <div className="d-md-flex justify-content-between mt-4">
                    <div className="mb-2 mb-md-0">
                      <Link href="/authentication/sign-up" className="fs-5">회원가입 </Link>
                    </div>
                    <div className='mb-2 mb-md-0'>
                      <Link href="/authentication/forget-id" className="text-inherit fs-5">ID 찾기</Link>
                    </div>
                    <div className='mb-2 mb-md-0'>
                      <Link href="/authentication/forget-password" className="text-inherit fs-5">비밀번호 찾기</Link>
                    </div>
                  </div>
                </div>
              </Form>}


          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


export default SignIn