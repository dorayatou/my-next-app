import { useEffect, useRef } from "react";
import { StereoAudioRecorder } from "recordrtc";
export default function Home() {
  const recorderRef = useRef<any>();
  const startEl = useRef<HTMLButtonElement>();
  const stopEl = useRef<HTMLButtonElement>();
  useEffect(() => {
    startEl.current.addEventListener("click", function () {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
        })
        .then(function (mediaStream) {
          recorderRef.current = new StereoAudioRecorder(mediaStream, {
            mimeType: "audio/wav",
            numberOfAudioChannels: 1,
            sampleRate: 44100,
            desiredSampRate: 16000,
            timeSlice: 2000,
            ondataavailable(blob) {
              console.log("data", new Date());
            },
          });
        })
        .catch(function (error) {
          alert("unable to capture your microphne. Please check console logs.");
          console.error(error);
        });
    });

    stopEl.current.addEventListener("click", function () {
      recorderRef.current.stop(function (blob) {
        console.log("stop");
      });
    });
  }, []);
  return (
    <div>
      <button id="startRecord" ref={startEl}>
        startRecord
      </button>
      <button id="stopRecord" ref={stopEl}>
        stopRecord
      </button>
      <audio
        id="audio"
        controls={true}
        autoPlay={true}
        playsInline={true}
      ></audio>
    </div>
  );
}
