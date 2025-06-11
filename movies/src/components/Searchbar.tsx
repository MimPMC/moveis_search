// src/components/SearchBar.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex items-center w-full max-w-md rounded-md border px-2 py-1 shadow-sm">
      <Button variant="ghost" size="icon" className="mr-2">
        <Search className="h-5 w-5" />
      </Button>
      <Input
        type="text"
        placeholder="Search movies, TV shows or actors"
        className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}
