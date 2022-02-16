<template>
    <section class="border">
        <h2 v-if="title">{{title}}</h2>
        
        <section><slot></slot></section>
        
        <template v-if="code">
            <details>
                <summary>Исходный код</summary>
                <pre v-highlightjs><code class="javascript">{{code}}</code></pre>
            </details>
        </template>
    </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GuideSection',

  props: {
    title: {
      type: String,
      default: null
    },
    code: {
      type: String,
      default: null
    }
  },

//   setup(props) {
//       const highlighter = () => {
//           if(props.code) {
//               return highlight(props.code, languages.html);
//           }
//       }

//       return { highlighter }
//   }
})
</script>

<style scoped>
    .border {
        border: 1px solid var(--color-gray-light);
        padding: var(--space)
    }

    details summary {
        cursor: pointer;
    }
</style>