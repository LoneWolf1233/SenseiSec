import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import type { Post } from '@/lib/posts'

async function getPosts(): Promise<Post[]> {
  return getSortedPostsData()
}

export default async function Home() {
  const posts = await getPosts()

  const writeups = posts.filter(post => post.category === 'Writeup').slice(0, 6)
  const tools = posts.filter(post => post.category === 'Tool').slice(0, 6)

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6 gradient-text">
          SenseiSec
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Κυβερνοασφάλεια για όλους.
        </p>
      </div>

      {/* Writeups Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-cyber-green">Άρθρα</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writeups.map((post) => (
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
                  {post.description || 'Περισσότερα...'}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="text-cyber-blue">Περισσότερα →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
        {writeups.length === 0 && (
          <p className="text-gray-400 text-center">Δεν βρέθηκαν άρθρα. Ελέγξτε ξανά αργότερα!</p>
        )}
        {posts.filter(p => p.category === 'Writeup').length > writeups.length && (
          <div className="mt-8 text-center">
            <Link href="/writeups" className="text-cyber-blue hover:text-cyber-green transition-colors">Δείτε όλα τα άρθρα →</Link>
          </div>
        )}
      </section>

      {/* Tools Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-cyber-blue">Εργαλεία</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link key={tool.id} href={`/articles/${tool.id}`}>
              <article className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyber-blue/50 transition-all cursor-pointer">
                <h3 className="text-2xl font-bold mb-2 text-cyber-blue">
                  {tool.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {tool.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-cyber-blue">Περισσότερα →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
        {tools.length === 0 && (
          <p className="text-gray-400 text-center">Δεν βρέθηκαν εργαλεία. Ελέγξτε ξανά αργότερα!</p>
        )}
        {posts.filter(p => p.category === 'Tool').length > tools.length && (
          <div className="mt-8 text-center">
            <Link href="/tools" className="text-cyber-blue hover:text-cyber-green transition-colors">Δείτε όλα τα εργαλεία →</Link>
          </div>
        )}
      </section>
    </main>
  )
}





