import { dayjs } from "@/utils/dayjs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useRooms } from "@/http/use-rooms";

export function RoomList() {
  const { data, isLoading } = useRooms();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rapido para as salas criadas recentemente
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <div className="text-muted-foreground text-sm">
            Carregando salas...
          </div>
        )}
        {data?.map((room) => {
          return (
            <Link
              key={room.id}
              className="flex items-center justify-between border p-3 rounded-lg hover:bg-accent/50"
              to={`/room/${room.id}`}
            >
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {dayjs(room.createdAt).fromNow()}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {room.questionsCount} perguntas
                  </Badge>
                </div>
              </div>
              <span className="flex items-center gap-1">
                Entrar
                <ArrowRight className="size-4" />
              </span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
