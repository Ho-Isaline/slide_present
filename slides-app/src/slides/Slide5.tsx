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
      <div className="max-w-7xl mx-auto w-full py-6 px-6">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            {/* Baseline Table */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Baseline (Linear, 64 Hidden Neurons, Freeze All)</h3>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
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
                  <tbody className="divide-y divide-gray-200 text-slate-600">
                    <tr>
                      <td className="py-2 px-4 font-medium text-slate-900">Spam</td>
                      <td className="py-2 px-4"><MetricCell accuracy="99.2%" time="19s" /></td>
                      <td className="py-2 px-4"><MetricCell accuracy="99.2%" time="12s ⚡️" /></td>
                      <td className="py-2 px-4"><MetricCell accuracy="99.4%" time="23s" /></td>
                      <td className="py-2 px-4">99.3%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium text-slate-900">IMDB</td>
                      <td className="py-2 px-4"><MetricCell accuracy="87.1%" time="504s" /></td>
                      <td className="py-2 px-4"><MetricCell accuracy="87.4%" time="308s ⚡️" /></td>
                      <td className="py-2 px-4 text-green-600 bg-green-50"><MetricCell accuracy="91.0%" time="495s" /></td>
                      <td className="py-2 px-4">88.5%</td>
                    </tr>
                    <tr className="bg-red-50/40">
                      <td className="py-2 px-4 font-medium text-red-900">20 Newsgroups</td>
                      <td className="py-2 px-4 text-red-800"><MetricCell accuracy="61.1%" time="233s" /></td>
                      <td className="py-2 px-4 text-red-800"><MetricCell accuracy="62.9%" time="143s ⚡️" /></td>
                      <td className="py-2 px-4 text-red-800 bg-red-100/50"><MetricCell accuracy="54.6%" time="254s" /></td>
                      <td className="py-2 px-4 text-red-800">59.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Improving News Table */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Improving 20 Newsgroups Classification</h3>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 border-b border-gray-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <th className="py-2 px-4 font-semibold text-slate-700">Config Change</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">Best Model</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">Accuracy</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">Δ</th>
                      <th className="py-2 px-4 font-semibold text-slate-700">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-slate-600">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-4">Baseline</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4">62.9%</td>
                      <td className="py-2 px-4 text-gray-400">—</td>
                      <td className="py-2 px-4">143s</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-4">+ Aggressive Preprocessing</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4">63.1%</td>
                      <td className="py-2 px-4 text-green-600">+0.2%</td>
                      <td className="py-2 px-4">145s</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-4">+ 64 → 256 Hidden Neurons</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4">66.4%</td>
                      <td className="py-2 px-4 text-green-600">+3.5%</td>
                      <td className="py-2 px-4">143s</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-4">+ Linear → GRU</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4">72.8%</td>
                      <td className="py-2 px-4 text-green-600">+9.9%</td>
                      <td className="py-2 px-4">195s</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-4">+ Freeze All → Unfreeze 3 layers</td>
                      <td className="py-2 px-4 font-semibold text-slate-900">BERT</td>
                      <td className="py-2 px-4">74.2%</td>
                      <td className="py-2 px-4 text-green-600">+11.3%</td>
                      <td className="py-2 px-4 text-red-800">450s 🐢</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-4 font-semibold text-slate-900">+ Freeze All → Unfreeze all</td>
                      <td className="py-2 px-4">DistilBERT</td>
                      <td className="py-2 px-4 font-bold text-slate-900">77.2%</td>
                      <td className="py-2 px-4 font-bold text-green-600">+14.3%</td>
                      <td className="py-2 px-4 font-bold text-red-800">670s 🐢</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {/* Key Insights */}
            <h3 className="text-xl font-semibold mb-4 text-slate-800">Key Insights</h3>
            <div className="grid grid-cols-1 gap-4">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong className="block mb-1 text-base">Model Size vs Efficiency Is Not Linear</strong>
              Larger models do not guarantee better results; DistilBERT remains highly competitive while training much faster.
            </p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <p className="text-sm text-indigo-900 leading-relaxed">
              <strong className="block mb-1 text-base">Preprocessing Impact Depends on Model Family</strong>
              Transformer models gain only marginally from aggressive text cleaning compared with traditional architectures.
            </p>
          </div>
          <div className="bg-violet-50 p-5 rounded-xl border border-violet-100 shadow-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <p className="text-sm text-violet-900 leading-relaxed">
              <strong className="block mb-1 text-base">Classifier Capacity Must Match Task Complexity</strong>
              Upgrading from Linear to GRU substantially improves difficult multi-class classification performance.
            </p>
          </div>
          <div className="bg-fuchsia-50 p-5 rounded-xl border border-fuchsia-100 shadow-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <p className="text-sm text-fuchsia-900 leading-relaxed">
              <strong className="block mb-1 text-base">Accuracy vs Time Trade-off Is Explicit</strong>
              More aggressive fine-tuning delivers the highest accuracy, but with a steep increase in training time.
            </p>
          </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
