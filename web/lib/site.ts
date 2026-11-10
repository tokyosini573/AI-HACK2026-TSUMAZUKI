/**
 * 公開版（GitHub Pages）とローカルの差分はここに集める。
 *
 * - BASE_PATH: Pages はリポジトリ名の下に置かれる（/AI-HACK2026-TSUMAZUKI）。
 *   next/link は自動で付けるが、next/image と <img> の src には自分で付ける必要がある。
 * - STATIC_DEMO: 公開版では即時実行（ブラウザ起動 + LLM 呼び出し）を出さない。
 *   サーバーが要るうえ、押されるたびにモデル呼び出しの原価が出るため。
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const STATIC_DEMO = process.env.NEXT_PUBLIC_STATIC_DEMO === "1";
export const REPO_URL = "https://github.com/tokyosini573/AI-HACK2026-TSUMAZUKI";

/** public/ 配下のファイルを指すパスに BASE_PATH を付ける */
export function asset(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}
