import { FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import React from "react";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Input } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/slices/adminSlice";

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const Admin = () => {
    const dispatch = useDispatch;
    const admins = useSelector((state) => state.admin.admins);
    const length = admins?.length;
    let [collapsed, setCollapsed] = useState(false);

    const onSearch = (value) => {
        console.log(value);
        dispatch(setSearch(value));
    };

    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: "1",
                                icon: <FaUsers />,
                                label: <NavLink to={"users"}>Users</NavLink>,
                            },
                            {
                                key: "2",
                                icon: <HiUsers />,
                                label: (
                                    <NavLink to={"admins"}>
                                        Admins {length}
                                    </NavLink>
                                ),
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            paddingLeft: "0",
                        }}
                    >
                        <Button
                            type="text"
                            icon={
                                collapsed ? (
                                    <MenuUnfoldOutlined />
                                ) : (
                                    <MenuFoldOutlined />
                                )
                            }
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                width: 64,
                                height: 64,
                                color: "white",
                            }}
                        />
                        <Search
                            style={{
                                width: "600px",
                                marginLeft: "440px",
                                marginTop: "12px",
                            }}
                            placeholder="Search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280,
                            background: "lightgray",
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default Admin;
