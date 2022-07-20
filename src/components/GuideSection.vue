<template>
    <section :class="section ? 'section' : ''">
        <component :is="section ? 'h2' : 'h4'" v-if="title">{{title}}</component>
        
        <component :is="section ? 'section' : 'div'"><slot></slot></component>
        
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
    },
    section: {
      type: Boolean,
      default: true
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
    /* .section {
        border: 1px solid var(--color-gray);
        padding: var(--space)
    } */

    /* .section:not(:last-child) {
      margin-bottom: calc(var(--space) * 5);
    } */

    details summary {
        cursor: pointer;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    h4 {
      margin: 0;
    }
</style>