import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "보관중인 물품",
       value : 8,
       icon: <Briefcase size={18}/>,
       statInfo: '<span className="text-dark me-2">출고대기 2 / 냉동 1 / 냉장 1 / 일반 3</span>' 
    },
    {
        id:2,
        title : "예상 비용",
        value : "453,000원",
        icon: <ListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">10월 27일 현재까지</span>' 
    }
   //   {
   //      id:3,
   //      title : "Teams",
   //      value : 12,
   //      icon: <People size={18}/>,
   //      statInfo: '<span className="text-dark me-2">1</span> Completed' 
   //   },
   //   {
   //      id:4,
   //      title : "Productivity",
   //      value : '76%',
   //      icon: <Bullseye size={18}/>,
   //      statInfo: '<span className="text-dark me-2">5%</span> Completed' 
   //   }
];
export default ProjectsStats;
