import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default async function WriteupsPage() {
  const posts = getSortedPostsData().filter(p => p.category === 'Writeup')

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-10 text-cyber-green">All Writeups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/articles/${post.id}`}>
            <article className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all hover:shadow-lg hover:shadow-cyber-green/20 border border-gray-700 hover:border-cyber-green/50">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-cyber-green">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {post.description || 'Read more...'}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="text-cyber-blue">Read more →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-gray-400">No writeups yet.</p>
      )}
    </main>
  )
}








