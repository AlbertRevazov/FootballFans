import React from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import { userAvatar } from "../../../../redux/features/auth/authSlice";

export const useEditUserHooks = () => {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = React.useState(false);
  const [error, setError] = React.useState("");

  const [userInfo, setuserInfo] = React.useState({
    file: new Blob(),
    filepreview: null || "",
  });

  const sendPhoto = () => {
    const formdata = new FormData();

    if (!!userInfo.file.size) {
      formdata.append("avatar", userInfo.file);
      dispatch(userAvatar(formdata));
      return setEdit(!edit);
    }
    return setError("Не выбран файл");
  };

  const handleInputChange = (event: any) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };
  return { handleInputChange, edit, setEdit, error, setError, sendPhoto };
};
