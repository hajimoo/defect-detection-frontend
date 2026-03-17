# Defect Detection Frontend

本プロジェクトは、CNNベースの欠陥検出システムのためのReactフロントエンドです。

## 概要
ユーザーが検査画像をアップロードすると、バックエンドのモデルから欠陥検出結果を取得し表示します。

製造業の検査システムにおいては、欠陥の見逃し（False Negative）が重大なリスクとなるため、本プロジェクトではAccuracyではなくRecallを重視した設計思想に基づいています。

---

## 機能
- 画像アップロード
- FastAPIバックエンドとの連携（/predict）
- 予測結果（ラベル・信頼度）の表示
- シンプルなUIによる操作性

---

## 技術スタック
- React（Vite）
- Tailwind CSS
- JavaScript（ES6+）

---

## 画面フロー
1. 画像を選択  
2. Uploadボタンをクリック  
3. バックエンドAPIにリクエスト送信  
4. 予測結果を画面に表示  

---

## API連携
- Endpoint: `POST /predict`

レスポンス例:

```json
{
  "image_name": "sample.jpg",
  "prediction": "defect",
  "confidence": 0.91
}
```

---

## 実行方法

```bash
npm install
npm run dev
```

---

## 注意事項

- バックエンド（FastAPI）が起動している必要があります
- デフォルトでは [http://127.0.0.1:8000](http://127.0.0.1:8000) に接続します

---

## 今後の改善点

- 画像プレビュー機能の追加
- エラーハンドリングの改善
- UI/UXの向上
- レスポンシブ対応

---

## 関連リポジトリ

- Backend: https://github.com/hajimoo/defect-detection-api
>>>>>>> 566f2d7cd7102e81b5a5405d67b62c308e189f8d
