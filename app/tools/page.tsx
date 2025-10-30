import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export default async function ToolsPage() {
  const tools = getSortedPostsData().filter(p => p.category === 'Tool')

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-10 text-cyber-blue">Όλα τα εργαλεία</h1>
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
                <span className="text-cyber-blue">Διαβάστε περισσότερα →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
      {tools.length === 0 && (
        <p className="text-gray-400">Δεν βρέθηκαν εργαλεία.</p>
      )}
    </main>
  )
}







