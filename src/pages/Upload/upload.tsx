import { FaFile } from "react-icons/fa6";
import Button from './components/Button'

const Upload =()=>{
    return(
        <div className="bg-white">
            <div className="flex">
                <div className="bg-gray-200 flex flex-col justify-center items-center rounded-sm">
                <div className="text-blue-400 text-6xl">
                    <FaFile />
                    <input type="file" name="" id="" />
                </div>
                    <h1>Upload your file</h1>
                    <p>Drag and drop a file or browse</p>
                    <Button />
                </div>

            </div>
        </div>
    )
}

export default Upload; 