import React from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "antd/dist/antd.css";
import styles from "../../Css/Login.module.css";
import { Card, Form, Input, Button, Checkbox, Row, Col } from "antd";

const Login = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const handleSubmit = async (e) => {
  //   await axios
  //     .post("https://ayodhya-dev.qlue.id/api/auths/login", { email, password })
  //     .then((res) => {
  //       const result = res.data;
  //       console.log(result);
  //       if (res.status === 200) {
  //         localStorage.setItem("userData", JSON.stringify(result.data));
  //         navigate("/dashboard");
  //         e.preventDefault();
  //       } else {
  //         alert(result.message);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handlePass = () => {
    navigate("/dashboard");
  };

  return (
    <div className={`${styles.backgroundThem}`}>
      <Row>
        <Col span={12} offset={6} style={{ marginTop: 150 }}>
          <Card bordered={false} style={{ padding: 30 }}>
            <Form
              // onSubmit={handleSubmit()}
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                // onChange={(e) => setEmail(e.target.value)}
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                // onChange={(e) => setPassword(e.target.value)}
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Button
                  // onClick={() => handleSubmit()}
                  onClick={() => handlePass()}
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
