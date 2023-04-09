import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const App = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () => {
    toast.success("Listening Start", { position: "bottom-center" });
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Speech to Text Converter</div>
        <div className="card-body">
          <div
            className="main-content"
            onClick={() => setTextToCopy(transcript)}
          >
            {transcript}
          </div>
        </div>
        <div className="btn-group btn-group-justified mt-4">
          <button onClick={startListening} className="btn btn-success">
            Start Listening
          </button>
          <button
            onClick={SpeechRecognition.stopListening}
            className="btn btn-danger"
          >
            Stop Listening
          </button>
          <button onClick={setCopied} className="btn btn-info">
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
