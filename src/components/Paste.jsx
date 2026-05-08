import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPaste } from "../redux/pasteSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.paste);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredData = pastes.filter(
    (paste) =>
      paste.title.toLowerCase().includes(searchTerm) ||
      paste.content.toLowerCase().includes(searchTerm)
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }

  return (
    <div className="flex flex-col items-center">
      <input
        className="p-2 rounded-2xl min-w-[600px] mt-5"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 justify-center items-center mt-6 w-full max-w-[700px]">
        {filteredData.length > 0 &&
          filteredData.map((paste) => (
            <div key={paste._id} className="border p-4 rounded-2xl w-full">
              <div className="text-xl font-bold">
                {paste.title}
              </div>

              <div className="mt-2">
                {paste.content}
              </div>

              <div className="flex flex-row gap-4 place-content-evenly mt-4">
                <button
                  className="p-2 rounded-xl bg-blue-500 text-white"
                  onClick={() => navigate(`/?pasteId=${paste._id}`)}
                >
                  Edit
                </button>

                <button
                  className="p-2 rounded-xl bg-green-500 text-white"
                  onClick={() => navigate(`/paste/${paste._id}`)}
                >
                  View
                </button>

                <button
                  className="p-2 rounded-xl bg-red-500 text-white"
                  onClick={() => handleDelete(paste?._id)}
                >
                  Delete
                </button>

                <button
                  className="p-2 rounded-xl bg-yellow-500 text-white"
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to clipboard");
                  }}
                >
                  Copy
                </button>

                <button
                  className="p-2 rounded-xl bg-purple-500 text-white"
                  onClick={() => {
                    navigator.share({
                      title: paste.title,
                      text: paste.content,
                    });
                  }}
                >
                  Share
                </button>
              </div>

              <div className="text-sm text-gray-500 mt-3">
                {paste.createdAt}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Paste;