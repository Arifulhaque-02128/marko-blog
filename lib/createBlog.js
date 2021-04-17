import draftToHtml from 'draftjs-to-html';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';



const currentDirectory = path.join(process.cwd(), '_content')

export default function createBlog(blogData){
    const {title, authorName, slug, author_img, cover_photo, blogContents, date, excerpt} = blogData;
    const content = draftToHtml(
        blogContents, 
        // hashtagConfig, 
        // directional, 
        // customEntityTransform
    );
    const data = {title, authorName, slug, author_img, cover_photo, date, excerpt}
    
    const newBlog = (matter.stringify(content, data));
    console.log(newBlog)
    fs.writeFileSync(`${currentDirectory}/${slug}.md`, newBlog)
}