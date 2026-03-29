import { RATE_LIMITS } from "@/lib/constants";

export function RateLimitsTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-dark-secondary text-[rgba(255,255,255,0.5)] text-xs uppercase tracking-widest">
            <th className="text-left px-6 py-4 font-semibold">Tier</th>
            <th className="text-right px-6 py-4 font-semibold">Requests / min</th>
            <th className="text-right px-6 py-4 font-semibold">Requests / day</th>
            <th className="text-right px-6 py-4 font-semibold">Burst limit</th>
          </tr>
        </thead>
        <tbody>
          {RATE_LIMITS.map((row, i) => (
            <tr
              key={row.tier}
              className={
                i % 2 === 0
                  ? "bg-[rgba(255,255,255,0.02)]"
                  : "bg-[rgba(255,255,255,0.04)]"
              }
            >
              <td className="px-6 py-4 font-semibold text-white/90">{row.tier}</td>
              <td className="px-6 py-4 text-right font-mono text-brand-gold">
                {row.requestsPerMinute.toLocaleString("en-US")}
              </td>
              <td className="px-6 py-4 text-right font-mono text-white/70">
                {row.requestsPerDay.toLocaleString("en-US")}
              </td>
              <td className="px-6 py-4 text-right font-mono text-white/70">
                {row.burstLimit.toLocaleString("en-US")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
