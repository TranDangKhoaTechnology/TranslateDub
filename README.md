# TranslateDub

> **Dịch phụ đề và lồng tiếng đa nền tảng ngay trong trình duyệt** — Extension trình duyệt giúp bạn xem video nước ngoài với phụ đề tiếng Việt và giọng lồng tiếng tự động.

TranslateDub là một extension trình duyệt (Manifest V3) cho phép bạn **dịch phụ đề** của các video trực tuyến sang ngôn ngữ bạn chọn (mặc định là tiếng Việt), hiển thị **phụ đề song ngữ**, và **lồng tiếng** bằng công nghệ Text-to-Speech. Extension hoạt động trực tiếp trên trang video, không cần mở trang web riêng, và hỗ trợ hàng chục nền tảng video phổ biến.

---

## Mục lục

- [1. Giới thiệu](#1-giới-thiệu)
- [2. Tính năng chính](#2-tính-năng-chính)
- [3. Trang web được hỗ trợ](#3-trang-web-được-hỗ-trợ)
- [4. Các chế độ hoạt động](#4-các-chế-độ-hoạt-động)
- [5. Cách hoạt động](#5-cách-hoạt-động)
- [6. Cài đặt Extension](#6-cài-đặt-extension)
- [7. Hướng dẫn sử dụng](#7-hướng-dẫn-sử-dụng)
- [8. Cấu hình](#8-cấu-hình)
- [9. Quyền Extension](#9-quyền-extension)
- [10. Kiến trúc hệ thống](#10-kiến-trúc-hệ-thống)
- [11. Bảo mật và quyền riêng tư](#11-bảo-mật-và-quyền-riêng-tư)
- [12. Giới hạn hiện tại](#12-giới-hạn-hiện-tại)
- [13. Xử lý lỗi thường gặp](#13-xử-lý-lỗi-thường-gặp)
- [14. Build và đóng gói](#14-build-và-đóng-gói)
- [15. Roadmap](#15-roadmap)
- [16. Changelog](#16-changelog)
- [17. License](#17-license)
- [Phụ lục kỹ thuật](#phụ-lục-kỹ-thuật)

---

## 1. Giới thiệu

**TranslateDub** giải quyết vấn đề rào cản ngôn ngữ khi xem video nước ngoài. Thay vì phải chờ video được thêm phụ đề tiếng Việt hoặc phải tự nghe hiểu ngoại ngữ, extension cho phép bạn:

- **Dịch phụ đề có sẵn** của video sang tiếng Việt (hoặc ngôn ngữ khác) ngay lập tức.
- **Lồng tiếng** bằng giọng đọc tự động để nghe video bằng tiếng Việt mà không cần đọc phụ đề.
- **Xem phụ đề song ngữ** để đối chiếu bản gốc và bản dịch.

**Đối tượng sử dụng:**

- Người xem video học tập (YouTube, Udemy, Coursera, Khan Academy…) muốn hiểu nội dung bằng tiếng Việt.
- Người xem tin tức, phim, giải trí quốc tế.
- Người học ngoại ngữ muốn xem phụ đề song ngữ.
- Những người muốn lồng tiếng tự động cho video dài.

---

## 2. Tính năng chính

| Tính năng | Mô tả |
|---|---|
| **Dịch phụ đề** | Lấy phụ đề có sẵn từ video và dịch sang ngôn ngữ đích bằng Google Translate (không cần server). |
| **Phụ đề song ngữ** | Hiển thị đồng thời phụ đề gốc và phụ đề đã dịch, có thể tùy chỉnh vị trí, cỡ chữ, màu. |
| **Lồng tiếng (Dubbing)** | Tạo giọng đọc tự động từ nội dung đã dịch bằng Text-to-Speech, đồng bộ với video. |
| **Nhiều giọng đọc** | Hỗ trợ nhiều giọng đọc cho từng ngôn ngữ (ví dụ tiếng Việt có Nam Minh và Hoài My), lọc theo giới tính. |
| **Nhiều nhân vật (Multi-Speaker)** | Gán giọng đọc riêng cho từng nhân vật khi phụ đề có thông tin người nói. |
| **Nút lồng tiếng trên player** | Chèn nút bật/tắt lồng tiếng ngay trên thanh điều khiển của player. |
| **Floating Ball** | Quả bóng nổi để truy cập nhanh menu chức năng trên mọi trang. |
| **Sidebar / Subtitle Editor** | Bảng điều khiển bên phải để chỉnh phụ đề, xem trạng thái, chỉnh sửa. |
| **Nhận dạng giọng nói (ASR)** | Với các website hỗ trợ AI subtitle (ví dụ Bilibili), lấy phụ đề ASR tự động. |
| **Nhận dạng tiếng nói bằng mic** | Video không có phụ đề → nhận dạng tiếng nói trực tiếp bằng Web Speech API (mic thu âm thanh từ loa), tạo phụ đề rồi dịch + lồng tiếng. |
| **Tải video Bilibili** | Khi ở trang video Bilibili, popup hiện nút "Lấy link tải" — gọi trực tiếp API Bilibili để lấy URL media CDN rồi tải video xuống (không dùng bên thứ ba, không cần đăng nhập). |
| **Điều khiển âm thanh** | Giảm/tắt âm lượng gốc khi lồng tiếng, audio ducking, trộn nhạc nền. |
| **Hỗ trợ đa nền tảng** | Hoạt động trên hàng chục website video phổ biến (xem mục 3). |
| **Playback Rate** | Đồng bộ tốc độ đọc theo tốc độ phát video. |
| **Offline / Local playback** | Phát video local, không cần server (xem `local-player.html`). |

---

## 3. Trang web được hỗ trợ

Extension hỗ trợ **hơn 60 website / nền tảng video** với các mức độ khác nhau. Danh sách chính:

### Hỗ trợ đầy đủ (cấu hình riêng)

| Website | Loại nội dung |
|---|---|
| **YouTube** | Video, phụ đề manual + ASR, embed player |
| **Bilibili** | Video, bangumi, cheese, danh sách phát, AI subtitle |
| **Udemy** | Khóa học trả phí |
| **Coursera** | Khóa học |
| **Khan Academy** | Bài giảng giáo dục |
| **EdX** | Khóa học MOOC |
| **LinkedIn Learning** | Khóa học nghề nghiệp |
| **Skillshare** | Khóa học sáng tạo |
| **MasterClass** | Khóa học từ người nổi tiếng |
| **Mindvalley** | Khóa học phát triển bản thân |
| **DataCamp** | Khóa học lập trình/data |
| **Domestika** | Khóa học sáng tạo |
| **Frontend Masters** | Khóa học lập trình |
| **Egghead** | Video lập trình ngắn |
| **Zenva** | Video lập trình |
| **Nebula** | Video streaming |
| **Dailymotion** | Video tổng hợp |
| **Vimeo** | Video chuyên nghiệp |
| **VK Video (vkvideo.ru)** | Video streaming Nga |
| **OK.ru** | Video streaming Nga |
| **Rutube** | Video streaming Nga |
| **Naver TV** | Video Hàn Quốc |
| **Douyin** | Video ngắn Trung Quốc |
| **TikTok** | Video ngắn |
| **Twitter/X** | Video trong tweet |
| **Facebook** | Video Facebook |
| **Spotify (episodes)** | Podcast |
| **Ted** | Bài nói chuyện TED |
| **Loom** | Video ghi màn hình |
| **Wistia** | Video doanh nghiệp |
| **Brightcove** | Video doanh nghiệp |
| **Kaltura** | Video giáo dục |
| **JWPlayer** | Video nhà xuất bản tin tức |
| **Mux** | Video nhà cung cấp |
| **VidTube** | Video chia sẻ |
| **Hotmart** | Khóa học trả phí |

### Hỗ trợ một phần / universal

Ngoài danh sách trên, extension còn có **Universal Dubbing** áp dụng cho hầu hết website có phần tử `<video>` / `<audio>` — bao gồm tin tức (BBC, Reuters, Bloomberg, WSJ, CBS News, NBC News, ESPN, Al Jazeera, CoinDesk), giáo dục (Harvard, Illinois, Microsoft Learn, Oracle, SAP Learning, Unity Learn), và nhiều nền tảng khác.

> **Lưu ý:** Một số website như ChatGPT, Google, Discord, linux.do bị loại trừ (`exclude_matches`) để tránh can thiệp vào các ứng dụng web không phải video.

Chi tiết từng website xem [Phụ lục A](#phụ-lục-a--trang-web-áp-dụng).

---

## 4. Các chế độ hoạt động

| Chế độ | Mô tả |
|---|---|
| **Dịch phụ đề (Translate Only)** | Chỉ dịch phụ đề có sẵn và hiển thị phụ đề đã dịch. |
| **Phụ đề song ngữ (Bilingual)** | Hiển thị đồng thời phụ đề gốc + phụ đề dịch. |
| **Lồng tiếng (Dub Only)** | Chỉ phát giọng đọc từ nội dung đã dịch, không cần hiển thị phụ đề. |
| **Dịch + Lồng tiếng (Translate & Dub)** | Dịch nội dung rồi tạo giọng lồng tiếng (mặc định). |
| **Sử dụng phụ đề có sẵn** | Dùng phụ đề manual/ASR có trên website làm đầu vào. |
| **AI Subtitle / Nhận dạng âm thanh** | Với website có AI subtitle (Bilibili), lấy transcript ASR. |
| **Multi-Speaker** | Gán giọng riêng cho từng nhân vật. |

> Chi tiết về từng mode xem [Phụ lục B](#phụ-lục-b--các-mode).

---

## 5. Cách hoạt động

Luồng xử lý cơ bản:

```
1. Phát hiện website & player
   └─ Content script (isolated world) đọc cấu hình website từ SiteDubbingRules

2. Lấy metadata video & phụ đề
   ├─ YouTube: chặn/lấy request /api/timedtext
   ├─ Bilibili: gọi API player (wbi/v2) hoặc đọc __INITIAL_STATE__
   └─ Website khác: đọc DOM, window variables, hoặc chặn network request

3. Chọn phụ đề tốt nhất
   └─ Ưu tiên theo subtitle priority (ai / platform) và ngôn ngữ nguồn

4. Dịch phụ đề
   └─ Gửi batch text → Google Translate (qua background service worker)

5. Tạo giọng lồng tiếng (nếu bật)
   └─ Text-to-Speech → Edge Azure TTS / Google TTS fallback

6. Đồng bộ với video
   └─ Audio queue → phát đúng theo video.currentTime, xử lý play/pause/seek
```

> Chi tiết luồng xử lý xem [Phụ lục F](#phụ-lục-f--luồng-xử-lý).

---

## 6. Cài đặt Extension

### Cách 1: Cài từ cửa hàng (khi đã phát hành)

1. Mở Chrome Web Store (hoặc Microsoft Edge Add-ons).
2. Tìm **TranslateDub**.
3. Bấm **Add to Chrome / Get**.

### Cách 2: Cài thủ công (Developer Mode)

1. Tải mã nguồn về máy (giải nén ZIP).
2. Mở trình duyệt Chrome → vào `chrome://extensions`.
3. Bật **Developer mode** (góc phải trên).
4. Bấm **Load unpacked**.
5. Chọn thư mục chứa `manifest.json` của project (thư mục gốc `d:\TranslateDub`).
6. Extension xuất hiện trong danh sách — sẵn sàng dùng.

**Lưu ý:** Khi bạn chỉnh sửa mã, phải bấm **Reload** (icon vòng tròn) trên card extension để áp dụng thay đổi.

---

## 7. Hướng dẫn sử dụng

### Bước 1 — Mở video

Mở một video trên website được hỗ trợ, ví dụ `https://www.youtube.com/watch?v=...` hoặc một video Bilibili.

### Bước 2 — Bấm nút lồng tiếng

Nút **TranslateDub** xuất hiện trên thanh điều khiển player (cạnh nút subtitle/settings). Bấm nút để bắt đầu dịch + lồng tiếng.

> **Mẹo:** Nếu không thấy nút, dùng **floating ball** (quả bóng nổi góc màn hình) để mở menu.

### Bước 3 — Chọn ngôn ngữ & giọng đọc

1. Mở **popup** TranslateDub (bấm icon extension trên thanh công cụ).
2. Chọn **ngôn ngữ nguồn** (From) — ví dụ `en-US`, `zh-CN`, hoặc `auto`.
3. Chọn **ngôn ngữ đích** (To) — ví dụ `vi-VN`.
4. Chọn **giới tính** (Nam/Nữ) — quyết định danh sách giọng hiển thị.
5. Chọn **giọng đọc** trong dropdown (ví dụ tiếng Việt: Nam Minh / Hoài My).
6. Bấm **Save / Lưu**.

### Bước 4 — Bắt đầu dịch hoặc dub

- Bấm nút lồng tiếng trên player → extension tự lấy phụ đề, dịch, và phát giọng lồng tiếng.
- Bấm lần nữa để tắt.

### Bước 5 — Tùy chỉnh hiển thị

- Bật **phụ đề song ngữ** để xem bản gốc + bản dịch.
- Điều chỉnh **cỡ chữ**, **vị trí phụ đề** trong popup.
- Điều chỉnh **âm lượng video gốc** và **âm lượng giọng đọc**.

---

## 8. Cấu hình

### Thiết lập chính (popup)

| Thiết lập | Giá trị mặc định | Mô tả |
|---|---|---|
| **To Language** | `vi-VN` | Ngôn ngữ đích (bản dịch). |
| **From Language** | `en-US` | Ngôn ngữ nguồn; chọn `auto` để tự phát hiện. |
| **Translate Engine** | `google` | Engine dịch (Google Translate trực tiếp, không cần key). |
| **Voices Type** | `free` | Loại giọng đọc (`free` / `azure`). |
| **Gender** | `1` (nam) | Lọc giọng đọc theo giới tính. |
| **Voice** | giọng mặc định | Giọng đọc đã chọn, ví dụ `vi-VN-NamMinhNeural`. |
| **Multi Speakers** | `[]` | Danh sách giọng cho từng nhân vật. |
| **Subtitle Size** | `20` | Cỡ chữ phụ đề. |
| **Subtitle Style** | — | Vị trí, màu chữ, nền, font. |
| **Subtitle Priority** | `ai` | Ưu tiên `ai` (ASR) hay `platform` (phụ đề gốc). |
| **Show Subtitle** | `false` | Bật/tắt hiển thị phụ đề dịch. |
| **Bilingual Subtitle** | `false` | Hiển thị phụ đề song ngữ. |
| **Original Volume** | `35` | Âm lượng video gốc khi lồng tiếng. |
| **Translation Volume** | `100` | Âm lượng giọng đọc. |
| **Video Volume Control** | — | Tự động hạ âm lượng video gốc. |
| **Pause Video** | `false` | Tạm dừng video khi bắt đầu lồng tiếng. |
| **Floating Ball** | `true` | Hiện quả bóng nổi. |
| **Sidebar Entry** | `true` | Hiện sidebar. |
| **Skip Translation Same Language** | `false` | Bỏ dịch nếu ngôn ngữ nguồn = đích. |

### Thiết lập nâng cao

- **Translation Rules** — bật/tắt quy tắc dịch.
- **Segmentation Strategy** — cách tách câu dài.
- **Smart Segmentation** — tự động tách đoạn thông minh.
- **User Subtitle Segmentation** — phân đoạn phụ đề người dùng.
- **Shortcut** — `Alt+S` đổi nhanh cài đặt âm lượng.

---

## 9. Quyền Extension

Extension yêu cầu các quyền sau trong `manifest.json`:

| Quyền | Lý do |
|---|---|
| `storage` | Lưu cài đặt người dùng (ngôn ngữ, giọng, âm lượng). |
| `contextMenus` | Thêm menu chuột phải (nếu dùng). |
| `activeTab` | Truy cập tab đang mở để bắt đầu lồng tiếng. |
| `webRequest` | Chặn/đọc request phụ đề (timedtext, subtitle API). |
| `webNavigation` | Theo dõi điều hướng SPA (YouTube, Bilibili) để cập nhật video. |
| `declarativeNetRequest` | Hỗ trợ m3u8 / mạng video cho một số nền tảng. |
| `host_permissions: <all_urls>` | Chạy content script trên các website video được hỗ trợ. |

> **Tại sao `<all_urls>`?** Vì extension hỗ trợ hàng chục website và cả Universal mode trên mọi trang có `<video>`. Dữ liệu chỉ được xử lý trên các trang có video thực sự.

---

## 10. Kiến trúc hệ thống

```
┌─────────────────────────────────────────────────────────────┐
│  POPUP (popup.html + popup-DHhN3U9v.js)                     │
│  Giao diện cài đặt: ngôn ngữ, giọng, âm lượng, cấu hình     │
└──────────────────────────┬──────────────────────────────────┘
                           │ chrome.runtime.sendMessage
┌──────────────────────────▼──────────────────────────────────┐
│  BACKGROUND SERVICE WORKER (background-entry.js)            │
│  ├─ offline-core.js: Google Translate + Google TTS          │
│  ├─ background.js: Edge Azure TTS, xử lý request            │
│  ├─ webRequest interception (timedtext, m3u8)               │
│  └─ Settings storage & messaging                            │
└──────────────────────────┬──────────────────────────────────┘
                           │ sendMessage / pageContentRpc
┌──────────────────────────▼──────────────────────────────────┐
│  CONTENT SCRIPTS (isolated world)                           │
│  ├─ content.js: player class, dubbing button, sync          │
│  ├─ metadata.js: metadata service, request info bridge      │
│  ├─ sidebar.js: sidebar UI / subtitle editor                │
│  ├─ googleDriveButton.js: Google Drive player               │
│  └─ runtime-i18n.js: đa ngôn ngữ UI                         │
└──────────────────────────┬──────────────────────────────────┘
                           │ <script> inject (web accessible)
┌──────────────────────────▼──────────────────────────────────┐
│  INJECT SCRIPT (MAIN world: injectScript.js)                │
│  BiliBasedMediaMetadataService, YoutubeMetadataService...    │
│  - Đọc window variables, chặn fetch, lấy subtitle           │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  CÁC API BÊN NGOÀI                                          │
│  ├─ translate.googleapis.com (Google Translate)             │
│  ├─ dev.microsofttranslator.com / Edge TTS                  │
│  ├─ api.bilibili.com (Bilibili subtitle/player)             │
│  └─ youtube.com/api/timedtext (YouTube subtitle)            │
└─────────────────────────────────────────────────────────────┘
```

### Các thành phần chính

| Thành phần | Vai trò |
|---|---|
| **`manifest.json`** | Cấu hình extension MV3: content scripts, permissions, service worker. |
| **`background-entry.js`** | Entry của service worker, load i18n + offline-core + background. |
| **`background.js`** | Xử lý Edge Azure TTS, webRequest, storage, messaging. |
| **`offline-core.js`** | Google Translate trực tiếp, Google TTS fallback, fetch router local. |
| **`content-scripts/content.js`** | Player classes, nút lồng tiếng, đồng bộ audio với video. |
| **`content-scripts/metadata.js`** | Metadata services, bridge request-info. |
| **`content-scripts/sidebar.js`** | Sidebar UI, subtitle editor. |
| **`content-scripts/googleDriveButton.js`** | Hỗ trợ Google Drive player. |
| **`injectScript.js`** | MAIN-world script: metadata service cho từng website. |
| **`iosInjectScript.js`** | Script cho môi trường iOS/Safari. |
| **`runtime-i18n.js`** | Hệ thống đa ngôn ngữ cho UI extension. |
| **`runtime-i18n-data.js`** | Dictionary i18n (en, vi + 60 ngôn ngữ). |
| **`timedtext-guard.js`** | Chặn request timedtext của YouTube (dedup + cache). |
| **`chunks/`** | Bundle Vue.js cho popup, options, local-player. |
| **`tests/`** | Bộ test integration + e2e. |

---

## 11. Bảo mật và quyền riêng tư

- **Không có tài khoản, không có server backend.** Toàn bộ dịch và lồng tiếng chạy trực tiếp từ trình duyệt của bạn qua các API công khai (Google Translate, Edge TTS).
- **Dữ liệu gửi lên API:**
  - Văn bản phụ đề gửi tới `translate.googleapis.com` để dịch.
  - Văn bản đã dịch gửi tới Edge TTS / Google TTS để tạo giọng đọc.
  - Các request này **chỉ chứa nội dung video bạn đang xem**, không kèm thông tin cá nhân.
- **Không thu thập dữ liệu cá nhân.** Extension không gửi lịch sử xem, cài đặt hay thông tin định danh lên server.
- **API key:** Extension dùng API công khai không cần key (Google Translate `client=gtx`, Edge TTS). Nếu bạn dùng giọng Azure trả phí trong tương lai, key sẽ được lưu trong `chrome.storage.local` (chỉ trên máy bạn, không gửi đi).
- **Cài đặt** được lưu cục bộ qua `chrome.storage.local` — không đồng bộ lên cloud.

---

## 12. Giới hạn hiện tại

- **Dịch dùng Google Translate** — chất lượng dịch phụ thuộc Google, có thể không tốt với thuật ngữ chuyên ngành.
- **Một số video không có phụ đề** — extension không thể dịch nếu website không có phụ đề gốc hoặc ASR.
- **Bilibili:** Một số video trả phí/preview (`is_upower_exclusive`, `is_ugc_pay_preview`) có thể không lấy được phụ đề; phụ đề tiếng Trung ASR cần video có AI subtitle.
- **YouTube:** Phụ đề chỉ khả dụng nếu chủ video bật phụ đề; video age-restricted có thể chặn content script.
- **Website có DRM / player tùy chỉnh:** Một số player đóng (DRM, shadow DOM phức tạp) có thể không inject nút được.
- **Lồng tiếng không phải giọng AI tự nhiên nhất** — Google TTS fallback chỉ có 1 giọng mỗi ngôn ngữ (nên các giọng Azure bị lỗi sẽ nghe giống nhau).
- **Giọng bị lọc theo giới tính** — để chọn giọng nữ (Hoài My), phải đổi giới tính sang Nữ trong cài đặt.
- **Không hỗ trợ video live** trên một số nền tảng.
- **Nhận dạng tiếng nói bằng mic (STT)** dùng Web Speech API của Chrome — yêu cầu bật loa + cho phép mic, video phải phát qua loa để mic thu âm thanh. Chất lượng phụ thuộc loa/mic/phòng. Không hỗ trợ pipe audio trực tiếp từ video (giới hạn của Chrome Web Speech API).

---

## 13. Xử lý lỗi thường gặp

| Lỗi | Nguyên nhân | Cách khắc phục |
|---|---|---|
| **Nút dịch không xuất hiện** | Website không có video / player không nhận diện | Thử reload trang; kiểm tra website có được hỗ trợ |
| **Bấm dịch nhưng không có gì** | Phụ đề không có; metadata chưa load | Chờ video load; kiểm tra video có phụ đề không |
| **Spinner quay mãi** | Request dịch bị treo / background lỗi | Reload extension; kiểm tra service worker console |
| **"Request timeout"** | Google Translate chậm / mạng chậm | Thử lại; kiểm tra kết nối mạng |
| **Giọng đọc giống nhau** | Edge TTS fail → fallback Google TTS (1 giọng) | Kiểm tra service worker log `Azure TTS failed`; thử lại |
| **Không chọn được giọng nữ** | Giới tính đang để "Nam" | Đổi giới tính sang "Nữ" trong cài đặt |
| **`Message not found` trong console** | Key i18n thiếu cho ngôn ngữ hiện tại | Không nghiêm trọng; chỉ ảnh hưởng hiển thị text |
| **`play() failed`** | Autoplay policy | Tương tác với trang (bấm nút play) trước khi dùng |
| **Bilibili "出错啦"** | Bilibili chặn do anti-bot | Không phải lỗi extension; vào bằng trình duyệt thường |
| **Không dịch được sau khi sửa code** | Content script cũ | Reload extension (`chrome://extensions` → Reload) |

> Chi tiết mã lỗi xem [Phụ lục K](#phụ-lục-k--mã-lỗi).

---

## 14. Build và đóng gói

Dự án là **bản build hoàn chỉnh (WXT build output)** — đã có sẵn `manifest.json`, các bundle, chunks, locales.

### Chạy / cài trực tiếp (không cần build)

1. Mở `chrome://extensions`.
2. Bật **Developer mode**.
3. **Load unpacked** → chọn thư mục gốc dự án.

### Tạo file ZIP để phát hành

**Cách 1 — Dùng Chrome:**
1. Vào `chrome://extensions`.
2. Bật Developer mode.
3. Bấm **Pack extension**.
4. Chọn thư mục gốc dự án → Chrome tạo `.crx` + `.pem`.

**Cách 2 — Tạo ZIP thủ công:**
```bash
# Trên Windows (PowerShell)
Compress-Archive -Path "d:\TranslateDub\*" -DestinationPath "d:\TranslateDub-release.zip" -Force

# Trên Linux/macOS
cd /path/to/TranslateDub && zip -r ../TranslateDub-release.zip . -x "*.git*" ".tmp*" "tests/*"
```

### Chạy bộ test

```bash
# Kiểm tra tích hợp offline (cú pháp + dịch + TTS + i18n)
node tests/offline-integration.cjs

# E2E với Chrome (popup, YouTube injection, service worker)
node tests/chrome-extension-e2e.cjs
```

> **Lưu ý:** Bản build này là bundle đã compile (minified). Muốn sửa source gốc cần có project WXT/Vite nguồn.

---

## 15. Roadmap

### Đã hoàn thành
- [x] Dịch phụ đề YouTube (manual + ASR) bằng Google Translate.
- [x] Dịch phụ đề Bilibili (bao gồm AI subtitle tiếng Trung).
- [x] Lồng tiếng bằng Edge Azure TTS + Google TTS fallback.
- [x] Phụ đề song ngữ, tùy chỉnh style.
- [x] Hỗ trợ hàng chục website video.
- [x] Multi-speaker (nhiều giọng theo nhân vật).
- [x] Playback rate sync, audio ducking.
- [x] Local player, offline-core không cần server.

### Đang phát triển / cần cải thiện
- [ ] Cải thiện UI dropdown giọng (hiện cả nam + nữ để tránh nhầm lẫn).
- [ ] Tăng độ ổn định Edge Azure TTS (giảm fallback Google).
- [ ] Hỗ trợ nhiều giọng tiếng Việt hơn.

### Dự kiến bổ sung
- [ ] Speech-to-Text nội bộ cho video không có phụ đề.
- [ ] API dịch tùy chỉnh (OpenAI, DeepL, dịch vụ AI).
- [ ] Lưu trữ / tải phụ đề đã dịch.
- [ ] Hỗ trợ nhiều trình duyệt (Firefox, Safari).
- [ ] Tích hợp AI translation nâng cao (giữ nguyên tên riêng, thuật ngữ).

---

## 16. Changelog

### v4.2.5 (hiện tại)
- Sửa lỗi: message dịch `DUBBING_OFFLINE_TRANSLATE` thiếu `timestamp` khiến background từ chối → **nút dịch bị kẹt spinner**.
- Sửa lỗi: recursion bug trong fallback i18n của content scripts → lỗi `__DUBBING_I18N_GET_MESSAGE__ is not a function`.
- Sửa lỗi: Bilibili `/video/` dùng luồng metadata phụ thuộc `__INITIAL_STATE__` → chuyển sang resolved-route có fallback API.
- Thêm: hỗ trợ dịch + lồng tiếng Bilibili AI subtitle.
- Cải thiện: debug logging `[YD-DEBUG]` trong luồng dịch/TTS.

### Các phiên bản trước
- 4.2.x: Hỗ trợ thêm website, cải thiện đồng bộ audio.
- 4.0.x: Chuyển sang kiến trúc offline-core, bỏ server backend.
- 3.x: Nền tảng WXT, Manifest V3.

---

## 17. License

Dự án này chưa khai báo giấy phép cụ thể (`LICENSE` file chưa có). Vui lòng liên hệ tác giả để biết điều khoản sử dụng, chỉnh sửa và phân phối trước khi dùng cho mục đích thương mại.

---

# PHỤ LỤC KỸ THUẬT

## Phụ lục A — Trang web áp dụng

### A.1 Danh sách domain

Extension đăng ký content scripts cho tất cả URL (`*://*/*`) với `exclude_matches` cho một số trang, và có cấu hình riêng (`SiteDubbingRules`) cho hơn 60 domain. Các domain cấu hình riêng tiêu biểu:

| Domain | Site ID |
|---|---|
| `*.youtube.com`, `*.youtube-nocookie.com` | `youtube` |
| `*.bilibili.com`, `player.bilibili.com` | `bili` |
| `*.udemy.*` | `udemy` |
| `*.coursera.org` | `coursera` |
| `*.khanacademy.org` | `khanacademy` |
| `courses.edx.org` | `edx` |
| `*.linkedin.com` | `linkedin_learning` |
| `www.skillshare.com` | `skillshare` |
| `*.masterclass.com` | `masterclass` |
| `www.domestika.org` | `domestika` |
| `projector.datacamp.com` | `datacamp_projector` |
| `egghead.io` | `egghead` |
| `frontendmasters.com` | `frontendmasters` |
| `nebula.tv` | `nebula` |
| `*.dailymotion.com` | `dailymotion` |
| `vimeo.com`, `player.vimeo.com` | `vimeo` |
| `*.vkvideo.ru` | `vkvideo` |
| `ok.ru/video/*` | `okru` |
| `rutube.ru` | `rutube` |
| `tv.naver.com` | `navertv` |
| `*.douyin.com` | `douyin` |
| `*.tiktok.com` | `tiktok` |
| `*.x.com`, `*.twitter.com` | `x` / `twitter` |
| `*.facebook.com` | `facebook` |
| `open.spotify.com` | `spotify_episode` |
| `*.ted.com` | `ted` |
| `www.loom.com/embed/*` | `loom` |
| `*.wistia.net`, `fast.wistia.net` | `wistia` |
| `players.brightcove.net` | `brightcove` |
| `*.kaltura.com`, `cdnapisec.kaltura.com` | `kaltura` |
| `*.espn.com`, `*.bbc.com`, `*.reuters.com`, `*.bloomberg.com`, `*.wsj.com` | tin tức |
| ... (nhiều nữa) | ... |

### A.2 URL Pattern

Các pattern chính trong `manifest.json`:
- Content script chính: `*://*/*` (loại trừ ChatGPT, Google, linux.do, translate.goog, file ảnh/video/xml...).
- Google Drive: `*://drive.google.com/*`.
- MAIN-world timedtext guard: `*://*.youtube.com/*`, `*://*.youtube-nocookie.com/*`.

### A.3 Trạng thái hỗ trợ

| Mức độ | Website |
|---|---|
| **Ổn định** | YouTube, Bilibili, Udemy, Coursera, Vimeo, Dailymotion |
| **Thử nghiệm** | Các nền tảng mới thêm, universal mode |
| **Hỗ trợ một phần** | Website có player phức tạp, phụ đề không đầy đủ |
| **Chưa hỗ trợ (loại trừ)** | ChatGPT, Google, linux.do, translate.goog |

### A.4 Video Selector

Cấu hình `mediaSelector` trong `SiteDubbingRules`:
- YouTube: `.html5-video-container video` (qua player id).
- Bilibili: `video` (element `<video>` của player).
- Universal: `video, audio`.

### A.5 Subtitle Selector

- YouTube: chặn request `/api/timedtext` qua webRequest + `timedtext-guard.js`.
- Bilibili: đọc `$.data.subtitle.subtitles` từ API player (`wbi/v2`), hoặc protobuf `/x/v2/subtitle/web/view`.
- Nhiều website: đọc window variables (`__INITIAL_STATE__`, `__playinfo__`, `playerRaw`...).

### A.6 Player Selector

- `playBtnContainerSelector` (nơi chèn nút lồng tiếng):
  - YouTube: `.ytp-right-controls`.
  - Bilibili: `.bpx-player-control-bottom-right`.
  - Vimeo/khác: các class player tương ứng.

### A.7 Phương pháp lấy phụ đề

| Phương pháp | Áp dụng |
|---|---|
| `apiIntercept` | Chặn request API, đọc JSON response (Bilibili wbi/v2). |
| `windowVariable` | Đọc window variables nhúng trong trang. |
| `commonVtt` / `commonSrt` | Tải file `.vtt` / `.srt` trực tiếp. |
| `domTrack` | Đọc `<track>` element trong DOM. |
| `m3u8` | Đọc phụ đề từ manifest m3u8. |
| `bili` | API Bilibili + protobuf subtitle. |
| `youtube` | `/api/timedtext` + player response. |

### A.8 Phương pháp lấy thời gian video

- Đọc `video.currentTime`, `video.paused`, `video.playbackRate`.
- Lắng nghe sự kiện `timeupdate`, `play`, `pause`, `seeking`, `ratechange`.
- Đối với SPA (YouTube/Bilibili), theo dõi `onUrlChange` để cập nhật video mới.

### A.9 Phương pháp phát giọng dub

- Dùng **HTML5 Audio** / **Howler.js** (`Howler.html5PoolSize = 5`) để phát audio lồng tiếng.
- Đồng bộ qua audio queue dựa trên `video.currentTime`.
- Xử lý play/pause/seek/ratechange (xem Phụ lục G).

### A.10 Giới hạn riêng từng website

- **YouTube**: age-restricted video, autoplay policy, phụ đề phụ thuộc chủ video.
- **Bilibili**: anti-bot (412), video trả phí, DRM player.
- **Udemy/Coursera**: cần đăng nhập, phụ đề trong player tùy chỉnh.
- **Facebook/Twitter**: video trong feed, cần request marker headers.
- **Spotify**: episodes (audio), không phải video.
- **DRM player** (Brightcove, Kaltura...): một số không cho inject.

---

## Phụ lục B — Các Mode

| Mode | Mô tả | Trạng thái |
|---|---|---|
| **B.1 Subtitle Translate** | Dịch phụ đề có sẵn, hiển thị bản dịch. | ✅ Hỗ trợ |
| **B.2 Bilingual Subtitle** | Hiện phụ đề gốc + bản dịch song song. | ✅ Hỗ trợ |
| **B.3 Dub Only** | Chỉ phát giọng đọc, không hiện phụ đề dịch. | ✅ Hỗ trợ |
| **B.4 Translate and Dub** | Dịch + tạo giọng lồng tiếng (mặc định). | ✅ Hỗ trợ |
| **B.5 Realtime** | Xử lý từng đoạn khi video chạy. | ⚠️ Một phần (theo segment) |
| **B.6 Full Video** | Xử lý toàn bộ video trước. | ✅ (dịch batch toàn bộ) |
| **B.7 Existing Subtitle** | Dùng phụ đề có sẵn làm đầu vào. | ✅ Mặc định |
| **B.8 Audio Recognition** | STT âm thanh → transcript (chỉ qua ASR website). | ⚠️ Hạn chế |
| **B.9 Streaming** | Gửi/nhận liên tục từng phần. | ⚠️ (real-time dubbing) |
| **B.10 Batch** | Gửi nhiều câu trong 1 request. | ✅ (translateAll batch) |
| **B.11 Fast Mode** | Ưu tiên tốc độ. | ✅ (mặc định) |
| **B.12 High Quality** | Ưu tiên chất lượng. | ⚠️ (tuỳ voice) |
| **B.13 Economy** | Giảm request / dùng cache. | ⚠️ |
| **B.14 Debug Mode** | Log chi tiết request/response. | ✅ (`[YD-DEBUG]`) |

---

## Phụ lục C — Speech-to-Text

### C.1 API sử dụng
Extension hiện **không có STT nội bộ**. Nó sử dụng **ASR phụ đề có sẵn** của website:
- **YouTube**: phụ đề ASR (`kind=asr`) qua `/api/timedtext`.
- **Bilibili**: AI subtitle (`ai-zh`) qua API player / protobuf `/x/v2/subtitle/web/view`.

### C.2–C.8
(Vì dùng ASR website sẵn có, không gọi API STT trực tiếp — các mục C.2–C.8 không áp dụng trực tiếp. Khi có STT nội bộ trong roadmap, phần này sẽ được bổ sung.)

### C.9 cURL nhận dạng âm thanh
(Ví dụ minh hoạ API STT tương lai — chưa có hiện tại.)

### C.10–C.14
(Khi tích hợp STT nội bộ — roadmap.)

---

## Phụ lục D — Translation

### D.1 API dịch sử dụng
**Google Translate** (endpoint công khai `translate_a/single`), không cần API key.

### D.2 Endpoint
```
GET https://translate.googleapis.com/translate_a/single?client=gtx&sl={src}&tl={dst}&dt=t&q={text}
```

### D.3 Header
- `Content-Type: application/json` (cho POST batch qua local router).
- Không cần Authorization.

### D.4 Request Body
Extension gửi batch qua `offline-core.js`:
```json
POST chrome-extension://<id>/offline-api/api/v2/translateAll?language=en&to=vi
["Sentence 1", "Sentence 2", "..."]
```

### D.5 Prompt dịch
Google Translate không dùng prompt (dịch máy trực tiếp). Khi chuyển sang AI translation (roadmap) sẽ có prompt giữ tên riêng/thuật ngữ.

### D.6 Quy tắc dịch
- Bỏ qua segment trống / chỉ có dấu câu / nhạc nền.
- Không dịch nếu ngôn ngữ nguồn = đích (`skipTranslationWhenSameLanguage`).
- Ghép bản dịch với segment gốc theo index (`zipWith`).

### D.7 cURL dịch văn bản
```bash
curl "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=Hello%20world"
```
→ `[[["Xin chào thế giới","Hello world",null,null,3,null,null,[[]]...]]]`

### D.8 cURL dịch phụ đề
(Dịch từng câu — xem D.7 cho từng segment.)

### D.9 cURL dịch nhiều đoạn
(Extension gửi batch qua local router — xem D.4.)

### D.10 Response mẫu
```json
{"translations": [{"text": "Xin chào"}, {"text": "Thế giới"}]}
```

### D.11 Mapping Segment
`Promise.all` dịch từng câu → zip theo index với subtitles gốc → gán `googleTranslation`.

### D.12 Mã lỗi
| Lỗi | Ý nghĩa |
|---|---|
| `HTTP 429` | Rate limit — retryPolicy xử lý |
| `Request timeout` | 60s timeout trong `translateForFetch` |
| `translate occur error` | Response không phải 2xx |

### D.13 Cache bản dịch
- `timedtext-guard.js` cache response timedtext (5 phút).
- Bản dịch theo video được lưu trong metadata, tránh dịch lại.

### D.14 Giới hạn API
- Google Translate công khai: giới hạn không chính thức (~vài nghìn request/ngày/IP).
- Độ dài văn bản mỗi request bị cắt theo từng segment.

---

## Phụ lục E — Text-to-Speech

### E.1 API đọc sử dụng
- **Edge Azure TTS** (Microsoft Edge voices) — chính.
- **Google Translate TTS** (`translate_tts`) — fallback.

### E.2 Endpoint tạo giọng đọc
- Edge: `https://{region}.tts.speech.microsoft.com/cognitiveservices/v1` (SSML).
- Google fallback: `https://translate.google.com/translate_tts?ie=UTF-8&q={text}&tl={lang}&client=tw-ob`.

### E.3 Endpoint lấy danh sách giọng
- Edge: `https://dev.microsofttranslator.com/apps/endpoint?api-version=1.0` (lấy token + region).
- Danh sách giọng được nhúng trong code (`voiceMap`).

### E.4–E.5
(Edge TTS xử lý đồng bộ — không dùng task ID; audio trả về base64 ngay.)

### E.6 Header
- Edge: `Authorization: Bearer {token}`, `Content-Type: application/ssml+xml`, `X-Microsoft-OutputFormat: audio-24khz-48kbitrate-mono-mp3`.
- Có HMAC signature (`X-MT-Signature`).

### E.7 Request Body
```xml
<speak version="1.0" xml:lang="vi-VN">
  <voice name="vi-VN-HoaiMyNeural">Xin chào</voice>
</speak>
```

### E.8 Voice ID
- Tiếng Việt: `vi-VN-NamMinhNeural` (nam), `vi-VN-HoaiMyNeural` (nữ).
- Nhiều ngôn ngữ khác có trong `voiceMap`.

### E.9 Tốc độ đọc
- Điều chỉnh theo `playbackRate` của video để khớp thời lượng.
- Xử lý audio quá dài: tăng tốc hoặc cho phép lấn sang khoảng trống.

### E.10 Cao độ
- (Chưa tùy chỉnh trực tiếp; dùng giá trị mặc định.)

### E.11 Cảm xúc
- (Chưa hỗ trợ — Edge neural có style mặc định.)

### E.12 Định dạng audio
- MP3 (`audio-24khz-48kbitrate-mono-mp3`).

### E.13 cURL lấy danh sách giọng
```bash
curl -X POST "https://dev.microsofttranslator.com/apps/endpoint?api-version=1.0" \
  -H "X-MT-Signature: {signature}" \
  -H "Content-Type: application/json; charset=utf-8" -d ""
```

### E.14 cURL tạo giọng đọc
```bash
curl -X POST "https://{region}.tts.speech.microsoft.com/cognitiveservices/v1" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/ssml+xml" \
  -H "X-Microsoft-OutputFormat: audio-24khz-48kbitrate-mono-mp3" \
  -d '<speak version="1.0" xml:lang="vi-VN"><voice name="vi-VN-HoaiMyNeural">Xin chào</voice></speak>'
```

### E.15–E.16
(Edge TTS trả audio trực tiếp, không có task status/endpoint tải riêng.)

### E.17 Response mẫu
- Edge: binary audio (MP3) → `audioBase64`.
- Google: MP3 binary.

### E.18 Mã lỗi
| Lỗi | Ý nghĩa |
|---|---|
| `401/403` | Token/edge auth lỗi → fallback Google |
| `429` | Rate limit → retry |
| `EdgeTts invalid audio` | Audio response sai → retry |

### E.19 Giới hạn API
- Edge TTS: giới hạn không chính thức, retry theo `MAX_RETRIES_PER_REQUEST`.
- Google TTS: giới hạn độ dài text (~500 ký tự/request).

---

## Phụ lục F — Luồng xử lý

### F.1 Luồng dùng phụ đề có sẵn
```
Phụ đề gốc → Chọn phụ đề tốt nhất → Dịch (Google) → Tạo giọng đọc (Edge TTS) → Đồng bộ video
```

### F.2 Luồng nhận dạng từ âm thanh
```
Âm thanh → ASR website (YouTube/Bilibili) → Dịch → Text-to-Speech → Đồng bộ video
```

### F.3 Luồng chỉ dịch
```
Phụ đề/transcript → Dịch → Hiển thị phụ đề (bilingual nếu bật)
```

### F.4 Luồng chỉ đọc
```
Văn bản có sẵn → Text-to-Speech → Phát audio
```

### F.5 Luồng thời gian thực
- Real-time dubbing: xử lý segment theo `video.currentTime`, phát audio khi đến đúng thời điểm.

### F.6 Luồng toàn bộ video
- Dịch batch toàn bộ subtitle (`translateAll`), tạo toàn bộ audio, phát theo queue.

### F.7 Luồng xử lý lỗi
- Retry theo `retryPolicy` (Google translate).
- Segment lỗi → bỏ qua / fallback text gốc.
- Edge TTS fail → chuyển Google TTS.

### F.8 Luồng Fallback
- `translateDirect` → nếu fail qua background → content script gọi trực tiếp.
- Edge Azure TTS fail → `__DUBBING_GOOGLE_TTS_FALLBACK__`.

---

## Phụ lục G — Đồng bộ lồng tiếng

### G.1 Timestamp nguồn
Mỗi segment có `start`, `end`, `dur` (từ phụ đề gốc).

### G.2 Timestamp audio dub
Audio dub phát tại `start` của segment.

### G.3 Audio Queue
Hàng đợi các audio segment đang chờ phát, dựa trên `currentTime`.

### G.4 Đồng bộ với `video.currentTime`
- Lắng nghe `timeupdate` → quyết định segment nào cần phát/loại bỏ.

### G.5 Xử lý Play
- Video play → audio queue tiếp tục phát.

### G.6 Xử lý Pause
- Video pause → audio dub tạm dừng.

### G.7 Xử lý Seek
- Tua video → xóa hàng đợi cũ, cập nhật segment hiện tại.

### G.8 Xử lý Playback Rate
- Thay đổi tốc độ video → điều chỉnh `playbackRate` audio.

### G.9 Bù độ trễ API
- Chờ request dịch/TTS trước khi phát segment tương ứng.

### G.10 Điều chỉnh tốc độ đọc
- TTS rate được điều chỉnh để khớp thời lượng câu gốc.

### G.11 Xử lý audio quá dài
- Tăng tốc độ đọc, cắt, hoặc cho phép lấn sang khoảng trống tiếp theo.

### G.12 Xử lý audio chồng nhau
- Ưu tiên segment mới, cắt/loại segment cũ trùng thời gian.

---

## Phụ lục H — Xử lý âm thanh

### H.1 Thu âm thanh từ tab
- (Dùng ASR website — chưa có `tabCapture` nội bộ.)

### H.2 Chia đoạn âm thanh
- Theo segment phụ đề.

### H.3 Giảm âm lượng gốc
- Khi lồng tiếng, hạ `video.volume` xuống `originalVolume` (mặc định 35).

### H.4 Tắt âm thanh gốc
- Có thể tắt hoàn toàn khi lồng tiếng.

### H.5 Audio Ducking
- Tự động hạ âm lượng gốc khi có giọng dub, tăng lại khi hết đoạn.

### H.6 Trộn âm thanh
- Phát đồng thời nhạc nền gốc (giữ ở mức thấp) + giọng đọc dịch.

### H.7 Khôi phục âm lượng
- Khi tắt extension / dừng lồng tiếng → đưa `video.volume` về 100.

---

## Phụ lục I — Cấu trúc dữ liệu

### I.1 Subtitle Segment
```js
{ start: 460, end: 5640, dur: 5180, text: "Muchos comentan...", processPunctuation: true }
```

### I.2 Transcript Segment
(Từ ASR website — tương tự subtitle segment với `segs[].utf8`.)

### I.3 Translation Segment
```js
{ start, end, dur, text: "gốc", googleTranslation: "bản dịch" }
```

### I.4 Audio Segment
```js
{ audioBase64, contentType, start, end, voice }
```

### I.5 Timeline
Mảng các segment theo thứ tự thời gian (subtitle + translation + audio).

### I.6 Mode Configuration
Cấu hình từng mode (subtitle priority, bilingual, segmentation).

### I.7 Website Configuration
`SiteDubbingRules`: `domain`, `mediaSelector`, `playBtnContainerSelector`, `subtitleFetchMethod`, `apiInterceptConfig`, `windowVariableConfig`, `subtitleFormat`, `playerConfig`.

### I.8 User Settings
`toLanguage`, `fromLanguage`, `voice`, `voicesType`, `gender`, `subtitleStyle`, `volumes`... (lưu trong `chrome.storage.local`).

### I.9 Error Object
`{ errorCode, message, retryable }` (dùng thống nhất qua `hi`/`Mr`/`pc` error classes).

---

## Phụ lục J — Cấu hình API

### J.1 Biến môi trường
Không cần `.env` — extension dùng API công khai trực tiếp.

### J.2 API Base URL
- Google Translate: `https://translate.googleapis.com/translate_a/single`.
- Edge TTS: `https://dev.microsofttranslator.com/apps/endpoint` + `https://{region}.tts.speech.microsoft.com`.

### J.3 API Key
- Google Translate: không cần key (`client=gtx`).
- Edge TTS: không cần key (HMAC signature tự sinh).

### J.4 Speech-to-Text Provider
- ASR website (YouTube/Bilibili) — không cấu hình.

### J.5 Translation Provider
- Google Translate (cố định).

### J.6 Text-to-Speech Provider
- Edge Azure TTS (chính), Google TTS (fallback).

### J.7 Timeout
- `translateForFetch`: 60s.
- Edge TTS: `MAX_RETRIES_PER_REQUEST` + retry delays.

### J.8 Retry
- Google translate: `retryPolicy` với delay tăng dần.
- Edge TTS: retry tối đa, backoff exponential.

### J.9 Cache
- `timedtext-guard.js`: cache timedtext 5 phút, cooldown 429 1 phút.
- Metadata subtitle cache theo video.

### J.10 Fallback Provider
- Dịch: background → content trực tiếp.
- TTS: Edge → Google.

---

## Phụ lục K — Mã lỗi

### K.1 Lỗi website
| Lỗi | Nguyên nhân | Cách khắc phục |
|---|---|---|
| `Media not found` | Không tìm thấy `<video>` | Kiểm tra website/player |
| `No subtitles` | Video không có phụ đề | Chọn video khác / đợi ASR |
| `__INITIAL_STATE__` thiếu | Bilibili đổi cấu trúc trang | Reload extension (đã fix bằng resolved-route) |

### K.2 Lỗi Speech-to-Text
- ASR không có → `NoSubtitlesFound` → modal hỏi upload media.

### K.3 Lỗi dịch
| Lỗi | Xử lý |
|---|---|
| `Request timeout` (60s) | RetryPolicy |
| `translate occur error` | Hiển thị lỗi, retry |

### K.4 Lỗi Text-to-Speech
- Edge fail → fallback Google TTS (giọng có thể khác).

### K.5 Lỗi đồng bộ
- Audio lệch → điều chỉnh theo currentTime / rate.

### K.6 Lỗi API Key
- (Không dùng key hiện tại — nếu Azure trả phí cần key, lỗi 401.)

### K.7 Lỗi hạn mức
- `429` → retry + cooldown.

### K.8 Lỗi mạng
- `Failed to fetch` / timeout → retry, thông báo.

### K.9 Cách khắc phục
- Xem console + service worker log `[YD-DEBUG]`, `[TranslateDub] Background Azure TTS failed`.

---

## Phụ lục L — Kiểm thử

### L.1 Kiểm thử từng website
- YouTube: phụ đề manual + ASR, play/pause/seek.
- Bilibili: AI subtitle tiếng Trung, multi-page.
- Universal: website có `<video>`.

### L.2 Kiểm thử từng Mode
- Dịch chỉ, song ngữ, dub only, translate+dub.

### L.3 Kiểm thử Speech-to-Text
- (ASR website) — kiểm tra video có AI subtitle.

### L.4 Kiểm thử Translation
- Nhiều ngôn ngữ, thuật ngữ, segment dài.

### L.5 Kiểm thử Text-to-Speech
- Nam Minh, Hoài My, đổi giới tính, fallback.

### L.6 Kiểm thử đồng bộ
- Play, pause, seek, rate change, video dài.

### L.7 Kiểm thử mất mạng
- Ngắt mạng → lỗi, retry.

### L.8 Kiểm thử hết hạn mức
- Nhiều video liên tiếp → 429 → cooldown.

### L.9 Kiểm thử quyền Extension
- Chỉ yêu cầu quyền cần thiết.

---

## Phụ lục M — Ví dụ hoàn chỉnh

### M.1 Ví dụ dịch phụ đề
1. Mở YouTube video có phụ đề.
2. Bấm nút lồng tiếng → extension lấy timedtext → dịch → hiện phụ đề tiếng Việt.

### M.2 Ví dụ nhận dạng âm thanh
- Mở video Bilibili có AI subtitle → extension lấy `ai-zh` → dịch sang tiếng Việt.

### M.3 Ví dụ dịch và lồng tiếng
- Bấm nút → dịch toàn bộ → tạo giọng đọc → phát đồng bộ với video.

### M.4 Ví dụ Streaming Mode
- Video dài: xử lý từng đoạn khi video chạy tới.

### M.5 Ví dụ Batch Mode
- Dịch 191 câu trong 1-2 request (`translateAll`).

### M.6 Ví dụ thêm website mới
1. Thêm `SiteDubbingRules` vào `content.js`.
2. Khai báo `domain`, `mediaSelector`, `playBtnContainerSelector`, `subtitleFetchMethod`.
3. (Cần source WXT để build — bundle hiện tại cần build lại.)

### M.7 Ví dụ thêm Provider mới
1. Thêm hàm translate/TTS mới vào `offline-core.js` hoặc `background.js`.
2. Đăng ký trong `VOICE_CODE_MAP` / resolve logic.
3. (Cần build lại bundle.)

---

## Hỗ trợ & Đóng góp

Nếu bạn gặp lỗi hoặc muốn đóng góp, vui lòng mở issue/PR trên repository của dự án. Khi mở issue, kèm theo:
- Website + URL video gây lỗi.
- Console log (F12) và service worker log (`chrome://extensions` → "service worker").
- Version extension (`manifest.json`).

---

*README được viết dựa trên mã nguồn hiện tại (version 4.2.5). Một số mục trong phụ lục C, D, E, M mô tả cơ chế hiện có hoặc kế hoạch tương lai — vui lòng đối chiếu với mã thực tế khi sử dụng.*
