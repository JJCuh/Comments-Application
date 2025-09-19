import React, { useState } from 'react';

export default function CommentForm({ onAdd }) {
  const [text, setText] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };
  return (
    <form onSubmit={submit} className="mb-4">
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write a comment as Admin..."
        className="w-full p-2 rounded border"
        rows={3}
      />
      <div className="mt-2">
        <button className="px-4 py-2 rounded bg-blue-600 text-white" type="submit">Add Comment</button>
      </div>
    </form>
  );
}
