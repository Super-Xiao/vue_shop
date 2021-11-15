<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img
          src="https://img2.baidu.com/it/u=15093184,2326945969&fm=26&fmt=auto"
          alt=""
        /><span>电商管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button></el-header
    >

    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="open-button" @click="openClick">|||</div>
        <el-menu
          background-color="#362e49"
          text-color="#fff"
          active-text-color="#746694"
          :unique-opened="true"
          :default-active="activePath"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              @click="saveNavState('/' + subItem.path)"
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <i :class="iconsObj[item.id]"></i>
              <span>{{ subItem.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      menuList: [],
      iconsObj: {
        125: "el-icon-star-on",
        103: "el-icon-question",
        101: "el-icon-s-order",
        102: "el-icon-s-opportunity",
        145: "el-icon-tickets",
      },
      activePath: "",
      isCollapse: false,
    };
  },
  created() {
    this.getMenulist();
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.replace("./login");
    },
    async getMenulist() {
      const { data: res } = await this.$http.get("menus");

      if (res.meta.status !== 200) return this.$message.error("获取数据失败");
      this.$message.success("获取菜单数据成功");
      this.menuList = res.data;
      // console.log(this.menuList);
    },
    // 切换折叠展开
    openClick() {
      this.isCollapse = !this.isCollapse;
    },

    // 保存活跃链接
    saveNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath
    },
  },
};
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #746694;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: white;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
    img {
      height: 65px;
      width: 65px;
      border-radius: 50%;
    }
  }
}
.el-aside {
  background-color: #746694;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: rgb(238, 238, 238);
}
.open-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>