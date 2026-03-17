# Defect Detection Frontend

製造業における欠陥検出システムのための React フロントエンドです。  
ユーザーが検査画像をアップロードし、バックエンドの推論 API から欠陥検出結果を取得・表示できるようにすることを目的としています。

本プロジェクトは、ノートブック環境で開発された CNN モデルを実際のアプリケーションとして利用するための UI 層として構築しました。

---

## Project Purpose


バックエンドの推論APIを実際に利用する中で、
「モデル単体ではなく、ユーザーが扱える形で提供する必要がある」と感じたため、
フロントエンドを実装しました。

- 検査画像のアップロード
- 推論 API との連携
- 予測結果の可視化
- シンプルで分かりやすい UI の提供

---

## Features

- 画像アップロード
- FastAPI バックエンドとの連携（`POST /predict`）
- 予測結果（ラベル・信頼度）の表示
- シンプルな UI による操作性

---

## Tech Stack

### Frontend
- React（Vite）
- Tailwind CSS
- JavaScript（ES6+）

---

## Screen Flow

1. 画像を選択  
2. Upload ボタンをクリック  
3. バックエンド API にリクエスト送信  
4. 予測結果を画面に表示  

---

## API Integration

### Endpoint
- `POST /predict`

### Response Example

```json
{
  "image_name": "sample.jpg",
  "prediction": "defect",
  "confidence": 0.91
}
```

---

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/hajimoo/defect-detection-frontend.git
cd defect-detection-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

---

## Notes

- バックエンド（FastAPI）が起動している必要があります
- デフォルトでは `http://127.0.0.1:8000` に接続します

---

## Current Limitations

- 画像プレビュー機能は未実装
- エラーハンドリングの改善余地あり
- レスポンシブ対応は限定的

---

## Future Work

- 画像プレビュー機能の追加
- エラーメッセージ表示の改善
- UI/UX の向上
- レスポンシブ対応
- 推論履歴表示機能の追加

---

## Related Repository

- Backend: [https://github.com/hajimoo/defect-detection-api](https://github.com/hajimoo/defect-detection-api)
