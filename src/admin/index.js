import React from "react";
import Card from "../components/Admin/Dashboard/Card";
import LargeCards from "../components/Admin/Dashboard/LargeCards";
import PictureCard from "../components/Admin/Dashboard/PictureCard";
import { AiOutlineProject } from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import Layout from "../components/Admin/Layout";
function Admin() {
  return (
    <Layout>
      <div className="flex flex-col space-y-5">
        <div className="w-full grid grid-cols-3 gap-10">
          <Card
            name="Projects"
            total="5 projects and 2 are pending"
            Icon={AiOutlineProject}
          />
          <Card name="Employs" total="12 employs are working" Icon={FiUsers} />
          <Card
            name="Departments"
            total="Organization have 4 departments"
            Icon={RiBuilding2Line}
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <LargeCards />
          <PictureCard />
        </div>
      </div>
    </Layout>
  );
}

export default Admin;
