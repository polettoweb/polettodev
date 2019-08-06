// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueFuse from "vue-fuse";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueFuse);

  head.meta.push({
    name: "keywords",
    content:
      "Developer, Blog, Projects, tutorials, coding, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, vuejs, sass, "
  });

  head.meta.push({
    name: "description",
    content:
      "Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor"
  });

  head.meta.push({
    name: "author",
    content: "Marco Poletto"
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700"
  });
}
