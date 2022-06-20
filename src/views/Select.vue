<template>
    <h1>Select</h1>

    <guide-section
      :title = "'Использование'"
      :code = "code1" 
    >
        <robo-select :options="options1" :values="values1" name="example1" v-model="modelExample1" />
        <p>v-model = {{modelExample1}}</p>
    </guide-section>

    <guide-section
      :title = "'Оформление'"
      :code = "code2" 
    >
        <section>
            <label>
                <input type="checkbox" name="optClean" v-model="optClean" />
                clean
            </label>
            <label>
                <input type="checkbox" name="optBlock" v-model="optBlock" />
                block
            </label>
            <label>
                <input type="checkbox" name="optDisabled" v-model="optDisabled" />
                disabled
            </label>
        </section>
        <br/>

        <robo-select :options="options1" name="example2" :clean="optClean" :block="optBlock" :values="values1" v-model="modelExample1" :disabled="optDisabled" />
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
        <td>Значение для атрибута 'name' элемента 'select'</td>
      </tr>
      <tr>
        <td>options</td>
        <td>Array</td>
        <td>Yes</td>
        <td>null</td>
        <td>['String 1', 'String 2']</td>
        <td>Варианты для опций, которые показываются пользователю. Если нет свойства 'values' (см. ниже), то из 'options' формируются значения атрибута 'value'.</td>
      </tr>
      <tr>
        <td>values</td>
        <td>Array</td>
        <td></td>
        <td>null</td>
        <td>['String1', 'String2']</td>
        <td>Значения атрибута 'value'. Должно соотноситься с массивом 'options' (для options[0] будет выведено values[0])</td>
      </tr>
      <tr>
        <td>clean</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Вариант оформления</td>
      </tr>
      <tr>
        <td>block</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Вариант оформления</td>
      </tr>
      <tr>
        <td>v-model</td>
        <td>String</td>
        <td></td>
        <td></td>
        <td></td>
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
      options1: ['Option Example 1', 'Option Example 2'],
      values1: ['optionValueExample1', 'optionValueExample2'],
      modelExample1: null,
      // code1: "<robo-select :options=\u0022['Option 1', 'Option 2']\u0022 :name=\u0022'example'\u0022/>"
      code1: "<robo-select :options='options1' :values='values1' name='example1' v-model='modelExample1' />\n\n" +
        "<script>\n" +
          "\timport { defineComponent } from 'vue'\n" +
          "\texport default defineComponent ({\n" +
            "\t\tdata() {\n" +
              "\t\t\treturn {\n" +
                "\t\t\t\toptions1: ['Option Example 1', 'Option Example 2'],\n" +
                "\t\t\t\tvalues1: ['optionValueExample1', 'optionValueExample2'],\n" +
                "\t\t\t\tmodelExample1: null\n" +
              "\t\t\t}\n" +
            "\t\t},\n" +
              "\t\tcreated(){\n" +
                "\t\t\tif(this.values1.length > 0) {\n" +
                "\t\t\t\tthis.modelExample1 = this.values1[0]\n" +
              "\t\t\t}\n" +
            "\t\t}\n" +
          "\t})\n" +
          "</srcipt>",
      optClean: false,
      optBlock: false,
      optDisabled: false,
      optCleanName: (this.optClean) ? ' clean' : '',
      optBlockName: (this.optBlock) ? ' block' : '',
      optDisabledName: (this.optDisabled) ? ' disabled' : '',
    }
  },

  watch: {
        optClean: function() {
            if( this.optClean ) {
                this.optCleanName = ' clean'
            } else {
                this.optCleanName = ''
            }
        },
        optBlock: function() {
            if( this.optBlock ) {
                this.optBlockName = ' block'
            } else {
                this.optBlockName = ''
            }
        },
        optDisabled: function() {
            if( this.optDisabled ) {
                this.optDisabledName = ' disabled'
            } else {
                this.optDisabledName = ''
            }
        },
    },
  
  created(){
    if(this.values1.length > 0) {
      this.modelExample1 = this.values1[0]
    }
  },

  computed: {
    code2: function() { 
      return '<robo-select :options="options1" name="example2"' + this.optCleanName + this.optBlockName + this.optDisabledName + ' />'
    }
  }
})
</script>