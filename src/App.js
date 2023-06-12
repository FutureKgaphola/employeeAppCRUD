
import './App.css';
import {Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom';
import DataList from './components/DataList';
import Addemployee, { Addemployeeaction } from './components/Addemployee';
import ParentLayout from './Layouts/ParentLayout';
import Comp404 from './components/Comp404';
import { employeeLoader } from './Loaders/EmployeesLoader';


const router= createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<ParentLayout/>}>
        <Route index
        loader={employeeLoader}
         element={<DataList/>}/>
        <Route path='/Addemployee' element={<Addemployee/>} action={(e)=>Addemployeeaction(e)}/>
        <Route path='*' element={<Comp404/>}/>
      </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
