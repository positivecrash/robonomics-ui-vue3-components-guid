<template>
<details v-if="example">
  <summary>{{title}}</summary>
  <pre v-highlightjs>
    <code class="javascript">
import { 
{{components}}
} from 'robonomics-ui'

export default {
  components: {
  {{components}}
  }
}
    </code>
</pre>
</details>

<div v-if="!example">
  <h2>{{title}}</h2>
  <pre v-highlightjs>
    <code class="javascript">
import { 
{{components}}
} from 'robonomics-ui'

export default {
  components: {
  {{components}}
  }
}
    </code>
</pre>
</div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UseComponent',

  props: {
    componentName: {
      type: String,
      default: null
    },
    example: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    title() {
      return this.example ? 'Локальное подключение для этого примера' : 'Локальное подключение'
    },
    components() {
      let string = '\t' + this.componentName
      string = string.replace(/,/g, ',\n')
      string = string.replace(/ /g, '\t')
      return string
    }
  }
})
</script>

<style scoped>
  details {
    margin-top: var(--space);
    margin-bottom: var(--space);
  }
  summary { cursor: pointer;}
</style>