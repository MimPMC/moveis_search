import { FaBars } from "react-icons/fa6";
import { navLinks } from "../assets/data/data";
import { ContentWrapper } from "./ContentWrapper"; // ✅ Proper import
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { TypographyH3 } from "./ui/typography";

export function Header() {
  return (
    <header className="h-18 bg-white w-full text-black shadow-sm fixed z-100">
      <ContentWrapper className="h-full flex justify-between items-center py-5">
        <TypographyH3 text="The Movie Finder" />
        {/* Desktop Nav */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-6"
        >
          <ul className="flex gap-4 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-gray-500 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="default" className="ml-4 cursor-pointer">
            Sign In
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <FaBars className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 z-200">
              {navLinks.map(({ href, label }) => (
                <DropdownMenuItem key={href} asChild>
                  <a
                    href={href}
                    className="w-full block text-sm cursor-pointer"
                  >
                    {label}
                  </a>
                </DropdownMenuItem>
              ))}
              <Button variant="default" className="w-full mt-2 cursor-pointer">
                Sign In
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ContentWrapper>
    </header>
  );
}
