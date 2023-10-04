import { TiCamera } from "react-icons/ti";
import { FiEdit2 } from "react-icons/fi";
import { useAuthContext, useIsEditing } from "../../../hooks";
import { useRef, useState } from "react";

export const MainContainerProfile = () => {
  const { authState, editUsername, editImage } = useAuthContext();
  const { user } = authState;
  const inputRef = useRef();
  const { isEditing, startEdit, finishEdit } = useIsEditing(inputRef);

  const [currentUsername, setCurrentUsername] = useState(user.username);

  const saveInputChanges = () => {
    finishEdit();
    editUsername(currentUsername);
  };

  const handleEditImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("userId", authState.user.userId);
    editImage(data);
  };

  return (
    <div className="w-full flex flex-col items-center px-6 py-20 sm:px-[12rem] md:px-[18rem] lg:px-[25rem] xl:px-[30rem]">
      <div className="relative h-40 mb-12">
        <div className="rounded-full bg-icon w-40 h-40 flex items-center justify-center text-3xl overflow-hidden border ">
          {user && user.img ? (
            <img src={user.img} />
          ) : (
            user.username[0].toUpperCase()
          )}
        </div>
        <label>
          <TiCamera className="absolute bottom-0 right-3 bg-white rounded-full w-10 h-10 border-4 border-white outline cursor-pointer" />
          <input type="file" className="hidden" onChange={handleEditImage} />
        </label>
      </div>
      <label className="flex flex-col w-full text-xs realtive border-b">
        Username
        <input
          type="text"
          value={currentUsername}
          onChange={(e) => setCurrentUsername(e.target.value)}
          className="text-2xl bg-transparent border-b"
          ref={inputRef}
          disabled={!isEditing}
          onBlur={saveInputChanges}
          onKeyDown={(e) => e.key === "Enter" && saveInputChanges()}
        />
        <FiEdit2
          className="absolute right-6 cursor-pointer sm:right-[12rem] md:right-[18rem] lg:right-[25rem] xl:right-[30rem]"
          onClick={startEdit}
        />
      </label>
    </div>
  );
};
