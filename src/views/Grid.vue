<template>
    <h1>Grid</h1>

    <guide-section
      :title = "'Равнозначные столбцы и разные опции'"
      :code = "code1"
    >

      <section>
            <label>
                <select v-model="columnsRepeat">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                columns-repeat
            </label>
            <label>
                <select v-model="gap">
                  <option value="x0">x0</option>
                  <option value="x1">x1</option>
                  <option value="x2">x2</option>
                  <option value="x4">x4</option>
                </select>
                gap
            </label>
            <label>
                <input type="checkbox" name="screen" v-model="screen" />
                screen
            </label>
      </section>
      <br/>

      <robo-grid class="example" :screen="screen" :gap="gap" :columnsRepeat="columnsRepeat">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </robo-grid>
  </guide-section>

  <guide-section
      :title = "'Столбцы кастом'"
      :code = "code2"
    >

    <p>Любые значение в рамках свойства <a href="https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns" target="_blank">grid-template-columns</a></p>

      <section>
            <label>
                <input type="text" name="columns" v-model="columns" />
                columns
            </label>
      </section>
      <br/>

      <robo-grid class="example" :columns="columns">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </robo-grid>
  </guide-section>


  <guide-section
      :title = "'Cтроки'"
      :code = "code3"
    >

      <section>
            <label>
                <input type="text" name="rows" v-model="rows" />
                rows
            </label>
      </section>
      <br/>

      <robo-grid class="example" :rows="rows">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </robo-grid>
  </guide-section>


  <guide-section
      :title = "'Шаблоны'"
      :code = "code4"
    >

    <p>Для сайдбаров на странице</p>

      <section>
            <label>
                <select  v-model="columnsTemplate">
                  <option value="left-center">left-center</option>
                  <option value="left-center-right">left-center-right</option>
                </select>
                columns-template
            </label>
      </section>
      <br/>

      <robo-grid class="example" :columnsTemplate="columnsTemplate">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </robo-grid>
  </guide-section>

  <guide-section
      :title = "'Обработка мобильных общая'"
      :code = "code5"
    >

    <p>Для узких мониторов можно указать как будут переноситься столбцы. Чтобы увидеть действие свойства, нужно сузить экран до размера меньше 700px</p>

      <section>
            <label>
                <select  v-model="mediaMobile">
                  <option value="none">none</option>
                  <option value="transfer">transfer</option>
                </select>
                media-mobile
            </label>
      </section>
      <br/>

      <robo-grid class="example" columnsRepeat="3" :mediaMobile="mediaMobile">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </robo-grid>
  </guide-section>

  <guide-section
      :title = "'Обработка мобильных более тонкая настройка'"
      :code = "code6"
    >

    <p>Можно указать отдельно для части сетки, как обрабатывать в мобильных: перенести, спрятать совсем, спрятать и открывать по иконке. Чтобы увидеть действие свойства, нужно сузить экран до размера меньше 700px</p>

      <section>
            <label>
                <select v-model="mediaMobileItem">
                  <option value="transfer">transfer</option>
                  <option value="collapse-right">collapse-right</option>
                  <option value="collapse-left">collapse-left</option>
                  <option value="hide">hide</option>
                </select>
                media-mobile for robo-grid-item
            </label>
            <br/>
            <label v-if="mediaMobileItem === 'collapse-left' || mediaMobileItem === 'collapse-right'">
                <input type="text" name="rows" v-model="mediaMobileIcon" />
                icon for collapse
            </label>
      </section>
      <br/>

      <robo-grid class="example" columnsRepeat="3" :mediaMobile="mediaMobile">
          <robo-grid-item :mediaMobile="mediaMobileItem" :iconCollapse="mediaMobileIcon">robo-grid-item content</robo-grid-item>
      </robo-grid>
  </guide-section>
  


  <guide-section
      :title = "'Выравнивание контента'"
      :code = "code6"
    >

    <h5>1. Общее выравнивание для всей сетки</h5>

      <section>
            <label>
                <select  v-model="valign">
                  <option value="top">top</option>
                  <option value="center">center</option>
                  <option value="bottom">bottom</option>
                  <option value="stretch">stretch</option>
                </select>
                вертикально
            </label><br/>
            <label>
                <select  v-model="align">
                  <option value="left">left</option>
                  <option value="center">center</option>
                  <option value="right">right</option>
                  <option value="stretch">stretch</option>
                  <option value="fit-content">fit-content</option>
                  <option value="space-between">space-between</option>
                </select>
                горизонтально
            </label>
      </section>
      <br/>

      <robo-grid class="example" columnsRepeat="3" :mediaMobile="mediaMobile" :valign="valign" :align="align">
          <div>Section 1</div>
          <div>Section 2</div>
          <div style="height: 200px">Section 3</div>
          <div>Section 4</div>
          <div>Section 5</div>
          <div style="height: 100px">Section 6</div>
      </robo-grid>


      <h5>2. Выравнивание внутри конкретного элемента</h5>

      <section>
            <label>
                <select  v-model="valignItem">
                  <option value="top">top</option>
                  <option value="center">center</option>
                  <option value="bottom">bottom</option>
                  <option value="stretch">stretch</option>
                </select>
                вертикально
            </label><br/>
            <label>
                <select  v-model="alignItem">
                  <option value="left">left</option>
                  <option value="center">center</option>
                  <option value="right">right</option>
                  <option value="stretch">stretch</option>
                  <option value="fit-content">fit-content</option>
                  <option value="space-between">space-between</option>
                </select>
                горизонтально
            </label>
      </section>
      <br/>

      <robo-grid class="example" columnsRepeat="3" :mediaMobile="mediaMobile" valign="top" align="left">
          <robo-grid-item :valign="valignItem" :align="alignItem">Section 1</robo-grid-item>
          <robo-grid-item>Section 2</robo-grid-item>
          <robo-grid-item style="height: 200px">Section 3</robo-grid-item>
      </robo-grid>
  </guide-section>


    <guide-section
      :title = "'Props for robo-grid'"
    >

    <Props>
      <tr>
        <td>align</td>
        <td>String</td>
        <td></td>
        <td>'stretch'</td>
        <td>'left', 'center', 'right', 'stretch', 'fit-content', 'space-between'</td>
        <td>
          <p>Горизонтальное выравнивание</p>
        </td>
      </tr>
      <tr>
        <td>columns</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>
          <p>Вводится любое значение из доступных для css свойства <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns" target="_blank">grid-template-columns</a></p>
        </td>
      </tr>
      <tr>
        <td>columnsRepeat</td>
        <td>[Number, String]</td>
        <td></td>
        <td>null</td>
        <td>[1,2,3,4,5,6,7,8,9,10,11,12]</td>
        <td>
          <p>Количество колонок одинаковых по ширине</p>
        </td>
      </tr>
      <tr>
        <td>columnsTemplate</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td>'left-center', 'left-center-right'</td>
        <td>
          <p>Шаблон для страницы: левый сайдбар + контент или левый сайдбар + контент + правый сайдбар</p>
        </td>
      </tr>
      <tr>
        <td>flex</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>придать свойства flexbox</td>
      </tr>
      <tr>
        <td>gap</td>
        <td>String</td>
        <td></td>
        <td>'x2'</td>
        <td>'x0', 'x05', 'x1', 'x2', 'x4'</td>
        <td>Отступы внутри грида между колонками</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>String</td>
        <td></td>
        <td>'x2'</td>
        <td>'x0', 'x05', 'x1', 'x2', 'x4'</td>
        <td>Отступ самого грида</td>
      </tr>
      <tr>
        <td>mediaMobile</td>
        <td>String</td>
        <td></td>
        <td>'none'</td>
        <td>'transfer', 'none'</td>
        <td>
          <p>Варианты обработки для мобильных</p>
          <p>'transfer' - перенести всё</p>
          <p>'no-cols' - для лэйаута с сайдбарами</p>
          <p>'none' - скрыть всё</p>
        </td>
      </tr>
      <tr>
        <td>rows</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>
          <p>Вводится любое значение из доступных для css свойства <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows" target="_blank">grid-template-rows</a></p>
        </td>
      </tr>
      <tr>
        <td>screen</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>
          <p>Можно установить для сетки, чтобы блок растягивался минимум на высоту экрана (это сделано для основного лэйаута страницы, но можно и пользоваться при желании где понадобится).</p>
        </td>
      </tr>
      <tr>
        <td>valign</td>
        <td>String</td>
        <td></td>
        <td>'stretch'</td>
        <td>'top', 'center', 'bottom', 'stretch'</td>
        <td>
          <p>Вертикальное выравнивание</p>
        </td>
      </tr>
    </Props>
      
    </guide-section>


    <guide-section
      :title = "'Props for robo-grid-item'"
    >

    <Props>
      <tr>
        <td>align</td>
        <td>String</td>
        <td></td>
        <td>'stretch'</td>
        <td>'left', 'center', 'right', 'stretch'</td>
        <td>
          <p>Горизонтальное выравнивание</p>
        </td>
      </tr>
      <tr>
        <td>collapseIcon</td>
        <td>String</td>
        <td></td>
        <td>'bars'</td>
        <td>Названия иконок из набора robo-icon</td>
        <td>какую иконку показывать для переключалки, если robo-grid-item скрывается в мобилках</td>
      </tr>
      <tr>
        <td>collapseText</td>
        <td>String</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Это свойство указывает какой текст показывать, если выбрано что для мобильных элемент нужно сворачивать.</td>
      </tr>
      <tr>
        <td>mediaMobile</td>
        <td>String</td>
        <td></td>
        <td>'transfer'</td>
        <td>'transfer', 'collapse-right', 'collapse-left', 'hide'</td>
        <td>
          <p>Варианты обработки для мобильных</p>
          <p>'transfer' - перенести всё</p>
          <p>'collapse-right' - свернуть вправо</p>
          <p>'collapse-left' - свернуть влево</p>
          <p>'hide' - скрыть</p>
        </td>
      </tr>
      <tr>
        <td>sticky</td>
        <td>String</td>
        <td></td>
        <td>'none'</td>
        <td>'collapse', 'all', 'none'</td>
        <td>
          <p>Прикрепить к экрану если</p>
          <p>'collapse' - свернуто</p>
          <p>'all' - всегда</p>
          <p>'none' - никогда</p>
        </td>
      </tr>
      <tr>
        <td>valign</td>
        <td>String</td>
        <td></td>
        <td>'stretch'</td>
        <td>'top', 'center', 'bottom', 'stretch'</td>
        <td>
          <p>Вертикальное выравнивание</p>
        </td>
      </tr>
    </Props>
      
    </guide-section>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Grid',

  data() {
    return {
      columnsRepeat: 2,
      gap: 'x1',
      columns: '0.5fr 2fr 0.5fr',
      rows: '0.5fr 2fr 0.5fr 200px',
      columnsTemplate: 'left-center',
      screen: false,
      mediaMobile: 'none',
      mediaMobileItem: 'transfer',
      mediaMobileIcon: 'bars',
      valign: 'top',
      align: 'left',
      valignItem: 'top',
      alignItem: 'left',
    }
  },

  computed: {
    code1() {
      return '<robo-grid class="example" gap="' + this.gap + '" columnsRepeat="' + this.columnsRepeat + '">\n' +
          '\t<div></div><div></div><div></div><div></div>\n' +
      '</robo-grid>'
    }
  }
})
</script>

<style scoped>
  .example > div {
    background-color: rgb(212, 211, 221);
    min-width: 1px;
    min-height: 40px;
  }

  label {
    margin-right: 50px;
    margin-bottom: 20px;
  }
</style>