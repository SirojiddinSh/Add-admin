import { Table, Button } from "antd";
import {
    useGetWorkersQuery,
    useDeleteUserMutation,
} from "../../redux/api/workers-api";
import { addToAdmins } from "../../redux/slices/adminSlice";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
    const dispatch = useDispatch();
    const { data, isLoading } = useGetWorkersQuery();
    const [deleteUser] = useDeleteUserMutation();
    const admins = useSelector((state) => state.admin.admins);
    const search = useSelector((state) => state.admin.search);

    const handleAddToAdmins = (user) => {
        user.added = true;
        dispatch(addToAdmins(user));
    };

    const handleDeleteUser = (id) => {
        deleteUser(id);
    };

    const columns = [
        {
            title: "Avatar",
            dataIndex: "avatar",
            render: (item) => (
                <img
                    src={item}
                    alt="image"
                    width={100}
                    style={{ borderRadius: "10%" }}
                />
            ),
            key: "avatar",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Delete user",
            key: "delete",
            render: (user) => (
                <Button
                    type="primary"
                    onClick={() => handleDeleteUser(user.key)}
                    style={{ background: "red" }}
                >
                    Delete
                </Button>
            ),
        },
        {
            title: "Add to admins",
            key: "add",
            render: (user) => (
                <Button
                    disabled={admins.some((admin) => admin.key === user.key)}
                    type="primary"
                    onClick={() => handleAddToAdmins(user)}
                    style={{ background: "green" }}
                >
                    {admins.some((admin) => admin.key === user.key)
                        ? "Added"
                        : "Add"}
                </Button>
            ),
        },
    ];

    const filteredUsers = data?.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    const dataSource = filteredUsers?.map((user) => ({
        key: user.id,
        avatar: user.avatar,
        name: user.name,
    }));

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                loading={isLoading}
                size="middle"
            />
        </div>
    );
};

export default Users;
