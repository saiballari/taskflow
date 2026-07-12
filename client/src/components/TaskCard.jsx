import { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function TaskCard({ task, fetchTasks }) {
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority || "Medium",
    dueDate: task.dueDate
      ? new Date(task.dueDate).toISOString().split("T")[0]
      : "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateTask = async () => {
    try {
      await API.put(`/tasks/${task._id}`, formData);

      toast.success("Task Updated Successfully");

      setEditing(false);

      fetchTasks();
    } catch (err) {
      toast.error(err.response?.data?.message || "Update Failed");
    }
  };

  const deleteTask = async () => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await API.delete(`/tasks/${task._id}`);

      toast.success("Task Deleted Successfully");

      fetchTasks();
    } catch (err) {
      toast.error(err.response?.data?.message || "Delete Failed");
    }
  };

  const priorityColor = {
    High: "#EF4444",
    Medium: "#F59E0B",
    Low: "#22C55E",
  };

  const statusColor = {
    Completed: "#22C55E",
    Pending: "#FACC15",
  };

  return (
    <div
      style={{
        background: "rgba(30,41,59,.95)",
        backdropFilter: "blur(15px)",
        padding: "25px",
        borderRadius: "18px",
        marginBottom: "20px",
        color: "white",
        boxShadow: "0 10px 25px rgba(0,0,0,.35)",
        transition: ".3s",
        border: "1px solid rgba(255,255,255,.05)",
      }}
    >
      {editing ? (
        <>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={textareaStyle}
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={inputStyle}
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            style={inputStyle}
          />

          <div style={{ marginTop: "15px" }}>
            <button style={saveBtn} onClick={updateTask}>
              💾 Save
            </button>

            <button
              style={cancelBtn}
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2
            style={{
              color: "#10B981",
              marginBottom: "10px",
            }}
          >
            {task.title}
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              marginBottom: "15px",
            }}
          >
            {task.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                background: statusColor[task.status],
                color: "#000",
                padding: "6px 14px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              {task.status}
            </span>

            <span
              style={{
                background: priorityColor[task.priority],
                color: "white",
                padding: "6px 14px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              {task.priority}
            </span>

            <span
              style={{
                background: "#334155",
                padding: "6px 14px",
                borderRadius: "20px",
              }}
            >
              📅{" "}
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "No Due Date"}
            </span>
          </div>

          <button
            style={editBtn}
            onClick={() => setEditing(true)}
          >
            ✏ Edit
          </button>

          <button
            style={deleteBtn}
            onClick={deleteTask}
          >
            🗑 Delete
          </button>
        </>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "100px",
};

const editBtn = {
  background: "#3B82F6",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const deleteBtn = {
  background: "#EF4444",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
};

const saveBtn = {
  background: "#10B981",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const cancelBtn = {
  background: "#64748B",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default TaskCard;