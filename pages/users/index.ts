import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      userId: ''
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`)
    },
    validate (data: any) {
      console.log(data);   
      return true;   
    }
  }
});
