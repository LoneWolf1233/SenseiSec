import { getAllPostIds, getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params
  // Remove .md extension if present
  const normalizedId = id.replace(/\.md$/, '')
  const postData = await getPostData(normalizedId)

  if (!postData) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back button */}
      <Link 
        href="/" 
        className="inline-flex items-center text-cyber-blue hover:text-cyber-green mb-8 transition-colors"
      >
        ← Πίσω
      </Link>

      {/* Article Header */
      }
      <article className="bg-gray-800 rounded-lg p-8 border border-gray-700">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm">
            {postData.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyber-green">
          {postData.title}
        </h1>
        
        <p className="text-gray-400 text-lg mb-6">
          {formatDate(postData.date)}
        </p>

        {/* Article Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-cyber-green prose-h1:text-3xl prose-h2:text-2xl prose-a:text-cyber-blue prose-strong:text-gray-200"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
        />

        {/* External Tool Link (inside article) */}
        {postData.category === 'Tool' && postData.link && (
          <div className="mt-8">
            <a
              href={postData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-cyber-blue/20 text-cyber-blue hover:text-cyber-green hover:bg-cyber-green/10 transition-colors"
            >
              Github Link →
            </a>
          </div>
        )}
      </article>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500">
        <p>SenseiSec © {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const postIds = getAllPostIds()
  const params = postIds.map((id) => ({
    id: id, // ID without .md (already stripped by getAllPostIds)
  }))
  // Also generate params with .md extension for compatibility
  const paramsWithMd = postIds.map((id) => ({
    id: `${id}.md`,
  }))
  return [...params, ...paramsWithMd]
}

