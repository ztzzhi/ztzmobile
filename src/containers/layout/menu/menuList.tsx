const menuList = {
  yl: [],
  px: [],
  gv: [
    {
      title: "用户管理",
      key: "member",
      icon: "icon-yonghu",
      path: "member"
    },
    {
      title: "培训机构",
      key: "cultivate",
      icon: "icon-peixun",
      path: "cultivate"
    },
    {
      title: "养老机构",
      key: "yanglao",
      icon: "icon-yanglao",
      path: "yanglao"
    },
    {
      title: "护理员管理",
      key: "caregivers",
      icon: "icon-icon_huliyuanguanli",
      path: "caregivers"
    },
    {
      title: "学习资料管理",
      key: "exercise",
      icon: "icon-xuexiziliao",
      children: [
        {
          title: "题库管理",
          key: "question",
          icon: "icon-dati",
          path: "exercise/question"
        },
        {
          title: "录播管理",
          key: "recorded",
          icon: "icon-shipin",
          path: "exercise/recorded"
        },
        {
          title: "模拟试卷",
          key: "test",
          icon: "icon-monishijuan",
          path: "exercise/test"
        }
      ]
    },
    {
      title: "系统管理",
      key: "basic",
      icon: "icon-xitongguanli",
      children: [
        {
          title: "基础设置",
          key: "set",
          icon: "icon-jichushezhi",
          path: "basic/set"
        },
        {
          title: "标签管理",
          key: "label",
          icon: "icon-biaoqian",
          path: "basic/label"
        }
      ]
    }
  ]
}

export interface menuItemType {
  title: string
  key?: string
  icon?: string
  path?: string
  children?: menuItemType[]
}

export default menuList
