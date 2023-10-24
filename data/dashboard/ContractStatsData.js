import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ReleaseStats = [
    {
       id:1,
       title : "계약중인 물품",
       value : 5,
       icon: <Briefcase size={18}/>,
       statInfo: '<span className="text-dark me-2">냉동 1 / 냉장 1 / 일반 3</span>' 
    }
    // {
    //     id:2,
    //     title : "출고완료",
    //     value : "7",
    //     icon: <ListTask size={18}/>,
    //     statInfo: '<span className="text-dark me-2">냉동 3 / 냉장 2 / 일반 2</span>' 
    // }
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
export default ReleaseStats;
