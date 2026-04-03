export function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
      <h1 className="text-5xl font-extrabold tracking-tight mb-8">LearnDL</h1>
      <h2 className="text-3xl font-semibold mb-6 text-slate-800">Group 17</h2>
      <p className="text-xl mb-8 text-slate-600">Der-Chien Chang &nbsp;&bull;&nbsp; I-Hsuan Ho &nbsp;&bull;&nbsp; Phyllis Wu</p>
      <div className="space-y-2 text-lg text-slate-500 mb-12">
        <p>Electrical & Computer Engineering</p>
      </div>
      <p className="text-2xl font-medium text-slate-700 mb-8">Applied Deep Learning – Winter 2026</p>
      <img src="/logo_uoft.png" alt="UofT" className="h-24 object-contain" />
    </div>
  );
}
