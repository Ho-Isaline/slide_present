import logoUoft from "../assets/logo_uoft.png";
import { Brain } from "lucide-react";

export function Slide1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 px-6 py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-center justify-center">
        <div className="w-full rounded-3xl border border-slate-200/80 bg-white/90 p-12 text-center shadow-xl backdrop-blur">
          <div className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-blue-50 px-5 py-3 text-blue-700">
            <Brain className="size-8 text-blue-600" />
            <span className="text-4xl font-extrabold tracking-tight text-slate-900">LearnDL</span>
          </div>

          <h2 className="mb-2 text-3xl font-semibold text-slate-600">Group 17</h2>
          <div className="mx-auto m-8 h-px w-48 bg-slate-200" />
          <p className="mb-6 text-xl text-slate-600">
            <b>Der-Chien Chang ・ I-Hsuan Ho ・ Phyllis Wu</b>
            <br/>Department of Electrical & Computer Engineering
          </p>

          <div className="mx-auto m-8 h-px w-48 bg-slate-200" />

          <p className="mb-4 text-lg font-medium text-slate-400">Applied Deep Learning - Winter 2026</p>

          <img src={logoUoft} alt="UofT" className="mx-auto h-24 object-contain" />
        </div>
      </div>
    </div>
  );
}
