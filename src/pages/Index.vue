<template>
  <Layout>
    <div class="hero container mx-auto flex flex-col lg:flex-row flex-wrap justify-between pt-16 pb-24">
      <div class="text-4xl font-bold w-full lg:w-3/5 items-center text-center lg:text-left pb-8">
        <h1 class="font-normal">
          <span class="leading-tight">Hi, I'm Marco,</span>
          <br />
          <span class="text-copy-secondary leading-tight typer-wrapper">
            <client-only placeholder="Frontend Developer">
              <Vue-typer
                :text="role"
                :repeat="Infinity"
                :type-delay="100"
                :erase-delay="10"
                :pre-erase-delay="1500"
                :shuffle="true"
                erase-style="backspace"
                class="whitespace-no-wrap"
              />
            </client-only>
          </span>
        </h1>
      </div>
      <img
        class="lg:w-2/5 hidden lg:inline-block relative z-10"
        alt="Marco's fab portrait"
        src="@/assets/images/marco.png"
      />
      <svg
        class="absolute rotate-45 bg-octa"
        width="448"
        height="448"
        viewBox="0 0 448 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M189.695 14.3458L66.024 65.1917L30.9264 149.299L125.5 260.342L223.434 65.9808L189.695 14.3458ZM0 223.411L28.7802 154.442L123.074 265.156L64.7518 380.905L0 223.411ZM68.9799 383.555L126.57 269.261L169.111 319.21L114.595 402.59L68.9799 383.555ZM119.259 404.536L172.469 323.153L264.434 431.132L223.411 447.998L119.259 404.536ZM175.304 318.818L269.268 429.145L336.946 401.32L382.925 310.068L282.006 155.62L175.304 318.818ZM386.067 314.875L343.963 398.435L381.974 382.807L400.869 337.529L386.067 314.875ZM388.651 309.747L440.612 206.623L447.998 224.588L403.182 331.985L388.651 309.747ZM438.112 200.542L385.509 304.939L284.975 151.08L349.636 52.1822L382.807 66.024L438.112 200.542ZM128.996 264.446L171.945 314.875L279.039 151.079L226.576 70.7883L128.996 264.446ZM282.007 146.539L229.16 65.6597L255.702 12.9838L344.972 50.2359L282.007 146.539ZM226.018 60.8522L194.373 12.4223L224.588 0L251.105 11.0654L226.018 60.8522Z"
          fill="#2A4365"
          fill-opacity="0.2"
        />
      </svg>
      <div class="text-lg sm:text-xl mt-8 w-full pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex-1 text-lg sm:text-xl text-justify sm:text-left main-text">
            <p>
              I am a passionate frontend developer and mentor based in Amsterdam. I am originally from Venice, and I
              love to work with <span>JavaScript</span>, CSS and everything around user interfaces. I am using daily
              <span>VueJS</span>, <span>GraphQL</span> and <span>Sass</span> for a consultancy in the centre of
              Amsterdam. My goal is to build clean, performant and accessible user interfaces where the user experience
              is a focal point. Helping trainee and Junior developers to grow and learn is a significant part of my job
              and my <span>personal mission</span>. My job is also my passion and, therefore, seeking out new
              technologies and staying up-to-date on industry trends and advancements are more a pleasure than a duty.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- end hero -->
    <div class="container mx-auto">
      <div class="flex flex-row items-center justify-center py-16">
        <h2 class="font-bold text-4xl mb-6 text-center" id="projects">Latest from blog</h2>
      </div>
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold  mb-3">
          <g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span class="mr-2">{{ post.node.date }}</span>
          <span>&middot;</span>
          <span class="ml-2">{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">
          <p class="text-copy-primary">{{ post.node.summary }}</p>
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div>
      <!-- end post -->
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
export default {
  metaInfo: {
    title: "Home | Poletto.dev | Marco Poletto | Web Developer | Mentor",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { name: "author", content: "Marco Poletto Web Developer" },
      {
        name: "description",
        content:
          "Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor"
      }
    ]
  },
  components: {
    VueTyper: () => import("vue-typer").then(m => m.VueTyper)
  },
  data() {
    return {
      role: [
        "Frontend Dev",
        "UI Engineer",
        "Coffee aficionado",
        "Tech enthusiast",
        "Tutor",
        "Gamer",
        "Mentor"
      ]
    };
  }
};
</script>



