import React, { useState, useEffect } from "react"
import Table from "@/components/Table"
import EditRecord from "@/components/EditForm"
import useColumns from "./columns"
import { getCultivate } from "@/api/member"
import { Modal, Form } from "antd"
import moment from "moment"

const { confirm } = Modal
interface IApi {
  page?: number
  pageSize?: number
}

const Index: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [visible, setVisible] = useState(false)
  const [initParams, setInitParams] = useState({
    page: 1,
    pageSize: 10
  })
  const [list, setList] = useState([])

  useEffect(() => {
    getList()
  }, [])

  const getList = async (params: IApi = initParams) => {
    const { data } = await getCultivate(params)
    setList(data.data)
    setTotal(data.total)
    setLoading(false)
  }

  const pageSizeChange = (page: number, pageSize: number) => {
    getList({ ...initParams, page, pageSize })
    setInitParams({ ...initParams, page, pageSize })
  }
  const selectRows = (val: any) => {
    console.log("selectRows", val)
  }

  const showPassConfirm = () => {
    confirm({
      title: "123"
    })
  }
  const showRefuseConfirm = () => {
    console.log(456)
  }
  const resetPasswd = () => {
    confirm({
      title: "重置登录密码"
    })
  }
  const handleEdit = (record: any) => {
    setVisible(true)
    form.setFieldsValue({
      ...record,
      created_at: moment(record.created_at, "YYYY-MM-DD HH:mm:ss"),
      beignAndEnd: [
        moment("2022-10-3", "YYYY-MM-DD HH:mm:ss"),
        moment("2022-11-20", "YYYY-MM-DD HH:mm:ss")
      ],
      selected: [2],
      status: record.status == 1 ? true : false
    })
  }

  const formConfigArray = [
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

  return (
    <div>
      <Table
        dataSource={list}
        columns={useColumns({
          showPassConfirm,
          showRefuseConfirm,
          resetPasswd,
          handleEdit
        })}
        total={total}
        page={initParams.page}
        loading={loading}
        selectRows={selectRows}
        pageSizeChange={pageSizeChange}
      ></Table>
      <Modal
        title="Basic Modal"
        width={600}
        visible={visible}
        maskClosable={false}
        onOk={() => {
          console.log(form.getFieldsValue())
        }}
        onCancel={() => {
          form.resetFields()
          setVisible(false)
        }}
      >
        <EditRecord formConfigArray={formConfigArray} form={form}></EditRecord>
      </Modal>
    </div>
  )
}

export default Index
