import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../app/AuthContext";
import Layout from "../../components/Admin/Layout";
import db from "../../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import ProjectCard from "../../components/Admin/Dashboard/ProjectCard";
import ComponentLoading from "../../components/Placeholder/ComponentLoading";

function Projects() {
  const { currentUser } = useAuth();
  const [value, loading, error] = useCollection(
    db.collection("Users").doc(currentUser.uid).collection("Projects"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const history = useHistory();

  return (
    <Layout>
      <div className="flex my-3 items-center justify-between">
        <div className="flex items-center space-x-5">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Projects
          </p>
        </div>
        <div className="w-1/2 text-right">
          <button
            onClick={() => {
              history.push("/admin/projects/addproject");
            }}
            className="btn-primary bg-purple-600 ring-purple-800"
          >
            Add Project
          </button>
        </div>
      </div>
      <div className="w-full h-auto">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <ComponentLoading />}
        {value && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {value.docs.sort().map((doc) => (
              <React.Fragment key={doc.id}>
                <ProjectCard {...doc.data()} id={doc.id} />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Projects;
