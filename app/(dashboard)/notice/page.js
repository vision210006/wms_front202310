'use client'
// import node module libraries
import { Col, Row, Container, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getNotices } from 'app/api/Notice';
import { useEffect } from 'react';
import { SET_NOTICES } from '../../../redux/noticeSlice'
// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import {
  NoticeTable
} from 'sub-components'

const Profile = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   async function getAndSetNotices() { 
  //     const result = await getNotices();
  //     console.log(result.json.data);

  //     // 리덕스를 이용해서 state에 값 설정
  //     dispatch(SET_NOTICES(result.json.data));
  //   }
  //   getAndSetNotices(); 
  // },[])

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="공지사항"/>
      {/* content */}
      <div className="py-6">
        <Row>          
          {/* noticeTable */}
          <NoticeTable />
        </Row>
      </div>
    </Container>
  )
}

export default Profile