import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddPlayer from "./AddPlayer";

export default function AddPlayerSection() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add player</Button>
      </DialogTrigger>
      <DialogContent>
        <AddPlayer queryKey="wonderkid" />
      </DialogContent>
    </Dialog>
  );
}
