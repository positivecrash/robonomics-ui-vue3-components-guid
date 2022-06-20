<template>
  <component :is="layout" />
</template>

<script>
import Guide from "@/layouts/Guide";
import Example from "@/layouts/Example";

export default {
  components: {
    Guide,
    Example,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = "Guide" // this is default layout if route meta is not set
      }
    },
  },

  created() {
		// Setting Language in the HTML document
		document.documentElement.setAttribute('lang', 'en')
	}
};
</script>