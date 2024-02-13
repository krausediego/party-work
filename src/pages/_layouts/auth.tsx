import { Outlet } from "react-router-dom";
import { Briefcase } from "lucide-react";

export function AuthLayout() {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 bg-muted-foreground dark:bg-muted relative">
        <div className="flex gap-2 items-center absolute top-4 left-4">
          <Briefcase className="h-4 w-4" />
          <span>PartyWork</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="text-xs">Todos os direitos reservados</span>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
