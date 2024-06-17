import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

function MediaRecorder() {
    const [recordingType, setRecordingType] = useState({
        video: false,
        audio: false,
        screen: false,
    });

    const recordingOptions = {
        video: recordingType.video,
        audio: recordingType.audio,
        screen: recordingType.screen
    };

    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder(recordingOptions);

    const recordingMode = (e) => {  
        switch (e.target.id) {
            case "video":
                setRecordingType({ video: true, audio: false, screen: false });
                break;
            case "audio":
                setRecordingType({ video: false, audio: true, screen: false });
                break;
            case "screen":
                setRecordingType({ video: false, audio: false, screen: true });
                break;
            case "video-audio":
                setRecordingType({ video: true, audio: true, screen: false });
                break;
            case "screen-audio":
                setRecordingType({ video: false, audio: true, screen: true });
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className="flex w-full">
                <video className="w-1/2 ml-12 mt-10 rounded-lg" src={mediaBlobUrl} controls  />
                <div className="w-1/2 mt-10">
                    <p className="text-green-500 text-2xl text-center">
                        <span className="text-black mr-3">Recording Status:</span>{status}
                    </p>

                    <div className='flex gap-x-5 my-7 text-lg flex-wrap items-center justify-center'>
                        <div className='flex justify-center items-center mx-1'>
                            <input type='radio' name='recording-mode' id="video" onChange={recordingMode} />
                            <p className='ml-3 text-xl'>Video</p>
                        </div>

                        <div className='flex justify-center items-center mx-1'>
                            <input type='radio' name='recording-mode' id="audio" onChange={recordingMode} />
                            <p className='ml-3 text-xl'>Audio</p>
                        </div>

                        <div className='flex justify-center items-center mx-1'>
                            <input type='radio' name='recording-mode' id="screen" onChange={recordingMode} />
                            <p className='ml-3 text-xl'>Screen</p>
                        </div>

                        <div className='flex justify-center items-center mx-1'>
                            <input type='radio' name='recording-mode' id="video-audio" onChange={recordingMode} />
                            <p className='ml-3 text-xl'>Video + Audio</p>
                        </div>

                        <div className='flex justify-center items-center mx-1'>
                            <input type='radio' name='recording-mode' id="screen-audio" onChange={recordingMode} />
                            <p className='ml-3 text-xl'>Screen + Audio</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3">
                        <button className="w-auto h-12 p-2 px-6 bg-[#EE2B34] rounded text-white hover:bg-green-900 hover:shadow-lg font-bold" onClick={startRecording}>Start Recording</button>
                        <button className="w-auto h-12 p-2 px-6 bg-green-600 rounded text-white hover:bg-red-900 hover:shadow-lg font-bold" onClick={stopRecording}>Stop Recording</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MediaRecorder;
