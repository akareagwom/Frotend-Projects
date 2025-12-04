import { FaFile } from "react-icons/fa6";
import Button from "./components/Button";
import { useRef, useState } from "react";

const Upload = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileSize, setFileSize] = useState<string>("");

  const handleButtonClick = () => {
    fileRef.current?.click(); // open file dialog
  };

  const handleFileSelect=(file:File)=>{
    
    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL); // display image preview

    setFileName(file.name);
    setFileSize((file.size / (1024 * 1024)).toFixed(2) + "MB");
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    handleFileSelect(file);
  };

  // drag and drop section
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-[10px] shadow p-8 w-[55%]">
      <div className="flex justify-between ">
        <div className="bg-gray-200 flex w-[300px] flex-col justify-center p-4 items-center rounded-[10px]">
          <div className="text-blue-400 text-6xl">
            <FaFile />
          </div>
          <h1>Upload your file</h1>
          <p>Drag and drop a file or browse</p>
          <Button onClick={handleButtonClick} text="Browser" />
        </div>
        {/* editing */}
        <div className="text-start w-[250px]">
          <input
            type="file"
            name=""
            id=""
            className="hidden"
            ref={fileRef}
            onChange={handleFileChange}
            accept="image/*"
          />
          {preview && (
            <div>
              <img
                className="bg-gray-200 w-[250px] object-fit rounded-[10px] h-[200px]"
                src={preview}
              />
            </div>
          )}
          <p>hello</p>
          <form id="file" className="py-2 ">
            <label>File Editing</label>
            <input type="text" name="" id="" />
            <div className="flex justify-between  items-center">
              <div className="">
                <label htmlFor="File format">File format</label>
                <p className="p-1 border-1 border-gray-300 rounded-[10px] text-center w-[100px] ">
                  {fileName}
                </p>
              </div>
              <div className="">
                <label htmlFor="">File size</label>
                <p className="p-1 border-1 border-gray-300 rounded-[10px] text-center w-[100px] ">
                  {fileSize}
                </p>
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
