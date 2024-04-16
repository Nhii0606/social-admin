import React, { Component} from 'react';

class info extends Component {
  render() {
  return (
    <form id="frmINFO" action method="post">
  <fieldset className="container">
    <legend> Chọn giấy tờ xác minh và xác thực khuôn mặt tự động </legend>
    <div className="container">
      <div className="row">
        <label htmlFor="id_card">Chọn giấy tờ xác minh</label>
        <div>
          <label><input type="radio" name="id_card" id="cccd" defaultValue="cccd" defaultChecked />Thẻ CCCD</label>
          <label><input type="radio" name="id_card" id="cmnd" defaultValue="cmnd" />Thẻ CMND</label>
        </div>
      </div>
      <div className="row">
        <label htmlFor="scan_qr">Scan mã QR Code trên Thẻ CCCD</label>
        <p>* Nếu không có vui lòng bỏ qua bước này</p>
        <button name="btnScan" id="btnScan">Scan</button>
      </div>
      <div className="row">
        <div>
          <p>Số CCCD/CMND</p>
          <input type="text" name="id_number" id="id_number" />
        </div>
        <div>
          <p>Họ tên đầy đủ</p>
          <input type="text" name="full_name" id="full_name" />
        </div>
        <div>
          <p>Chụp mặt trước mặt sau</p>
          <div>
            <div>
              <input type="file" name="id_front" id="id_front" />
              <button name="btnDel" id="btnDel">Xoá ảnh</button>
            </div>
            <div>
              <input type="file" name="id_back" id="id_back" />
              <button name="btnDel" id="btnDel">Xoá ảnh</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <p>Ngày tháng năm sinh</p>
        <input type="date" name="date_of_birth" id="date_of_birth" />
      </div>
      <div className="row">
        <p>Giới tính</p>
        <select name="gender" id="gender">
          <option value>Chọn giới tính</option>
          <option value={1}>Nam</option>
          <option value={2}>Nữ</option>
          <option value={3}>Khác</option>
        </select>
      </div>
      <div className="row">
        <p>Nơi cư trú</p>
        <input type="text" name="address" id="address" />
      </div>
      <div className="row">
        <p>Tỉnh/Thành phố</p>
        <select name="province_live" id="province_live">
          <option value>Chọn Tỉnh/Thành phố</option>
        </select>
      </div>
      <div className="row">
        <p>Quận/Huyện/Thành phố</p>
        <select name="district" id="district">
          <option value>Chọn Quận/Huyện/Thành phố</option>
        </select>
      </div>
      <div className="row">
        <p>Ngày cấp</p>
        <input type="date" name="issue_date" id="issue_date" />
      </div>
      <div className="row">
        <p>Nơi cấp</p>
        <input type="text" name="issuing_authority" id="issuing_authority" />
      </div>
      <div className="row">
        <p>Ảnh chân dung</p>
        <input type="file" name="face-photo" id="face-photo" />
        <button name="btnDel" id="btnDel">Xoá ảnh</button>
      </div>
    </div>
  </fieldset>
  <fieldset className="container">
    <legend>Điền khu vực đang làm việc &amp; STK ngân hàng</legend>
    <div className="container">
      <div className="row">
        <p>Ngày bắt đầu làm việc</p>
        <input type="date" name="start_date" id="start_date" />
      </div>
      <div className="row">
        <p>ID nhân viên</p>
        <textarea name="employee_id" id="employee_id" defaultValue={"Random theo công thức"} />
      </div>
      <div className="row">
        <p>Email cá nhân</p>
        <input type="email" name="email" id="email" />
      </div>
      <div className="row">
        <p>Số điện thoại</p>
        <input type="number" name="phone_number" id="phone_number" />
      </div>
      <div className="row">
        <p>Ca làm việc</p>
        <select name="workshift" id="workshift">
          <option value>Chọn ca làm việc trên hệ thống</option>
        </select>
      </div>
      <div className="row">
        <div>
          <p>Chiều cao</p>
          <input type="number" name="height" id="height" />
        </div>
        <div>
          <p>Cân nặng</p>
          <input type="number" name="weight" id="weight" />
        </div>
      </div>
      <div className="row">
        <p>Tỉnh/Thành phố làm việc</p>
        <select name="province" id="province">
          <option value>Chọn tỉnh, thành phố làm việc</option>
        </select>
      </div>
      <div className="row">
        <p>Tên hệ thống làm việc</p>
        <select name="chain" id="chain">
          <option value>Chọn hệ thống làm việc</option>
        </select>
      </div>
      <div className="row">
        <p>Tên siêu thị</p>
        <select name="supermarket" id="supermarket">
          <option value>Chọn siêu thị</option>
        </select>
      </div>
      <class className="row">
        <div>
          <p>Chọn ngân hàng để nhận lương</p>
          <select name="bank" id="bank">
            <option value>Chọn ngân hàng</option>
          </select>
        </div>
        <div>
          <p>Số tài khoản ngân hàng</p>
          <input type="number" name="bank_account_number" id="bank_account_number" />
        </div>
        <div>
          <p>Chi nhánh ngân hàng</p>
          <input type="text" name="bank_branch" id="bank_branch" />
        </div>
      </class>
    </div>
  </fieldset>
  <fieldset className="container">
    <legend>Thông tin khác</legend>
    <div className="container">
      <div className="row">
        <p>Trong trường hợp khẩn cấp, công ty có thể liên hệ với ai</p>
        <div>
          <p>Họ và tên</p>
          <input type="text" name="relative_name" id="relative_name" />
        </div>
        <div>
          <p>Số điện thoại</p>
          <input type="text" name="relative_phone" id="relative_phone" />
        </div>
        <div>
          <p>Quan hệ nhân thân với bạn</p>
          <select name="relative" id="relative">
            <option value>Chọn mối quan hệ</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div>
          <input type="checkbox" name="agree" id="agree" />Tôi xin xác nhận những thông tin trên là
          đúng sự thật. Và nếu có sự khai man thông tin trong
          "Hồ sơ Nhân viên" này, tôi xin hoàn toàn chịu trách
          nhiệm dưới hình thức sa thải và không bất kỳ sự khiếu
          kiện gì.
        </div>
        <div>
          <p>Chữ ký:</p>
          <canvas id="canvas-sign" width="400%" />
        </div>
        <p>Ngày điền thông tin: 15/03/2024</p>
      </div>
    </div>
  </fieldset>
  <div className="container">
    <input type="submit" name="btnSend" id="btnSend" defaultValue="Send" />
  </div>
</form>

  );
}
}
export default info;
