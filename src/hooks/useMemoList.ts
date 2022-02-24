import { useCallback, useState } from "react";

// メモ一覧に関するカスタムフック
export const useMemoList = () => {
  // メモ一覧 State
  const [memos, setMemos] = useState<string[]>([]);

  // メモ追加ロジック
  const addTodo = useCallback(
    (text: string) => {
      // State 変更を正常に検知させるため新たな配列を生成
      const newMemos = [...memos];
      // テキストボックスの入力内容をメモ配列に追加
      // 入力内容がある場合のみ、メモ配列に追加
      text ? newMemos.push(text) : alert(`空なので追加できません。`);
      setMemos(newMemos);
      // 依存配列に忘れずに memos を設定
    },
    [memos]
  );

  // メモ削除ロジック
  const deleteTodo = useCallback(
    (index: number) => {
      // State 変更を正常に検知させるため新たな配列を生成
      const newMemos = [...memos];
      // メモ配列から該当の要素を削除
      newMemos.splice(index, 1);
      setMemos(newMemos);
      if (newMemos.length === 0) alert(`メモが一覧からなくなりました。`);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
