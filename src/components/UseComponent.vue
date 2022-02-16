<template>
    <guide-section
      :title = "'Локальное подключение'"
    >

<pre v-highlightjs>
<code class="javascript">
import { {{componentName}} } from 'robonomics-ui'
       
export default {
    components: { {{componentName}} }
}
</code>
</pre>
     
    </guide-section>
</template>

<script>
import { defineComponent } from 'vue'
import GuideSection from '@/components/GuideSection.vue'

export default defineComponent({
  name: 'UseComponent',

  components: {
    GuideSection
  },

  props: {
    componentName: {
      type: String,
      default: null
    }
  }
})
</script>