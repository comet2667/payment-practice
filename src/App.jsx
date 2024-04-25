import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import Payment from './components/Payment';
import Header from './components/Header';

// 클라이언트 ID = 63771804902-4be03i6j7ug5vsj5ojlg1iv96lfdnkmf.apps.googleusercontent.com
// 비밀번호 = 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

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/> }>
          <Route index element={<Login/>}/>
          <Route path='/pay' element={ <Payment/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
