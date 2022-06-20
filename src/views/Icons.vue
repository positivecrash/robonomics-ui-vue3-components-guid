<template>
    <h1>Icons</h1>

    <p>Иконки из бесплатного набора <b>Font Awesome Solid</b>, все доступные иконки <a href="https://fontawesome.com/icons" target="_blank">здесь</a>. Включены в библиотеку выборочно, можно делать запрос на добавление новых иконок.</p>

    <guide-section
      :title = "'Использование'"
      :code = "code1" 
    >
        <robo-icon  icon="gear" />
    </guide-section>

    <h2>Доступные иконки</h2>

    <div class="grid-6">
        <div class="item">
            <robo-icon  icon="arrow-down" />
            <p>arrow-down</p>
        </div>
        <div class="item">
            <robo-icon  icon="arrow-rotate-left" />
            <p>arrow-rotate-left</p>
        </div>
        <div class="item">
            <robo-icon  icon="arrow-up-right-from-square" />
            <p>arrow-up-right-from-square</p>
        </div>
        <div class="item">
            <robo-icon  icon="bars" />
            <p>bars</p>
        </div>
        <div class="item">
            <robo-icon  icon="chart-pie" />
            <p>chart-pie</p>
        </div>
        <div class="item">
            <robo-icon  icon="check" />
            <p>check</p>
        </div>
        <div class="item">
            <robo-icon  icon="cloud" />
            <p>cloud</p>
        </div>
        <div class="item">
            <robo-icon  icon="comment" />
            <p>comment</p>
        </div>
        <div class="item">
            <robo-icon  icon="copy" />
            <p>copy</p>
        </div>
        <div class="item">
            <robo-icon  icon="circle-check" />
            <p>circle-check</p>
        </div>
        <div class="item">
            <robo-icon  icon="circle-info" />
            <p>circle-info</p>
        </div>
        <div class="item">
            <robo-icon  icon="circle-exclamation" />
            <p>circle-exclamation</p>
        </div>
        <div class="item">
            <robo-icon  icon="circle-xmark" />
            <p>circle-xmark</p>
        </div>
        <div class="item">
            <robo-icon  icon="ellipsis" />
            <p>ellipsis</p>
        </div>
        <div class="item">
            <robo-icon  icon="ellipsis-vertical" />
            <p>ellipsis-vertical</p>
        </div>
        <div class="item">
            <robo-icon  icon="gear" />
            <p>gear</p>
        </div>
        <div class="item">
            <robo-icon  icon="house" />
            <p>house</p>
        </div>
        <div class="item">
            <robo-icon  icon="minus" />
            <p>minus</p>
        </div>
        <div class="item">
            <robo-icon  icon="pencil" />
            <p>pencil</p>
        </div>
        <div class="item">
            <robo-icon  icon="power-off" />
            <p>power-off</p>
        </div>
        <div class="item">
            <robo-icon  icon="plus" />
            <p>plus</p>
        </div>
        <div class="item">
            <robo-icon  icon="right-left" />
            <p>right-left</p>
        </div>
        <div class="item">
            <robo-icon  icon="rss" />
            <p>rss</p>
        </div>
        <div class="item">
            <robo-icon  icon="sort-down" />
            <p>sort-down</p>
        </div>
        <div class="item">
            <robo-icon  icon="signal" />
            <p>signal</p>
        </div>
        <div class="item">
            <robo-icon  icon="user" />
            <p>user</p>
        </div>
        <div class="item">
            <robo-icon  icon="wallet" />
            <p>wallet</p>
        </div>
        <div class="item">
            <robo-icon  icon="xmark" />
            <p>xmark</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Icons',

  data () {
      return {
          code1: '<robo-icon  icon="gear" />'
      }
  }
})

</script>

<style scoped>
    .icon {
        font-size: 200%;
    }

    .item {
        text-align: center;
    }
</style>