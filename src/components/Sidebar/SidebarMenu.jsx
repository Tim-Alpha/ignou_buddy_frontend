import React from 'react'

const SidebarMenu = () => {
  return (
    <div>SidebarMenu</div>
  )
}

export default SidebarMenu





























// import React from 'react'
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Link } from 'react-router-dom';

// const SidebarMenu = () => {
//     const linkstyle = {
//         textDecoration: 'none',
//         color: 'white',
//     }
//     return (
//         <div className='  sidebar text-white d-flex flex-column justify-content-between bg-dark p-4 rounded-2 vh-100'>
//             <div>


//                 <a href="d-flex align-items-center  " style={linkstyle}>
//                     <i className='bi bi-bootstrap fs-5 me-2'></i>
//                     <span className=' fs-4 text-white  '>Sidebar</span>

//                 </a>
//                 <hr className='text-secondary mt-2' />
//                 <ul className='nav nav-pills flex-column p-0 m-0'>
//                     <li className='nav-item'>
//                         <Link to="/" className='nav-link text-white'>
//                             <i className='bi bi-house-door me-2 fs-5'></i>
//                             <span className='fs-5'>Home</span>
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to ="/about" className='nav-link text-white'>
//                             <i className='bi bi-table me-2 fs-5'></i>
//                             <span className='fs-5'>About</span>
//                         </Link>

//                     </li>
//                     <li className='nav-item'>
//                         <Link to="" className='nav-link text-white'>
//                             <i className='bi bi-people me-2 fs-5'></i>
//                             <span className='fs-5'>Customers</span>
//                         </Link>

//                     </li>
//                     <li className='nav-item'>
//                         <Link  to="" className='nav-link text-white'>
//                             <i className='bi bi-grid me-2 fs-5'></i>
//                             <span className='fs-5'>Report</span>
//                         </Link>

//                     </li>

//                 </ul>
//             </div>
//             <div>
//                 <hr className='text-secondary' />
//                 <i className='bi bi-person fs-5'></i>
//                 <span className='fs-5  '>Suresh</span>

//             </div>
//         </div>
//     )
// }

// export default SidebarMenu