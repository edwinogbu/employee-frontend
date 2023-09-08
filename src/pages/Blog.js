import React, { useState, useEffect } from 'react'; // Added useEffect
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const result = await axios.get("http://localhost:8080/blogs");
      setPosts(result.data);
    } catch (error) {
      console.error("Error loading blogs:", error);
    }
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar */}
        {/* <div className="col-md-3">
          <div className="mb-4">
            <h5 className="mb-3">Categories</h5>
            <ul className="list-group">
              {uniqueCategories.map((category) => (
                <li className="list-group-item" key={category}>
                  <div className="category-image">
                    <img src={getCategoryImage(category)} alt={`Image for ${category}`} />
                  </div>
                  <span className="category-title">{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        {/* Main Content */}
        <div className="col-md-9">
          <section className="text-center">
            <h4 className="mb-5">
              <strong>Latest posts</strong>
            </h4>
            <div className="row">
              {currentPosts.map((post) => (
                <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card post-card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src={post.imageUrl} className="img-fluid" alt={`Image for ${post.title}`} />
                      <a href="#!">
                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{post.title.split(' ').slice(0, 4).join(' ')}</h5>
                      <p className="card-content">{post.content.split(' ').slice(0, 20).join(' ')}...</p>
                      <p className="word-count">Word Count: {post.content.split(' ').length}</p>
                      <Link to={`/blogDetail/${post.id}`} className="btn btn-primary">
                        Read
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Pagination */}
          <div className="my-4" aria-label="...">
            <ul className="pagination pagination-circle justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </a>
              </li>
              {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                    {currentPage === index + 1 && <span className="sr-only">(current)</span>}
                  </a>
                </li>
              ))}
              <li className={`page-item ${currentPage === Math.ceil(posts.length / postsPerPage) ? 'disabled' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';


// export default function Blog({ posts }) {
//   const [blogs, setBlogs] =useState([]);
// const {id} =useParams();

// useEffect(()=>{
//     loadUsers();
// },[]);

// const loadUsers = async () =>{
//       const result = await axios.get("http://localhost:8080/blogs");
//       setBlogs(result.data);
// }
//   const postsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(1);
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;

//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Get unique categories
//   const uniqueCategories = Array.from(new Set(posts.map((post) => post.category)));

//   // Function to get the image URL of the first post in a category
//   const getCategoryImage = (category) => {
//     const categoryPosts = posts.filter((post) => post.category === category);
//     if (categoryPosts.length > 0) {
//       return categoryPosts[0].imageUrl;
//     }
//     // You can provide a default image URL if no posts in the category
//     // return 'default-image-url.jpg';
//   };

//   // Internal CSS for styling
//   const styles = `
//     .container {
//       margin-top: 20px;
//     }

//     .list-group-item {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }

//     .category-title {
//       font-weight: bold;
//       margin-bottom: 5px;
//     }

//     .category-image img {
//       max-width: 30px;
//       max-height: 30px;
//       margin-right: 10px;
//     }

//     .post-card {
//       margin-bottom: 20px;
//     }

//     .card-title {
//       font-size: 1.2rem;
//       font-weight: bold;
//     }

//     .card-content {
//       font-size: 0.9rem;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       white-space: nowrap;
//     }

//     .word-count {
//       font-size: 0.8rem;
//       color: #777;
//     }
//   `;

//   return (
//     <div className="container my-5">
//       {/* Internal CSS */}
//       <style>{styles}</style>

//       <div className="row">
//         {/* Sidebar */}
//         <div className="col-md-3">
//           <div className="mb-4">
//             <h5 className="mb-3">Categories</h5>
//             <ul className="list-group">
//               {uniqueCategories.map((category) => (
//                 <li className="list-group-item" key={category}>
//                   <div className="category-image">
//                     <img src={getCategoryImage(category)} alt={`Image for ${category}`} />
//                   </div>
//                   <span className="category-title">{category}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {/* Main Content */}
//         <div className="col-md-9">
//           <section className="text-center">
//             <h4 className="mb-5">
//               <strong>Latest posts</strong>
//             </h4>
//             <div className="row">
//               {currentPosts.map((post) => (
//                 <div key={post.id} className="col-lg-4 col-md-6 mb-4">
//                   <div className="card post-card">
//                     <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                       <img src={post.imageUrl} className="img-fluid" alt={`Image for ${post.title}`} />
//                       <a href="#!">
//                         <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//                       </a>
//                     </div>
//                     <div className="card-body">
//                       <h5 className="card-title">{post.title.split(' ').slice(0, 4).join(' ')}</h5>
//                       <p className="card-content">{post.content.split(' ').slice(0, 20).join(' ')}...</p>
//                       <p className="word-count">Word Count: {post.content.split(' ').length}</p>
//                       <Link to={`/blogDetail/${post.id}`} className="btn btn-primary">
//                         Read
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//           {/* Pagination */}
//           {/* <div className="my-4" aria-label="...">
//             <ul className="pagination pagination-circle justify-content-center">
//             </ul>
//           </div> */}
          
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// export default function Blog({ posts }) {
  
//   const postsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(1);
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;

//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Get unique categories
//   const uniqueCategories = Array.from(new Set(posts.map((post) => post.category)));

//   // Function to get the image URL of the first post in a category
//   const getCategoryImage = (category) => {
//     const categoryPosts = posts.filter((post) => post.category === category);
//     if (categoryPosts.length > 0) {
//       return categoryPosts[0].imageUrl;
//     }
//     // You can provide a default image URL if no posts in the category
//     // return 'default-image-url.jpg';
//   };

//   // Internal CSS for styling
//   const styles = `
//     .container {
//       margin-top: 20px;
//     }

//     .list-group-item {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }

//     .category-title {
//       font-weight: bold;
//     }

//     .post-card {
//       margin-bottom: 20px;
//     }

//     .card-title {
//       font-size: 1.2rem;
//       font-weight: bold;
//     }

//     .card-content {
//       font-size: 0.9rem;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       white-space: nowrap;
//     }

//     .word-count {
//       font-size: 0.8rem;
//       color: #777;
//     },
//     .category-image img {
//       max-width: 50px;
//       max-height: 50px;
//     }
//   `;
 

//   return (
//     <div className="container my-5">
//       {/* Internal CSS */}
//       <style>{styles}</style>
      
//       <div className="row">
//         {/* Sidebar */}
//         <div className="col-md-3">
//           <div className="mb-4">
//             <h5 className="mb-3">Categories</h5>
//             <ul className="list-group">
//               {uniqueCategories.map((category) => (
//                 <li className="list-group-item" key={category}>
//                   <span className="category-title">{category}</span>
//                   <div className="category-image">
//                     <img src={getCategoryImage(category)} alt={`Image for ${category}`} />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {/* Main Content */}
//         <div className="col-md-9">
//           <section className="text-center">
//             <h4 className="mb-5">
//               <strong>Latest posts</strong>
//             </h4>
//             <div className="row">
//               {currentPosts.map((post) => (
//                 <div key={post.id} className="col-lg-4 col-md-6 mb-4">
//                   <div className="card post-card">
//                     <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                       <img src={post.imageUrl} className="img-fluid " alt={`Image for ${post.title}`} />
//                       <a href="#!">
//                         <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//                       </a>
//                     </div>
//                     <div className="card-body">
//                       <h5 className="card-title">{post.title.split(' ').slice(0, 4).join(' ')}</h5>
//                       <p className="card-content">{post.content.split(' ').slice(0, 20).join(' ')}...</p>
//                       <p className="word-count">Word Count: {post.content.split(' ').length}</p>
//                       <Link to={`/blogDetail/${post.id}`} className="btn btn-primary">
//                         Read
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//           {/* Pagination */}
//           <div className="my-4" aria-label="...">
//             <ul className="pagination pagination-circle justify-content-center">
//               {/* Pagination code remains the same */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// export default function Blog({ posts }) { // Added destructuring of props
//   const {id} =useParams();

//   // Example post data
//   const postsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(1);
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;


//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//         <div className="container my-5">
//           {/* Section: Content */}
//           <section className="text-center">
//             <h4 className="mb-5">
//               <strong>Latest posts</strong>
//             </h4>

//             <div className="row">
//               {currentPosts.map((post) => (
//                 <div key={post.id} className="col-lg-4 col-md-6 mb-4">
//                   <div className="card">
//                     <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                       <img src={post.imageUrl} className="img-fluid" alt={`Image for ${post.title}`} />
//                       <a href="#!">
//                         <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//                       </a>
//                     </div>
//                     <div className="card-body">
//                       <h5 className="card-title">{post.title}</h5>
//                       <p className="card-text">{post.content}</p>
//                       <Link to={`/blogDetail/${post.id}`} className="btn btn-primary">
//                         Read
//                       </Link>

//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//           {/* Section: Content */}

//           {/* Pagination */}
//           <div className="my-4" aria-label="...">
//             <ul className="pagination pagination-circle justify-content-center">
//               <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                 <a
//                   className="page-link"
//                   href="#"
//                   tabIndex="-1"
//                   aria-disabled={currentPage === 1}
//                   onClick={() => handlePageChange(currentPage - 1)}
//                 >
//                   Previous
//                 </a>
//               </li>
//               {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
//                 <li
//                   key={index}
//                   className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
//                 >
//                   <a
//                     className="page-link"
//                     href="#"
//                     onClick={() => handlePageChange(index + 1)}
//                   >
//                     {index + 1}
//                     {currentPage === index + 1 && <span className="sr-only">(current)</span>}
//                   </a>
//                 </li>
//               ))}
//               <li className={`page-item ${currentPage === Math.ceil(posts.length / postsPerPage) ? 'disabled' : ''}`}>
//                 <a
//                   className="page-link"
//                   href="#"
//                   onClick={() => handlePageChange(currentPage + 1)}
//                 >
//                   Next
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//     </div>
//   );
// };
