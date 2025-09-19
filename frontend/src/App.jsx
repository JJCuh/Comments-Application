import React from 'react';
import CommentList from './CommentList';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Comments</h1>
        <CommentList />
      </div>
    </div>
  );
}
