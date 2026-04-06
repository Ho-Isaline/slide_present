import flowchartSvg from "../assets/flowchart.svg";

export function Slide4() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto w-full py-6 px-4">
        
        {/* SVG Flowchart */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm overflow-x-auto custom-scrollbar mb-10 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
          <img
            src={flowchartSvg}
            alt="Model training pipeline flowchart"
            className="block min-w-[1000px] w-[90%] mx-auto h-auto object-contain"
          />
        </div>

        {/* Model Comparison Table */}
        {/* <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden mb-8">
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
        </div> */}

      </div>
    </div>
  );
}
