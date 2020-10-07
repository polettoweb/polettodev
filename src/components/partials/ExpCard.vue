<template>
  <li class="expcard" data-cy="expcard">
    <svg
      class="dot"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <circle cx="12" cy="12" r="12" fill="var(--text-copy-secondary)" />
    </svg>
    <div class="expcard__title text-background-primary bg-copy-secondary p-5">
      <p class="font-bold text-lg">{{title}}</p>
    </div>
    <div class="w-full py-5 px-10 h-auto">
      <p>{{company}} - {{location}}</p>
      <p class="pb-3 font-bold">{{date}}</p>
      <p class="pb-3">{{text}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ExpCard',
  props: {
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>