<style type="text/css">
  .selectpicker{
     margin:100px 0 0 100px;
  }

</style>
<template>
  <div style="margin:100px 0 0 100px;">

    <select class="selectpicker" data-live-search="true">
      <option data-icon="ion-close-round"><i>Wis filter</i></option>
      <option data-divider="true"></option>
      <option>Activiteitje1</option>
      <option>Activiteitjee2</option>
      <option>Activiteitjeeeee3</option>
      <option>Activiteitjeeeee4</option>
      <option>Activiteitjeeeee5</option>
      <option>Activiteitjeeeee6</option>
      <option>Activiteitjeeeee7</option>
      <option>Activiteitjeeeee8</option>
    </select>

  </div>
</template>

<script>
  export default{
    components:{
    },
    mounted(){
      $('.selectpicker').selectpicker();
    }
  }
</script>