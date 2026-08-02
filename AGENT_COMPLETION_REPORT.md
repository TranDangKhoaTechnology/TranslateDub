# Báo cáo tích hợp tính năng tải video Bilibili

## 1. Kiến trúc extension
- **Manifest version:** Manifest V3
- **Framework:** Vue 3 (popup/options), bundle WXT build output (minified)
- **Build tool:** WXT (không có source gốc trong repo — đây là bản build output)
- **Background:** Service worker (`background-entry.js` → `offline-core.js`, `background.js`)
- **Message architecture:** `chrome.runtime.sendMessage` + `chrome.runtime.onMessage` (có validator yêu cầu `type` + `timestamp`)
- **Storage:** `chrome.storage.local` / `session`
- **Host permissions:** `<all_urls>` (đã có từ trước)

## 2. Phương án đã chọn
- **Phương án: Direct API Bilibili (không dùng SnapWC)**
- **Lý do:**
  - API Bilibili `playurl` là endpoint công khai, miễn phí, chính trang Bilibili dùng khi phát video — không cần key, không cần đăng nhập.
  - Hoạt động 100% ổn định trong môi trường test (lấy được media URL + tải được byte-range).
  - **Không có logo/bên thứ ba** (không dùng SnapWC), đúng yêu cầu người dùng.
  - SnapWC bị anti-bot chặn (`ERR_CONNECTION_RESET`) khi tự động hóa trong môi trường test — không đáng tin cậy.
- **Cơ chế fallback:** (chưa cần) — nếu API Bilibili trả lỗi, hiển thị mã lỗi rõ ràng. Code có helper `decodeSnapwcPayload`/`normalizeMediaResults` sẵn sàng cho fallback SnapWC sau này.

## 3. Luồng xử lý
```
Popup mở trên trang Bilibili
→ refreshButton kiểm tra active tab có phải Bilibili video
→ hiện nút "Lấy link tải"
→ bấm nút → sendMessage BILIBILI_DOWNLOAD(url, timestamp)
→ background: normalize URL → extract BV id → gọi view API (lấy cid/title)
→ gọi playurl API (lấy media URL CDN)
→ trả về { ok, data: { title, cover, results[] } }
→ popup render danh sách kết quả
→ người dùng bấm Sao chép / Mở / Tải
→ Tải → sendMessage BILIBILI_DOWNLOAD_FILE → chrome.downloads.download
```

## 4. File đã thêm
| File | Chức năng |
|---|---|
| `bilibili-download.js` | Logic thuần: normalize URL, extract BV, media URL validation, deadline, safeFilename, SnapWC payload decode, normalizeMediaResults. Loaded trong background + popup. |
| `bilibili-download-bg.js` | Background handler: gọi API Bilibili (view + playurl), xử lý `BILIBILI_DOWNLOAD` + `BILIBILI_DOWNLOAD_FILE`. |
| `bilibili-download-popup.js` | UI popup: nút tải, danh sách kết quả, nút sao chép/mở/tải, trạng thái. |
| `tests/bilibili-download-unit.cjs` | Unit test cho logic thuần. |

## 5. File đã sửa
| File | Nội dung sửa |
|---|---|
| `manifest.json` | Thêm `downloads` permission. |
| `popup.html` | Thêm `<script>` load `bilibili-download.js` + `bilibili-download-popup.js`. |
| `background-entry.js` | Thêm `importScripts("bilibili-download.js")` + `bilibili-download-bg.js`. |
| `README.md` | Thêm tính năng tải Bilibili vào mục tính năng. |

## 6. Permission đã thêm
| Permission | Lý do |
|---|---|
| `downloads` | Cho phép `chrome.downloads.download` tải media URL. |

## 7. Endpoint sử dụng
- `GET https://api.bilibili.com/x/web-interface/view?bvid=...` — lấy thông tin video (cid, title).
- `GET https://api.bilibili.com/x/player/playurl?bvid=...&cid=...&qn=64&fnval=16&platform=html5` — lấy media URL.
- Media host: `*.bilivideo.com`, `*.bilivideo.cn`, `*.hdslb.com`, `upos-*.akamaized.net`.

## 8. Mã hóa parser
- **Không dùng SnapWC** → không cần tái tạo crypto RSA/AES.
- Có helper `decodeSnapwcPayload` (base64 URL-safe → JSON) sẵn sàng nếu cần fallback SnapWC.

## 9. Test đã chạy
| Lệnh | Kết quả |
|---|---|
| `node tests/bilibili-download-unit.cjs` | ✅ ALL PASS (URL validation, BV extract, media URL, deadline, base64 UTF-8, safeFilename) |
| `node tests/offline-integration.cjs` | ✅ ALL PASS |
| `node tests/chrome-extension-e2e.cjs` | ✅ ALL PASS (extension load, popup, service worker) |
| Test background integration (CDP) | ✅ Parse Bilibili OK: title + media URL |
| Test download (CDP) | ✅ `chrome.downloads.download` khởi tạo thành công (downloadId: 1) |

## 10. Kiểm thử thực tế
- **URL thử:** `https://www.bilibili.com/video/BV1AakQYwE97/`
- **CAPTCHA:** Không có (API Bilibili không yêu cầu)
- **Parser:** API Bilibili trả 200, lấy title "Altium Designer（AD）3小时速成..." + media URL
- **Media URL:** `upos-hz-mirrorakam.akamaized.net/...mp4?e=ig8euxZM...`
- **HTTP status probe:** `206 Partial Content`, `Content-Type: video/mp4` (đã kiểm tra byte-range 0-1023)

## 11. Kiểm tra hồi quy
- Extension load không lỗi ✅
- Manifest hợp lệ ✅
- Popup mở ✅
- Service worker chạy ✅
- Dịch/lồng tiếng (offline-integration) ✅
- Không console error mới ✅
- Tính năng cũ không bị ảnh hưởng ✅

## 12. Hạn chế
- Phụ thuộc API Bilibili công khai — có thể thay đổi cấu trúc trong tương lai.
- Media URL có thời hạn (`deadline`) — cần phân tích lại khi hết hạn.
- Video trả phí/giới hạn có thể không lấy được media URL.
- Popup hiện nút chỉ khi active tab là trang video Bilibili (`/video/BV...`).

## 13. Kết quả cuối
- Lint: N/A (không có ESLint config)
- Typecheck: N/A (không dùng TypeScript)
- Test: ✅ PASS
- Build: N/A (đây là build output, không có build script)
- Load extension: ✅ PASS
- Known errors: NONE
