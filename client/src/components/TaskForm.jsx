import { toast } from "react-toastify";
import { useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", formData);

      alert("✅ Task Added Successfully");

      setFormData({
        title: "",
        description: "",
        status: "Pending",
        priority: "Medium",
        dueDate: "",
      });

      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add task");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#1E293B",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "30px",
      }}
    >
      <h2 style={{ color: "#10B981" }}>➕ Add New Task</h2>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <textarea
        name="description"
        placeholder="Task Description"
        value={formData.description}
        onChange={handleChange}
        required
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

      <button style={buttonStyle}>Add Task</button>
    </form>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "none",
  outline: "none",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "100px",
  resize: "none",
};

const buttonStyle = {
  background: "#10B981",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
};

export default TaskForm;