import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import CustomBuild from './pages/CustomBuild';
import ViewBuild from './pages/ViewBuild';
import WrongLogin from './pages/WrongLogin';
import { BuildsContext } from './contexts/BuildsContext';
import useLocalStorage from "use-local-storage";
import EditBuild from './pages/EditBuild';
import ReadBuild from './pages/ReadBuild';
import { AuthContext } from './contexts/AuthContext';
import RequireAuth from './components/RequireAuth';

function Layout({ token, setToken }) {
  const navigate = useNavigate();
  let visibleLogin = true;
  let visibleLogout = false;
  if (!token) {
    visibleLogin = true;
    visibleLogout = false;
  } else {
    visibleLogin = false;
    visibleLogout = true;
  }

  //Logout
  function Logout() {
    setToken(null)
    navigate('/')
  }

  return (
    <>
      <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav>
            {visibleLogin && (
              <Nav.Link href="login">Login</Nav.Link>
            )}
            {visibleLogout && (
              <Nav.Link onClick={Logout}>Log out</Nav.Link>
            )}
            <Nav.Link href="custombuild">Build your PC</Nav.Link>
            <Nav.Link href="viewbuild">View your builds</Nav.Link>
            <Nav.Link href=""></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

function App() {
  const [builds, setBuilds] = useLocalStorage("builds", []);
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BuildsContext.Provider value={{ builds, setBuilds }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout token={token} setToken={setToken} />}>
              <Route index element={<Home />} />
              <Route path='*' element={<ErrorPage />} />
              <Route path="login" element={<Login />} />
              <Route path="incorrectlogin" element={<WrongLogin />} />
              <Route path="custombuild" element={
                <RequireAuth>
                  <CustomBuild />
                </RequireAuth>} />
              <Route path="viewbuild" element={
                <RequireAuth>
                  <ViewBuild />
                </RequireAuth>} />
              <Route path="editbuild/:id" element={<EditBuild />} />
              <Route path="readbuild/:id" element={<ReadBuild />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BuildsContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
