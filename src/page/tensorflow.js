import React, { useRef} from "react";
import useTFClassify from "../utils/hooks/useTFClassify";
import "@tensorflow/tfjs";

export default function Tensorflow() {
  const imageRef = useRef();
  const [predict, predictions, isPredictions, isLoading ] = useTFClassify();

  return (
    <div className="flex justify-center">
      <div className="justify-center m-5">
        <h1 className="text-center">TensorFlow example</h1>
        <img
          src="https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTE4Nzl8MHwxfHNlYXJjaHwxMXx8ZG9nfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080"
          width="400"
          ref={imageRef}
          crossOrigin="anonymous"
        />
        <div className="text-center m-5">
          {predictions.length > 0 &&
            predictions.map((prediction) => (
              <div className="flex justify-between">
                <p>{prediction.className}</p>
                <p>{Math.floor(prediction.probability * 100)}%</p>
              </div>
            ))}
          <button
            className="p-2 rounded bg-gray-900 text-white w-64 mt-2"
            onClick={()=>predict(imageRef.current)}
          >
            {isLoading ? "⏳" : "Predict Result"}
          </button>
        </div>
      </div>
    </div>
  );
}
