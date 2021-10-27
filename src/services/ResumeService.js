import axios from "axios";
import swal from "sweetalert";

const resumeUrl = "/api/resume";
const templateUrl = "/api/template";

const ResumeService = {
  resume: async (resumeData) => {
    try {
      const res = await axios.post(resumeUrl, resumeData);
      //   return console.log(res);
      return res.data;
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
  template: async () => {
    try {
      const res = await axios.get(templateUrl);
      return res.data;
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
};

export default ResumeService;
