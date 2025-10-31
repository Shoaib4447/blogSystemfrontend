import React from "react";

const BlogCard = ({ image, title, date, url, caption, author, exerpt }) => {
  return (
    <div className='max-w-xs bg-purple-50 min-h-96 p-9 border-4 border-white  rounded-4xl hover:shadow-xl transition-shadow duration-300 shadow-lg overflow-hidden mt-4'>
      {/* -------------------------------- */}
      <article className='blog-card max-w-sm rounded-2xl  '>
        <figure className='relative'>
          <img
            src={image}
            alt={title}
            className='w-full h-52 object-cover transition-transform duration-300 hover:scale-105 rounded-2xl'
          />
          <figcaption className='sr-only'>{caption}</figcaption>
        </figure>

        <div className='mt-3'>
          <header className='mb-3'>
            <h2 className='text-xl font-semibold text-gray-800 hover:text-primary transition-colors'>
              <a href='/blog/how-to-learn-javascript'>{title}</a>
            </h2>
            <p className='text-sm text-gray-500 mt-1'>
              <time datetime='2025-10-28'>{date}</time>
              <span>By {author}</span>
            </p>
          </header>

          <section className='text-gray-600 mb-4'>
            <p>{exerpt}</p>
          </section>

          <footer>
            <a
              href={`/blog/${url}`}
              aria-label='Read more about How to Learn JavaScript'
              className='text-primary font-medium hover:underline'
            >
              Read More →
            </a>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
