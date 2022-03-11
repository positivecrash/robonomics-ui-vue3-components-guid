<template>
    <h1>Cards</h1>

    <guide-section
      :title = "'Вступление'"
    >
      <p>Разные секции.</p>
    </guide-section>

    <use-component componentName="RoboCard, RoboProgress, RoboCardTitle, RoboCardLabel, RoboCardLabelSection, RoboSelect"/>

    <guide-section
      :title = "'Loading'"
      :code = "code1" 
    >
       <robo-card loading disabled> content </robo-card>
    </guide-section>

    <guide-section
      :title = "'Progress %'"
      :code = "code2"
    >
       <robo-card progress="35"> content, progress 35% </robo-card>
    </guide-section>

    <guide-section
      :title = "'Составные части'"
      :code = "code3" 
    >
    
    <section>
        <label>
            <input type="checkbox" name="card-outline" v-model="outlined" />
            outlined
        </label>
        <label>
            <input type="checkbox" name="card-outline" v-model="disabled" />
            disabled
        </label>
        <label>
            <input type="checkbox" name="card-outline" v-model="loading" />
            loading
        </label>
    </section>
    <br/>

       <robo-card img-src="images/card-back-sample.png" :outlined="outlined" :disabled="disabled" :loading="loading">
           <robo-card-label>
               <robo-card-label-section>Label</robo-card-label-section>
               <robo-card-label-section status="ok">Status</robo-card-label-section>
               <robo-card-label-section info>Here is some tip</robo-card-label-section>
               <robo-card-label-section :select-options="['Option 1', 'Option 2']" :select-name="'example'" />
            </robo-card-label>

           <robo-card-section>
               <robo-card-title>Section</robo-card-title>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </robo-card-section>

           <robo-card-section>
               <robo-card-title>Section title</robo-card-title>
               <robo-card-title size="2">Section title size 2</robo-card-title>
               <robo-card-title size="3">Section title size 3</robo-card-title>
           </robo-card-section>

           <robo-card-section>
               <robo-button>Submit</robo-button>
           </robo-card-section>
       </robo-card>
    </guide-section>

    <guide-section
      :title = "'Props for robo-card'"
    >

    <Props>
      <tr>
        <td>outlined</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>loading</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>progress</td>
        <td>Number</td>
        <td></td>
        <td>null</td>
        <td>[0,100]</td>
        <td>0% - 100%</td>
      </tr>
      <tr>
        <td>img-src</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>Full path to image for background</td>
      </tr>
      <tr>
        <td>img-position</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td>
            <p>'right-botom'</p>
            <p>'right-top'</p>
            <p>'left-top'</p>
            <p>'left-bottom'</p>
        </td>
        <td></td>
      </tr>
    </Props>
      
    </guide-section>


    <guide-section
      :title = "'Props for robo-card-label-section'"
    >

    <Props>
      <tr>
        <td>status</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td>'ok', 'error', 'na'</td>
        <td>Сейчас различие в цветах. Можно использовать для статусов устройств и тп.</td>
      </tr>
      <tr>
        <td>info</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Подсказка. В теге можно писать всё, что угодно, но лучше ограничиваться текстом не больше в несколько предложений.</td>
      </tr>
      <tr>
        <td>select-options</td>
        <td>Array</td>
        <td></td>
        <td>null</td>
        <td>['Option 1', 'Option 2']</td>
        <td>Возможность выбора каких-то опций (например, источник данных для даталога)</td>
      </tr>
      <tr>
        <td>select-name</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>Тэг 'name' для селекта</td>
      </tr>
    </Props>
      
    </guide-section>


     <guide-section
      :title = "'Props for robo-card-title'"
    >

    <Props>
      <tr>
        <td>size</td>
        <td>Number</td>
        <td></td>
        <td>1</td>
        <td>1,2,3</td>
        <td></td>
      </tr>
    </Props>
      
    </guide-section>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Cards',

    data() {
        return {
            outlined: false,
            disabled: false,
            loading: false,
            outlineSec: (this.outlined) ? ' outlined' : '',
            disabledSec: (this.disabled) ? ' disabled' : '',
            loadingSec: (this.loading) ? ' loading' : '',
        }
    },

    watch: {
        outlined: function() {
            if( this.outlined ) {
                this.outlineSec = ' outlined'
            } else {
                this.outlineSec = ''
            }
        },
        disabled: function() {
            if( this.disabled ) {
                this.disabledSec = ' disabled'
            } else {
                this.disabledSec = ''
            }
        },
        loading: function() {
            if( this.loading ) {
                this.loadingSec = ' loading'
            } else {
                this.loadingSec = ''
            }
        },
    },

    computed: {
        code1: function() { return '<robo-card loading> content </robo-card>' },
        code2: function() { return '<robo-card progress="35"> content, progress 35% </robo-card>' },
        code3: function() {
            return '<robo-card img-src="images/card-back-sample.png"' + this.outlineSec + this.disabledSec + this.loadingSec + '>\n' +
                '\t<robo-card-label>\n'+
                    '\t\t<robo-card-label-section>Label</robo-card-label-section>\n'+
                    '\t\t<robo-card-label-section status="ok">Status</robo-card-label-section>\n'+
                    '\t\t<robo-card-label-section info>Here is some tip</robo-card-label-section>\n'+
                    '\t\t<robo-card-label-section :select="[' + `'` + 'Option 1' + `'` + ', ' + `'` + 'Option 2' + `'` + ']" />\n'+
                    '\t</robo-card-label>\n'+
                    '\t<robo-card-section>\n'+
                        '\t\t<robo-card-title>Section</robo-card-title>\n'+
                        '\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n'+
                    '\t</robo-card-section>\n'+
                    '\t<robo-card-section>\n'+
                        '\t\t<robo-card-title>Section title</robo-card-title>\n'+
                        '\t\t<robo-card-title size="2">Section title size 2</robo-card-title>\n'+
                        '\t\t<robo-card-title size="3">Section title size 3</robo-card-title>\n'+
                    '\t</robo-card-section>\n'+
                    '\t<robo-card-section>\n'+
                        '\t\t<robo-button>Submit</robo-button>\n'+
                '\t</robo-card-section>\n'+
            '</robo-card>'
        }
    }
})
</script>
