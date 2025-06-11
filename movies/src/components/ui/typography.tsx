interface TypographyProps {
  text: string;
}

export function TypographyH2({ text }: TypographyProps) {
  return (
    <h2 className=" pb-2 text-2xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
}


export function TypographyH3({ text }: TypographyProps) {
  return (
    <h3 className=" pb-2 text-xl font-semibold tracking-tight first:mt-0">
      {text}
    </h3>
  );
}
