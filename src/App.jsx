import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { lazy, useEffect } from "react"
import { userInfo } from "./services/userInfo";

const Home = lazy(() => import("./pages/Home"));
const Rates = lazy(() => import("./pages/Rates"));


function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      userInfo(lat, long);
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/> } />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/"/>} />
          </Route>
      </Routes>
    </>
  )
}

export default App
