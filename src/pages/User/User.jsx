import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import SkeletonLoader from "../../components/loading/Skeleton";

const UserList = () => {
  const {
    data: users,
    isPending,
    error,
  } = useFetch("http://localhost:4000/users");

  const history = useNavigate();
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Could not delete the user.");
      }

      history(0);
    } catch (err) {
      console.error(err);
    }
  };
  if (isPending) return <SkeletonLoader />;

  if (error) throw Error(error);

  return (
    <>
      <section>
        <section>
          <h1>Users List</h1>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <p>{user.name}</p>
                  </td>

                  <td>
                    <p>{user.email}</p>
                  </td>

                  <td>
                    <Link to={`/users/${user.id}`}>
                      <button>View full details</button>
                    </Link>
                    <button onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
      <Link to={`/users/new`}>
        <button>Add New</button>
      </Link>
    </>
  );
};

export default UserList;
