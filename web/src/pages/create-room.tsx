import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"

type GetRoomsResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');
      const result: GetRoomsResponse = await response.json();
      return result;
    }
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Create a new room</h1>
      {data?.map((room) => {
        return (
          <div key={room.id}>
            <Link to={`/room/${room.id}`}>{room.name}</Link>
          </div>
        );
      })}
      <Link to="/room/1">Go to Room</Link>
    </div>
  );
}
