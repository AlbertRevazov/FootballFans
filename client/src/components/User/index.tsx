import React, { useState } from "react";
import { string } from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { userAvatar } from "../../redux/features/auth/authSlice";
export const UserPage = () => {
  const dispatch = useAppDispatch();
  const { user }: any = useAppSelector((s) => s.users);
  const [userInfo, setuserInfo] = useState({
    file: new Blob,
    filepreview: null || "",
    user: user || null,
  });

  const sendPhoto = () => {
    const formdata = new FormData();
    formdata.append("avatar", userInfo.file);
    formdata.append("user", userInfo.user?.email);  
    dispatch(userAvatar(formdata));
  };

  const handleInputChange = (event: any) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  return (
    <div>
      {/* <input
        type="text"
        value={""}
        ref={myText}
        name="myText"
        placeholder="image"
      /> */}
      <div className="form-row">
        <label className="text-white">Select Image :</label>
        <input
          type="file"
          className="form-control"
          name="upload_file"
          onChange={handleInputChange}
        />
        {userInfo.filepreview !== null ? (
          <img
            className="previewimg"
            style={{ width: "50px", height: "50px" }}
            src={userInfo.filepreview}
            alt="UploadImage"
          />
        ) : null}
      </div>
      <button type="submit" className="btn btn-dark" onClick={sendPhoto}>
        {" "}
        Save{" "}
      </button>
    </div>
  );
};
