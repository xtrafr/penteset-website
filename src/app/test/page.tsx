export default function TestPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Test Page
        </h1>
        <p className="text-muted-foreground">
          If you can see this page with proper styling, the deployment is working!
        </p>
        <div className="mt-8 p-4 bg-card border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Styling Test</h2>
          <div className="flex gap-2 justify-center">
            <div className="w-4 h-4 bg-primary rounded"></div>
            <div className="w-4 h-4 bg-secondary rounded"></div>
            <div className="w-4 h-4 bg-accent rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}