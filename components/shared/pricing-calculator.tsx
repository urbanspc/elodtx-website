"use client";

import { useState, useId } from "react";

interface PricingCalculatorProps {
  className?: string;
}

const MIN_MAU = 1000;
const MAX_MAU = 500000;
const LOG_MIN = Math.log(MIN_MAU);
const LOG_MAX = Math.log(MAX_MAU);

function sliderToMau(sliderValue: number): number {
  // sliderValue is 0–100, map to log scale
  const logValue = LOG_MIN + (sliderValue / 100) * (LOG_MAX - LOG_MIN);
  return Math.round(Math.exp(logValue));
}

function mauToSlider(mau: number): number {
  return ((Math.log(mau) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * 100;
}

function formatMau(mau: number): string {
  return mau.toLocaleString("en-US");
}

interface Tier {
  label: string;
  price: number | null;
  priceLabel: string;
  contactSales: boolean;
}

function getTier(mau: number): Tier {
  if (mau < 5000) {
    return { label: "Starter", price: 990, priceLabel: "$990/mo", contactSales: false };
  } else if (mau < 50000) {
    return { label: "Growth", price: 3900, priceLabel: "$3,900/mo", contactSales: false };
  } else {
    return { label: "Scale", price: null, priceLabel: "Custom pricing", contactSales: true };
  }
}

function formatCostPerUser(price: number, mau: number): string {
  const cost = price / mau;
  return `$${cost.toFixed(2)}/user`;
}

export function PricingCalculator({ className }: PricingCalculatorProps) {
  const [sliderValue, setSliderValue] = useState(mauToSlider(25000));
  const rawId = useId();
  const sliderId = rawId.replace(/:/g, "-");
  const mau = sliderToMau(sliderValue);
  const tier = getTier(mau);

  // Gold fill percentage for custom range track
  const fillPercent = sliderValue;

  return (
    <div className={className}>
      <style>{`
        #${sliderId} {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          background: linear-gradient(
            to right,
            #C9A84C 0%,
            #C9A84C ${fillPercent}%,
            #252540 ${fillPercent}%,
            #252540 100%
          );
        }
        #${sliderId}::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #C9A84C;
          cursor: pointer;
          border: 3px solid #0D0D1A;
          box-shadow: 0 0 0 2px #C9A84C;
          transition: box-shadow 0.15s ease;
        }
        #${sliderId}::-webkit-slider-thumb:hover {
          box-shadow: 0 0 0 4px rgba(201,168,76,0.3);
        }
        #${sliderId}::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #C9A84C;
          cursor: pointer;
          border: 3px solid #0D0D1A;
          box-shadow: 0 0 0 2px #C9A84C;
        }
        #${sliderId}::-moz-range-track {
          height: 6px;
          border-radius: 3px;
          background: #252540;
        }
      `}</style>

      <div
        style={{
          backgroundColor: "#1A1A2E",
          borderRadius: 16,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* Header */}
        <div>
          <p style={{ color: "#888", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
            Monthly Active Users
          </p>
          <p
            style={{
              color: "#C9A84C",
              fontSize: 32,
              fontWeight: 700,
              lineHeight: 1,
              fontFamily: "var(--font-jetbrains, monospace)",
              letterSpacing: -0.5,
            }}
          >
            {formatMau(mau)}
          </p>
        </div>

        {/* Slider */}
        <div>
          <input
            id={sliderId}
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 6,
              fontSize: 11,
              color: "#666",
            }}
          >
            <span>1K</span>
            <span>500K</span>
          </div>
        </div>

        {/* Tier result */}
        <div
          style={{
            backgroundColor: "#252540",
            borderRadius: 12,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span
                style={{
                  backgroundColor: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                  border: "1px solid rgba(201,168,76,0.35)",
                  borderRadius: 20,
                  padding: "2px 10px",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 0.5,
                }}
              >
                {tier.label}
              </span>
            </div>
            <p style={{ color: "#eee", fontSize: 20, fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
              {tier.priceLabel}
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            {tier.contactSales ? (
              <button
                style={{
                  backgroundColor: "#C9A84C",
                  color: "#0D0D1A",
                  border: "none",
                  borderRadius: 20,
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: 0.3,
                  whiteSpace: "nowrap",
                }}
              >
                Contact sales
              </button>
            ) : (
              <div>
                <p style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, margin: 0 }}>
                  {formatCostPerUser(tier.price!, mau)}
                </p>
                <p style={{ color: "#666", fontSize: 11, margin: "2px 0 0 0" }}>per user</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
