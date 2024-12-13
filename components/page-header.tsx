interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </div>
  );
}