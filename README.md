
# 🚀 Sigma Chat Box - AI Sales Assistant Landing Page

Chào mừng bạn đến với dự án **Sigma Chat Box**, một trang landing page hiện đại được xây dựng bằng React, giới thiệu giải pháp trợ lý bán hàng thông minh tích hợp trí tuệ nhân tạo (Google Gemini API).

Dự án này được thiết kế với giao diện lấy cảm hứng từ các chatbot e-commerce hàng đầu (như Bitu AI), mang lại trải nghiệm tương tác mượt mà và trực quan.

---

## 🌟 Tính năng nổi bật

- **Interactive AI Chatbot**: Demo trực tiếp tính năng chat với "Sigma AI" ngay trên Hero section, sử dụng mô hình `gemini-3-flash-preview`.
- **Giao diện hiện đại (UI/UX)**: Sử dụng Tailwind CSS với phong cách thiết kế chuyên nghiệp, màu sắc rực rỡ (Rose/Pink gradient).
- **Phản hồi thời gian thực**: Trải nghiệm trò chuyện không độ trễ, có các hiệu ứng "typing" và mascot sinh động.
- **Responsive Design**: Tương thích hoàn hảo trên mọi thiết bị từ Desktop, Tablet đến Mobile.
- **Landing Page đầy đủ**: Bao gồm các Section: Hero, Features, CTA, và Footer chuyên nghiệp.

---

## 🛠 Công nghệ sử dụng

- **Frontend**: [React](https://react.dev/) (phiên bản mới nhất với Hooks).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (thư viện CSS ưu tiên tiện ích).
- **AI Core**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini API).
- **Ngôn ngữ**: TypeScript (đảm bảo type-safe và code sạch).
- **Icons & Images**: DiceBear (cho mascot) và Unsplash/Picsum.

---

## 🚀 Cách chạy dự án

### 1. Yêu cầu hệ thống
- Trình duyệt web hiện đại hỗ trợ ES Modules.
- Một mã **API KEY** từ [Google AI Studio](https://aistudio.google.com/).

### 2. Thiết lập môi trường
Dự án này yêu cầu một biến môi trường để kết nối với Google Gemini API:
- Đảm bảo `process.env.API_KEY` đã được cấu hình trong môi trường thực thi của bạn.

### 3. Cấu trúc thư mục
```text
.
├── index.html          # File HTML chính, nạp Tailwind và React
├── index.tsx           # Điểm khởi đầu của ứng dụng React
├── App.tsx             # Component gốc quản lý layout và các section
├── types.ts            # Định nghĩa các interface TypeScript
├── metadata.json       # Thông tin meta của ứng dụng
├── services/
│   └── geminiService.ts # Logic kết nối với Google Gemini API
└── components/         # Các thành phần giao diện
    ├── Navbar.tsx      # Thanh điều hướng
    ├── Hero.tsx        # Phần giới thiệu chính
    ├── SigmaChatPreview.tsx # Widget Chatbot tương tác (Trái tim của dự án)
    ├── Features.tsx    # Danh sách tính năng
    └── Footer.tsx      # Chân trang
```

### 4. Luồng xử lý của Chatbot
1. Người dùng nhập câu hỏi vào `SigmaChatPreview`.
2. Component gọi hàm `askSigmaAI` trong `geminiService.ts`.
3. `geminiService` gửi prompt đến mô hình `gemini-3-flash-preview` với hướng dẫn hệ thống (System Instruction) cụ thể để giữ đúng vai trò "Trợ lý Sigma".
4. Kết quả trả về được hiển thị dưới dạng bong bóng chat (bubble) thân thiện.

---

## 🎨 Tùy chỉnh (Customization)

### Thay đổi nhân cách AI
Bạn có thể thay đổi cách Sigma trả lời bằng cách chỉnh sửa `systemInstruction` trong file `services/geminiService.ts`:
```typescript
systemInstruction: "Bạn là [Tên trợ lý] - Chuyên gia về [Lĩnh vực]..."
```

### Thay đổi màu sắc thương hiệu
Dự án sử dụng các class Tailwind như `rose-500`, `pink-500`. Bạn có thể dùng tính năng Search & Replace để thay đổi sang tông màu xanh (`indigo`, `blue`) hoặc bất kỳ màu nào khác phù hợp với thương hiệu của bạn.

---

## 📝 Lưu ý quan trọng
- **Bảo mật**: Tuyệt đối không chia sẻ file chứa API KEY lên các kho lưu trữ công khai.
- **Giới hạn**: Thông tin do AI cung cấp chỉ mang tính chất tham khảo (đã được ghi chú dưới khung chat).

---

**Sigma Chat Box** - *Biến mọi cuộc trò chuyện thành một đơn hàng!* 🚀
