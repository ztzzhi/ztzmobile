import React, { useState, useEffect, useRef } from "react"
import { Card, Input, Button, Select, Form, Modal, message } from "antd"
import Table from "../../components/TableNoSelection"
import columns from "./columns"
import { getCultivate, cultivateVerify, cultivateResetPasswd } from "../../api"
import { ExclamationCircleOutlined } from "@ant-design/icons"

const { Option } = Select
const { Search, TextArea } = Input
const { confirm } = Modal

export default function Cultivate() {
  const [list, setList] = useState([])
  const [condition, setCondition] = useState({})
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [form] = Form.useForm()
  const reasonRef = useRef()

  useEffect(() => {
    getList()
  }, [])

  const getList = async (param = {}) => {
    const result = await getCultivate(param)
    const { data, code } = result
    if (code === 0) {
      setList(data.data)
      setLoading(false)
      setTotal(data?.total)
    }
  }

  // 关键词搜索查询
  const search = value => {
    setCondition({ ...condition, name: value })
    getList({ ...condition, name: value })
  }

  // 条件重置
  const reset = () => {
    form.resetFields()
    // 默认列表显示10条数据
    getList({ pageSize: 10 })
  }

  // 下拉框选中事件
  const changeSelect = value => {
    setCondition({ ...condition, status: value })
    getList({ ...condition, status: value })
  }

  // 设置每页分页的条数
  const getPageSize = (page, size) => {
    setCondition({ ...condition, page, pageSize: size })
    getList({ ...condition, page, pageSize: size })
  }

  // 审核拒绝理由
  const getReason = e => {
    reasonRef.current = e.target.value
  }

  // 通过审核
  const showPassConfirm = record => {
    confirm({
      title: "培训机构审核确认通过?",
      icon: <ExclamationCircleOutlined />,
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        const result = await cultivateVerify(record.id, { status: 2 })
        if (result?.code === 0) {
          message.success("审核已通过", 2)
          setTimeout(() => {
            const newDatas = list.map(item => {
              if (item.id === record.id) {
                item.status = 2
              }
              return item
            })
            setList(newDatas)
          }, 1000)
        }
      },
      onCancel() {
        console.log("Cancel")
      }
    })
  }

  // 审核拒绝
  const showRefuseConfirm = record => {
    confirm({
      title: "培训机构审核确认不通过?",
      icon: <ExclamationCircleOutlined />,
      content: (
        <TextArea
          rows={4}
          onChange={getReason}
          ref={reasonRef}
          placeholder="请输入拒绝理由, 限制100字"
          maxLength={100}
        />
      ),
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        let reasonTxt = reasonRef.current.resizableTextArea.props.value
        if (reasonTxt.length === 0) {
          message.error("请输入拒绝理由", 1)
          return new Promise((_, reject) => {
            reject()
          })
        }
        // 处理请求接口
        const result = await cultivateVerify(record.id, {
          status: 3,
          reason: reasonTxt
        })
        if (result?.code === 0) {
          message.success("审核已拒绝", 2)
          setTimeout(() => {
            const newDatas = list.map(item => {
              if (item.id === record.id) {
                item.status = 3
                item.reason = reasonTxt
              }
              return item
            })
            setList(newDatas)
          }, 1000)
        }
      },
      onCancel() {
        console.log("Cancel")
      }
    })
  }

  // 重置密码
  const resetPasswd = record => {
    confirm({
      title: "确认重置密码?",
      icon: <ExclamationCircleOutlined />,
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        const result = await cultivateResetPasswd(record.id)
        if (result?.code === 0) {
          message.success("密码重置成功", 2)
        }
      },
      onCancel() {
        console.log("Cancel")
      }
    })
  }

  return (
    <Card
      title={
        <Form form={form} layout="inline">
          <Form.Item label="培训机构" name="agency_name">
            <Search
              placeholder="请输入培训机构名称"
              allowClear
              style={{ width: 200 }}
              onSearch={search}
            />
          </Form.Item>
          <Form.Item label="审核状态" name="state">
            <Select
              style={{ width: 150 }}
              onChange={changeSelect}
              placeholder="选择审核状态"
              allowClear
            >
              <Option value="1">待审核</Option>
              <Option value="2">审核通过</Option>
              <Option value="3">审核不通过</Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ marginLeft: "10%" }}>
            <Button type="primary" onClick={reset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      }
    >
      <Table
        dataSource={list}
        columns={columns({ showPassConfirm, showRefuseConfirm, resetPasswd })}
        pagesize={getPageSize}
        loading={loading}
        total={total}
        page={condition.page}
      />
    </Card>
  )
}
