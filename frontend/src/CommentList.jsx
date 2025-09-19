import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

const API_BASE = 'http://127.0.0.1:8000/api';

export default function CommentList() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchComments() {
    setLoading(true);
    const res = await fetch(`${API_BASE}/comments/`);
    const data = await res.json();
    // sort by date descending for UI UX
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
    setComments(data);
    setLoading(false);
  }

  useEffect(() => { fetchComments(); }, []);

  async function handleAdd(text) {
    const res = await fetch(`${API_BASE}/comments/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ text, author: 'Admin' })
    });
    const newComment = await res.json();
    setComments(prev => [newComment, ...prev]);
  }

  async function handleUpdate(id, newText) {
    await fetch(`${API_BASE}/comments/${id}/`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ text: newText })
    });
    setComments(prev => prev.map(c => c.id === id ? { ...c, text: newText } : c));
  }

  async function handleDelete(id) {
    await fetch(`${API_BASE}/comments/${id}/`, { method: 'DELETE' });
    setComments(prev => prev.filter(c => c.id !== id));
  }

  return (
    <div>
      <CommentForm onAdd={handleAdd} />
      {loading ? <p>Loading...</p> :
        comments.map(c => (
          <CommentItem
            key={c.id}
            comment={c}
            onDelete={() => handleDelete(c.id)}
            onEdit={(newText) => handleUpdate(c.id, newText)}
          />
        ))}
    </div>
  );
}