import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import db from "../../../firebase/firebase";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useAuth } from "../../../app/AuthContext";
import { useHistory } from "react-router-dom";

function ProjectCard({ id, title, manager, status, startDate, endDate }) {
  const { currentUser } = useAuth();
  const history = useHistory();
  const [allocateManager, loading, error] = useDocument(
    db
      .collection("Users")
      .doc(currentUser.uid)
      .collection("MyEmploys")
      .doc(manager),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const singleProjectHandler = (e) => {
    e.preventDefault();
    history.push(`/admin/projects/${id}`);
  };

  return (
    <div
      className="w-full h-auto bg-white shadow-md p-5 rounded-md hover:bg-gray-50 focus:bg-gray-50 transform ease-linear hover:scale-105 cursor-pointer"
      onClick={singleProjectHandler}
    >
      <header className="flex items-center justify-end">
        <p
          className={`px-3 py-1.5 font-semibold leading-3 tracking-wide rounded-full flex items-center w-auto text-xs 
        ${status == "pending" && "bg-pink-600 text-pink-50"}
        ${status == "in-process" && "bg-blue-600 text-blue-50"}
        ${status == "review" && "bg-purple-600 text-purple-50"}
        ${status == "debug" && "bg-yellow-600 text-yellow-50"}
        ${status == "overdue" && "bg-red-600 text-red-50"}
        ${status == "completed" && "bg-green-600 text-green-50"}
        
        `}
        >
          {status}
        </p>
      </header>

      <main className="flex flex-col space-y-2">
        <h2 className="text-2xl lg:text:xl xl:text-sm text-gray-700 font-semibold tracking-wide xl:font-bold">
          {title}
        </h2>
        <div class=" flex items-center flex-no-wrap">
          <h4 className="font-medium text-sm xl:text-xs text-gray-500">
            Manager:{" "}
            <span class="capitalize">
              {allocateManager && allocateManager.data().name}
            </span>
          </h4>
        </div>

        <div className="flex justify-between text-sm xl:text-xs text-gray-800 font-semibold">
          <h4 className="">Project progress</h4>
          <span>45%</span>
        </div>
      </main>
      <div class="h-3 relative rounded-full overflow-hidden mt-3">
        <div class="w-full h-full bg-gray-200 absolute"></div>
        <div id="bar" class="h-full bg-purple-400 relative w-1/2"></div>
      </div>
      <footer class="flex justify-between items-center pt-3 pb-1">
        <div class="flex space-x-3 justify-end">
          <p className="px-3 xl:px-1 py-1.5 bg-green-100 text-green-600 font-semibold leading-3 tracking-wide rounded-full flex items-center space-x-2 w-auto text-xl xl:text-lg">
            <AiOutlineFieldTime />{" "}
            <span className="text-xs whitespace-nowrap">{startDate}</span>
          </p>
          <p className="px-3 xl:px-1 py-1.5 bg-red-100 text-red-600 font-semibold leading-3 tracking-wide rounded-full flex items-center space-x-2 w-auto text-xl xl:text-lg,">
            <AiOutlineFieldTime />{" "}
            <span className="text-xs whitespace-nowrap">{endDate}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ProjectCard;
