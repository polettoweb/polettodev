<template>
  <Layout>
    <div class="container blog mx-auto py-16">
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold mb-3">
          <g-link
            :to="post.node.path"
            class="text-copy-primary"
          >{{ post.node.title }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span class="mr-2">{{ post.node.date }}</span>
          <span>&middot;</span>
          <span class="ml-2">{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">{{ post.node.summary }}</div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="uppercase">Read More</g-link>
        </div>
      </div>
      <!-- end post -->

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
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
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "Blog | Poletto.dev | Marco Poletto | Web Developer | Mentor",
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
          "Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, blog, articles"
      }
    ]
  },
  components: {
    PaginationPosts
  }
};
</script>

