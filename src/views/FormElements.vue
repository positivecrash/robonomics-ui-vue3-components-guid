<template>
    <h1>Form elements</h1>

    <h2>Select</h2>

    <use-component componentName="RoboSelect"/>

    <guide-section
      :title = "'Пример select'"
      :code = "code1" 
    >
        <robo-select :options="['Option 1', 'Option 2']" :name="'example'" />
    </guide-section>



    <guide-section
      :title = "'Props for robo-select'"
    >

    <Props>
      <tr>
        <td>name</td>
        <td>String</td>
        <td>Yes</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>options</td>
        <td>Array</td>
        <td>Yes</td>
        <td>null</td>
        <td>[]</td>
        <td></td>
      </tr>
    </Props>
      
    </guide-section>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'FormElements',

  data() {
    return {
      code1: "<robo-select :options=\u0022['Option 1', 'Option 2']\u0022 :name=\u0022'example'\u0022/>"
    }
  },
})
</script>