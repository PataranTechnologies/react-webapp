import React, { useState } from "react";
import styles from "./Blog.module.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts] = useState([
    {
      image:
        "https://www.softuvo.com/wp-content/uploads/2020/07/character-illustration-people-with-internet-message-icons_53876-66149-1.jpg",
      title: "All About Email Marketing: Benefits, Strategies, Tools, And FAQs",
      content:
        "Are you struggling hard in finding the right marketing strategy? Try Email Marketing! The broad scope of email marketing is sure to provide your business with great benefits. In this blog, we have covered details on how to create effective email marketing. Read on to know details! Emails Never Go Ou...",
      author: "Diksha Suri",
      tags:
        "Best Digital Marketing Agencies, Digital, digital marketing agency, IT Consultancy",
    },
    {
      image:
        "https://www.softuvo.com/wp-content/uploads/2020/07/account-log-page_41910-263-1.jpg",
      title: "Privacy Issues Related To COVID19 Contact Tracing Apps",
      content:
        "Lockdowns in various nations due to the coronavirus pandemic are gradually being relaxed by governments across the world. However, efforts to reduce the spread of the virus are being intensified. One of the methods being used to curb the spread of the virus is contact tracing, which is the act of id...",
      author: "Diksha Suri",
      tags:
        "android mobile app development, Digital, iOS App Development, Mobile App Development",
    },
    {
      image:
        "https://www.softuvo.com/wp-content/uploads/2020/07/man-inviting-people-join-social-networks-metaphor_81522-3922-1.jpg",
      title: "Social Media For Business – Facts, Use, And FAQs",
      content:
        "Introduction The online world has led almost every business to jump on social media. Surviving the competition is tough if you don’t have a powerful social media strategy. Check out the infographic and see how you can make efficient use of social media. Power Of Social Media In Business A handy gu...",
      author: "Diksha Suri",
      tags:
        "Best Digital Marketing Agencies, Digital, digital marketing agency, IT Consultancy",
    },
  ]);
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogGrid}>
        <div className={styles.posts}>
          {posts.map((post, index) => {
            return (
              <div className={styles.blogPost} key={index}>
                <div className={styles.postImageContainer}>
                  <img src={post.image} alt="post" />
                </div>
                <div className={styles.postInfo}>
                  <h1 className={styles.postTitle}>{post.title}</h1>
                  <p className={styles.postAuthor}>
                    <PersonIcon
                      fontSize="small"
                      style={{
                        verticalAlign: "text-bottom",
                        color: "#080220",
                        marginRight: ".15rem",
                      }}
                    />
                    By {post.author}
                  </p>
                  <p className={styles.postTags}>
                    <LocalOfferIcon
                      fontSize="small"
                      style={{
                        verticalAlign: "text-bottom",
                        color: "#080220",
                        marginRight: ".15rem",
                      }}
                    />
                    {post.tags}
                  </p>
                </div>
                <div className={styles.postDateContainer}>
                  <div className={styles.postDate}>23</div>
                  <div className={styles.postMonth}>July</div>
                  <div className={styles.postYear}>2020</div>
                </div>
                <div className={styles.postBody}>
                  {post.content}
                  <br />
                  <Link to="/blog">Read More</Link>
                </div>
              </div>
            );
          })}
          <div className={styles.pagination}>
            <ChevronLeftIcon style={{verticalAlign: "middle", color: "var(--primary-green-color)"}} />
            <Link to="/blog">1</Link>
            <Link to="/blog">2</Link>
            <Link to="/blog">...</Link>
            <Link to="/blog">3</Link>
            <ChevronRightIcon style={{verticalAlign: "middle", color: "var(--primary-green-color)"}} />
          </div>
        </div>
        <div className={styles.sideSection}>
          <div className={styles.searchBox}>
            <input type="text" name="search" placeholder="Search Posts" />
            <button type="submit">
              <SearchIcon style={{ pointerEvents: "none" }} />
            </button>
          </div>
          <div className={styles.recentPosts}>
            <h4>Recent Posts</h4>
            {posts.map((post, index) => {
              return (
                <Link to="/blog" key={index}>
                  {post.title}
                </Link>
              );
            })}
          </div>
          <div className={styles.latestNews}>
            <h4>Latest News</h4>
            {posts.map((post, index) => {
              return (
                <div className={styles.singleNews} key={index}>
                  <img src={post.image} alt="post" />
                  <div className={styles.newsInfo}>
                    <Link to="/">{post.title}</Link>
                    <p>23 July 2020</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
