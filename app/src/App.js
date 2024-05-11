import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import RegisterOrg from "./pages/RegisterOrg/RegisterOrg";
import OrgHome from "./pages/OrgHome/OrgHome";
import Donor from "./pages/Donor";
// import OrganizationPosts  from "./pages/OrgPosts/OrganizationPosts";
import MakePost from "./pages/OrgPosts/MakePost";

import DonorBrowser from "./components/DonorBrowser";

import ClothesComponent from "./components/FilterOptions/ClothesComponent";
import ToysComponent from "./components/FilterOptions/ToysComponent";
import FoodComponent from "./components/FilterOptions/FoodComponent";
import MedicalSuppliesComponent from "./components/FilterOptions/MedicalSuppliesComponent";
import SchoolSuppliesComponent from "./components/FilterOptions/SchoolSuppliesComponent";
import BloodDonationsComponent from "./components/FilterOptions/BloodDonationsComponent";
import DataProvider from "./Provider/DataProvider";
import Data from "./Data/Organizations.json";
import { useState } from "react";

function App() {
  const [data,setData] = useState(Data);
  return (
    <div className="App">
      <DataProvider >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/donor" element={<Donor />}></Route>
            <Route path="/donor/browser" element={<DonorBrowser />} />
            <Route
              path="/donor/browser/all"
              element={<DonorBrowser filter={"all"} />}
            />
            <Route
              path="/donor/browser/clothes"
              element={<DonorBrowser filter={"clothes"} />}
            />
            <Route
              path="/donor/browser/toys"
              element={<DonorBrowser filter={"toys"} />}
            />
            <Route
              path="/donor/browser/food"
              element={<DonorBrowser filter={"food"} />}
            />
            <Route
              path="/donor/browser/medical"
              element={<DonorBrowser filter={"medical"} />}
            />
            <Route
              path="/donor/browser/school"
              element={<DonorBrowser filter={"school"} />}
            />
            <Route
              path="/donor/browser/blood"
              element={<DonorBrowser filter={"blood"} />}
            />

            <Route path="/organization/:orgId" element={<OrgHome />} />
            {/* <Route
            path="/organization/:orgId/posts"
            element={<OrganizationPosts />}
          />
          <Route
            path="/organization/:orgId/settings"
            element={<OrganizationSettings />}
          />
          <Route
            path="/organization/:orgId/notifications"
            element={<OrganizationNotifications />}
          /> */}

            <Route path="/new-post" element={<MakePost />}></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
