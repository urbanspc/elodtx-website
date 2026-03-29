"use client";

import { AGENTS } from "@/lib/constants";
import { AgentCard } from "@/components/shared/agent-card";
import { SectionReveal } from "@/components/shared/section-reveal";

export function AgentsSection() {
  const firstRow = AGENTS.slice(0, 3);
  const secondRow = AGENTS.slice(3);

  return (
    <section className="py-20">
      <div className="max-w-site mx-auto px-6">
        <SectionReveal direction="up" delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Five Specialized Agents
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] text-center mb-12 mt-4">
            Each one purpose-built for a specific dimension of human connection.
          </p>
        </SectionReveal>

        {/* First row: 3 agents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {firstRow.map((agent, index) => (
            <AgentCard key={agent.name} agent={agent} index={index} />
          ))}
        </div>

        {/* Second row: 2 agents centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {secondRow.map((agent, index) => (
            <div key={agent.name} className="w-full md:w-[calc(33.333%-12px)]">
              <AgentCard agent={agent} index={firstRow.length + index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
