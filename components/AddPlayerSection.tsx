import { Button } from "@/components/ui/button";

type AddPlayerSectionProps = {
  queryKey: string;
  children: string;
};

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddPlayer from "./AddPlayer";

export default function AddPlayerSection({
  queryKey,
  children,
}: AddPlayerSectionProps) {
  return (
    <>
      <p>
        Feel free to add, update, and delete data. It is not authenticated for
        the purpose of displaying features. The database has a backup copy.
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{children}</Button>
        </DialogTrigger>
        <DialogContent>
          <AddPlayer queryKey={queryKey} />
        </DialogContent>
      </Dialog>
    </>
  );
}
