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
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Breadcrumbs',

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
            "\t{\n" +
              "\t\ttext: 'Devices',\n" +
              "\t\tactive: false,\n" +
              "\t\thref: '/devices',\n" +
            "\t},\n" +
            "\t{\n" +
              "\t\ttext: 'Device 1',\n" +
              "\t\tactive: true,\n" +
              "\t\thref: '/device-1',\n" +
            "\t},\n" +
          "]\n"
      }
  },
})
</script>