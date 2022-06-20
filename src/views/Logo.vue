<template>
    <h1>Логотипы</h1>

    <p>Сейчас в дизайне используется горизонтальная версия с текстом как основной логотип даппа. Так же используется один вариант в качестве лоадера для загрузки даппа.</p>

    <guide-section
      :title = "'Использование: Логотип в шапке без ссылки'"
      :code = "code1" 
    >
        <p>Используется в шапке даппа в качестве основного логотипа. Без ссылки можно использовать, когда находимся на главной</p>

        <robo-logo title />
    </guide-section>

    <guide-section
      :title = "'Использование: Логотип в шапке - ссылка'"
      :code = "code2" 
    >
        <p>Используется в шапке даппа в качестве основного логотипа. Ссылку на главную можно вставлять, когда находимся на другой странице.</p>

        <robo-logo href="/" title />
    </guide-section>

    <guide-section
      :title = "'Использование: Логотип для загрузки даппа'"
      :code = "code3" 
    >
        <p>Размещается посередине родительского блока (или экрана).</p>

        <robo-logo vertical animate title />
    </guide-section>

    <p>Далее будут разные варианты, которые сейчас в дизайне не используются, но в прицнипе они есть и ими можно пользоваться.</p>

    <guide-section
      :title = "'Оформление: Логотип без текста'"
      :code = "code4" 
    >
        <robo-logo />
    </guide-section>

    <guide-section
      :title = "'Оформление: Логотип без текста, анимированный'"
      :code = "code5" 
    >
        <robo-logo animate />
    </guide-section>

    <guide-section
      :title = "'Оформление: Логотип с текстом горизонтальный, анимированный'"
      :code = "code6" 
    >
        <robo-logo title animate />
    </guide-section>

     <guide-section
      :title = "'Props'"
    >

    <Props>
      <tr>
        <td>href</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>
          <p>Ссылка для всего блока логотипа</p>
        </td>
      </tr>
        <tr>
        <td>vertical</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>
          <p>Вертикальное позиционирование. Это свойство имеет смысл в связке с <code>title</code></p>
        </td>
      </tr>
      <tr>
        <td>title</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>
          <p>Отображает рядом со знаком текст. Текст сейчас зашит в библиотеке</p>
        </td>
      </tr>
      <tr>
        <td>animate</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>
          <p>Бесконечная анимация логотипа, можно использовать для лоадера всего приложения или раздела. Работает для всех вариаций.</p>
        </td>
      </tr>
      <tr>
        <td>light</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>
          <p>Делает логотип светлым</p>
        </td>
      </tr>
    </Props>
      
    </guide-section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Logo',
  
  data() {
    return {
      code1: '<robo-logo title />',
      code2: '<robo-logo title href="/" />',
      code3: '<robo-logo title vertical animate />',
      code4: '<robo-logo />',
      code5: '<robo-logo animate />',
      code6: '<robo-logo title animate />',
    }
  },
})
</script>