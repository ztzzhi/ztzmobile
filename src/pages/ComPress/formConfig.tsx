export const formSearchArray = [
  { name: "name", label: "名称", type: "Input" },
  { name: "phone", label: "电话号码", type: "InputNumber" },
  {
    name: "selected",
    label: "下拉框示例",
    type: "Select",
    option: [
      { label: "一", value: 1 },
      { label: "二", value: 2 },
      { label: "三", value: 3 }
    ],
    config: {
      mode: "multiple",
      showSearch: true,
      optionFilterProp: "children"
    }
  },
  { name: "created_at", label: "创建时间", type: "DatePicker" },
  { name: "beignAndEnd", label: "时间段", type: "RangePicker" },
  { name: "status", label: "状态", type: "Switch", valuePropName: "checked" }
]

export const formEditArray = [
  { name: "name", label: "名称", type: "Input" },
  { name: "phone", label: "电话号码", type: "InputNumber" },
  {
    name: "selected",
    label: "下拉框示例",
    type: "Select",
    option: [
      { label: "一", value: 1 },
      { label: "二", value: 2 },
      { label: "三", value: 3 }
    ],
    config: {
      mode: "multiple",
      showSearch: true,
      optionFilterProp: "children"
    }
  },
  { name: "created_at", label: "创建时间", type: "DatePicker" },
  { name: "beignAndEnd", label: "时间段", type: "RangePicker" },
  { name: "status", label: "状态", type: "Switch", valuePropName: "checked" }
]
