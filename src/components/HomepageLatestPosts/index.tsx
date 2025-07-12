import React from 'react';
import Link from '@docusaurus/Link';

// Import all blog post metadata
import blogPosts from '@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json';

export default function HomepageLatestPosts() {
  // blogPosts is already sorted by date (newest first)
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section>
      <h2>Latest Blog Posts</h2>
      <ul>
        {latestPosts.map((post) => (
          <li key={post.permalink}>
            <Link to={post.permalink}>{post.title}</Link>
            <span style={{marginLeft: 8, color: '#888'}}>
              ({new Date(post.date).toLocaleDateString()})
            </span>
          </li>
        ))}
      </ul>
      <div style={{marginTop: 16}}>
        <Link className="button button--primary" to="/blog">
          View All Posts
        </Link>
      </div>
    </section>
  );
}
