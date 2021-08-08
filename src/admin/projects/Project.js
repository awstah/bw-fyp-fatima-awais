import React, { useEffect, useState } from "react";
import Layout from "../../components/Admin/Layout";
import { Route, Switch, useParams } from "react-router-dom";
import { useDocument } from "react-firebase-hooks/firestore";
import { useAuth } from "../../app/AuthContext";
import db from "../../firebase/firebase";
import ComponentLoading from "../../components/Placeholder/ComponentLoading";
import ProjectMenu from "../../components/Admin/Dashboard/ProjectMenu";
import ProjectManager from "../../components/Admin/Dashboard/ProjectManager";
import EditProject from "./EditProject";
import Deliverables from "../deliverables";
import AddDeliverable from "../deliverables/AddDeliverable";

function Project() {
  const { id } = useParams();
  const { currentUser } = useAuth();

  const [value, loading, error] = useDocument(
    db.doc(`Users/${currentUser.uid}/Projects/${id}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading && !value) {
    return <ComponentLoading />;
  }

  return (
    <Layout>
      <header>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <ComponentLoading />}
        {value && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <p className="text-md sm:text-xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-normal text-gray-600">
                {value && value.data().title}
              </p>
              <p
                className={`px-3 py-1.5 font-semibold leading-3 tracking-wide rounded-full flex items-center w-auto text-xs 
                              animate-pulse capitalize
                              ${
                                value.data().status == "pending" &&
                                "bg-pink-600 text-pink-50"
                              }
                              ${
                                value.data().status == "in-process" &&
                                "bg-blue-600 text-blue-50"
                              }
                              ${
                                value.data().status == "review" &&
                                "bg-purple-600 text-purple-50"
                              }
                              ${
                                value.data().status == "debug" &&
                                "bg-yellow-600 text-yellow-50"
                              }
                              ${
                                value.data().status == "overdue" &&
                                "bg-red-600 text-red-50"
                              }
                              ${
                                value.data().status == "completed" &&
                                "bg-green-600 text-green-50"
                              }
        
        `}
              >
                {value.data().status}
              </p>
            </div>
            <div>
              <div className="">
                <ProjectMenu id={id} />
              </div>
            </div>
          </div>
        )}
      </header>
      <Switch>
        <Route exact path="/admin/projects/:id">
          <main>
            <ProjectManager id={value.data().manager} />
            <div className="flex items-center space-x-4 mt-4 bg-gray-50 p-5 w-full min-h-full">
              <h2 className="text-xl">Description :</h2>
              <p>
                {loading && <ComponentLoading />}
                {value.data().description}
              </p>
            </div>
          </main>
        </Route>
        <Route path="/admin/projects/:id/actions">
          <EditProject {...value.data()} id={value.id} />
        </Route>
        <Route path="/admin/projects/:id/deliverables">
          <Deliverables {...value.data()} id={value.id} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Project;
