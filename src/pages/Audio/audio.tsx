import{useState} from 'react';
import { FaPlay, FaPause } from "react-icons/fa";

function Audio() {
  const [control, setControl]= useState(false);

  const handleControl=()=>{
    setControl(!control)
  }

  return (
    <div className="bg-[#1C1E26] m-0 h-[100vh] w-full">
      <div className="flex justify-center flex-col items-center bg-[#2A2D36]">
        <h1>Audio Recorder</h1>
        <div onClick={handleControl} className="rounded-[50%] cursor-pointer bg-[#3A3D47] p-1">
          <div className="rounded-[50%] text-3xl p-4 bg-[#D64331]">
            {control?
            <FaPause />:<FaPlay />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audio
