import React from 'react';
import { Modal , Form , Input} from 'antd'
import { AppContext } from '../Context/AppProvider';
import { AuthContext } from '../Context/AuthProvider';
import {addDocument} from '../../firebase/service'
const AddRoomModal = () => {
    const { isAddRoomVisible, setIsAddRoomVisible } = React.useContext(AppContext);
    const {
      user: { uid },
    } = React.useContext(AuthContext);
    const [form] = Form.useForm();
  
    const handleOk = () => {
        // handle logic
        // add new room to firestore
        addDocument('rooms', { ...form.getFieldsValue(), members: [uid] });
    
        // reset form value
        form.resetFields();
    
        setIsAddRoomVisible(false);
      };
    
      const handleCancel = () => {
        // reset form value
        form.resetFields();
    
        setIsAddRoomVisible(false);
      };
    
  return <div>
      <Modal
      title="Tạo phòng"
      visible={isAddRoomVisible}
      onOk={handleOk}
      onCancel={handleCancel}>
          <Form form = {form}>
          <Form.Item label="Tên phòng" name="name">
            <Input placeholder="Nhập tên phòng"></Input>
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
            <Input placeholder="Nhập mô tả"></Input>
        </Form.Item>
          </Form>
      </Modal>
  </div>;
};

export default AddRoomModal;
