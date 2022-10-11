
import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "./firebase";

import { Navigate, Route, Routes } from 'react-router-dom';
// import LayoutComponent from './components/Layout';
// import AboutPage from './pages/About';
import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout';
import CardsDisplayPage from './pages/CardsDisplayPage';
import NotFound from './pages/NotFound'



export interface IAppProps {snapshot?:{}}

const App: React.FunctionComponent<IAppProps> = (props) => {
 
const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");


const ref = firebase.firestore().collection('cap-deux');
console.log(ref)

  const [customersData, setCustomersData] = useState([]);
  

 
  useEffect(() => {
    ref.onSnapshot((snapshot:any) => {
      setCustomersData(
        snapshot.docs.map((doc:any) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log({ customersData });
  }, []);
  
  const submit = (e:any) => {
    e.preventDefault();
    ref.add({
      name: customerName,
      password: customerPassword,
    });
  
    setCustomerName("");
    setCustomerPassword("");
  };
  
  return (
    <div className="App">
        <h1>Jo Mamma</h1>
      <div className="App__form">
        <input
          type="text"
          placeholder="Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={customerPassword}
          onChange={(e) => setCustomerPassword(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
      </div>
      <div className="App__DataDisplay">
        <table>
          <tr>
            <th>NAME</th>
            <th>PASSWORD</th>
          </tr>
  
          {customersData?.map((item:{ id:any, data:{name:string, password:string} }) => (
            <tr key={item.id}>
              <td>{item.data.name }</td>
              <td>{item.data.password}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

    //    <Layout>
    //   <Routes>
    //     <Route path='/' element={<Navigate replace to='/HomePage' />} />
    //     <Route path='/HomePage' element={<HomePage/>} />
    //     <Route path='/cards-display-page' element={<CardsDisplayPage />} />
    //     {/* <Route path='/quotes/:quoteId' element={<QuoteDetail />}> */}
    //       {/* <Route
    //         path=''
    //         element={
    //           <div className='centered'>
    //             <Link className='btn--flat' to={`comments`}>
    //               Load Comments
    //             </Link>
    //           </div>
    //         }
    //       />
    //       <Route path={`comments`} element={<Comments />} />
    //     </Route>
    //     <Route path='/new-quote' element={<NewQuote />} /> */}
    //     <Route path='*' element={<NotFound />} />
    //   </Routes>
    // </Layout>
//   );
    


export default App;
