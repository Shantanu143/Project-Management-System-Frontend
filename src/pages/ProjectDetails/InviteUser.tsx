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
  email: string;
}

const InviteUser = () => {
  const form = useForm<FormValues>({
    // resolver:zod

    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("create project data", data);
  };
  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="border w-full border-gray-700 py-5 px-5"
                  placeholder="User Email....."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogClose>
          <Button type="submit" className="w-full mt-5">
            Invite User
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default InviteUser;
