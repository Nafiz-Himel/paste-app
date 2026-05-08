import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/pasteSlice"; 

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: content,        
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPaste(paste)); 
    } else {
      dispatch(addToPaste(paste));
    }

    setTitle("");
    setContent("");             
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-7 mt-10 place-content-between">
        <input
          className="pl-5 p-1 rounded-2xl mt-2 w-[60%]"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createPaste} className="p-3 rounded-2xl mt-2">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4"
          value={content}
          placeholder="Enter content here"
          onChange={(e) => setContent(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;