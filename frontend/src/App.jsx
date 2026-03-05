import { Routes, Route } from 'react-router-dom'
import EmployeeList from './pages/EmployeeList'
import EmployeeDetail from './pages/EmployeeDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/employee/:id" element={<EmployeeDetail />} />
    </Routes>
  )
}