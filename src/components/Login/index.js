import React ,{ useEffect } from 'react';
import { Row , Col ,Button,Typography } from 'antd'
import firebase,{ auth , db } from "../../firebase/config"
import {addDocument, generateKeywords} from '../../firebase/service' 
import { useNavigate} from 'react-router-dom'
const { Title } = Typography

const fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
    const handleFbLogin= async ()=>{
       const {additionalUserInfo , user}= await auth.signInWithPopup(fbProvider)
       if(additionalUserInfo?.isNewUser){
        addDocument("users",{
            displayName:user.displayName,
             email:user.email ,
              uid:user.uid, 
              photoURL:user.photoURL, 
              providerId:additionalUserInfo.providerId,
              keywords: generateKeywords(user.displayName?.toLowerCase()),
        })
    }
    }
   
  return (
  <div>
      <Row justify="center" style={{height:"800px"}}>
          <Col span={8}>
          <Title style={{textAlign:"center"} }
          level={3}>Fun Chat</Title>
          <Button style={{width:'100%',marginBottom:"5px"}}>
              Đăng nhập bằng Google
          </Button>
          <Button onClick={handleFbLogin} style={{width:'100%' ,marginBottom:"5px"}}>
              Đăng nhập bằng FaceBook
          </Button>
          </Col>
      </Row>
  </div>)
};

export default Login;
