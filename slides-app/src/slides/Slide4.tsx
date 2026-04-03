import { Settings2, Cpu, ArrowRight, Route } from "lucide-react";

export function Slide4() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto w-full py-12 px-4">
        
        {/* React Flowchart */}        
        <div className="rounded-xl border border-gray-200 bg-white p-12 shadow-sm overflow-x-auto whitespace-nowrap custom-scrollbar mb-10">
          <div className="flex items-center min-w-[1150px] justify-between font-sans">
            
            {/* Input */}
            <div className="px-5 py-4 bg-slate-100 border-2 border-slate-300 rounded-full font-bold text-slate-700 shadow-sm z-10 text-center leading-tight">
              Input<br/>Text
            </div>

            <ArrowRight className="text-slate-400 mx-2 shrink-0 size-6" />

            {/* Models */}
            <div className="relative p-5 bg-purple-50 border-2 border-purple-200 rounded-xl flex flex-col gap-3 shadow-sm z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap flex items-center gap-1 text-xs">
                <Cpu className="size-4" /> Models
              </div>
              <div className="px-4 py-2 bg-white border border-purple-200 rounded-lg text-center text-sm font-bold text-purple-900 shadow-sm">BERT</div>
              <div className="px-4 py-2 bg-white border border-purple-200 rounded-lg text-center text-sm font-bold text-purple-900 shadow-sm">DistilBERT</div>
              <div className="px-4 py-2 bg-white border border-purple-200 rounded-lg text-center text-sm font-bold text-purple-900 shadow-sm">RoBERTa</div>
            </div>

            <ArrowRight className="text-slate-400 mx-2 shrink-0 size-6" />

            {/* Classifier Decision */}
            <div className="px-4 py-2 bg-orange-600 border-2 border-orange-700 rounded-lg text-sm font-bold text-white shadow-md z-10 text-center whitespace-nowrap mx-2 flex items-center gap-1.5">
              <Route className="size-4" />
              Classifier<br/>Path
            </div>

            {/* Split Paths */}
            <div className="flex items-stretch ml-2 mr-2 relative">
              {/* Left Fork Connector */}
              <div className="w-10 shrink-0 border-t-2 border-b-2 border-l-2 border-slate-300 rounded-l-xl my-[3.5rem] relative">
                <div className="absolute top-1/2 -left-5 w-5 border-t-2 border-slate-300 -translate-y-1/2"></div>
              </div>

              <div className="flex flex-col justify-between gap-6 py-2">
                {/* GRU Path */}
                <div className="flex items-center gap-4 bg-blue-50 border-2 border-blue-200 p-5 rounded-xl relative z-10 shadow-sm">
                  <div className="absolute -top-4 left-4 bg-blue-600 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider text-xs">GRU</div>
                  <div className="flex flex-col items-center bg-white border border-blue-200 p-3 rounded-lg shadow-sm w-40">
                    <span className="text-sm font-bold text-blue-900 text-center">Bi-GRU</span>
                    <span className="text-xs text-blue-600 text-center mt-1 whitespace-normal leading-tight">Processes Full Sequence<br/>(Hidden Neurons)</span>
                  </div>
                  <ArrowRight className="text-blue-300 shrink-0 size-6" />
                  <div className="flex flex-col items-center bg-white border border-blue-200 p-3 rounded-lg shadow-sm w-32">
                    <span className="text-sm font-bold text-blue-900 text-center">Concat &<br/>Dropout</span>
                  </div>
                  <ArrowRight className="text-blue-300 shrink-0 size-6" />
                  <div className="flex flex-col items-center bg-white border border-blue-200 p-3 rounded-lg shadow-sm w-40">
                    <span className="text-sm font-bold text-blue-900 text-center">FC Layer</span>
                    <span className="text-xs text-blue-600 text-center mt-1 whitespace-normal leading-tight">Maps to N Classes</span>
                  </div>
                </div>

                {/* Linear Path */}
                <div className="flex items-center gap-4 bg-emerald-50 border-2 border-emerald-200 p-5 rounded-xl relative z-10 shadow-sm">
                  <div className="absolute -top-4 left-4 bg-emerald-600 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider text-xs">Linear</div>
                  <div className="flex flex-col items-center bg-white border border-emerald-200 p-3 rounded-lg shadow-sm w-40">
                    <span className="text-sm font-bold text-emerald-900 text-center">Pooler</span>
                    <span className="text-xs text-emerald-600 text-center mt-1 whitespace-normal leading-tight">Extracts CLS Token</span>
                  </div>
                  <ArrowRight className="text-emerald-300 shrink-0 size-6" />
                  <div className="flex flex-col items-center bg-white border border-emerald-200 p-3 rounded-lg shadow-sm w-32">
                    <span className="text-sm font-bold text-emerald-900 text-center">Hidden Layer<br/>& Dropout</span>
                    <span className="text-xs text-emerald-600 text-center mt-1 whitespace-normal leading-tight">Linear + ReLU<br/>(Hidden Neurons)</span>
                  </div>
                  <ArrowRight className="text-emerald-300 shrink-0 size-6" />
                  <div className="flex flex-col items-center bg-white border border-emerald-200 p-3 rounded-lg shadow-sm w-40">
                    <span className="text-sm font-bold text-emerald-900 text-center">FC Layer</span>
                    <span className="text-xs text-emerald-600 text-center mt-1 whitespace-normal leading-tight">Maps to N Classes</span>
                  </div>
                </div>
              </div>

              {/* Right Merge Connector */}
              <div className="w-6 shrink-0 border-t-2 border-b-2 border-r-2 border-slate-300 rounded-r-xl my-[3.5rem] relative">
                <div className="absolute top-1/2 -right-3 w-3 border-t-2 border-slate-300 -translate-y-1/2"></div>
              </div>
            </div>

            <ArrowRight className="text-slate-400 mx-2 shrink-0 size-6" />

            {/* Hyperparameters */}
            <div className="relative p-5 bg-rose-50 border-2 border-rose-200 rounded-xl flex flex-col gap-3 shadow-sm z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap flex items-center gap-1 text-xs">
                <Settings2 className="size-4" /> Hyperparameters
              </div>
              <div className="px-4 py-2 bg-white border border-rose-200 rounded-lg text-center text-sm font-bold text-rose-900 shadow-sm">Fine-Tuning Mode</div>
              <div className="px-4 py-2 bg-white border border-rose-200 rounded-lg text-center text-sm font-bold text-rose-900 shadow-sm">Learning Rate</div>
              <div className="px-4 py-2 bg-white border border-rose-200 rounded-lg text-center text-sm font-bold text-rose-900 shadow-sm">Epochs</div>
              <div className="px-4 py-2 bg-white border border-rose-200 rounded-lg text-center text-sm font-bold text-rose-900 shadow-sm">Batch Size</div>
              <div className="px-4 py-2 bg-white border border-rose-200 rounded-lg text-center text-sm font-bold text-rose-900 shadow-sm">Eval Frequency</div>
            </div>

            <ArrowRight className="text-slate-400 mx-2 shrink-0 size-6" />

            {/* Output */}
            <div className="px-5 py-4 bg-slate-800 border-2 border-slate-900 rounded-lg font-bold text-white shadow-md z-10 text-center leading-tight">
              Output<br/>Logits
            </div>

          </div>
        </div>

        {/* Model Comparison Table */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden mb-8">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-gray-200">
              <tr>
                <th className="py-2 px-4 font-semibold text-slate-700">Base Model (BERT Family)</th>
                <th className="py-2 px-4 font-semibold text-slate-700">Parameters</th>
                <th className="py-2 px-4 font-semibold text-slate-700">Characteristics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-slate-600 text-sm h-full">
              <tr>
                <td className="py-3 px-4 font-medium text-slate-900">DistilBERT</td>
                <td className="py-3 px-4">66M</td>
                <td className="py-3 px-4">Compressed version of BERT — smaller and faster, retains most performance</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-900">BERT</td>
                <td className="py-3 px-4">110M</td>
                <td className="py-3 px-4">Standard baseline, bidirectional context</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-900">RoBERTa</td>
                <td className="py-3 px-4">125M</td>
                <td className="py-3 px-4">Optimized training procedure, best raw accuracy</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
