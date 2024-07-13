import { Link } from "react-router-dom";

function Project({ item }) {
  return (
    <tr key={item.id}>
      {item &&
        Object.keys(item)?.map((key) => <td key={key}>{item[key] ?? ""}</td>)}
      <td>
        <Link to={`/projects/${item.id}`}>Edit</Link>
      </td>
    </tr>
  );
}

export default Project;
