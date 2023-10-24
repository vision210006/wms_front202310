import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats1 = [
    {
       id:1,
       title : "견적내역",
       value : 18,
       icon: <Briefcase size={18}/>, 
       statInfo: '<span className="text-dark me-2"> </span>'
    },
    {
        id:2,
        title : "입고내역",
        value : 24,
        icon: <ListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">입고예정 5 / 입고완료 19</span>' 
    },
    {
        id:3,
        title : "출고내역",
        value : 12,
        icon: <People size={18}/>,
        statInfo: '<span className="text-dark me-2">출고예정 10 / 출고완료 2</span>' 
    },
    {
        id:4,
        title : "정산내역",
        value : '53,205,000원',
        icon: <Bullseye size={18}/>,
        statInfo: '<span className="text-dark me-2"> </span>'
    }
];
export default ProjectsStats1;
