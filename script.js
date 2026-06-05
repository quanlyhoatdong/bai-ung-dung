// script.js - Trang chủ Dashboard
// Hiệu ứng: lời chào động theo buổi trong ngày và cập nhật icon

(function setupGreeting() {
    const greetingContainer = document.getElementById('greetingMessage');
    if (!greetingContainer) return;

    const now = new Date();
    const hour = now.getHours();

    let greetingText = '';
    let emojiIcon = '';

    if (hour >= 5 && hour < 12) {
        greetingText = 'Chào buổi sáng! 🌅 Một ngày làm việc hiệu quả';
        emojiIcon = 'fa-sun';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Chào buổi chiều! ☕ Cùng khám phá các dự án nhé';
        emojiIcon = 'fa-cloud-sun';
    } else if (hour >= 18 && hour < 22) {
        greetingText = 'Chào buổi tối! 🌙 Thư giãn và sáng tạo';
        emojiIcon = 'fa-moon';
    } else {
        greetingText = 'Khuya rồi đó! 🌟 Bạn vẫn đang code à?';
        emojiIcon = 'fa-star';
    }

    // Cập nhật icon và text
    const iconElem = greetingContainer.querySelector('i');
    if (iconElem) {
        // Xóa class cũ (fa-xxx) và thêm icon mới
        iconElem.className = `fas ${emojiIcon}`;
    }
    const spanElem = greetingContainer.querySelector('span');
    if (spanElem) {
        spanElem.textContent = greetingText;
    }
})();

// Thêm hiệu ứng console.log để test JS hoạt động (optional)
console.log('✅ Dashboard đã sẵn sàng | Hiệu ứng chào động theo giờ hoạt động');

// Thêm một hiệu ứng nhỏ tương tác: Khi click vào bất kỳ thẻ nào, log ra tên dự án (không ảnh hưởng link)
const cards = document.querySelectorAll('.project-card');
cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
        // Tránh chặn nếu click vào link
        if (e.target.closest('.card-btn')) return;
        const title = card.querySelector('h2')?.innerText || `Dự án ${index+1}`;
        console.log(`🔍 [Tương tác] Bạn vừa xem thẻ: ${title}`);
    });
});