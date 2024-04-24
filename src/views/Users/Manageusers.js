import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import MainCard from '../../components/Card/MainCard';
import AxiosService from '../../utils/ApiService';
import { BsFillTrash3Fill } from 'react-icons/bs';

import { toast,ToastContainer} from 'react-toastify';

const Manageusers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      let res = await AxiosService.get(`http://localhost:3000/user/getusers`);
      const userdata = res.data.user;
      setData(userdata);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await AxiosService.post(`http://localhost:3000/user/delete/user/${id}`);
      if (res.status === 200) {
        toast.success('User deleted successfully');
        // After successful deletion, you might want to refresh the user list
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: 'S.No',
      render: (text, record, index) => index + 1
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber'
    },
    {
      title: 'Action',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record) => (
        <div style={{ cursor: 'pointer' }} className="d-flex justify-content-center">
          <span onClick={() => handleDelete(record._id)}>
            <BsFillTrash3Fill />
          </span>
        </div>
      )
    }
  ];

  return (
    <div>
      <MainCard>
        <Table dataSource={data} columns={columns} />
      </MainCard>
      <ToastContainer/>
    </div>
  );
};

export default Manageusers;
