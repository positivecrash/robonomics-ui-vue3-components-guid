<template>
    <h1>Icons</h1>

    <guide-section
      :title = "'Вступление'"
    >
      <p>Иконки из бесплатного набора <b>Font Awesome Solid</b>, все доступные иконки <a href="https://fontawesome.com/icons" target="_blank">здесь</a>. Включены в библиотеку выборочно, можно делать запрос на добавление новых иконок.</p>
      <pre v-highlightjs><code class="html">&lt;font-awesome-icon  icon="icon-name" /&gt;</code></pre>
    </guide-section>

    <div class="grid-8">
        <div class="item">
            <font-awesome-icon  icon="gear" class="icon" />
            <p>gear</p>
        </div>
        <div class="item">
            <font-awesome-icon  icon="house" class="icon" />
            <p>house</p>
        </div>
        <div class="item">
            <font-awesome-icon  icon="arrow-up-right-from-square" class="icon" />
            <p>arrow-up-right-from-square</p>
        </div>
        <div class="item">
            <font-awesome-icon  icon="cloud" class="icon" />
            <p>cloud</p>
        </div>
    </div>
</template>

<script>
import GuideSection from '@/components/GuideSection.vue'
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Icons',

  components: {
    GuideSection
  },
})

</script>

<style scoped>
    .icon {
        font-size: 200%;
    }

    .item {
        text-align: center;
    }
</style>