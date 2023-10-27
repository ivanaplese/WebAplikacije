<template>
  <div class="hello">
    Ovo je moj kod, a banana je {{ status_banane }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    let html_varijable = {
      status_banane: "ne znam"
    }
    return html_varijable;
  },
  //mounted: async function() {unutra ovo od dolje}
  async mounted() {
    let http_respose = await fetch("http://localhost:3001/banana");
    let objekt_s_backenda = await http_respose.json()
    console.log(objekt_s_backenda)
    this.status_banane = objekt_s_backenda;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
