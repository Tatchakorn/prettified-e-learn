<template>
  <div class="home" style="height: calc(100vh - 48px)">
    <v-container>
      <v-btn>AB</v-btn>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';

import extensions from '@/mixins/extensions';
import inputRules from '@/mixins/inputRules';

export default Vue.extend({
  name: 'Register',
  components: {},
  mixins: [extensions, inputRules],
  data: () => ({
    Name: 'Saitako',
  }),
  methods: {
    addMember() {
      if (this.$refs.form.validate()) {
        let a = 0;
        console.log(a);
      }
    },
  },
  computed: {},
});
</script>
