
import React, { useState } from 'react';
import { Modal, Button, Input, Select } from 'antd';

const { Option } = Select;

interface NewUserModalProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (newUser: {
    name: string;
    email: string;
    phone: string;
    role: string;
    status: 'ACTIVE';
    address?: string;
    nextOfKinName?: string;
    nextOfKinAddress?: string;
    nextOfKinPhone?: string;
  }) => void;
}

// Utility function to capitalize the first letter of each word
const capitalizeWords = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const NewUserModal: React.FC<NewUserModalProps> = ({ visible, onCancel, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<string | null>(null);
  const [address, setAddress] = useState('');
  const [nextOfKinName, setNextOfKinName] = useState('');
  const [nextOfKinAddress, setNextOfKinAddress] = useState('');
  const [nextOfKinPhone, setNextOfKinPhone] = useState('');
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!role) newErrors.role = 'Role is required';

    if (role === 'driver') {
      if (!address) newErrors.address = 'Address is required for drivers';
      if (!nextOfKinName) newErrors.nextOfKinName = 'Next of kin name is required for drivers';
      if (!nextOfKinAddress) newErrors.nextOfKinAddress = 'Next of kin address is required for drivers';
      if (!nextOfKinPhone) newErrors.nextOfKinPhone = 'Next of kin phone number is required for drivers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      const newUser = {
        name,
        email,
        phone,
        role: role ? capitalizeWords(role) : 'User', // Capitalize role before submission
        status: 'ACTIVE' as const,
        ...(role === 'driver' && {
          address,
          nextOfKinName,
          nextOfKinAddress,
          nextOfKinPhone,
        }),
      };
      onSubmit(newUser);

      // Reset the form inputs after successful submission
      setName('');
      setEmail('');
      setPhone('');
      setRole(null);
      setAddress('');
      setNextOfKinName('');
      setNextOfKinAddress('');
      setNextOfKinPhone('');

      onCancel(); // Close modal after submit
    }
  };

  const handleRoleChange = (value: string) => {
    setRole(value);
  };

  return (
    <Modal
      title={false}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      className="rounded-lg custom-modal"
      closeIcon={<span className="text-red-500">×</span>}
    >
      <div className='bg-[#FFF5EF] h-[56px]'>
        <h2 className="font-bold p-5">NEW USER</h2>
      </div>

      <form className="space-y-4 p-5">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="border rounded-lg"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="border rounded-lg"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className='grid grid-cols-2 gap-3'>
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="border rounded-lg"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Gender</label>
            <Select defaultValue="" className='w-full rounded-lg'>
              <Option value='Male'>Male</Option>
              <Option value='Female'>Female</Option>
            </Select>
          </div>
        </div>

        <div>
          <label className="block font-semibold">Role</label>
          <Select
            defaultValue="Select Role"
            className="w-full h- rounded-lg"
            onChange={handleRoleChange}
            value={role || undefined} // Ensure the select dropdown shows the correct value
          >
            <Option value="admin">Admin</Option>
            <Option value="driver">Driver</Option>
            <Option value="Customer Rep.">Customer Rep</Option>
          </Select>
          {errors.role && <p className="text-red-500">{errors.role}</p>}
        </div>

        {/* Conditional Fields for Driver */}
        {role === 'driver' && (
          <>
            <div>
              <label className="block font-semibold mb-1">Address</label>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
                className="border rounded-lg"
              />
              {errors.address && <p className="text-red-500">{errors.address}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">Next of Kin Name</label>
              <Input
                value={nextOfKinName}
                onChange={(e) => setNextOfKinName(e.target.value)}
                placeholder="Enter next of kin"
                className="border rounded-lg"
              />
              {errors.nextOfKinName && <p className="text-red-500">{errors.nextOfKinName}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">Next of Kin Address</label>
              <Input
                value={nextOfKinAddress}
                onChange={(e) => setNextOfKinAddress(e.target.value)}
                placeholder="Enter next of kin address"
                className="border rounded-lg"
              />
              {errors.nextOfKinAddress && <p className="text-red-500">{errors.nextOfKinAddress}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">Next of Kin Phone Number</label>
              <Input
                value={nextOfKinPhone}
                onChange={(e) => setNextOfKinPhone(e.target.value)}
                placeholder="Enter next of kin phone number"
                className="border rounded-lg"
              />
              {errors.nextOfKinPhone && <p className="text-red-500">{errors.nextOfKinPhone}</p>}
            </div>
          </>
        )}

        <div className="flex justify-end space-x-2 pt-4">
          <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md w-[144px]" onClick={onCancel}>
            Cancel
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md w-[144px]" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default NewUserModal;
