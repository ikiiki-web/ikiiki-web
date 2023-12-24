export const generateSitemap = (location: string, priority: string, posts?: any): string => {
  let xml = ''

  if (posts && posts[0].modified) {
    posts.map((post: any) => {
      // YYYY-MM-DD
      const postDate: string = new Date(post.modified).toISOString().split('T')[0]

      const projectURL = location + post.slug

      return (xml += `<url>
      <loc>${projectURL}</loc>
      <lastmod>${postDate}</lastmod>
      <priority>${priority}</priority>
    </url>`)
    })
  } else if (posts) {
    posts.map((post: any) => {
      const projectURL = location + post.slug

      return (xml += `<url>
      <loc>${projectURL}</loc>
      <priority>${priority}</priority>
    </url>`)
    })
  } else {
    xml = `<url>
    <loc>${location}</loc>
    <priority>${priority}</priority>
  </url>`
  }

  return xml
}
