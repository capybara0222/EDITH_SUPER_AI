import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Friends from './pages/Friends'
import Tasks from './pages/Tasks'
import Layouts from './components/Layouts'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route path="" element={<Navigate to="/dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='friends' element={<Friends />} />
            <Route path='tasks' element={<Tasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
