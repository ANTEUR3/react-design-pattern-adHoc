
import './App.css'

import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/app/Home'
import CompoundComponent from './components/app/CompoundComponent/compoundComponent'
function App() {

  return (
<BrowserRouter>
              <Routes>
                <Route path="/" >
                  <Route path="/" element={<Home/>} />
                  <Route path="/compoundComponent" element={<CompoundComponent/>} />
                  <Route path="/admin" element={< ></>}>
                    <Route index element={< ></>} />
                    <Route path="Comments" element={< ></>}/>
                    <Route path="newArticle" element={< ></>}/>
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
       
 
  )
}

export default App
