import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const isRecordingSupported = !!navigator.mediaDevices 
&& typeof navigator.mediaDevices.getUserMedia === 'function' 
&& typeof window.MediaRecorder === 'function';

type RoomsParams = {
  roomId: string;
}

export function RecordRoomAudio() {
  const params = useParams<RoomsParams>();
  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  async function uploadAudio(audio: Blob) {
    const formData = new FormData();
    formData.append("audio", audio, 'audio.webm');
    const response = await fetch(`http://localhost:3333/rooms/${params.roomId}/audio`, {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    console.log(result);
  }

  async function stopRecording() {
    setIsRecording(false);
    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop();
      console.log("Gravação parada.");
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  function createRecorder(audio: MediaStream) {
    recorder.current = new MediaRecorder(audio, {
        mimeType: 'audio/webm',
        audioBitsPerSecond: 64_000
      });

      recorder.current.ondataavailable = event => {
        if (event.data.size > 0) {
          console.log("Dados de áudio gravados:", event.data);
          uploadAudio(event.data);
        }
      };

      recorder.current.onstart = () => {
        console.log("Gravação iniciada.");
      };

      recorder.current.onstop = () => {
        setIsRecording(false);
        console.log("Gravação parada.");
      };

      recorder.current.start();
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert("Gravação de áudio não é suportada neste navegador.");
      return;
    }
    setIsRecording(true);
    try {
      const audio = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44_100
        }
      });

      createRecorder(audio);

      intervalRef.current = setInterval(() => {
        recorder.current?.stop()

        createRecorder(audio);
      }, 5000);

    } catch (error) {
      console.error("Erro ao acessar o microfone:", error);
      alert("Não foi possível acessar o microfone. Verifique as permissões.");
      setIsRecording(false);
      return;
    }
  }

  if (!params.roomId) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar Gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar Áudio</Button>
      )}
      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  )
}