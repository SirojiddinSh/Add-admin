import { Table, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { removeFromAdmins as removeAdminAction } from "../../redux/slices/adminSlice";

const Menu = () => {
    const admins = useSelector((state) => state.admin.admins);
    const dispatch = useDispatch();

    const removeFromAdmins = (id) => {
        dispatch(removeAdminAction(id));
    };

    const columns = [
        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            render: (item) => (
                <img
                    src={item}
                    alt="image"
                    width={100}
                    style={{ borderRadius: "10%" }}
                />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Remove from admins",
            key: "remove",
            render: (user) => (
                <Button
                    type="primary"
                    onClick={() => removeFromAdmins(user.key)}
                    style={{ background: "red" }}
                >
                    Remove
                </Button>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={admins.map((item) => ({
                    ...item,
                    key: item.key,
                }))}
                size="middle"
            />
        </div>
    );
};

export default Menu;
