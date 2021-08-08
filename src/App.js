import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Admin from "./admin";
import { AuthProvider } from "./app/AuthContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PageNotFound from "./pages/404";
import Projects from "./admin/projects";
import AddProject from "./admin/projects/AddProject";
import Employs from "./admin/employs";
import Departments from "./admin/departments";
import Project from "./admin/projects/Project";
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/authentication" component={Authentication} />
          {/* Admin Route */}
          <ProtectedRoutes exact path="/admin" component={Admin} />
          {/* Projects Route */}
          <ProtectedRoutes exact path="/admin/projects" component={Projects} />
          <ProtectedRoutes
            path="/admin/projects/addproject"
            component={AddProject}
          />
          <ProtectedRoutes path="/admin/projects/:id" component={Project} />

          {/* Employe Route */}
          <ProtectedRoutes path="/admin/employs" component={Employs} />

          {/* Department Route */}
          <ProtectedRoutes path="/admin/departments" component={Departments} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
