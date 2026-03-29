import { CodeBlock } from "@/components/shared/code-block";
import type { ApiEndpoint } from "@/lib/constants";

const METHOD_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  GET: {
    bg: "bg-green-500/20",
    text: "text-green-400",
    border: "border-green-500",
  },
  POST: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500",
  },
  PUT: {
    bg: "bg-yellow-500/20",
    text: "text-yellow-400",
    border: "border-yellow-500",
  },
  DELETE: {
    bg: "bg-red-500/20",
    text: "text-red-400",
    border: "border-red-500",
  },
};

interface EndpointDocProps {
  endpoint: ApiEndpoint;
}

export function EndpointDoc({ endpoint }: EndpointDocProps) {
  const styles = METHOD_STYLES[endpoint.method] ?? METHOD_STYLES["GET"];

  return (
    <div
      className={`bg-dark-secondary rounded-xl p-6 mb-6 border-l-4 ${styles.border}`}
    >
      {/* Method badge + path */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`${styles.bg} ${styles.text} text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded`}
        >
          {endpoint.method}
        </span>
        <code className="font-mono text-lg text-white/90">{endpoint.path}</code>
      </div>

      {/* Description */}
      <p className="text-[rgba(255,255,255,0.6)] mb-5 leading-relaxed">
        {endpoint.description}
      </p>

      {/* Request body */}
      {endpoint.requestBody && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-2">
            Request
          </h4>
          <CodeBlock code={endpoint.requestBody} language="json" />
        </div>
      )}

      {/* Response body */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-2">
          Response
        </h4>
        <CodeBlock code={endpoint.responseBody} language="json" />
      </div>
    </div>
  );
}
