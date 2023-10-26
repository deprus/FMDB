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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <AddPlayer queryKey={queryKey} />
      </DialogContent>
    </Dialog>
  );
}
