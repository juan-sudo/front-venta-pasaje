import { X } from "lucide-react"

import type { StepTab } from "../types"

type SalesFlowHeaderProps = {
  activeStep: StepTab
  stepTabs: readonly StepTab[]
  onBack: () => void
  onStepChange: (step: StepTab) => void
}

export function SalesFlowHeader({
  activeStep,
  stepTabs,
  onBack,
  onStepChange,
}: SalesFlowHeaderProps) {
  return (
    <>
      <div className="flex items-center border-b border-slate-200 px-5 py-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-800 transition hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
          <p className="text-[15px] font-semibold text-slate-900">
            Trujillo <span className="text-slate-400">-&gt;</span> Lima
          </p>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white px-5">
        <div className="mx-auto flex max-w-[460px] items-center justify-center gap-8">
          {stepTabs.map((step) => {
            const isActive = step === activeStep
            return (
              <button
                key={step}
                type="button"
                onClick={() => onStepChange(step)}
                className={`border-b-[3px] px-2 py-4 text-[15px] transition ${
                  isActive
                    ? "border-[#e23d43] font-semibold text-[#e23d43]"
                    : "border-transparent text-slate-800"
                }`}
              >
                {step}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
