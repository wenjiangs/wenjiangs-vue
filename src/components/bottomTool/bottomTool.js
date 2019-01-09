export default {
  name: "bottomTool",
  props: {
    currentNavName: String,
  },
  data() {
    return {
      cnn: '',
    }
  },
  mounted(){
    this.cnn = this.currentNavName
  }
}
