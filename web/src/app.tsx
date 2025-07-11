import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecordRoomAudio } from "./pages/record-room-audio";

export function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/room/:id/audio" element={<RecordRoomAudio />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
