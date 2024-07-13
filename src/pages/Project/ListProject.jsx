import { useCallback, useEffect, useMemo, useState } from "react";
import Project from "./Project";
import Field from "./Field";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../store/features/projects/projectReducer";

function ListProject() {
  const { projects, status, error } = useSelector((state) => state.project);

  const dispatch = useDispatch();

  const [fields, setFields] = useState([]);

  const configFields = useCallback((currentFields) => {
    setFields(currentFields);
  }, []);

  useEffect(() => {
    if (Array.isArray(projects) && projects.length > 0) {
      const additional = ["func"];
      configFields(Object.keys(projects[0]).concat(additional));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  if (status === "loading") return <div>Loading...</div>;

  if (error) throw Error(error);
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Project List</h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <Field fields={fields} />
        </thead>
        <tbody>
          {projects.map((project) => (
            <Project key={project.id} item={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProject;
