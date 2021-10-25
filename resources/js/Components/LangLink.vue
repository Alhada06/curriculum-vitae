<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link,
    },

    props: ['href', 'active'],

    computed: {
        classes() {
            return this.active
                ? 'inline-flex items-center px-1 pt-1 uppercase border-b-2 border-white text-sm font-medium leading-5 text-white focus:outline-none focus:border-white transition  duration-150 ease-in-out'
                : 'inline-flex items-center px-1 pt-1 uppercase border-b-2 border-transparent text-sm font-medium leading-5 text-white hover:text-gray-200  focus:outline-none focus:text-white focus:border-white transition duration-150 ease-in-out'
        }
    }
}
</script>
