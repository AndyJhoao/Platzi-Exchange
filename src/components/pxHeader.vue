<template>
  <header class="shadow w-screen">
    <nav>
      <nav
        class="flex intems-center justify-between flex-wrap bg-green-400 p-6"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <pxIcon class="mr-2"></pxIcon>
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >PlatziExchange</router-link
          >
          <div
            class="hidden sm:block w-full block flex-grow lg-flex lg:items-center lg:w-auto"
          >
            <div class="ml-4 text-sm lg:flex-grow">
              <router-link
                v-for="l in links"
                :key="l.title"
                :to="l.to"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >{{ l.title }}</router-link
              >
            </div>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import pxIcon from '@/components/pxIcon'
export default {
  name: 'pxHeader',
  components: {
    pxIcon
  },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
