<template>
  <div id="app">
    <TabView>
      <TabPanel header="Coins" ><CaiCoins/></TabPanel>
      <TabPanel header="PortFolio" />
      <TabPanel header="Test" >
        <CaiTest />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
  import TabView from 'primevue/tabview';
  import TabPanel from 'primevue/tabpanel';
  import CaiCoins from './components/Coins.vue';
  import CaiTest from './components/CaiTest.vue';

  export default {
    name: 'App',
    components: {TabView , TabPanel, CaiTest,CaiCoins},
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

