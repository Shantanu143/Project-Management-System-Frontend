import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
  content: string;
}
const CreateCommentsForm = ({ issueId }: { issueId: string | undefinedn }) => {
  const form = useForm<FormValues>({
    // resolver:zod

    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(issueId);

    console.log("create project data", data);
  };

  return (
    <div>
      <Form {...form}>
        <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2">
                  <div>
                    <Avatar>
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="w-[20rem]"
                      placeholder="write a comment....."
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">save</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCommentsForm;
