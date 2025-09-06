import React, { useState } from "react";
import axios from "axios";

const EditApplicant = ({ applicant, onUpdate }) => {
  const [form, setForm] = useState(applicant);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Name and Email are required");
      return;
    }
    await axios.put(`http://127.0.0.1:8000/api/applicants/${form.id}/edit/`, form);
    onUpdate();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditApplicant;
