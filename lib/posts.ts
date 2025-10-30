import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/articles')

export interface Post {
  id: string
  title: string
  date: string
  category: string
  description?: string
  contentHtml?: string
  link?: string
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.filter(name => name.endsWith('.md')).map(fileName => fileName.replace(/\.md$/, ''))
}

export async function getPostData(id: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    title: matterResult.data.title || 'Untitled',
    date: matterResult.data.date || '',
    category: matterResult.data.category || 'General',
    description: matterResult.data.description || '',
    link: matterResult.data.link || '',
  }
}

export function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = fileNames
    .filter(name => name.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        id,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || '',
        category: matterResult.data.category || 'General',
        description: matterResult.data.description || '',
        link: matterResult.data.link || '',
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}





