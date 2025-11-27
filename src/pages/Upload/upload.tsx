import { FaFile } from "react-icons/fa6";
import Button from "./components/Button";

const Upload = () => {
  return (
    <div className="bg-white shadow p-4 w-[60%]">
      <div className="flex justify-between ">
        <div className="bg-gray-200 flex w-[300px] flex-col justify-center p-4 items-center rounded-sm">
          <div className="text-blue-400 text-6xl">
            <FaFile />
            {/* <input type="file" name="" id="" /> */}
          </div>
          <h1>Upload your file</h1>
          <p>Drag and drop a file or browse</p>
          <Button text="Browser" />
        </div>
        {/* editing */}
        <div className="">
            <div className="bg-gray-200 w-[300px] h-[200px]">hola</div>
            <p>hello</p>
            <form className="py-2">
                <label>File Editing</label>
                <input type="text" name="" id="" />
                <div className="flex justify-between items-center">
                    <div className="">
                        <label htmlFor="">File format</label>
                        <p className="p-1 border-1 border-black rounded-sm">tmz.jpg</p>
                    </div>
                     <div className="">
                        <label htmlFor="">File size</label>
                        <p className="p-1 border-1 border-black rounded-sm">3.4 MB</p>
                    </div>
                </div>
                <Button text="Save" className="w-[300px]" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
