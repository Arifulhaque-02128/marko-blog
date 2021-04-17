import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), "_content")

export function getBlogsData(){
    const allBlogs = fs.readdirSync(contentDirectory)
    const blogsData = allBlogs.map((fileName) => {
        const slug = fileName.replace('.md', '')
        const filePath = path.join(contentDirectory, fileName)
        const blogContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(blogContent);
        return {slug, data, content}
    })
    return blogsData
}

export function getSingleBlogById(slug){
    const allBlogs = fs.readdirSync(contentDirectory)
    const allSlugs = allBlogs.map(fileName => fileName.replace('.md', ''))
    const requiredSlug = allSlugs.find((slugName) => slugName === slug )
    const filePath = path.join(contentDirectory, requiredSlug+".md")
    const blogContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(blogContent)
    return { data, content }

}

export function getAllSlugName(){
    const allBlogs = fs.readdirSync(contentDirectory)
    const allSlugs = allBlogs.map(fileName => fileName.replace('.md', ''))
    return allSlugs
}