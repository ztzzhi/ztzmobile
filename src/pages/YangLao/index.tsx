import React from "react"
import {
  Card,
  Form,
  Input,
  Col,
  Row,
  Button,
  Table,
  Tooltip,
  Space
} from "antd"
import type { ColumnsType } from "antd/lib/table"

const Index: React.FC = () => {
  const [form] = Form.useForm()
  const onFinish = async () => {
    const values = await form.validateFields()
    console.log(values, "validateFields")
  }

  const handleReset = () => {
    form.resetFields()
  }

  const onFinishFailed = (val: any) => {
    console.log("onFinishFailedmval", val)
  }

  const onShowChange = (val: any) => {
    console.log(val, "onShowChange")
  }

  const dataSource = [
    {
      name: "z",
      register_funds: "哈哈哈",
      acreage: "1111",
      register_address: "zzz",
      company_address: "akjsdhkahskdhaksd",
      afunction: "121212",
      bfunction: "asdasdasdasd",
      cfunction: "asdasdasdasdasd"
    },
    {
      name: "zt",
      register_funds: "哈哈哈1",
      acreage: "1111",
      register_address: "zzz",
      company_address: "akjsdhkahskdhaksd",
      afunction: "121212",
      bfunction: "asdasdasdasd",
      cfunction: "asdasdasdasdasd"
    },
    {
      name: "ztz",
      register_funds: "哈哈哈2",
      acreage: "1111",
      register_address: "zzz",
      company_address: "akjsdhkahskdhaksdakjsdhkahskdhaksdakjsdhkahskdhaksd",
      afunction: "121212",
      bfunction: "asdasdasdasd",
      cfunction: "asdasdasdasdasd"
    }
  ]

  interface IDataSource {
    name: string
    register_funds: string
    acreage: string
    register_address: string
    company_address: string
    afunction: string
    bfunction: string
    cfunction: string
  }

  const TableColumn: ColumnsType<IDataSource> = [
    {
      title: "你好",
      align: "center",
      dataIndex: "name",
      key: "name",
      width: 150
    },
    {
      title: "你好啊",
      align: "center",
      dataIndex: "register_funds",
      key: "register_funds",
      width: 150
    },
    {
      title: "面积(平方米)",
      align: "center",
      dataIndex: "acreage",
      key: "acreage",
      width: 150
    },
    {
      title: "注册地址",
      align: "center",
      dataIndex: "register_address",
      key: "register_address",
      width: 150,
      ellipsis: true
    },
    {
      title: "注册地址1212",
      align: "center",
      dataIndex: "afunction",
      key: "afunction",
      width: 150,
      ellipsis: true
    },
    {
      title: "注册地址121212121",
      align: "center",
      dataIndex: "bfunction",
      key: "bfunction",
      width: 150
    },
    {
      title: "asdasdasdasd",
      align: "center",
      dataIndex: "cfunction",
      key: "cfunction",
      width: 150,
      ellipsis: true
    },
    {
      title: "经营地址",
      align: "center",
      dataIndex: "company_address",
      key: "company_address",
      width: 150,
      ellipsis: true,
      render: company_address => {
        return company_address.length > 20 ? (
          <Tooltip placement="topLeft" title={company_address}>
            {company_address}
          </Tooltip>
        ) : (
          company_address
        )
      }
    },
    {
      title: "操作",
      align: "center",
      fixed: "right",
      key: "operation",
      width: 170,
      render: () => {
        return (
          <div>
            <Space>
              <Button type="primary">编辑</Button>
              <Button danger>删除</Button>
            </Space>
          </div>
        )
      }
    }
  ]

  const title = (
    <div>
      <Row>
        <Form
          name="basic"
          autoComplete="off"
          layout="inline"
          form={form}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={[20, 15]}>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item
                label="Username"
                name="username1"
                rules={[
                  {
                    validator: (_, value) => {
                      if (value === "1") {
                        return Promise.resolve()
                      }
                      return Promise.reject("aaaa")
                    }
                  }
                ]}
              >
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item label="Username" name="username2">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item label="Username" name="username3">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item label="Username" name="username4">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item label="Username" name="username5">
                <Input allowClear />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
      <Row gutter={[10, 10]} style={{ marginTop: "15px" }} justify="end">
        <Col>
          <Button type="primary" onClick={onFinish}>
            查询
          </Button>
        </Col>
        <Col>
          <Button onClick={handleReset}>清除</Button>
        </Col>
      </Row>
    </div>
  )
  return (
    <Card style={{ height: "100%", borderRadius: "6px" }} title={title}>
      <Table
        rowKey={record => record.name}
        dataSource={dataSource}
        columns={TableColumn}
        scroll={{ x: 500 }}
        pagination={{
          total: 50,
          showSizeChanger: true,
          showTotal: total => `共 ${50} 条`,
          pageSizeOptions: [10, 15, 20, 30],
          current: 1,
          onChange: onShowChange
        }}
      ></Table>
    </Card>
  )
}

export default Index
