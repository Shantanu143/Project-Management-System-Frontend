import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface FormValues {
  issueName: string;
  description: string;
}
const CreateIssueForm = () => {
  const form = useForm<FormValues>({
    // resolver:zod

    defaultValues: {
      issueName: "",
      description: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("create project data", data);
  };

  return (
    <Form {...form}>
      <form className="space-y-5 pt-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="issueName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  className="border w-full border-gray-700 py-5 px-5"
                  placeholder="Enter Issue....."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  className="border w-full border-gray-700 py-5 px-5"
                  placeholder="Description....."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogClose>
          <Button type="submit" className="w-full mt-5">
            Create Issue
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default CreateIssueForm;
