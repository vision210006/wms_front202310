/**
 * The folder sub-components contains sub component of all the pages,
 * so here you will find folder names which are listed in root pages.
 */

// sub components for /pages/dashboard
import ActiveProjects from 'sub-components/dashboard/ActiveProjects';
import TasksPerformance from 'sub-components/dashboard/TasksPerformance';
import Teams from 'sub-components/dashboard/Teams';
import StockCard from 'sub-components/dashboard/StockCard';

// sub components for /pages/notice
import CreateNotice from 'sub-components/notice/CreateNotice';
import NoticeTable from 'sub-components/notice/NoticeTable';
import NoticeDetail from 'sub-components/notice/NoticeDetail';

// sub components for /pages/qna
import CreateQna from 'sub-components/qna/CreateQna';
import QnaTable from 'sub-components/qna/QnaTable';
import QnaDetail from 'sub-components/qna/QnaDetail';

// sub components for /pages/equipment-management
import EquipmentTable from './eqipment-management/EquipmentTable';
import EquipmentDetail from './eqipment-management/EquipmentDetail';

// sub components for /pages/profile
import AboutMe from 'sub-components/profile/AboutMe';
import ActivityFeed from 'sub-components/profile/ActivityFeed';
import MyTeam from 'sub-components/profile/MyTeam';
import ProfileHeader from 'sub-components/profile/ProfileHeader';
import ProjectsContributions from 'sub-components/profile/ProjectsContributions';
import RecentFromBlog from 'sub-components/profile/RecentFromBlog';

// sub components for /pages/billing
import CurrentPlan from 'sub-components/billing/CurrentPlan';
import BillingAddress from 'sub-components/billing/BillingAddress';

// sub components for /pages/settings
import DeleteAccount from 'sub-components/settings/DeleteAccount';
import EmailSetting from 'sub-components/settings/EmailSetting';
import GeneralSetting from 'sub-components/settings/GeneralSetting';
import Notifications from 'sub-components/settings/Notifications';
import Preferences from 'sub-components/settings/Preferences';
import BSOffCanvas from './dashboard/BSOffCanvas';
import Modals from 'react-bootstrap';
import { Dropdown, Container, Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';



// sub components for /pages/contract


// sub components for /pages/current/storingcurrent
import Button from './current/storing/Button';
import Ex from './current/storing/ex';

//sub components for auth
import accessToken from './auth/token/accessToken';
import { setRefreshToken, getCookieToken, removeCookieToken } from './auth/token/refreshToken';

// sub components for /pages/estimate
import Basic from './estimate/form/basic';
import New from './estimate/form/new';
import Items from './estimate/items/items';
import List from './estimate/list/list';
import { makePdf } from './estimate/contractPDF/make_pdf';
import { ContentsPdf } from './estimate/contractPDF/contents_pdf';
import Current from './contract/current';
import Storing from './storing/current';
export {
   ActiveProjects,
   TasksPerformance,
   Teams,   
   StockCard,

   CreateNotice,
   NoticeTable,
   NoticeDetail,

   CreateQna,
   QnaTable,
   QnaDetail,
   
   EquipmentTable,
   EquipmentDetail,

   AboutMe,
   ActivityFeed,
   MyTeam,
   ProfileHeader,
   ProjectsContributions,
   RecentFromBlog,

   CurrentPlan,
   BillingAddress,

   DeleteAccount, 
   EmailSetting,  
   GeneralSetting, 
   Notifications, 
   Preferences,
   BSOffCanvas,   
   

   Button,
   Ex,

   accessToken,
   setRefreshToken,
   getCookieToken,
   removeCookieToken,

   Basic,
   New,
   Items,
   List,
   makePdf,
   ContentsPdf,
   Current,
   Storing



};