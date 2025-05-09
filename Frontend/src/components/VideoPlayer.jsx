// VideoPlayer.js (React frontend)
import React, { useEffect, useState } from "react";
import "../assets/css/VideoPlayer.css";
// import vid from "../assets/result_compressed.mp4";

const VideoPlayer = () => {
  const [crowdCount, setCrowdCount] = useState(0)
  const [fire, setFire] = useState("False")

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/crowd-count');
    const socket1 = new WebSocket('ws://localhost:8000/fire');
    socket.onmessage = (event) => {
      setCrowdCount(event.data)
    }
    socket1.onmessage = (event) => {
      setFire(event.data)
    }

    return () => {
      socket.close()
      socket1.close()
    }
  }, [])


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch("http://localhost:8000/crowd-count")
  //       const reader = res.body.getReader()
  //       while (true) {
  //         const { done, value } = await reader.read();
  //         if (done) break;
  //         result = new TextDecoder().decode(value);
  //         console.log(result);
  //         setCrowdCount(result);
  //       }
  //     } catch (err) {
        
  //     }
  //   })()
  // },[])

  return (
    <div className="video_bg">
      <div className="flex flex-row">
        <div className="basis-3/4">
          <img
            className="video_player"
            src="http://localhost:8000/stream_video"
          />
          <img
            className="video_player"
            src="http://localhost:8000/stream_video2"
          />
        </div>
        <div className="basis-1/4">
          <div class="table_panel w-full max-w-md p-4 rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none">Video Data</h5>
            </div>
            <div class="flow-root">
              <ul role="list" class="divide-y divide-gray-700">
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0"></div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium truncate ">Crowd Count</p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold ">
                      <p>{crowdCount}</p>
                      {/* <img src="http://localhost:8000/crowd-count" /> */}
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0"></div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium truncate ">Fire</p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold">
                      {fire}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
