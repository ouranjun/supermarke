<template>
  <div class="address-edit">
    <nav-bar>
      <div slot="left" @click="back">
        <icon name="arrow-left" />
      </div><div slot="center">新增地址</div>
    </nav-bar>
    <!-- 编辑地址 -->
    <div class="address-edit">
      <address-edit
        ref="addressEdit"
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
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
  name: 'Eidt',
  data () {
    return {
      areaList: {
        province_list,
        city_list,
        county_list
      },
      searchResult: []
    }
  },
  components: {
    NavBar,
    Icon,
    AddressEdit
  },
  methods: {
    ...mapMutations(['addUserAddress']),
     onSave (content) {
      console.log(content);
      let addressID = this.addressID().toString();
      console.log(addressID);
      
      content['id'] = addressID;
      content['address'] = content.province + content.city + content.county + content.addressDetail;
      this.addUserAddress({
        addressID,
        content
      });
     this.$router.go(-1)
    },
    onDelete () {
      Toast('delete');
    },
    back () {
      this.$router.back()
    },
    // 生成不重复的id
    addressID () {
      var lastUuid = 0;
      return (new Date()).getTime() * 1000 + (lastUuid++) % 1000;
    }
  }
}
</script>

<style scoped>

</style>