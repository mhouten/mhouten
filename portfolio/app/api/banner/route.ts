import type { NextRequest } from "next/server";

export function GET(request: NextRequest): Response {
  const theme = request.nextUrl.searchParams.get("theme") ?? "dark";
  const isLight = theme === "light";

  const colors = {
    background: isLight ? "#ffffff" : "#0d1117",
    foreground: isLight ? "#24292f" : "#f0f6fc",
    secondary: isLight ? "#57606a" : "#8b949e",
    border: isLight ? "#d0d7de" : "#30363d",
    panel: isLight ? "#f6f8fa" : "#161b22",
    accent: "#f25623",
  };

  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="320"
      viewBox="0 0 1200 320"
      role="img"
      aria-labelledby="banner-title banner-description"
    >
      <title id="banner-title">
        Shayan Gholami — Senior DevOps Engineer
      </title>

      <desc id="banner-description">
        GitHub profile banner for Shayan Gholami, focused on DevOps,
        platform engineering, Linux, Kubernetes, automation and CI/CD.
      </desc>

      <defs>
        <linearGradient
          id="background-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stop-color="${colors.background}"
          />

          <stop
            offset="100%"
            stop-color="${colors.panel}"
          />
        </linearGradient>

        <linearGradient
          id="accent-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stop-color="${colors.accent}"
            stop-opacity="0.30"
          />

          <stop
            offset="100%"
            stop-color="${colors.accent}"
            stop-opacity="0.02"
          />
        </linearGradient>

        <filter
          id="soft-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="16"
            flood-color="#000000"
            flood-opacity="0.18"
          />
        </filter>
      </defs>

      <rect
        x="12"
        y="12"
        width="1176"
        height="296"
        rx="24"
        fill="url(#background-gradient)"
        stroke="${colors.border}"
        stroke-width="2"
        filter="url(#soft-shadow)"
      />

      <circle
        cx="1080"
        cy="20"
        r="220"
        fill="url(#accent-gradient)"
      />

      <circle
        cx="1180"
        cy="310"
        r="180"
        fill="${colors.accent}"
        opacity="0.05"
      />

      <circle
        cx="980"
        cy="300"
        r="110"
        fill="${colors.accent}"
        opacity="0.025"
      />

      <rect
        x="70"
        y="61"
        width="74"
        height="8"
        rx="4"
        fill="${colors.accent}"
      />

      <text
        x="70"
        y="133"
        fill="${colors.foreground}"
        font-family="Inter, Arial, Helvetica, sans-serif"
        font-size="49"
        font-weight="700"
        letter-spacing="-1"
      >
        Shayan Gholami
      </text>

      <text
        x="70"
        y="181"
        fill="${colors.accent}"
        font-family="Inter, Arial, Helvetica, sans-serif"
        font-size="27"
        font-weight="600"
      >
        Senior DevOps Engineer
      </text>

      <text
        x="70"
        y="226"
        fill="${colors.secondary}"
        font-family="Inter, Arial, Helvetica, sans-serif"
        font-size="20"
      >
        Kubernetes • Linux • CI/CD • Automation • Platform Engineering
      </text>

      <text
        x="70"
        y="267"
        fill="${colors.secondary}"
        font-family="Inter, Arial, Helvetica, sans-serif"
        font-size="17"
      >
        Building reliable infrastructure and scalable delivery platforms
      </text>

      <g transform="translate(935 92)">
        <rect
          width="190"
          height="136"
          rx="20"
          fill="${colors.panel}"
          stroke="${colors.border}"
          stroke-width="2"
        />

        <circle
          cx="25"
          cy="24"
          r="5"
          fill="#ff5f56"
        />

        <circle
          cx="43"
          cy="24"
          r="5"
          fill="#ffbd2e"
        />

        <circle
          cx="61"
          cy="24"
          r="5"
          fill="#27c93f"
        />

        <text
          x="24"
          y="72"
          fill="${colors.accent}"
          font-family="monospace"
          font-size="22"
          font-weight="700"
        >
          $ whoami
        </text>

        <text
          x="24"
          y="102"
          fill="${colors.foreground}"
          font-family="monospace"
          font-size="16"
        >
          devops-engineer
        </text>

        <rect
          x="24"
          y="115"
          width="9"
          height="3"
          rx="1"
          fill="${colors.accent}"
        />
      </g>
    </svg>
  `.trim();

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}