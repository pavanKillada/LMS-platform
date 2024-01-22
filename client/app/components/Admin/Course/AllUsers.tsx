import React, { FC, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Modal } from "@mui/material";
import { AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useTheme } from "next-themes";
import Loader from "../../Loader/Loader";
import { format } from "timeago.js";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { styles } from "@/app/styles/style";
import {toast} from "react-hot-toast";

type Props = {
  isTeam: boolean;
};

const AllUsers: FC<Props> = ({ isTeam }) => {
  const { theme, setTheme } = useTheme();

  const [email, setEmail] = useState("");

  const [role, setRole] = useState("");

  const [active, setActive] = useState(false);

  const { isLoading, data, error } = useGetAllUsersQuery({});

  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "name", headerName: "Name", flex: 0.4 },
    { field: "email", headerName: "Email", flex: 0.7 },
    { field: "role", headerName: "Role", flex: 0.3 },
    { field: "courses", headerName: "Purchased Courses", flex: 0.4 },
    { field: "created_at", headerName: "Joined At", flex: 0.5 },
    {
      field: "",
      headerName: "Email",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <a href={`mailto:${params.row.email}`}>
              <AiOutlineMail className="dark:text-white text-black" size={20} />
            </a>
          </>
        );
      },
    },
    {
      field: " ",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <Button>
              <AiOutlineDelete
                className="dark:text-white text-black"
                size={20}
              />
            </Button>
          </>
        );
      },
    },
  ];

  let rows: any = [];

  if (isTeam) {
    const newData =
      data && data.users.filter((item: any) => item.role === "admin");

    newData &&
      newData.forEach((item: any) => {
        rows.push({
          id: item._id,
          name: item.name,
          email: item.email,
          role: item.role,
          courses: item.courses.length,
          created_at: format(item.createdAt),
        });
      });
  } else {
    data &&
      data.users.forEach((item: any) => {
        rows.push({
          id: item._id,
          name: item.name,
          email: item.email,
          role: item.role,
          courses: item.courses.length,
          created_at: format(item.createdAt),
        });
      });
  }

  const handleAddSubmit = ()=>{
    const isEmailPresent = data.users.includes((item:any)=>item.email === email);
    if(email==='' || role===''){
        toast.error("Fill both the fields");
    }else if(isEmailPresent===false){
        toast.error("Unregistered Email ID");
    }
    if(isEmailPresent){
        
    }
  }

  const addMemberModal = () => (
    <Modal
      open={active}
      onClose={() => setActive(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
        <div className="w-full">
          <h1 className="font-Poppins text-xl text-center text-black dark:text-white">
            Add New Member
          </h1>
          <form onSubmit={handleAddSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className={`${styles.label}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`${styles.input}`}
                value={email}
                onChange={(e: any) => {
                  const email = e.target.value;
                  setEmail(email);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className={`${styles.label}`}>
                Role
              </label>
              <input
                type="text"
                id="role"
                className={`${styles.input}`}
                value={role}
                onChange={(e: any) => {
                  const role = e.target.value;
                  setRole(role);
                }}
              />
            </div>
            <br />
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setEmail("");
                  setRole("");
                  setActive(false);
                }}
                className={`${styles.button} w-[110px] bg-red-500 h-8`}
              >
                CANCEL
              </button>
              <button
                type="submit"
                className={`${styles.button} w-[110px] h-8`}
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );

  return (
    <div className="mt-[120px]">
      {isLoading ? (
        <Loader />
      ) : (
        <Box m="20pxs">
          <div className="flex justify-end">
            <button
              className={`${styles.button} !w-fit bg-transparent border border-[#000] text-black dark:text-white dark:border-[#fff]`}
              onClick={() => setActive(!active)}
            >
              + Add Member
            </button>
          </div>
          <Box
            m="20px 0 0 0"
            height="80vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #ffffff30!important"
                    : "1px solid #ccc!important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-columnHeaders": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom: "none",
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
              },
              "& .MuiDataGrid-footerContainer": {
                color: theme === "dark" ? "#fff" : "#000",
                borderTop: "none",
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
              },
              "& .MuiCheckbox-root": {
                color:
                  theme === "dark" ? "#b7ebde !important" : "#000 !important",
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: "#fff !important",
              },
            }}
          >
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>
          {active && addMemberModal()}
        </Box>
      )}
    </div>
  );
};

export default AllUsers;
