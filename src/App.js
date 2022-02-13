import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route , Routes , BrowserRouter} from 'react-router-dom'
import ChatRoom from './components/ChatRoom';
import AuthProvider from './components/Context/AuthProvider';
import AppProvider from './components/Context/AppProvider';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteModalMember from './components/Modals/InviteModalMember';
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <AppProvider>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route path="/" element={<ChatRoom/>}/>
    </Routes>
    <AddRoomModal/>
    <InviteModalMember/>
      </AppProvider>
    </AuthProvider>
  
    </BrowserRouter>
  );
}

export default App;
