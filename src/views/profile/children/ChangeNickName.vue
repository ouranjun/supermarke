<template>
  <div id="changeNickName">
    <nav-bar class="nav-bar">
      <div slot="left" @click="back">
        <icon name="arrow-left" />
      </div>
      <div slot="center">修改昵称</div>
      <div @click="onSave" slot="right">保存</div>
    </nav-bar>
    <div style="margin-top:3rem">
      <cell-group title="请输入新的昵称：">
        <field v-model="nickName"
               clearable
               ref="field"
               :placeholder='nickName'  />
      </cell-group>
    </div>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import { Icon, CellGroup, Field, Button } from 'vant'
import { mapMutations } from 'vuex';
export default {
  name: 'ChangeNickName',
  data () {
    return {
      nickName: this.$route.params.nickName
      } 
  },
  methods: {
    ...mapMutations(['changeUserNickName']),
    back () {
      this.$router.back()
    },
    onSave () {
      if(this.nickName.length > 0) {
        let nickName = this.nickName
        this.changeUserNickName({nickName})
        this.$router.back()
      }
    }
  },
  components: {
    NavBar,
    Icon,
    CellGroup,
    Field
  },
  mounted () {
    this.$refs.field.focus()
  }
}
</script>

<style scoped>
  #changeNickName {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 99999999;
  }
</style>