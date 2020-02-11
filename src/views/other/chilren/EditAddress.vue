<template>
  <div class="edit-address">
    <nav-bar>
      <div slot="left" @click="back">
        <icon name="arrow-left" />
      </div><div slot="center">地址编辑</div>
    </nav-bar>
    <!-- 编辑地址 -->
    <div class="address-edit">
      <address-edit
        ref="addressEdit"
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :address-info='addressInfo'
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import NavBar from 'common/navbar/NavBar'
import { setLocalStore } from './global'
import { AddressEdit, Icon, Toast  } from 'vant';
import { province_list, city_list, county_list } from './address'
import 'vant/lib/address-edit/style'

export default {
  name: 'Edit',
  data () {
    return {
      addressInfo: {},  //地址初始化
      areaList: {
        province_list,
        city_list,
        county_list
      },
      searchResult: [],
      
    }
  },
  mounted () {
    // 处理路由传过来的数据
    this.addressInfo = this.$route.params.content
    
  },
  components: {
    NavBar,
    Icon,
    AddressEdit
  },
  methods: {
    ...mapMutations(['changeUserAddres', 'deleteUserAddress']),
    onSave (content) {
      let id = content.id;
      content['address'] = content.province + content.city + content.county + content.addressDetail;
      this.changeUserAddres({id,content})
      this.$router.go(-1)
      },
    onDelete (content) {
      let id = content.id
      this.deleteUserAddress({ id })
      this.$router.go(-1)
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .edit-address {
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 999;
  }
</style>