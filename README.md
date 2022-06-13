# CSSアニメーション
毎日アニメーションの実装
## ボタン
| 実際の動き | タイトル | 説明 |
| ------------- | ------------- | ------------- |
| ![May-27-2022 16-14-04](https://user-images.githubusercontent.com/69744608/170650314-68e73186-9372-4d86-a84f-5b0d011f60e7.gif) | シンプル | ホバーまたはフォーカスすると、背景色・文字色・枠線の色が変更  |
| ![May-28-2022 10-43-06](https://user-images.githubusercontent.com/69744608/170804915-d1f8049c-5484-44e7-8d65-2d0de84347df.gif) | 右からスライド | ホバーまたはフォーカスすると、黒い背景が右からスライドしてくる  |
| ![May-29-2022 08-38-29](https://user-images.githubusercontent.com/69744608/170846100-9db2b18a-aa54-45e0-b791-0f4426430ebc.gif) | 左からスライド | ホバーまたはフォーカスすると、黒い背景が左からスライドしてくる |
| ![May-29-2022 08-52-28](https://user-images.githubusercontent.com/69744608/170846318-2d4cc912-cbcc-4c0b-837c-99eb324d88b2.gif) | 上からスライド | ホバーまたはフォーカスすると、上から黒い背景がスライドしてくる |
| ![May-29-2022 08-58-06](https://user-images.githubusercontent.com/69744608/170846472-cdbcfe89-0f63-4848-80ce-e53e22df635e.gif) | 下からスライド | ホバーまたはフォーカスすると、黒い背景が下からスライドしてくる |
| ![May-30-2022 09-35-59](https://user-images.githubusercontent.com/69744608/170898310-d2832f37-6876-4ad6-9e2a-ffecbecdbc60.gif) | オフセット | ホバーまたはフォーカスすると、薄黒い背景が元の位置に戻る |
| ![May-30-2022 14-10-32](https://user-images.githubusercontent.com/69744608/170921085-02f3cfeb-889e-494f-a683-240503b26e71.gif) | 右方向へスライド | ホバーまたはフォーカスすると、右方向へスライドする
| ![Jun-01-2022 07-32-40](https://user-images.githubusercontent.com/69744608/171294903-774acad6-8cd5-4043-8acb-da1267eecd0f.gif) | 波紋 | ホバーまたはフォーカスすると、波紋が出現する。box-shadowを使って、影の広がりを指定
| ![Jun-02-2022 11-15-44](https://user-images.githubusercontent.com/69744608/171540548-c1fc1e96-5529-433e-aa57-f31720d3f377.gif) | スキャン | ホバーまたはフォーカスすると、テキストがスキャンされ色が変わる
| ![Jun-03-2022 08-01-12](https://user-images.githubusercontent.com/69744608/171751884-14e241b8-22f9-4501-94d4-72b72b103e16.gif) | 塗り替え | ホバーまたはフォーカスすると、背景色で文字色を塗り替え
| ![Jun-05-2022 10-37-42](https://user-images.githubusercontent.com/69744608/172031729-5f60be13-2bbd-458d-b6ef-978fe505403b.gif) | 六角形 | ホバーまたはフォーカスすると、六角形になるボタン
| ![Jun-06-2022 07-22-22](https://user-images.githubusercontent.com/69744608/172073028-234a8fe1-0d68-4451-af58-d31fe9cdaf36.gif) | バツ印 | ホバーまたはフォーカスすると、バツ印になるボタン
| ![Jun-09-2022 08-17-59](https://user-images.githubusercontent.com/69744608/172733143-ac5690c5-beab-497c-af29-a9b3d794284a.gif) | ゴムのように弾む | ホバーまたはフォーカスすると、ゴムのように弾む
| ![Jun-10-2022 10-17-02](https://user-images.githubusercontent.com/69744608/172970959-a5bc97af-de03-4bdd-b077-ad4b105a62eb.gif) | 衝突 | ホバーまたはフォーカスすると、球同士が中央で衝突して全体に広がる
|![Jun-11-2022 09-26-49](https://user-images.githubusercontent.com/69744608/173165310-e2172f57-2edf-4925-a52a-e5173e15e71b.gif) | 円が伸びる | ホバーまたはフォーカスすると、円が伸びる

## テキスト
| 実際の動き | タイトル | 説明 |
| ---------- | -------------- | ------------- |
|   ![May-27-2022 16-19-40](https://user-images.githubusercontent.com/69744608/170651130-b019934d-0cdd-41b2-8eb2-034913c6c232.gif)| タイピング風 | タイピング風のテキストアニメーション。animation-timing-functionにsteps(19,end)を指定してコマ送りにしている |
| ![May-31-2022 08-02-49](https://user-images.githubusercontent.com/69744608/171066492-857a70da-79b9-400b-ada3-3f5a5815b8ac.gif) | 円形に沿ってループ | 円形ループアニメーション。文字数を調べるにはJavaScriptが必要 
| ![Jun-04-2022 09-29-32](https://user-images.githubusercontent.com/69744608/171969286-21bd1071-c53e-4b0e-a6a8-796adf90c0e3.gif) | 上からテキストが降ってくる | 上からテキストが降ってくるアニメーション。animaion-fill-mode:forwards;でアニメーション実行後のスタイルを保持している
| ![Jun-07-2022 08-05-12](https://user-images.githubusercontent.com/69744608/172263521-555a622f-b300-47de-acc7-133a62b98f2c.gif) | 右からスライド | 右からテキストがスライドしてくるアニメーション
| ![Jun-08-2022 07-51-21](https://user-images.githubusercontent.com/69744608/172496139-fb2d97bd-9216-4e72-8647-59c07936e34d.gif) | 文字が弾む | 文字が弾むアニメーションを作成
| ![Jun-08-2022 08-17-12](https://user-images.githubusercontent.com/69744608/172498689-966ed45c-fecc-404b-92b8-8b3a17cd9144.gif) | 文字が鼓動 | 文字が鼓動するアニメーションを作成
| ![Jun-12-2022 09-40-00](https://user-images.githubusercontent.com/69744608/173209524-6035470f-f601-4c46-bed0-a7f02bef46e6.gif) | 背景が左から伸びて出現 | 背景が左から伸びてテキストが出現するアニメーション
| ![Jun-13-2022 09-24-13](https://user-images.githubusercontent.com/69744608/173259887-54e5d822-c72a-436c-b75a-fcd4e498d22a.gif) | ぼわぁ〜ん | ぼわぁ〜んって感じで出現するアニメーション



