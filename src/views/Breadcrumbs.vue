<template>
    <h1>Breadcrumbs</h1>
    <guide-section
      :title = "'Вступление'"
    >
      <p>Предполагается по дизайну, что крошки одновременно выполняют функцию заголовка для страницы.</p>
    </guide-section>

    <use-component componentName="RoboBreadcrumbs"/>

    <guide-section
      :title = "'Основное использование'"
      :code = "code1" 
    >
        <p>В `items` передаем список предшествующих и текущей ссылки.</p>

        <robo-breadcrumbs :items="items" />
    </guide-section>

    <guide-section
      :title = "'Props'"
    >

    <Props>
      <tr>
        <td>items</td>
        <td>Object</td>
        <td>true</td>
        <td></td>
        <td>
          <pre v-highlightjs>
            <code class="javascript">
items: [
  {
    text: String,
    active: Boolean,
    href: String
  }
]
            </code>
          </pre>
        </td>
        <td>
          <p>Список разделов, включая текущий.</p>
          <p>Для всех, включая текущую страницу, необходимо указывать ссылку <code>href</code></p>
        </td>
      </tr>
    </Props>
      
    </guide-section>

</template>

<script>
import GuideSection from '@/components/GuideSection.vue'
import UseComponent from '@/components/UseComponent.vue'
import Props from '@/components/Props.vue'
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Breadcrumbs',

  components: {
    GuideSection,
    UseComponent,
    Props
  },

  data() {
    return {
      items: [
        {
          text: 'Devices',
          active: false,
          href: 'devices',
        },
        {
          text: 'Device 1',
          active: true,
          href: 'device-1',
        },
      ],
      code1: 
        "<robo-breadcrumbs :items='items' />\n\n" +
        "items: [\n" +
            "{\n" +
              "text: 'Devices',\n" +
              "active: false,\n" +
              "href: '/devices',\n" +
            "},\n" +
            "{\n" +
              "text: 'Device 1',\n" +
              "active: true,\n" +
              "href: '/device-1',\n" +
            "},\n" +
          "]\n"
      }
  },
})
</script>