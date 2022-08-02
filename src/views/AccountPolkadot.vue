<template>
    <h1>Polkadot аккаунт</h1>
    <guide-section>
      <p>Определяет есть ли подключенные аккаунты, выводит их если есть, предлагает подключить с расширением на выбор.</p>
    </guide-section>

    <guide-section
      title = "Глобальный Polkadot аккаунт"
      :code="code1"
    >
      <p>Глобальный аккаунт - аккаунт, подключенный в одном из расширении. Один для всего приложения, меняется везде.</p>

      <section>
        <h3>Варианты использования</h3>
      
      <section>
        <label class="label-example">
            <input type="checkbox" name="account-short" v-model="short" />
            short
        </label>
        <label class="label-example">
          <input type="checkbox" name="account-extensionAllowShift" v-model="extensionAllowShift" />
          extensionAllowShift
        </label>
        <label class="label-example">
          <input type="checkbox" name="account-extensionShowIcon" v-model="extensionShowIcon" />
          extensionShowIcon
        </label>
        <label class="label-example">
            <input type="checkbox" name="account-copy" v-model="copy" />
            copy
        </label>
        <label class="label-example">
            <input type="checkbox" name="account-inline" v-model="inline" />
            inline
        </label>
        <label class="label-example">
            <input type="checkbox" name="account-selectable" v-model="selectable" />
            selectable
        </label>
        <label class="label-example">
            <input type="checkbox" name="account-chainSelectAllow" v-model="chainSelectAllow" @click="chainSelectAllowChange" />
            <select v-model="chainSelect" name="account-chainSelect">
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="32">32</option>
            </select>
            forced chain
        </label>
    </section>
    <p><b>
        Polkadot account: 
        <robo-account-polkadot 
            :extensionAllowShift="extensionAllowShift"
            :extensionShowIcon="extensionShowIcon"
            :chain="chainLocal"
            :copy="copy"
            :inline="inline"
            :selectable="selectable"
            :short="short" 
        />
    </b></p>
    </section>
  </guide-section>

  <guide-section
      title = "Формат адреса"
      :code="code2"
    >
    
    <section>
      <p>Для глобального аккаунта можно вывести выбор формата чейна, при смене будет меняться везде. Для этого используется компонент <code>robo-account-polkadot-chain</code></p>
      <section>
          Display address format for: 
          <robo-account-polkadot-chain />
      </section>
    </section>
  </guide-section>

  <blockquote>Так же можно указать свойство <code>chain</code> для того, чтобы показать подключенный адрес форсированно в другом формате, независимо от выбора пользователя.
    См. 'forced chain' выше в примере.</blockquote>
    

    <guide-section
      title = "Локальный Polkadot аккаунт"
      :code="code3"
    >

    <p>Нигде не привзанный не подключенный аккаунт. Можно выводить, можно позволять изменять пользователю, форматировать, менять формат чейна для вывода.</p>
  
      <section>
        <label class="label-example">
            <input type="text" name="account-addressLocal" v-model="addressLocal" />
            custom address
        </label>
        <label class="label-example">
            <input type="checkbox" name="account-addressLocalAllowEdit" v-model="addressLocalAllowEdit" @click="addressLocalAllowEditShift" />
            addressLocalAllowEdit
        </label>
        <label class="label-example">
            <input type="checkbox" name="account-short2" v-model="short2" />
            short (only for !addressLocalAllowEdit)
        </label>
        <label class="label-example">
            <input type="checkbox" name="account-copy2" v-model="copy2" />
            copy (only for !addressLocalAllowEdit)
        </label>
        <label class="label-example">
            <input type="checkbox" name="account-inline2" v-model="inline2" />
            inline
        </label>
        <label class="label-example">
            <input type="checkbox" name="account-chainSelectAllow2" v-model="chainSelectAllow2" @click="chainSelectAllowChange2" />
            <select v-model="chainSelect2" name="account-chainSelect2">
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="32">32</option>
            </select>
            forced chain
        </label>
    </section>
    <p><b>
        Локальный аккаунт: 
        <robo-account-polkadot 
            :addressLocal="addressLocal"
            :addressLocalAllowEdit="addressLocalAllowEdit"
            :chain="chainLocal2"
            :copy="copy2"
            :inline="inline2"
            :short="short2" 
        />
    </b></p>
    
    </guide-section>



    <guide-section
      title = "Методы"
      :code="code4"
    >
      <p>Предусмотрены следующие коллбэки</p>

    <section>
       <p><b>beforeInjected</b> - перед проверкой window.injectedWeb3</p>
       <p><b>afterInjected</b> - после проверки window.injectedWeb3</p>
       <p><b>onAddressChange</b> - после изменения адреса аккаунта</p>
    </section>

    <p><b>
        Polkadot account: 
        <robo-account-polkadot 
            selectable
            @before-injected="beforeInjectedTest"
            @after-injected="afterInjectedTest"
            @on-address-change="onAddressChangeTest"
        />
    </b></p>

  </guide-section>


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
        <td>addressLocal</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>Локальный адрес Полкадот в любом формате чейна</td>
      </tr>
      <tr>
        <td>addressLocalAllowEdit</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>вывести локальный адрес в инпуте и разрешить его изменять</td>
      </tr>
      <tr>
        <td>chain</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>Принудительная локальная смена формата чейна</td>
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
        <td>extensionAllowShift</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Показывать ли кнопку переключения расширения рядом с аккаунтом</td>
      </tr>
      <tr>
        <td>extensionShowIcon</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Показать иконку подключенного расширения (только для глобального аккаунта)</td>
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
          extensionAllowShift: true,
          copy: true,
          inline: false,
          selectable: false,
          short: false,
          chainSelect: '0',
          chainSelectAllow: false,
          extensionShowIcon: true,

          copy2: false,
          inline2: false,
          short2: false,
          chainSelect2: '0',
          chainSelectAllow2: false,
          addressLocal: '15CzEmZRy5Az2YNADEEuweXVe8XxaHbxHJjVZcd9rGuHuPCg',
          addressLocalAllowEdit: false,

          code2: '<robo-account-polkadot-chain />',
          code4: '<robo-account-polkadot-chain \n\tselectable \n\t@before-injected="beforeInjectedTest" \n\t@after-injected="afterInjectedTest" \n\t@on-address-change="onAddressChangeTest" \n/>'
      }
  },

  computed: {
    chainLocal() {
      if(this.chainSelectAllow) {
        return this.chainSelect
      } else {
        return null
      }
    },

    chainLocal2() {
      if(this.chainSelectAllow2) {
        return this.chainSelect2
      } else {
        return null
      }
    },

    code1: function() {
      let codest = '<robo-account-polkadot '

      if(this.extensionAllowShift) {
        codest += 'extensionAllowShift '
      }

      if(this.extensionShowIcon) {
        codest += 'extensionShowIcon '
      }

      if(this.chainLocal) {
        codest += 'chain = "' + this.chainLocal + '" '
      }

      if(this.copy) {
        codest += 'copy '
      }

      if(this.inline) {
        codest += 'inline '
      }

      if(this.selectable) {
        codest += 'selectable '
      }

      if(this.short) {
        codest += 'short '
      }

      codest += '/>'

      return codest
    },

    code3: function() {
      let codest = '<robo-account-polkadot '

      if(this.addressLocal) {
        codest += '\n\taddressLocal="' + this.addressLocal + '" '
      }

      if(this.addressLocalAllowEdit) {
        codest += '\n\taddressLocalAllowEdit '
      }

      if(this.chainLocal2) {
        codest += '\n\tchain="' + this.chainLocal2 + '" '
      }

      if(this.copy2) {
        codest += '\n\tcopy '
      }

      if(this.inline2) {
        codest += '\n\tinline '
      }

      if(this.short2) {
        codest += '\n\tshort '
      }

      codest += '\n/>'

      return codest
    }
  },

  methods:{
    chainSelectAllowChange(){
      this.chainSelectAllow = !this.chainSelectAllow
    },
    chainSelectAllowChange2(){
      this.chainSelectAllow2 = !this.chainSelectAllow2
    },
    addressLocalAllowEditShift(){
      this.addressLocalAllowEdit != this.addressLocalAllowEdit
    },
    beforeInjectedTest() {
      console.log('beforeInjected test callback')
      console.log('extensionObj', this.$store.state.robonomicsUIvue.polkadot.extensionObj)
    },
    afterInjectedTest() {
      console.log('afterInjected test callback')
      console.log('extensionObj', this.$store.state.robonomicsUIvue.polkadot.extensionObj)
    },
    onAddressChangeTest() {
      console.log('onAddressChange test callback')
      console.log('extensionObj', this.$store.state.robonomicsUIvue.polkadot.extensionObj)
    },
  },

  mounted() {
    console.log('mounted extensionObj', this.$store.state.robonomicsUIvue.polkadot.extensionObj)
  }

  /* + TO TEST SIGN */

    // watch: {
    //     "$store.state.robonomicsUIvue.polkadot.extensionObj": async function(value) {

    //         const signer = this.$store.state.robonomicsUIvue.polkadot.extensionObj.signer
    //         const addr = this.$store.state.robonomicsUIvue.polkadot.address

    //         try {
    //             // Triggers the extension popup
    //             await signer.signRaw({
    //                 type: 'payload',
    //                 data: 'Some data to sign...',
    //                 address: addr,
    //             })
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    // }

     /* - TO TEST SIGN */
})
</script>