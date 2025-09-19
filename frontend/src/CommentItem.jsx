import React, { useState } from 'react';

export default function CommentItem({ comment, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(comment.text);

  const save = async () => {
    if (draft.trim() === '') return;
    await onEdit(draft);
    setEditing(false);
  };

  return (
    <div className="bg-white rounded shadow p-4 mb-3">
      <div className="flex items-start">
        {comment.image ? (
          <img src={comment.image} alt="" className="w-12 h-12 rounded mr-4 object-cover" />
        ) : (
          <div className="w-12 h-12 bg-gray-200 rounded mr-4 flex items-center justify-center">A</div>
        )}
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <div className="font-semibold">{comment.author}</div>
              <div className="text-xs text-gray-500">{new Date(comment.date).toLocaleString()}</div>
            </div>
            <div className="text-sm text-gray-600">{comment.likes} likes</div>
          </div>

          {!editing ? (
            <p className="mt-2">{comment.text}</p>
          ) : (
            <textarea value={draft} onChange={e => setDraft(e.target.value)} className="w-full p-2 border rounded mt-2" rows={3} />
          )}

          <div className="mt-3 space-x-2">
            {!editing ? (
              <>
                <button onClick={() => { setEditing(true); setDraft(comment.text); }} className="text-sm text-blue-600">Edit</button>
                <button onClick={onDelete} className="text-sm text-red-600">Delete</button>
              </>
            ) : (
              <>
                <button onClick={save} className="text-sm text-green-600">Save</button>
                <button onClick={() => setEditing(false)} className="text-sm text-gray-600">Cancel</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
