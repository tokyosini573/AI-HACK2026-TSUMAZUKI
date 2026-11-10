import { listReplays } from "@/lib/replay";
import { ReplayView } from "../view";

/**
 * 実行ごとのリプレイ。
 *
 * 以前は /replay?run=<id> をサーバーで読んでいたが、公開版は静的書き出し（GitHub Pages）なので
 * 実行 id をパスに載せて、ビルド時に全部の画面を作っておく。
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return listReplays().map((run) => ({ run }));
}

export default async function ReplayRunPage({ params }: { params: Promise<{ run: string }> }) {
  const { run } = await params;
  return <ReplayView run={decodeURIComponent(run)} />;
}
