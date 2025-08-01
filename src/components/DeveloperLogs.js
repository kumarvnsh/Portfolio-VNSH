import React from 'react';

const DeveloperLogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Unity Profiler Tricks You Probably Don't Know (2025 Edition)",
      excerpt: "Discover advanced Unity Profiler techniques for identifying performance bottlenecks, memory leaks, and CPU/GPU spikes. Essential knowledge for optimizing Unity games and applications.",
      date: "June 27, 2025",
      readTime: "3 min read",
      category: "Unity Development",
      url: "https://blog.vnshkumar.com/10-unity-profiler-tricks-you-probably-dont-know-2025-edition"
    },
    {
      id: 2,
      title: "Building Typometer: A Typing Test App with Lovable.dev, Cursor AI, and Netlify",
      excerpt: "A comprehensive guide to building a modern typing test application using cutting-edge development tools and AI assistance. From concept to deployment with detailed implementation steps.",
      date: "March 26, 2025",
      readTime: "24 min read",
      category: "Web Development",
      url: "https://blog.vnshkumar.com/building-typometer-a-typing-test-app-with-lovabledev-cursor-ai-and-netlify"
    },
    {
      id: 3,
      title: "Building a Modular Task System in Unity: Checkpoints, Collectibles, and Reset Mechanics",
      excerpt: "Learn how to create flexible and scalable task systems in Unity. This guide covers checkpoint systems, collectible mechanics, and robust reset functionality for game development.",
      date: "December 2024",
      readTime: "8 min read",
      category: "Game Development",
      url: "https://blog.vnshkumar.com/building-a-modular-task-system-in-unity-checkpoints-collectibles-and-reset-mechanics"
    },
    {
      id: 4,
      title: "Object-Oriented Programming in Game Development: Key Concepts and Examples",
      excerpt: "Master OOP principles specifically applied to game development. From inheritance and polymorphism to design patterns, learn how to write clean, maintainable game code.",
      date: "December 2024",
      readTime: "7 min read",
      category: "Programming",
      url: "https://blog.vnshkumar.com/object-oriented-programming-in-game-development-key-concepts-and-examples"
    },
    {
      id: 5,
      title: "Harnessing the Power of Unity's Line Renderer",
      excerpt: "Explore Unity's Line Renderer component for creating dynamic visual effects, trails, and procedural graphics. Perfect for game developers looking to add visual flair to their projects.",
      date: "November 2024",
      readTime: "3 min read",
      category: "Unity Development",
      url: "https://blog.vnshkumar.com/harnessing-the-power-of-unitys-line-renderer"
    },
    {
      id: 6,
      title: "Mastering Cinemachine in Unity: A Comprehensive Guide for Game Developers",
      excerpt: "Complete guide to Unity's Cinemachine system for creating professional camera behaviors. From basic camera setup to advanced cinematic sequences and dynamic camera switching.",
      date: "November 2024",
      readTime: "6 min read",
      category: "Unity Development",
      url: "https://blog.vnshkumar.com/mastering-cinemachine-in-unity-a-comprehensive-guide-for-game-developers"
    },
    {
      id: 7,
      title: "Crafting Exciting Runner Games with Bezier Paths in Unity",
      excerpt: "Learn how to create engaging runner games using Bezier curves for smooth, dynamic paths. This guide covers path generation, character movement, and procedural level design.",
      date: "November 2024",
      readTime: "4 min read",
      category: "Game Development",
      url: "https://blog.vnshkumar.com/crafting-exciting-runner-games-with-bezier-paths-in-unity"
    },
    {
      id: 8,
      title: "The Importance of Occlusion Culling and LOD in AR/VR Development Using Unity",
      excerpt: "Optimize your AR/VR applications with occlusion culling and Level of Detail techniques. Essential performance optimization strategies for immersive experiences.",
      date: "November 2024",
      readTime: "4 min read",
      category: "AR/VR Development",
      url: "https://blog.vnshkumar.com/importance-occlusion-culling-lod-ar-vr-unity"
    },
    {
      id: 9,
      title: "The Future is Here: Understanding the Latest Trends and Tools in AR and VR",
      excerpt: "Explore cutting-edge developments in AR and VR technology. From new hardware platforms to emerging software tools and industry applications shaping the future of immersive experiences.",
      date: "November 2024",
      readTime: "3 min read",
      category: "AR/VR Development",
      url: "https://blog.vnshkumar.com/the-future-is-here-understanding-the-latest-trends-and-tools-in-ar-and-vr"
    },
    {
      id: 10,
      title: "Revolutionize Your Web Presence with Marker-based and Markerless AR",
      excerpt: "Transform your website with augmented reality experiences. Learn how to implement both marker-based and markerless AR solutions for web applications.",
      date: "October 2024",
      readTime: "8 min read",
      category: "AR/VR Development",
      url: "https://blog.vnshkumar.com/revolutionize-your-web-presence-with-marker-based-and-markerless-ar"
    },
    {
      id: 11,
      title: "Universal Render Pipeline in Unity",
      excerpt: "Master Unity's Universal Render Pipeline for optimized graphics performance. Learn URP features, post-processing effects, and best practices for modern Unity development.",
      date: "October 2024",
      readTime: "3 min read",
      category: "Unity Development",
      url: "https://blog.vnshkumar.com/universal-render-pipeline-in-unity"
    },
    {
      id: 12,
      title: "Creating Animations in Unity",
      excerpt: "Comprehensive guide to animation creation in Unity. From basic keyframe animation to complex character rigging and animation controllers.",
      date: "October 2024",
      readTime: "2 min read",
      category: "Unity Development",
      url: "https://blog.vnshkumar.com/creating-animations-in-unity"
    },
    {
      id: 13,
      title: "How to Use Image Target using Vuforia Engine AR(Augmented Reality) in Unity?(Part-1)",
      excerpt: "Step-by-step guide to implementing Vuforia image targets in Unity. Learn how to create AR experiences that recognize and track real-world images.",
      date: "September 2024",
      readTime: "3 min read",
      category: "AR/VR Development",
      url: "https://blog.vnshkumar.com/how-to-use-image-target-using-vuforia-engine-araugmented-reality-in-unitypart-1"
    }
  ];

  const handleBlogClick = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="blog" className="game-section">
      <div className="dev-logs">
        <h2 className="section-title">Developer Logs</h2>
        
        <div className="blog-header">
          <div className="blog-intro">
            <h3>Latest from the Blog</h3>
            <p>Sharing insights, tutorials, and experiences from my journey in game development and AR/VR technology.</p>
            <button onClick={(e) => handleBlogClick(e, "https://blog.vnshkumar.com")} className="blog-link">
              Visit Full Blog →
            </button>
          </div>
        </div>

        <div className="blog-posts">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post">
              <div className="post-header">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                <h3 className="post-title">
                  <a href={post.url} onClick={(e) => handleBlogClick(e, post.url)}>
                    {post.title}
                  </a>
                </h3>
              </div>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-footer">
                <a href={post.url} onClick={(e) => handleBlogClick(e, post.url)} className="read-more">
                  Read Full Post →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-stats">
          <div className="stat-item">
            <span className="stat-number">13+</span>
            <span className="stat-label">Blog Posts</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2025</span>
            <span className="stat-label">Latest Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperLogs; 