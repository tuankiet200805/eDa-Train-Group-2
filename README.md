
# NOTE
Screen: 1920x1280 (thinkPad)

Đơn vị sử dụng: VW, VH (100VW = 1920px, 100VH = 1280px)
Làm tròn số sau thập phân: 1.23 (2 số sau thập phân - làm tròn lên. vd: 1.154 = 1.15 còn 1.155 = 1.16)
top, bottom, height -> Vh còn lại dùng VW (font-size, left, right)

Về ảnh sản phẩm, chart, box... thì làm như sau: 
    Không sử dụng thẻ img để display ảnh lên HTML mà dùng thuộc tính background: url... hoặc background-image:... 
        (kết hợp với background-size: contain-cover- 100% 100%... để hiển thị giống)
    Dung lượng ảnh không quá 1Mb ( <=1mb - trong trường hợp đặc thì vẫn có thể cho phép nhưng không quá 1.5mb)
    Kích thước của ảnh: từ x1.5 - x2 div chứa nó. 

Về animation:
    Đảm bảo chỉ sử dụng những loại animation sau: 
        opacity: với những thành phần không phải chart (box, product, text...)
        trồi lên: với những chart - column dạng cột
        trái qua hoặc phải qua: với những chart - row dạng đường hoặc biểu đồ ngang
    Kết hợp với transition để mượt mà
    Cách làm animtion đã chỉ rồi, m.n thống nhất sử dụng 1 kiểu( Ai không hiểu thì inbox PM để nó chỉ, có nó siêng mới chỉ thôi :)) )
    Không nhất thiết thành phần nào cũng animation, header cũng như những shadow không cần làm cũng được
    Cho animation chạy bắt đầu từ 0.1 (100ms) tính từ lúc chạy, vì màn hình phải load, khoảng cách giữa mỗi lần hiển thị không quá lớn.

Về code: 
    Tên class, id, tên file: dat-ten-theo-kieu-nay-nha-cac-dong-chi
    Tận dụng mọi tài nguyên cung cấp sẵn trên global css: màu, font-family, class font-weight, class font-style, ...
    Trường hợp cần custom thì ghi đè những thuộc tính bằng 1 class khác
    Sử dụng class "po" - position: absolute kết hợp top-left-right-bottom để canh vị trí
    Trong trường hợp 1 dòng chứ mà style khác nhau thì dùng span, đặt class để style

    Chú ý so sánh từng dòng với indesign để hạn chế lỗi vặt

*Mẹo:
    Ghost: Các bạn có thể screen 1 tấm ảnh đặt tạm vào thẻ img xong style cho chính xác từng pixel (phơ phẹt pít xeo).
        witdth: 100vw;
        height: 100vh;
        opacity: 0.5; 
        z-index: 10;
    Với những text căn giữa dùng text center cho lẹ
    Br để ngắt dòng, 
    padding, margin để cách khoảng.

**Những thẻ - thuộc tính không được sử dụng vì sử dụng sẽ gây ra lỗi hoặc không nhận (đã phát hiện): img, p, table, display: grid...

***Focus deadline, vấn đề giải quyết sớm sẽ không phát sinh thêm vấn đề. Trễ deadline - kick. 
****Với những tin nhắn thông báo thì thả icon - gì cũng được để tránh trôi.