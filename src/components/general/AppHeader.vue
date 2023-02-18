<template>
  <header>
    <nav>
      <nuxt-link
        v-for="(item, i) in navItems"
        :key="i"
        :to="item.slug"
      >
        {{ item.title }}
      </nuxt-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface NavItem {
  title: string
  slug: string
}

const navItems = ref<NavItem[]>([
  {
    title: 'Login',
    slug: 'auth',
  },
  {
    title: 'Registration',
    slug: 'auth/registration',
  },
]);
</script>
