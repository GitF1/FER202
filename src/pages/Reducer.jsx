import { useReducer, useRef } from "react";
import styled from "styled-components";

const init = {
  applicants: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345",
      },
      education: [
        {
          degree: "B.Sc. Computer Science",
          institution: "University of Example",
          yearOfGraduation: 2020,
        },
      ],
      workExperience: [
        {
          company: "Tech Solutions Inc.",
          position: "Software Developer",
          startDate: "2021-01-15",
          endDate: "2023-06-30",
          responsibilities: [
            "Developed and maintained web applications",
            "Collaborated with cross-functional teams to define project requirements",
          ],
        },
      ],
      skills: ["JavaScript", "React", "Node.js", "SQL"],
    },
    {
      id: 2,
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@example.com",
      phone: "+1234567892",
      address: {
        street: "456 Elm St",
        city: "Othertown",
        state: "TX",
        zipCode: "67890",
      },
      education: [
        {
          degree: "M.Sc. Information Technology",
          institution: "Institute of Example",
          yearOfGraduation: 2018,
        },
      ],
      workExperience: [
        {
          company: "Innovative Solutions Ltd.",
          position: "IT Consultant",
          startDate: "2019-03-01",
          endDate: "2022-12-31",
          responsibilities: [
            "Provided IT consulting services to clients",
            "Implemented software solutions and managed projects",
          ],
        },
      ],
      skills: ["Python", "Django", "Machine Learning", "Project Management"],
    },
  ],
};
const templateAdd = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1234567890",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
  },
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "University of Example",
      yearOfGraduation: 2020,
    },
  ],
  workExperience: [
    {
      company: "Tech Solutions Inc.",
      position: "Software Developer",
      startDate: "2021-01-15",
      endDate: "2023-06-30",
      responsibilities: [
        "Developed and maintained web applications",
        "Collaborated with cross-functional teams to define project requirements",
      ],
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "SQL"],
};
function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        state,
        applicants: [
          ...state.applicants,
          {
            ...templateAdd,
            id: state.applicants.length + 1,
            firstName: `User ${state.applicants.length + 1}`,
          },
        ],
      };
    }

    case "UPDATE": {
      return {
        ...state,
        applicants: state.applicants.map((a) =>
          a.id === action.id ? { ...a, [action.key]: action.val } : a
        ),
      };
    }

    case "DELETE_ITEM": {
      return {
        ...state,
        applicants: state.applicants.filter((a) => a.id !== action.id),
      };
    }

    case "DELETE_SKILL": {
      return {
        ...state,
        applicants: state.applicants.map((a) =>
          a.id === action.id
            ? {
                ...a,
                skills: a.skills?.filter((_, index) => index !== action.index),
              }
            : a
        ),
      };
    }

    case "ADD_SKILL": {
      return {
        ...state,
        applicants: state.applicants.map((a) =>
          a.id === action.id
            ? {
                ...a,
                skills: [...a.skills, action.val],
              }
            : a
        ),
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, init);
  const refInput = useRef();

  function handleChangeInfor(e, id, key) {
    dispatch({
      type: "UPDATE",
      val: e.target.value,
      id,
      key,
    });
  }

  function handleDelete(id) {
    dispatch({
      type: "DELETE_ITEM",
      id,
    });
  }
  function handleCreate() {
    dispatch({
      type: "ADD_ITEM",
    });
  }
  function handleDeleteSkill(index, id) {
    dispatch({
      type: "DELETE_SKILL",
      id,
      index,
    });
  }

  const education = (education) =>
    education.length &&
    education.map((educate) => (
      <div>
        <div>
          {educate.degree} - {educate.institution} - {educate.yearOfGraduation}
        </div>
      </div>
    ));
  const workEx = (workEX) => {
    return workEX.map((work) => (
      <div>
        {work.company} - {work.position} -{work.startDate}
        <div>
          {work?.responsibilities?.map((res) => (
            <div>{res}</div>
          ))}
        </div>
      </div>
    ));
  };
  console.log(refInput.current);
  const skillList = (skills, id) => {
    function handleAddSkill(id) {
      if (refInput.current) {
        dispatch({
          type: "ADD_SKILL",
          val: refInput.current?.value,
          id,
        });
        refInput.current.value = ""; // Clear the input field after adding skill
      }
    }
    return (
      <div>
        {skills?.map((sk, index) => {
          return (
            <div key={sk + index}>
              <span>{sk}</span>
              <button onClick={() => handleDeleteSkill(index, id)}>X</button>
            </div>
          );
        })}
        <input ref={refInput} />
        <button onClick={handleAddSkill(id)}>Add Skill</button>
      </div>
    );
  };

  return (
    <Container>
      {state.applicants &&
        state.applicants.length &&
        state.applicants.map((item) => {
          return (
            <Item key={item.id}>
              <span>Information: </span>
              <div>
                Name:
                <input
                  value={item?.firstName}
                  onChange={(event) =>
                    handleChangeInfor(event, item.id, "firstName")
                  }
                />
                <br />
                LastName:
                <input
                  value={item?.lastName}
                  onChange={(event) =>
                    handleChangeInfor(event, item.id, "lastName")
                  }
                />
                <br />
                Email:
                <input
                  value={item?.email}
                  onChange={(event) =>
                    handleChangeInfor(event, item.id, "email")
                  }
                />
                <br />
                Phone:
                <input
                  value={item?.phone}
                  onChange={(event) =>
                    handleChangeInfor(event, item.id, "phone")
                  }
                />
              </div>

              <div>Edudation: {education(item.education)}</div>
              <div>Work Ex: {workEx(item.workExperience)}</div>
              <div>Skils: {skillList(item.skills, item.id)} </div>

              <br />
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </Item>
          );
        })}
      <button onClick={handleCreate}>Create</button>
    </Container>
  );
}

export default Reducer;

const Container = styled.div``;

const Item = styled.div`
  border: 1px solid #ccc;
  margin: 20px auto;
  padding: 20px;
  width: 60%;
  border-radius: 10px;
`;
