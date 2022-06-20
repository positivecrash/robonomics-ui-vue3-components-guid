<template>
    <h1>Loaders</h1>

    <guide-section
      :title = "'Использование: лоадер по умолчанию'"
      :code = "code1" 
    >
        <robo-loader />
    </guide-section>

    <guide-section
      :title = "'Оформление: изменение размера'"
      :code = "code2" 
    >
        <p>При необходимости лоадер можно изменять в размере</p>
        <robo-loader style="width: 4rem" />
    </guide-section>

    <guide-section
      :title = "'Оформление: изменение цвета'"
      :code = "code3" 
    >
        <p>Можно менять цвет лоадера. Inline тег style использован для демонстрации.</p>
        <robo-loader color="crimson" /> <robo-loader color="#3333CE" />
    </guide-section>

    <guide-section
      :title = "'Props'"
    >

    <Props>
      <tr>
        <td>type</td>
        <td>String</td>
        <td></td>
        <td>'default'</td>
        <td><code>default</code></td>
        <td>
          <p>Тип лоадера, пока только один</p>
        </td>
      </tr>
      <tr>
        <td>color</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>
          <p>Цвет. Принимает код цвета или любое css-значение цвета.</p>
        </td>
      </tr>
    </Props>
      
    </guide-section>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Loaders',

  data() {
    return {
      code1: '<robo-loader />',
      code2: '<robo-loader style="width: 4rem" />',
      code3: '<robo-loader color="crimson" /> <robo-loader color="#3333CE" />',
    }
  },
})
</script>