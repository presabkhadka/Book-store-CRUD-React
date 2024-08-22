"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ToastDestructive() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "Please fill all the required fields.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  return (
    <Button onClick={showToast}>
      Show Error Toast
    </Button>
  );
}
