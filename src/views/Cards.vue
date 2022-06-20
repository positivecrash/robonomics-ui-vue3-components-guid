<template>
    <h1>Cards</h1>

    <guide-section
      :title = "'Loading'"
      :code = "code1" 
    >
       <robo-card loading>
           <robo-card-section>content</robo-card-section>
        </robo-card>
    </guide-section>

    <guide-section
      :title = "'Progress %'"
      :code = "code2"
    >
       <robo-card progress="35">
           <robo-card-section>content, progress 35%</robo-card-section>
        </robo-card>

    </guide-section>

    <guide-section
      :title = "'Разное использование'"
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
        <label>
            <select v-model="colorBack">
              <option value="light">light</option>
              <option value="dark">dark</option>
              <option value="lightblue">lightblue</option>
            </select>
        </label>
        <br/>
        <label>
            <input type="checkbox" v-model="image" />
            image
        </label>
        <br/>
        <label v-if="image">
            backPosition:
            <input type="text" v-model="backPosition" />
        </label>
        <label v-if="image">
            backRepeat:
            <input type="text" v-model="backRepeat" />
        </label>
        <label v-if="image">
            backSize
            <input type="text" v-model="backSize" />
        </label>
    </section>
    <br/>

       <robo-card :outlined="outlined" :disabled="disabled" :loading="loading" :backImage="imageSrc" :backColor="colorBack" :backPosition="backPosition" :backRepeat="backRepeat" :backSize="backSize">
           <robo-card-label>
               <robo-card-label-section>Label</robo-card-label-section>
               <robo-card-label-section status="ok">Status</robo-card-label-section>
               <robo-card-label-section info>Here is some tip</robo-card-label-section>
               <robo-card-label-section :selectOptions="['Option 1', 'Option 2']" selectName="example" selectModel="Option 1" />
            </robo-card-label>

           <robo-card-section>
               <robo-card-title>Section</robo-card-title>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </robo-card-section>

           <robo-card-section>
               <robo-card-title>Section title size 1</robo-card-title>
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
        <td>backColor</td>
        <td>String</td>
        <td></td>
        <td>'light'</td>
        <td>'light', 'dark', 'lightblue'</td>
        <td>Цвет фона. Не актуально для 'outlined'</td>
      </tr>
      <tr>
        <td>backImage</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>Путь до фонового изображения</td>
      </tr>
      <tr>
        <td>backPosition</td>
        <td>String</td>
        <td></td>
        <td>'100% 100%'</td>
        <td>Значения для css свойства 'background-position'</td>
        <td>Расположение фонового изображения</td>
      </tr>
      <tr>
        <td>backRepeat</td>
        <td>String</td>
        <td></td>
        <td>'no-repeat'</td>
        <td>'no-repeat', 'repeat-x', 'repeat-y', 'repeat', 'space'</td>
        <td>Расположение фонового изображения</td>
      </tr>
      <tr>
        <td>backSize</td>
        <td>String</td>
        <td></td>
        <td>'auto'</td>
        <td>'contain', 'cover', 'auto'</td>
        <td>Масштабирование фонового изображения</td>
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
        <td>outlined</td>
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
    </Props>
      
    </guide-section>


    <guide-section
      :title = "'Props for robo-card-label-section'"
    >

    <Props>
      <tr>
        <td>info</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Подсказка. В теге можно писать всё, что угодно, но лучше ограничиваться текстом не больше в несколько предложений.</td>
      </tr>
      <tr>
        <td>selectModel</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>v-model for select</td>
      </tr>
      <tr>
        <td>selectName</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>Тэг 'name' для селекта</td>
      </tr>
      <tr>
        <td>selectOptions</td>
        <td>Array</td>
        <td></td>
        <td>null</td>
        <td>['Option 1', 'Option 2']</td>
        <td>Возможность выбора каких-то опций (например, источник данных для даталога)</td>
      </tr>
      <tr>
        <td>status</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td>'ok', 'error', 'na'</td>
        <td>Сейчас различие в цветах. Можно использовать для статусов устройств и тп.</td>
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


    <guide-section
      :title = "'Props for robo-card-section'"
    >

    <Props>
      <tr>
        <td>maxWidth</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td>любое css значение для max-width</td>
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
            colorBack: 'light',
            image: false,
            backSize: 'contain',
            backRepeat: 'no-repeat',
            backPosition: '100% 0',
            imageCode: '',
            colorCode: ' :backColor="light"'
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
        image: function() {
            if( this.image ) {
                this.imageCode = ' :backImage="' + this.imageSrc + '" :backColor="' + this.colorBack + '" :backPosition="' + this.backPosition + '" :backRepeat="' + this.backRepeat + '" :backSize="' + this.backSize + '"' 
            } else {
                this.imageCode = ''
            }
        },

        colorBack: function() {
          if( this.colorBack ) {
                this.colorCode = ` :backColor="${this.colorBack}"`
            } else {
                this.colorCode = ''
            }
        }
    },

    computed: {
        code1: function() { return '<robo-card loading>\n' +
        '\t<robo-card-section>\n' +
        '\t\tcontent\n' +
        '\t</robo-card-section>\n' +
        '</robo-card>' },
        code2: function() { return '<robo-card progress="35">\n' +
        '\t<robo-card-section>\n' +
        '\t\tcontent, progress 35%\n' +
        '\t</robo-card-section>\n' +
        '</robo-card>' },
        code3: function() {
            return '<robo-card' + this.outlineSec + this.disabledSec + this.loadingSec + this.imageCode + this.colorCode + '>\n' +
                '\t<robo-card-label>\n'+
                    '\t\t<robo-card-label-section>Label</robo-card-label-section>\n'+
                    '\t\t<robo-card-label-section status="ok">Status</robo-card-label-section>\n'+
                    '\t\t<robo-card-label-section info>Here is some tip</robo-card-label-section>\n'+
                    '\t\t<robo-card-label-section :select="[' + `'` + 'Option 1' + `'` + ', ' + `'` + 'Option 2' + `'` + ']" selectName="example" selectModel="Option 1"/>\n'+
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
        },

        imageSrc() {
          if(this.image) {
            return 'images/card-back-sample.png'
          } else {
            return null
          }
        }
    }
})
</script>
