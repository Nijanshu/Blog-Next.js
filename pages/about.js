import React from 'react'
import Head from 'next/head'
import styles from '@/styles/about.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About US" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>
      <h1 className='text-3xl my-6 font-serif font-bold'>About inBlog</h1>
      <h2 className='text-3xl mb-2'>Introduction</h2>
      <div className={styles.content}>
      🌿 Welcome to BioStem, a virtual haven where the world of web development meets the wonders of biology! This platform is the brainchild of Nijanshu Singh, a passionate web developer, and it's here to bring you captivating blogs written by Kristine Villanueva, an enthusiastic undergraduate biology student.

<br />
<br />
👩‍🔬 Kristine's curiosity and love for biology shine through in each carefully crafted blog post. From the intricacies of cellular processes to the fascinating realms of ecology and biodiversity, Kristine's writing invites you to embark on a journey of discovery, making complex biological concepts accessible to readers of all backgrounds.
<br />
<br />

💡 Nijanshu Singh, the creative force behind this website, has woven a digital space that not only showcases Kristine's insightful writings but also aims to make the exploration of biology a delightful experience. The website is designed with simplicity and user-friendliness in mind, ensuring that you can effortlessly dive into the fascinating world of biology without any technical hurdles.
<br />
<br />
🌐 As you navigate through the site, you'll find a collection of blogs that cover a diverse range of topics, providing a holistic view of the biological sciences. Whether you're an avid biology enthusiast or someone just beginning to explore the subject, there's something here to pique your interest and expand your understanding.

<br />
<br />
📚 This collaborative effort between Nijanshu Singh and Kristine Villanueva is a celebration of the intersection between technology and science, bringing together the art of web development with the passion for sharing knowledge. We invite you to explore, learn, and engage with the rich tapestry of biology through Kristine's insightful blogs.
<br />
<br />
🌱 Thank you for being a part of our community at BioStem. Together, let's foster a love for biology and create a space where learning is not just informative but also enjoyable. Happy exploring!

</div>


        <h2 className='text-3xl mb-2'>From the Creator</h2>
        <div className={styles.content}>
        🌟 Greetings from BioStem! I'm Nijanshu Singh, the person behind the scenes working to make your online experience seamless and enjoyable. As a web developer, I've put my heart and soul into crafting this space with the hope that it becomes a comfortable digital home for you.
<br />
<br />
🖥️ With a passion for clean design and user-friendly interfaces, my goal is to create a website that not only looks good but also feels intuitive to navigate. Every line of code has been written with care, and every design choice is made with your experience in mind.
<br />
<br />
💻 As you explore BioStem, you'll notice the simplicity and functionality that I strive to maintain. It's a reflection of my belief that the best websites are those that serve their purpose without unnecessary complexities.
<br />
<br />

🌐 This website is an ongoing project, and I'm committed to keeping it fresh and relevant. Your feedback is valuable, and I look forward to evolving this space based on your needs and preferences.

<br />
<br />
🙏 Thank you for being a part of this journey. Feel free to explore, discover, and make yourself at home. BioStem is as much yours as it is mine.
<br />
<br />

Best,<br />
Nijanshu Singh





        </div>


        <h2 className='text-3xl mb-2'>From the Author</h2>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut dolor nemo. Amet et consequuntur rerum consectetur aliquid incidunt quisquam facere eveniet aspernatur, voluptatem, quas architecto accusantium cupiditate. Similique nesciunt ipsam dolores sunt excepturi, velit autem facere ex, eum magni et laborum a facilis dicta optio in hic impedit iure accusantium quisquam voluptates repellat deserunt nihil! Maiores a nisi amet tenetur est illum ut obcaecati, earum quam distinctio placeat sequi reiciendis accusantium architecto hic, voluptas sit dolorem eligendi excepturi. Omnis ab voluptatibus, saepe temporibus facilis aspernatur porro dolorem illo voluptas praesentium aliquid neque exercitationem reprehenderit ducimus est repellendus. Ipsa, molestias.</div>
      </div>

      )
}

      export default About
