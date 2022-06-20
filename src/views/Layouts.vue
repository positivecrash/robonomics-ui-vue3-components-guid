<template>
    <h1>Layouts</h1>

    <guide-section
      :title = "'Layout basic'"
      :code = "code1"
    >
        <p>Общая обёртка для контента. Без опций даёт боковые отступы. Можно использовать многогократно на странице.</p>

        <robo-layout>
          <robo-layout-section class="example-section">Some content</robo-layout-section>
        </robo-layout>

    </guide-section>


    <guide-section
      :title = "'Layout for page'"
      :code = "code2"
    >
        <p>С определёнными опциями – обёртка для страницы c подвалом, прижатым вниз.</p>

        <robo-layout footer screen class="example-section">
          <robo-layout-section>Some content</robo-layout-section>
          <robo-layout-footer>
              <robo-layout-section>
                  footer
              </robo-layout-section>
          </robo-layout-footer>
        </robo-layout>

    </guide-section>


    <guide-section
      :title = "'Props for robo-layout'"
    >

    <Props>
      <tr>
        <td>screen</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>
          <p>Слайд на всю высоту экрана (если контента больше, то просто обычная страница).</p>
        </td>
      </tr>
      <tr>
        <td>footer</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>
          <p>Эта опция сигнализирует, что внутри контейнера есть футер, который нужно прижать к низу блока/страницы</p>
        </td>
      </tr>
    </Props>
      
    </guide-section>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Layouts',

  data() {
    return {
      code1: '<robo-layout>\n'+
          '\t<robo-layout-section class="example-section">Some content</robo-layout-section>\n'+
        '</robo-layout>',
      code2: '<robo-layout footer screen class="example-section">\n' +
          '\t<robo-layout-section>Some content</robo-layout-section>\n' +
          '\t<robo-layout-footer>\n' +
              '\t\t<robo-layout-section>footer</robo-layout-section>\n' +
          '\t</robo-layout-footer>\n' +
        '</robo-layout>\n'
    }
  },
})
</script>

<style scoped>
  .example-section {
    background-color: rgb(212, 211, 221);
  }
</style>