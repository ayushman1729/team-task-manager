import React, { useState } from "react";

function App() {
  const [loginUsername, setLoginUsername] = useState("ayushman");

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");

  const [projects, setProjects] = useState([]);

  const mainStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    color: "white",
    fontFamily: "Arial"
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.1)",
    padding: "30px",
    borderRadius: "20px",
    width: "500px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    textAlign: "center"
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginTop: "10px",
    marginBottom: "15px",
    border: "none",
    borderRadius: "10px",
    outline: "none",
    fontSize: "15px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#00d4ff",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px"
  };

  const logoutStyle = {
    ...buttonStyle,
    background: "#ff4d4d"
  };

const handleCreateProject = async () => {
  if (!projectTitle || !projectDescription) {
    alert("Please fill all project fields");
    return;
  }

  try {
    await axios.post(
      "https://web-production-18ccf.up.railway.app/api/projects/",
      {
        title: projectTitle,
        description: projectDescription,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    alert("Project Created Successfully");

    setProjects([
      ...projects,
      {
        title: projectTitle,
        description: projectDescription,
      },
    ]);

    setProjectTitle("");
    setProjectDescription("");

  } catch (error) {
    console.log(error);
    alert("Project creation failed");
  }
};

  const handleCreateTask = () => {
    if (!taskTitle || !taskDescription) {
      alert("Please fill all task fields");
      return;
    }

    alert("Task Created Successfully");

    setTaskTitle("");
    setTaskDescription("");
    setTaskStatus("Pending");
  };

  const handleLogout = () => {
    alert("Logged Out Successfully");
  };

  return (
    <div style={mainStyle}>
      <div style={cardStyle}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          🚀 Team Task Manager
        </h1>

        <h3 style={{ marginBottom: "20px" }}>
          Welcome, {loginUsername}
        </h3>

        <hr />

        <h2>Create Project</h2>

        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleCreateProject} style={buttonStyle}>
          Create Project
        </button>

        <hr style={{ marginTop: "25px" }} />

        <h2>Create Task</h2>

        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          style={inputStyle}
        />

        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
          style={inputStyle}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button onClick={handleCreateTask} style={buttonStyle}>
          Create Task
        </button>

        <hr style={{ marginTop: "25px" }} />

        <h2>View Projects</h2>

        {projects.length === 0 ? (
          <p>No Projects Yet</p>
        ) : (
          projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.15)",
                padding: "15px",
                borderRadius: "12px",
                marginTop: "12px",
                textAlign: "left"
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))
        )}

        <button onClick={handleLogout} style={logoutStyle}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default App;