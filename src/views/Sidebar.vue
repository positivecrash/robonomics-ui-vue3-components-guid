<template>
    <h1>Sidebar</h1>
    <guide-section
      :title = "'Вступление'"
    >
      <p>Задумано для основного бокового меню</p>
    </guide-section>

    <use-component componentName="RoboSidebar, RoboSidebarItem"/>

    <guide-section
      :title = "'Пример использования'"
      :code = "code1" 
    >
        <robo-sidebar title="Dapp" icon="house">
          <robo-sidebar-item href="/" current>Dashboard</robo-sidebar-item>
          <robo-sidebar-item href="/settings">Settings</robo-sidebar-item>
        </robo-sidebar>

        <robo-sidebar title="IoT services" icon="cloud">
          <robo-sidebar-item href="/iot-devices">Devices</robo-sidebar-item>
          <robo-sidebar-item href="/iot-services">Services</robo-sidebar-item>
          <robo-sidebar-item href="/iot-subscription">Subscription</robo-sidebar-item>
        </robo-sidebar>
    </guide-section>

    <guide-section
      :title = "'Варианты ссылок'"
      :code = "code2" 
    >
        <robo-sidebar title="Dapp" icon="house">
          <robo-sidebar-item href="/" current>Current</robo-sidebar-item>
          <robo-sidebar-item>N/a link</robo-sidebar-item>
          <robo-sidebar-item href="https://robonomics.network">External</robo-sidebar-item>
        </robo-sidebar>
    </guide-section>

    <guide-section
      :title = "'Props for <robo-sidebar>'"
    >

    <Props>
      <tr>
        <td>title</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>Название раздела меню</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>Название иконки (из <router-link to="/icons">возможных</router-link> для подключения)</td>
      </tr>
    </Props>
      
    </guide-section>

    <guide-section
      :title = "'Props for <robo-sidebar-item>'"
    >

    <Props>
      <tr>
        <td>href</td>
        <td>String</td>
        <td></td>
        <td>null</td>
        <td></td>
        <td>
          <p>Ссылка в меню. Если это свойство не указано, то раздел будет выводиться неактивным</p>
        </td>
      </tr>
      <tr>
        <td>current</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Помечается текущий раздел</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
        <td></td>
        <td>Помечается неиспользуемый в данный момент, неактивный раздел</td>
      </tr>
    </Props>
      
    </guide-section>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Sidebar',

  data() {
    return {
      items: [
        {
          text: 'Devices',
          active: false,
          href: 'devices',
        },
        {
          text: 'Device 1',
          active: true,
          href: 'device-1',
        },
      ],
      code1:
        '<robo-sidebar title="Dapp" icon="house">\n' +
        '\t<robo-sidebar-item href="/" current>Dashboard</robo-sidebar-item>\n' +
        '\t<robo-sidebar-item href="/settings">Settings</robo-sidebar-item>\n' +
        '</robo-sidebar>\n\n' +
        '<robo-sidebar title="IoT services" icon="cloud">\n' +
        '\t<robo-sidebar-item href="/iot-devices">Devices</robo-sidebar-item>\n' +
        '\t<robo-sidebar-item href="/iot-services">Services</robo-sidebar-item>\n' +
        '\t<robo-sidebar-item href="/iot-subscription">Subscription</robo-sidebar-item>\n' +
        '</robo-sidebar>\n'
      ,
      code2:
        '<robo-sidebar title="Dapp" icon="house">\n' +
        '\t<robo-sidebar-item href="/" current>Current</robo-sidebar-item>\n' +
        '\t<robo-sidebar-item>N/a link</robo-sidebar-item>\n' +
        '\t<robo-sidebar-item href="https://robonomics.network">External</robo-sidebar-item>\n' +
        '</robo-sidebar>\n'
    }
  },
})
</script>