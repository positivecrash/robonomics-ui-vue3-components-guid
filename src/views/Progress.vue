<template>
    <h1>Progress bar</h1>

    <use-component componentName="RoboProgress"/>

    <guide-section
      :title = "'Loading infinite line'"
      :code = "code1" 
    >

        <robo-progress />
    </guide-section>

    <guide-section
      :title = "'Loading %'"
      :code = "code2" 
    >

        <robo-progress progress="80" />
    </guide-section>

    <guide-section
      :title = "'Props'"
    >

    <Props>
      <tr>
        <td>progress</td>
        <td>Number</td>
        <td></td>
        <td>null</td>
        <td>[0,100]</td>
        <td>
          <p>Для указания прогресса в процентах</p>
        </td>
      </tr>
    </Props>
      
    </guide-section>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Progress',

  data() {
    return {
      code1: "<robo-progress />",
      code2: '<robo-progress progress="80" />',
    }
  },
})
</script>