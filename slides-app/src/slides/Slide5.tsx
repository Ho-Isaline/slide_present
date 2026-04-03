export function Slide5() {
  const MetricCell = ({ accuracy, time }: { accuracy: string; time: string }) => (
    <div className="inline-flex min-w-[92px] flex-col">
      <span>{accuracy}</span>
      <span className="my-1 border-t border-gray-300" />
      <span>{time}</span>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto w-full py-12 px-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Baseline Table */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Baseline (Linear, Hidden 64, Freeze All)</h3>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 border-b border-gray-200">
                    <tr>
                      <th className="py-2 px-4 font-semibold text-slate-700">
                        <div className="inline-flex min-w-[92px] flex-col">
                          <span>Accuracy</span>
                          <span className="my-1 border-t border-gray-300" />
                          <span>Time</span>
                        </div>
                      </th>
                      <th className="py-2 px-4 font-semibold text-slate-700">BERT</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">DistilBERT</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">RoBERTa</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">Avg Accuracy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-slate-600 text-sm">
                    <tr>
                      <td className="py-2 px-4 font-medium text-slate-900">Spam</td>
                      <td className="py-2 px-4"><MetricCell accuracy="99.2%" time="19s" /></td>
                      <td className="py-2 px-4"><MetricCell accuracy="99.2%" time="12s" /></td>
                      <td className="py-2 px-4"><MetricCell accuracy="99.4%" time="23s" /></td>
                      <td className="py-2 px-4">99.3%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium text-slate-900">IMDB</td>
                      <td className="py-2 px-4"><MetricCell accuracy="87.1%" time="504s" /></td>
                      <td className="py-2 px-4"><MetricCell accuracy="87.4%" time="308s" /></td>
                      <td className="py-2 px-4"><MetricCell accuracy="91.0%" time="495s" /></td>
                      <td className="py-2 px-4">88.5%</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-2 px-4 font-medium text-red-900">News 20</td>
                      <td className="py-2 px-4 text-red-800"><MetricCell accuracy="61.1%" time="233s" /></td>
                      <td className="py-2 px-4 text-red-800"><MetricCell accuracy="62.9%" time="143s" /></td>
                      <td className="py-2 px-4 text-red-800"><MetricCell accuracy="54.6%" time="254s" /></td>
                      <td className="py-2 px-4 text-red-800">59.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Improving News Table */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Improving News 20-Class</h3>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 border-b border-gray-200">
                    <tr>
                      <th className="py-2 px-4 font-semibold text-slate-700">Config Change</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">Best Model</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">Accuracy</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">Δ</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-slate-600 text-sm">
                    <tr>
                      <td className="py-2 px-4">Baseline</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4">62.9%</td>
                      <td className="py-2 px-4 text-gray-400">—</td>
                      <td className="py-2 px-4">143s</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">+ Aggressive Preprocessing</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4">63.1%</td>
                      <td className="py-2 px-4 text-green-600">+0.2%</td>
                      <td className="py-2 px-4">145s</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">+ Hidden 64 → 256</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4">66.4%</td>
                      <td className="py-2 px-4 text-green-600">+3.5%</td>
                      <td className="py-2 px-4">143s</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">+ Linear → GRU</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4">72.8%</td>
                      <td className="py-2 px-4 text-green-600">+9.9%</td>
                      <td className="py-2 px-4">195s</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">+ Unfreeze 3 layers</td>
                      <td className="py-2 px-4 font-semibold text-slate-900">BERT</td>
                      <td className="py-2 px-4">74.2%</td>
                      <td className="py-2 px-4 text-green-600">+11.3%</td>
                      <td className="py-2 px-4">450s</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="py-2 px-4 font-semibold text-slate-900">+ Unfreeze all</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4 font-bold text-slate-900">77.2%</td>
                      <td className="py-2 px-4 font-bold text-green-600">+14.3%</td>
                      <td className="py-2 px-4 font-bold text-slate-900">670s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {/* Key Insights */}
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Key Insights</h3>
            <div className="grid grid-cols-1 gap-4">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong className="block mb-1 text-base">Preprocessing barely helps Transformers</strong>
              BERT-family models already understand natural language structure, so traditional cleaning has minimal impact.
            </p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 shadow-sm">
            <p className="text-sm text-indigo-900 leading-relaxed">
              <strong className="block mb-1 text-base">DistilBERT is highly efficient</strong>
              It offers the best balance, maintaining high performance while training significantly faster than larger models.
            </p>
          </div>
          <div className="bg-violet-50 p-5 rounded-xl border border-violet-100 shadow-sm">
            <p className="text-sm text-violet-900 leading-relaxed">
              <strong className="block mb-1 text-base">Capacity must match complexity</strong>
              Switching from Linear to GRU was essential to provide the capacity needed to separate 20 distinct classes.
            </p>
          </div>
          <div className="bg-fuchsia-50 p-5 rounded-xl border border-fuchsia-100 shadow-sm">
            <p className="text-sm text-fuchsia-900 leading-relaxed">
              <strong className="block mb-1 text-base">The Accuracy vs. Time Trade-off</strong>
              Fine-tuning all layers maximizes accuracy, but comes at the highest computational and time cost.
            </p>
          </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
