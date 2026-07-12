import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import TaskChart from "../components/TaskChart";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data.tasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || task.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" || task.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  const total = tasks.length;
  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <div
      style={{
        background: "#0F172A",
        minHeight: "100vh",
      }}
    >
      <Navbar onLogout={logout} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#10B981",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Dashboard
        </h1>

        <TaskForm fetchTasks={fetchTasks} />

        {/* Search & Filters */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "15px",
            marginBottom: "25px",
          }}
        >
          <input
            type="text"
            placeholder="🔍 Search Tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <Card title="📋 Total Tasks" value={total} />
          <Card title="🟡 Pending" value={pending} />
          <Card title="🟢 Completed" value={completed} />
        </div>

        {/* Analytics */}
        <TaskChart
          completed={completed}
          pending={pending}
        />

        {/* Tasks */}
        {filteredTasks.length === 0 ? (
          <p
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            No Tasks Found
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              fetchTasks={fetchTasks}
            />
          ))
        )}
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      className="card"
      style={{
        textAlign: "center",
        padding: "25px",
      }}
    >
      <h3
        style={{
          color: "#CBD5E1",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color: "#10B981",
          fontSize: "36px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default Dashboard;