import React from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import "./MyProfile.css";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const { activepage } = useParams();
  return (
    <Layout>
      <div className="userprofile">
        {/* UserProfile, showing {activepage} */}

        <div className="userprofilein">
          <div className="left">
            <UserSidebar activepage={activepage} />
          </div>
          <div className="right">{activepage === "myorder" && <MyOrder />}</div>
        </div>
      </div>
    </Layout>
  );
};

export default MyOrders;
