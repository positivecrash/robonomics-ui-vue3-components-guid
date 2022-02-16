<template>
    <h1>Кнопки и ссылки как кнопки</h1>

    <guide-section
      :title = "'Вступление'"
    >
      <p>В дизайне даппа не получилось разграничить четко кнопки и ссылки. В некоторых местах нужны ссылки на вид как кнопки.</p>
      <p>Я постаралась в этом компоненте избавить тебя от головной боли "что использовать тут", просто ставь `href` если элемент должен переводить на другую страницу или скачивать файл (ниже примеры).</p>
    </guide-section>

    <use-component componentName="RoboButton"/>

    <guide-section
      :title = "'Использование: обычная <button>'"
      :code = "code1" 
    >
      <robo-button @click="methodExample1">Submit</robo-button>
      <p v-if="dataExample1"><b>Тест клика:</b> {{dataExample1}}</p>
    </guide-section>

    <guide-section
      :title = "'Оформление: основное'"
      :code = "code2" 
    >
      <robo-button>Button</robo-button>
    </guide-section>

    <guide-section
      :title = "'Оформление: успешная кнопка'"
      :code = "code3" 
    >
      <p>В основном нужна для обозначения успешного завершения после клика на кнопку.</p>
      <robo-button type="ok">Success button</robo-button>
    </guide-section>

    <guide-section
      :title = "'Оформление: кнопка, требующая бОльшего внимания'"
      :code = "code4" 
    >
      <p>Для опасных действий и около того.</p>
      <robo-button type="alarm">Alarm button</robo-button>
    </guide-section>

    <guide-section
      :title = "'Оформление: серая кнопка'"
      :code = "code5" 
    >
      <p>В основном для disabled неактивных состояний. Но это только цветовой вариант, ниже покажу функциональное использование.</p>
      <robo-button type="na">n/a button</robo-button>
    </guide-section>

    <guide-section
      :title = "'Оформление: outlined'"
      :code = "code6" 
    >
      <p>Рекомендую использовать "outlined" для ссылок или когда больше одного действия на страницу, а основное оформление для кнопок основного действия(типа submit одной главной формы на странице).</p>
      <robo-button outlined>Button</robo-button> <robo-button type="ok" outlined>Success button</robo-button> <robo-button type="alarm" outlined>Alarm button</robo-button> <robo-button type="na" outlined>n/a button</robo-button>
    </guide-section>

    <guide-section
      :title = "'Использование: disabled'"
      :code = "code7" 
    >
      <robo-button disabled="disabled">Save</robo-button> <robo-button disabled="success">Saved</robo-button> <robo-button disabled="error">Not saved</robo-button> <robo-button disabled="disabled" outlined>Save</robo-button> <robo-button disabled="success" outlined>Saved</robo-button> <robo-button disabled="error" outlined>Not saved</robo-button>
    </guide-section>

    <guide-section
      :title = "'Оформление: block'"
      :code = "code8" 
    >
      <p>Кнопка во всю ширину родительского контейнера</p>
      <robo-button block>Button</robo-button>
    </guide-section>

    <guide-section
      :title = "'Оформление: размеры'"
      :code = "code9" 
    >
      <robo-button size="small">Button</robo-button> <robo-button>Button</robo-button> <robo-button size="big">Button</robo-button>
    </guide-section>

    <guide-section
      :title = "'Оформление: составная кнопка'"
      :code = "code10" 
    >
      <p>Одна кнопка, но составная без функицонала, просто оформление.</p>
      <robo-button right=".JSON" outlined>Download all</robo-button>
    </guide-section>

    <guide-section
      :title = "'Использование: loader в кнопках'"
      :code = "code11" 
    >
      <p>Когда включаешь свойство loading, кнопка автоматически становится disabled</p>
      <robo-button loading>Button text</robo-button> <robo-button loading outlined>Button text</robo-button>
    </guide-section>

    <guide-section
      :title = "'Использование: button как ссылка'"
      :code = "code12" 
    >
      <p>Нужно просто указать свойство `href`</p>
      <robo-button href="https://robonomics.network">Go</robo-button>
    </guide-section>

</template>

<script>
import GuideSection from '@/components/GuideSection.vue'
import UseComponent from '@/components/UseComponent.vue'
import { defineComponent } from 'vue'

// import { RoboButton } from 'robonomics-ui'

export default defineComponent ({
  name: 'Buttons',

  components: {
    GuideSection,
    // RoboButton,
    UseComponent
  },

  data() {
    return {
      dataExample1: null,
      code1: '<robo-button @click="methodExample1">Submit</robo-button>',
      code2: '<robo-button>Button</robo-button>',
      code3: '<robo-button type="ok">Success button</robo-button>',
      code4: '<robo-button type="alarm">Alarm button</robo-button>',
      code5: '<robo-button type="na">n/a button</robo-button>',
      code6: '<robo-button outlined>Button</robo-button> <robo-button type="ok" outlined>Success button</robo-button> <robo-button type="alarm" outlined>Alarm button</robo-button> <robo-button type="na" outlined>n/a button</robo-button>',
      code7: '<robo-button disabled="disabled">Save</robo-button> <robo-button disabled="success">Saved</robo-button> <robo-button disabled="error">Not saved</robo-button> <robo-button disabled="disabled" outlined>Save</robo-button> <robo-button disabled="success" outlined>Saved</robo-button> <robo-button disabled="error" outlined>Not saved</robo-button>',
      code8: '<robo-button block>Button</robo-button>',
      code9: '<robo-button size="small">Button</robo-button> <robo-button>Button</robo-button> <robo-button size="big">Button</robo-button>',
      code10: '<robo-button right=".JSON" outlined>Download all</robo-button>',
      code11: '<robo-button loading>Button text</robo-button> <robo-button loading outlined>Button text</robo-button>',
      code12: 'robo-button href="https://robonomics.network">Go</robo-button>',
    }
  },

  methods: {
    methodExample1(event){
      this.dataExample1 = event.target.closest('button').tagName + ' clicked'
    }
  }

  // setup() {
  //   const methodExample1 = (event) => {
  //       console.log(event.target.tagName + ' clicked')
  //   }

  //   return { methodExample1 }
  // }
})
</script>

// <script setup>
//   import GuideSection from '@/components/GuideSection.vue'
//   import { RoboButton } from 'robonomics-ui'

//   const
//     dataExample1 = null,
//     code1 = '<robo-button @click="methodExample1">Submit</robo-button>'

//   function methodExample1(event){
//     this.dataExample1 = event.target.closest('button').tagName + ' clicked'
//   }
// </script>