'use client';

import { useState } from 'react';
import ContentCard from '@/components/atoms/CardContent';
import postsData from '@/database/mocks/posts';

export default function PostPage() {
  const [posts] = useState(postsData);

  return (
  <main className="py-16 bg-gray-100 min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-semibold text-red-600 mt-8">Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {posts.length > 0 ? posts.map((post) => (
          <ContentCard key={post.id} content={post} />
        )) : (
          <span className="text-gray-600">Post not found</span>
        )}
      </div>
    </div>
  </main>
  );
}
