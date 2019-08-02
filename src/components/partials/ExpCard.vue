<template>
  <li class="expcard" data-cy="expcard">
    <svg
      class="ion-ios-circle-filled text-copy-primary"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <circle cx="12" cy="12" r="12" fill="#3182CE" />
    </svg>
    <div class="expcard__title bg-blue-600">
      <p>{{title}}</p>
    </div>
    <div class="expcard__text">
      <p class="expcard__location">{{location}}</p>
      <p class="expcard__date">{{date}}</p>
      <p class="expcard__copy">{{text}}</p>
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
      required: false
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