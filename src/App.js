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
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/authentication" component={Authentication} />
          <ProtectedRoutes exact path="/admin" component={Admin} />
          <ProtectedRoutes exact path="/admin/projects" component={Projects} />
          <ProtectedRoutes
            path="/admin/projects/addproject"
            component={AddProject}
          />
          <ProtectedRoutes path="/admin/employs" component={Employs} />
          <ProtectedRoutes path="/admin/departments" component={Departments} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
