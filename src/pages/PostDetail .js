import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PostDetail({ posts }) { // Added destructuring of props
    const { id } = useParams();

  // Find the selected blog post based on the id parameter in the URL
  const selectedPost = posts.find(post => post.id.toString() === id);

  if (!selectedPost) {
    // Handle the case where the post is not found
    return <div>Post not found</div>;
  }

  return (
    <div className="container my-5">
      <section className="text-center">
        <h4 className="mb-5">
          <strong>{selectedPost.title}</strong>
        </h4>
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src={selectedPost.imageUrl} className="img-fluid" alt={`Image for ${selectedPost.title}`} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </div>
          <div className="card-body">
            <p className="card-text">{selectedPost.content}</p>
            <Link to="/blog" className="btn btn-primary">
              Back to All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
