import axios from "axios";
import swal from "sweetalert";

const sendOtpUrl = "/api/send-otp";
const verifyOtpUrl = "/api/verify-otp";

const OtpService = {
  sendOtp: async (mobile) => {
    try {
      const res = await axios.post(sendOtpUrl, mobile);
      return res.data;
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
  verifyOtp: async (data) => {
    try {
      const res = await axios.post(verifyOtpUrl, { data });
      return res.data;
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
};

export default OtpService;
