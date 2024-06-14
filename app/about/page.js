import styles from './about.module.css'

const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About <span style={{ fontFamily: 'var(--font-mono)', display: 'inline-block' }}>&lt;HuntingCoder/&gt;</span></h1>
      <h2>Introduction</h2>
      <p>Welcome to Hunting Coder! This is my personal blog where I share my passion for coding, tips and tricks I&rsquo;ve picked up along the way, and everything else related to the world of programming. Whether you&rsquo;re a fellow coder or just curious about coding, I hope you find something here that sparks your interest.</p>
      <h2>About Me</h2>
      <p>Hi, I&rsquo;m Samya Saha, the person behind this blog website. I&rsquo;ve been coding for many years and have experience with various programming languages and frameworks. I created this blog to document my coding journey, share what I learn, and connect with other coding enthusiasts. To know more about me: <a href='https://samyasaha.vercel.app/' target='_blank'>Click here</a></p>
      <h2>What You&rsquo;ll Find Here</h2>
      <ul>
        <li><strong>Tutorials:</strong> I love breaking down complex coding concepts into easy-to-follow tutorials.</li>
        <li><strong>Project Walkthroughs:</strong> Detailed insights into projects I&rsquo;m working on or have completed.</li>
        <li><strong>Coding Tips:</strong> Practical tips and tricks that have helped me become a better coder.</li>
        <li><strong>Thoughts and Musings:</strong> My personal thoughts on the latest trends in coding, technology, and sometimes just random musings.</li>
      </ul>

      <h2>Source Code</h2>
      <p>This blog is built with <strong>Next.js</strong>. You can check out the source code on my <a href="https://github.com/Samya-S/HuntingCoder" target="_blank"><i>GitHub repository</i></a>.</p>


      <h2>Join Me on This Journey</h2>
      <p>Coding is more than just a job or a hobby; it&rsquo;s a journey of continuous learning and discovery. I invite you to join me on this adventure. Let&rsquo;s learn from each other, solve problems together, and celebrate the small wins along the way.</p>

      <h2>Get in Touch</h2>
      <p>I&rsquo;d love to hear from you! Whether you have questions, suggestions, or just want to chat about coding, feel free to reach out.</p>

      <p>Thanks for stopping by Hunting Coder. Happy coding!</p>
    </div>
  )
}

export default about
