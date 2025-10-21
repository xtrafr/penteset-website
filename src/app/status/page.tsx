export default function StatusPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-4xl font-bold text-primary mb-4">
          CyberLearn Status
        </h1>
        <p className="text-muted-foreground mb-6">
          Platform is running successfully!
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Next.js:</span>
            <span className="text-green-500">✓ Active</span>
          </div>
          <div className="flex justify-between">
            <span>Tailwind CSS:</span>
            <span className="text-green-500">✓ Active</span>
          </div>
          <div className="flex justify-between">
            <span>TypeScript:</span>
            <span className="text-green-500">✓ Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}