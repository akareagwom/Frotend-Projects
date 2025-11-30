import { FaFile } from "react-icons/fa6";
import Button from "./components/Button";
import { useRef } from "react";

const Upload = () => {
  const uploadref= useRef<HTMLInputElement | null>(null);

  const handleFile =()=>{
    uploadref.current?.click();
  }

  return (
    <div className="bg-white rounded-[10px] shadow p-8 w-[55%]">
      <div className="flex justify-between ">
        <div className="bg-gray-200 flex w-[300px] flex-col justify-center p-4 items-center rounded-[10px]">
          <div className="text-blue-400 text-6xl">
            <FaFile />
            {/* <input type="file" name="" id="" /> */}
          </div>
          <h1>Upload your file</h1>
          <p>Drag and drop a file or browse</p>
          <Button onClick={handleFile}  text="Browser" />
        </div>
        {/* editing */}
        <div className="text-start w-[250px]">
            <div className="bg-gray-200 rounded-[10px] h-[200px]">hola</div>
            <p>hello</p>
            <form className="py-2 ">
                <label>File Editing</label>
                <input type="text" name="" id="" />
                <div className="flex justify-between  items-center">
                    <div className="">
                        <label htmlFor="">File format</label>
                        <p className="p-1 border-1 border-gray-300 rounded-[10px] text-center w-[100px] ">tmz.jpg</p>
                    </div>
                     <div className="">
                        <label htmlFor="">File size</label>
                        <p className="p-1 border-1 border-gray-300 rounded-[10px] text-center w-[100px] ">3.4 MB</p>
                    </div>
                </div>
                <Button text="Save" className="w-[250px] mt-4" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
