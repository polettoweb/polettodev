<template>
  <Layout>
    <div class="container mx-auto py-16">
      <div
        v-for="project in projectsData"
        :key="project.title"
        class="border-gray-400 border-b mb-12 flex justify-between w-4/5 mx-auto"
      >
        <div class="w-1/5 flex justify-start items-center">
          <codepen v-if="project.type === 'codepen'" />
          <codesandbox v-if="project.type === 'codesandbox'" />
          <github v-if="project.type === 'github'" />
        </div>
        <div class="post w-4/5">
          <h2 class="text-3xl font-bold">{{ project.title }}</h2>
          <div class="text-lg mb-4">{{ project.content }}</div>
          <div class="flex justify-between mb-8">
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to the source code"
              class="font-bold uppercase border-b-2 border-transparent pb-1"
            >View Code</a>
            <a
              v-if="project.website"
              :href="project.website"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to the demo website"
              class="font-bold uppercase border-b-2 border-transparent pb-1"
            >View Project</a>
          </div>
        </div>
      </div>
      <!-- end post -->
    </div>
  </Layout>
</template>

<script>
import projectsData from "../assets/json/projects.json";

export default {
  metaInfo: {
    title: "Code | Poletto.dev | Marco Poletto | Web Developer | Mentor",
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
          "Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, code, workshop"
      }
    ]
  },
  data() {
    return {
      projectsData
    };
  },
  components: {
    codepen: () => import("../components/partials/codepen"),
    codesandbox: () => import("../components/partials/codesandbox"),
    github: () => import("../components/partials/github")
  }
};
</script>


