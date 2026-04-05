import { Brain, ArchiveIcon, Target, BrainCog, LogOut } from "lucide-react";

type TopNavProps = {
  variant?: "app" | "title";
  title?: string;
};

export function TopNav({ variant = "app", title }: TopNavProps) {
  if (variant === "title") {
    return (
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center gap-8">
            <div className="flex items-center gap-2">
              <Brain className="size-8 text-blue-600" />
              <span className="font-semibold text-xl">{title}</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center gap-8">
          <div className="flex items-center gap-2">
            <Brain className="size-8 text-blue-600" />
            <span className="font-semibold text-xl">Learn DL</span>
          </div>
          
          <div className="flex gap-1">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-blue-50 text-blue-600">
              <BrainCog className="size-4" />
              Training
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 cursor-pointer">
              <Target className="size-4" />
              Prediction
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 cursor-pointer">
              <ArchiveIcon className="size-4" />
              Archive
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <span className="text-sm text-gray-500">Demo User</span>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
            >
              <LogOut className="size-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
