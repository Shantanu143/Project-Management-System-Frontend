import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserList = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md">
          <p className="py-2 px-3"> {"Ram" || "Unassign"} </p>
        </div>

        {[1, 1, 1, 1].map((item) => {
          return (
            <div
              key={item}
              className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4"
            >
              <Avatar>
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm  leading-none">Shantanu is here</p>
                <p className="text-sm text-muted-foreground">@Shantanu143</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserList;
