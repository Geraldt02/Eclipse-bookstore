import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../Page/aboutUs.tsx";
import Dashboard from "../Page/dashboard.tsx";
import Home from "../Page/home.tsx";
import BookList from "../Page/soldList.tsx";

export default function BookStoreRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/BookList" element={<BookList />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
