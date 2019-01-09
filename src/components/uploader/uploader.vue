<template>
  <div class="uploadBox">
    <div class="uploadItem" v-for="(item, i) in imageList">
      <span class="deleteFile" v-if="item.type==1" @click="deleteFile(i)"><img :src="deleteImage"></span>
      <input v-if="item.type==0" ref="uploadFile" type="file"
         multiple="multiple" @change="selectFile"
         name="uploadFile" class="uploadFile" accept="image/*" />
      <div class="no-image"><img :src="item.file"/></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import noImage from "./img/no-image.png"
import deleteImage from "./img/close-image.png"
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
export default {
  name: "uploader",
  props: [
    'fileCount',
  ],
  data () {
    return {
      deleteImage: deleteImage,
      imageList: [{file: noImage, type: 0}],
      tempImageObj: {file: noImage, type: 0},
      j: 0,
      u: 0
    }
  },
  methods:{
    selectFile(e){
      var files = e.target.files;
      this.imageToView(files);
      this.$refs.uploadFile.value = '';
      this.j = 0;
      this.uploadFile(files);
      this.u = 0;
    },
    imageToView(files){
      var that = this;
      var reader = new FileReader();
      reader.readAsDataURL(files[this.j]);
      var base64, currentImageObj
      reader.addEventListener("load", function(){
        // 最后一个元素如果是默认的图片就删除
        if(that.imageList[that.imageList.length-1].type == 0){
          that.imageList.pop();
        }
        base64 = reader.result;
        currentImageObj = {file: base64, type: 1}
        that.imageList.push(currentImageObj);
        //最后一个添加默认图片
        if(that.j==(files.length-1)){
          that.imageList.push(that.tempImageObj);
        }
        if(that.j<(files.length-1)){
          that.j = that.j + 1;
          console.log(that.j);
          that.imageToView(files)
        }
      })
      //console.log(that.j);
    },
    uploadFile(files){
      var data = new FormData();
      data.append("fileData", files[this.u]);
      AjaxPlugin.$http.post('http://127.0.0.1/uploader/test.php', data).then((res)=>{
        // 假设返回的字段是
      });
    },
    deleteFile(i){
      this.imageList.splice(i, 1);
    }
  }
}
</script>

<style scoped>
  .uploadBox{ }
  .no-image{ width:150px; height:90px; }
  .no-image img{ width:150px; height:90px; }
  .uploadFile{ position: absolute; width:150px; height:90px; opacity: 0; }
  .uploadItem{ position:relative; margin: 10px; float: left; width:150px; height:90px; }
  .deleteFile{ width:20px; height:20px; position: absolute; right:-10px; top:-10px; }
  .deleteFile img{ width:20px; height:20px; }
</style>
