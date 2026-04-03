import { Zap, Database, ArrowRight, SplitSquareHorizontal } from "lucide-react";

export function Slide3() {
  const preprocessingSteps = [
    {
      technique: "Lowercase",
      before: `"Hello World! It's AMAZING."`,
      after: `"hello world! it's amazing."`,
      isMono: true
    },
    {
      technique: "Remove punctuation",
      before: `"hello world! it's amazing."`,
      after: `"hello world its amazing"`,
      isMono: true
    },
    {
      technique: "Remove stopwords",
      before: `"hello world its amazing"`,
      after: `"hello world amazing"`,
      isMono: true
    },
    {
      technique: "Lemmatization",
      before: `"running and jumped"`,
      after: `"run and jump"`,
      isMono: true
    },
    {
      technique: "Handle emails",
      before: `"Contact test@example.com"`,
      after: `"Contact [EMAIL]"`,
      isMono: true
    },
    {
      technique: "Handle URLs",
      before: `"Visit https://example.com"`,
      after: `"Visit [URL]"`,
      isMono: true
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto w-full py-12 px-6">
        
        {/* Rationale Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Zap className="size-5 text-blue-600" /> 
              Why Text Data?
            </h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              Trains significantly faster than images, giving users quick, interactive feedback.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 shadow-sm">
            <h4 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
              <Database className="size-5 text-indigo-600" /> 
              Why Multiple Datasets?
            </h4>
            <p className="text-sm text-indigo-800 leading-relaxed">
              Offers varying levels of complexity.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden mb-10">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-gray-200">
              <tr>
                <th className="py-2 px-4 font-semibold text-slate-700">Dataset</th>
                <th className="py-2 px-4 font-semibold text-slate-700">Size</th>
                <th className="py-2 px-4 font-semibold text-slate-700">Task</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-slate-600">
              <tr>
                <td className="py-2 px-4 font-medium text-slate-900">SMS Spam Collection</td>
                <td className="py-2 px-4">5,574 messages</td>
                <td className="py-2 px-4">Binary spam detection</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-medium text-slate-900">IMDB Reviews</td>
                <td className="py-2 px-4">49,582 reviews</td>
                <td className="py-2 px-4">Binary sentiment analysis</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-medium text-slate-900">20 Newsgroups</td>
                <td className="py-2 px-4">18,846 posts</td>
                <td className="py-2 px-4">
                  20-class topic classification
                  <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                    Most Challenging
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-gray-200">
                <tr>
                  <th className="py-2 px-4 font-semibold text-slate-700 w-1/3">Preprocessing Option</th>
                  <th className="py-2 px-4 font-semibold text-slate-700 w-1/3">Before</th>
                  <th className="py-2 px-4 font-semibold text-slate-700 w-1/3">After</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-slate-600 text-sm">
                {preprocessingSteps.map((step, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-4 font-medium text-slate-900">{step.technique}</td>
                    <td className={`py-2 px-4 text-slate-500 ${step.isMono ? 'font-mono' : ''}`}>{step.before}</td>
                    <td className={`py-2 px-4 text-green-700 ${step.isMono ? 'font-mono' : ''}`}>
                      {step.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex-1">
              <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <SplitSquareHorizontal className="size-5 text-slate-600" /> 
                Data Splitting
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-slate-900 mb-1">Train/Test Split</div>
                  <div className="text-sm text-slate-600">Configurable ratio (e.g., 80% Training / 20% Validation) to evaluate model performance on unseen data.</div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm font-medium text-slate-900 mb-1">Stratified Split</div>
                  <div className="text-sm text-slate-600">Ensures the exact class ratios are preserved across both training and validation sets.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Banner */}
        <div className="bg-slate-800 text-white p-5 rounded-xl shadow-md flex items-center justify-center gap-3 font-medium">
          Once configured, everything gets fed into our backend pipeline
          <ArrowRight className="size-5" />
        </div>
      </div>
    </div>
  );
}
