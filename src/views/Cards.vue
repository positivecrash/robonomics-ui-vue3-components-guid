<template>
    <h1>Cards</h1>

    <guide-section
      :title = "'Вступление'"
    >
      <p>Разные секции.</p>
    </guide-section>

    <use-component componentName="RoboCard, RoboProgress, RoboCardTitle, RoboCardLabel"/>

    <guide-section
      :title = "'Loading'"
      :code = "code1" 
    >
       <robo-card loading> content </robo-card>
    </guide-section>

    <guide-section
      :title = "'Progress %'"
      :code = "code2" 
    >
       <robo-card progress="35"> content, progress 35% </robo-card>
    </guide-section>

    <guide-section
      :title = "'Составные части, solid section'"
      :code = "code3" 
    >
       <robo-card>
           <robo-card-label>
               <robo-card-label-section>Label</robo-card-label-section>
               <robo-card-label-section status="ok">Status</robo-card-label-section>
               <robo-card-label-section info>Here is some tip</robo-card-label-section>
               <robo-card-label-section :select="['Option 1', 'Option 2']" />
            </robo-card-label>

           <robo-card-section>
               <robo-card-title>Section title</robo-card-title>
               <robo-card-title size="2">Section title size 2</robo-card-title>
               <robo-card-title size="3">Section title size 3</robo-card-title>
           </robo-card-section>
       </robo-card>
    </guide-section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Cards',

    data() {
    return {
      code1: '<robo-card loading> content </robo-card>',
      code2: '<robo-card progress="35"> content, progress 35% </robo-card>',
    }
  },
})
</script>
