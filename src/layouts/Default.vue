<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen relative overflow-hidden"
    :class="theme"
  >
    <Header>
      <template v-slot:logo>
        <g-link v-if="theme === 'dark'" to="/">
          <g-image src="@/assets/images/logo.svg" class="w-40" alt="logo" />
        </g-link>
        <g-link v-else-if="theme === 'sepia'" to="/">
          <g-image src="@/assets/images/logo_sepia.svg" class="w-40" alt="logo" />
        </g-link>
        <g-link v-else to="/">
          <g-image
            src="@/assets/images/logo_light_mode.svg"
            class="w-40"
            alt="logo"
          />
        </g-link>
      </template>
      <template v-slot:switcher>
        <li class="mr-8 mb-6 lg:mb-0">
          <theme-switcher :theme="theme" @themeChanged="updateTheme" />
        </li>
      </template>
    </Header>
    <div class="flex-grow">
      <slot />
    </div>
    <Footer :theme="theme" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeSwitcher from "../components/ThemeSwitcher";
export default {
  components: {
    Header,
    Footer,
    ThemeSwitcher,
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "sepia";
  },
  data() {
    return {
      theme: "",
    };
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
  },
};
</script>
