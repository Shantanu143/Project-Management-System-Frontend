import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC } from "react";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateIssueForm";

interface IssueListProps {
  title: string;
  status: string;
}
const IssueList: FC<IssueListProps> = ({ title, status }) => {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent className="px-2">
            <div className="space-y-2">
              <IssueCard />
            </div>
          </CardContent>

          <CardFooter>
            <DialogTrigger>
              <Button
                variant={"outline"}
                className="w-full flex items-center gap-2"
              >
                <PlusIcon />
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
            <CreateIssueForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;
