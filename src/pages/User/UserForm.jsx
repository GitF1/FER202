import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SkeletonLoader from "../../components/loading/Skeleton";
import {
  fetchUser,
  createUser,
  updateUser,
} from "../../store/features/user/userSlice";
import { useDispatch } from "react-redux";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const { user, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    setName(id && user ? user?.name : " ");
    setEmail(id && user ? user?.email : " ");
  }, [user, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email };

    if (id) {
      dispatch(updateUser({ id, userData })).then(() => navigate("/users"));
    } else {
      dispatch(createUser(userData)).then(() => navigate("/users"));
    }
    setEmail("");
    setName("");
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const userData = { name, email };

  //     let url = "http://localhost:4000/users";
  //     let method = "POST";

  //     if (id) {
  //       url += `/${id}`;
  //       method = "PUT";
  //     }

  //     try {
  //       const response = await fetch(url, {
  //         method,
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(userData),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Could not save the user data.");
  //       }
  //       navigate("/users");
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   useEffect(() => {
  //     if (data) {
  //       setName(data.name);
  //       setEmail(data.email);
  //     }
  //   }, [data]);

  if (isLoading) return <SkeletonLoader />;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">{id ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
