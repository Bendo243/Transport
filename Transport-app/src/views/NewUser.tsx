
// import { Input, Select, Form } from "antd";



// interface UserFormValues {
//   name: string;
//   email: string;
//   phone: string;
//   role: string;
// }

// const NewUserForm: React.FC = () => {
//   const [form] = Form.useForm();

  
//   const onFinish = (values: UserFormValues) => {
//     console.log("Form values:", values);
    
//   };

//   return (
//     <div className="max-w-md mx-auto  p-1 bg-white ">
//      <div className="bg-orange-500 py-1 mb-2 rounded-t-lg"> <h1 className="text-xl font-bold text-center text-white">NEW USER</h1>
//       <p className="text-center text-white mb-2">
//         Fill in the information to proceed
//       </p>
//       </div>
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         className="space-y-4"
//       >
//         <Form.Item
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Please enter your name" }]}
//         >
//           <Input placeholder="Name" />
//         </Form.Item>

//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             { required: true, message: "Please enter your email" },
//             { type: "email", message: "Please enter a valid email" },
//           ]}
//         >
//           <Input placeholder="Email" />
//         </Form.Item>

//         <Form.Item
//           label="Phone Number"
//           name="phone"
//           rules={[{ required: true, message: "Please enter your phone number" }]}
//         >
//           <Input placeholder="Phone Number" />
//         </Form.Item>

//         <Form.Item
//           label="Role"
//           name="role"
//           rules={[{ required: true, message: "Please select a role" }]}
//         >
//           <Select placeholder="Select a role">
//             <Select.Option value="Admin">Admin</Select.Option>
//             <Select.Option value="Drivers">Drivers</Select.Option>
//           </Select>
//         </Form.Item>

        
//       </Form>
//     </div>
//   );
// };

// export default NewUserForm;
