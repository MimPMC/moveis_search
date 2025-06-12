import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({
  searchTerm,
  setSearchTerm,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex items-center w-full rounded-md border px-2 py-1 shadow-sm">
      <Button variant="ghost" size="icon" className="mr-2" onClick={onSearch}>
        <Search className="h-5 w-5" />
      </Button>
      <Input
        type="text"
        placeholder="Search movies, TV shows or actors"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
    </div>
  );
}
