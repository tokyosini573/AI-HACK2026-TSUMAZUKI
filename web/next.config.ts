import type { NextConfig } from "next";

/**
 * TZ_STATIC=1 のときは GitHub Pages 用の静的書き出し。
 * 即時実行まわり（app 配下の page.live.tsx / route.live.ts）はサーバーが要るので、
 * 拡張子で外してビルド対象から落とす。ローカルの `npm run dev` では今まで通り全部動く。
 */
const isStatic = process.env.TZ_STATIC === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // 워크트리 루트에도 package-lock.json이 있어서 Next가 루트를 잘못 잡는다.
  // 앱은 web/ 안에서 완결된다 — 여기로 고정한다.
  turbopack: { root: __dirname },
  pageExtensions: isStatic ? ["tsx", "ts"] : ["tsx", "ts", "live.tsx", "live.ts"],
  ...(isStatic && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
