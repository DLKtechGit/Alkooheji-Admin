import React, { useState } from 'react';
import MainCard from '../../components/Card/MainCard';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import AxiosService from '../../utils/ApiService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUsers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (value, country) => {
    // Remove country code
    const phoneNumberWithoutCode = value.replace('+' + country.dialCode, '').trim();
    setPhoneNumber(phoneNumberWithoutCode);
  };

  const createUser = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const res = await AxiosService.post(`http://localhost:3000/user/create/user`, {
        name,
        email,
        phoneNumber
      });

  
      if(res.status === 200){
        toast.success('User Created Successfully')

        setName('')
        setEmail('')
        setPhoneNumber('')
      }
      else if(res.status === 401){
        toast.error(res.data.message)
        
      }
      else{
        toast.error("Email already exist")
      }

    } catch (error) {
    //   console.error("Error creating user:", error);
      toast.error("Email or Phone Number already exist"); // Display server error message
    }
  };

  const emailOnchange = (e)=>{
    setEmail(e.target.value)
  }
  
  return (
    <>
      <MainCard title=" " isOption>
        <form onSubmit={createUser}>
          <div className="form-row gap-3">
            <div className="form-group col-md-5">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" value={name} id="name" onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            </div>

            <div className="form-group col-md-5 mt-3">
              <label htmlFor="inputEmail4">Email</label>
              <input type="email" className="form-control" value={email} onChange={emailOnchange} id="inputEmail4" placeholder="Enter Email" />
            </div>
          </div>

          <div className="form-row col-md-5 mt-3 ">
            <div className="form-group">
              <label className="pb-2" htmlFor="inputEmail4">
                Phone Number
              </label>
              <PhoneInput
                value={phoneNumber}
                onChange={handlePhoneChange}
                inputStyle={{ backgroundColor: '#F4F7FA' }}
                country={'bh'}
              />
            </div>
          </div>

          <div className="mt-5">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
        <ToastContainer />
      </MainCard>
    </>
  );
};

export default CreateUsers;
