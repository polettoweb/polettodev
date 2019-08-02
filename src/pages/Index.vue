<template>
  <Layout>
    <div
      class="hero container-inner mx-auto flex flex-col lg:flex-row flex-wrap justify-between pt-16 pb-24"
    >
      <div class="text-4xl font-bold w-full lg:w-3/5 items-center text-center lg:text-left pb-8">
        <h1>
          <span class="leading-tight">Hi, I'm Marco,</span>
          <br />
          <span class="text-blue-700 leading-tight typer-wrapper">
            <Vue-typer :text="role" :repeat="Infinity" :type-delay='100' :erase-delay='20' erase-style='backspace' :pre-erase-delay='1500' :shuffle="true" />
          </span>
        </h1>
      </div>
      <img class="lg:w-2/5 hidden lg:inline-block" src="@/assets/images/static_asset.svg" />

      <img class="absolute rotate-45 bg-octa" src="@/assets/images/bg-octa.svg" alt />
      <div class="text-lg sm:text-xl mt-8 w-full pt-24">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div>
              <img src="@/assets/images/marco-exa.png" alt="avatar" class="w-4/5 h-4/5 mx-auto mb-8 lg:mb-0 md:w-48 md:h-48" />
            </div>
            <div class="flex-1 text-lg sm:text-xl ml-6">
              I am a passionate frontend developer and mentor based in Amsterdam. I am originally from Venice and I love to work with JavaScript, CSS and everything around user interfaces.
              I am using daily VueJS, GraphQL and Sass for a wonderful company in the southeast of Amsterdam. I've started my career with HTML 3.0, CSS(1) and FireWorks.
              My goal is to build clean, performant and accessible user interfaces where the right user experience is a focal point.
              My job is also my passion and, therefore, seeking out new technologies and stay up-to-date on industry trends and advancements
              is more a pleasure than a duty. Helping trainee and Junior developers to grow and learn is a major part of my job and my personal mission.
            </div>
          </div>
      </div>
    </div>
    <!-- end hero -->

    





    <div class="container-inner mx-auto">
      <div class="flex flex-row items-center justify-center py-16">
        <h2 class="w-2/5 font-bold text-4xl mb-6 text-left" id="projects">Latest from blog</h2>
      </div>
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span>&middot;</span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">{{ post.node.summary }}</div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div>
      <!-- end post -->
      <!-- <div class="overflow-x-hidden">
        <div class="get-to-know-me container-inner mx-auto text-4xl pb-16 relative">
          <h2 class="font-bold mb-6" id="about">About me:</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <img src="@/assets/images/marco-exa.png" alt="avatar" class="w-48 h-48 mb-8 lg:mb-0" />
            </div>
            <div class="flex-1 text-lg sm:text-xl ml-6">
              I am a passionate frontend developer and mentor from Venice and based in Amsterdam. I love to work with JavaScript, CSS and mainly everything around user interfaces.
              I am using daily VueJS, GraphQL and Sass for a wonderful company in the southeast of Amsterdam. I've started my career with HTML 3.0, CSS(1) and FireWorks
            </div>
          </div>
        </div> -->
        <!-- end about me -->
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (order: DESC, perPage: 3) {
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import { VueTyper } from 'vue-typer'
export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    VueTyper
  },
  data() {
    return {
      role: [
        'Frontend Dev',
        'UI Engineer',
        'Coffee aficionado',
        'Tech enthusiast',
        'Tutor',
        'Gamer',
        'Mentor'
      ]
    }
  }
}
</script>



