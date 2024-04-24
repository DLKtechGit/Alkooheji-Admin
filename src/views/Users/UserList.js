// import React, { useEffect, useState } from 'react';
// import { Table } from 'antd';
// import MainCard from '../../components/Card/MainCard';
// import AxiosService from '../../utils/ApiService';

// const UserList = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   const getAllUsers = async () => {
//     try {
//       let res = await AxiosService.get(`http://localhost:3000/user/getusers`);
//       const userdata = res.data.user;
//       setData(userdata);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const columns = [
//     {
//       title: 'S.No',
//       render: (text, record, index) => index + 1
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name'
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email'
//     },
//     {
//       title: 'Phone Number',
//       dataIndex: 'phoneNumber',
//       key: 'phoneNumber'
//     }
//   ];

//   return (
//     <div>
//       <MainCard>
//         <Table dataSource={data} columns={columns} />;
//       </MainCard>
//     </div>
//   );
// };

// export default UserList;
import React from 'react'

const UserList = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center container">
            <div className="card py-5 px-3">
                <h5 className="m-0">Mobile phone verification</h5>
                <span className="mobile-text">Enter the code we just sent on your mobile phone <b className="text-primary">+91 86684833</b></span>
                <div className="d-flex flex-row mt-5">
                    <input type="text" className="form-control" autoFocus />
                    
                </div>
                <div className="text-center mt-5">
                    <span className="d-block mobile-text">Didn't receive the code?</span>
                    <span className="font-weight-bold text-danger cursor">Resend</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserList
