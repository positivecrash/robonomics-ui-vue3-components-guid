<template>
    <h1>Polkadot аккаунт</h1>
    <guide-section>
      <p>Определяет есть ли подключенные аккаунты, выводит их если есть, предлагает подключить с расширением на выбор.</p>
    </guide-section>

    <guide-section
      :title = "'Использование robo-account-polkadot'"
    >

    <section>
        <label>
            <input type="checkbox" name="account-short" v-model="short" />
            short
        </label>
        <label>
            <input type="checkbox" name="account-allowShiftExtensions" v-model="allowShiftExtensions" />
            allowShiftExtensions
        </label>
        <label>
            <input type="checkbox" name="account-copy" v-model="copy" />
            copy
        </label>
        <label>
            <input type="checkbox" name="account-inline" v-model="inline" />
            inline
        </label>
        <label>
            <input type="checkbox" name="account-selectable" v-model="selectable" />
            selectable
        </label>
    </section>

    <p><b>
        Polkadot account: 
        <robo-account-polkadot 
            :allowShiftExtensions="allowShiftExtensions"
            :copy="copy"
            :inline="inline"
            :selectable="selectable"
            :short="short" 
        />
    </b></p>

    </guide-section>

    <guide-section
      :title = "'Использование robo-account-polkadot-chain'"
    >

    <p>В компоненте зашито три формата:</p>
    <pre v-highlightjs>
        <code class="javascript">
Robonomics: '32',
Kusama: '2',
Polkadot: '0',
        </code>
    </pre>

    <p><b>
        Chain format: 
        <robo-account-polkadot-chain />
    </b></p>

    </guide-section>


    <robo-account-polkadot  
        short 
        extensionAllowShift
        extensionShowIcon
        selectable
    />
    
    <robo-account-polkadot short inline />
    <robo-account-polkadot />
    <robo-account-polkadot chain="0" />
    <robo-account-polkadot chain="0" addressIsolated="15CzEmZRy5Az2YNADEEuweXVe8XxaHbxHJjVZcd9rGuHuPCg" extensionAllowShift extensionShowIcon />


    <guide-section
      :title = "'Установка значений'"
    >
    
    <p>Смотри информацию по <router-link to="/store">store</router-link></p>

    </guide-section>



    <guide-section
      :title = "'Props для robo-account-polkadot'"
    >

    <Props>
      <tr>
        <td>allowShiftExtensions</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Показывать ли кнопку переключения расширения рядом с аккаунтом</td>
      </tr>
      <tr>
        <td>copy</td>
        <td>Boolean</td>
        <td></td>
        <td>true</td>
        <td></td>
        <td>Показывать ли кнопку для копирования адреса рядом с аккаунтом</td>
      </tr>
      <tr>
        <td>inline</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Встраивать в строку или нет элемент с аккаунтом</td>
      </tr>
      <tr>
        <td>selectable</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Позволять ли выбирать разные аккаунты из подклюдченных или показывать только активный</td>
      </tr>
      <tr>
        <td>short</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Сокращать адрес или некоторым</td>
      </tr>
    </Props>
      
    </guide-section>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'AccountPolkadot',

  data() {
      return {
          allowShiftExtensions: false,
          copy: false,
          inline: false,
          selectable: false,
          short: false,
      }
  }
})
</script>