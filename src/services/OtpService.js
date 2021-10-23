import axios from "axios";

const sendOtpUrl = "/api/send-otp";
const verifyOtpUrl = "/api/verify-otp";

const OtpService = {
  sendOtp: async (mobile) => {
    try {
      const res = await axios.post(sendOtpUrl, mobile);
      return res.data;
    } catch (error) {
      return console.log(error);
    }
  },
  verifyOtp: async (data) => {
    try {
      const res = await axios.post(verifyOtpUrl, { data });
      return res.data;
    } catch (error) {
      return console.log(error);
    }
  },
};

export default OtpService;
