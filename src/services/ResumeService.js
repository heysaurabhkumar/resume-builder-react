import axios from "axios";

const resumeUrl = "/api/resume";
const templateUrl = "/api/template";

const ResumeService = {
  resume: async (resumeData) => {
    try {
      const res = await axios.post(resumeUrl, resumeData);
      //   return console.log(res);
      return res.data;
    } catch (error) {
      return console.log(error);
    }
  },
  template: async () => {
    try {
      const res = await axios.get(templateUrl);
      return res.data;
    } catch (error) {
      return console.log(error);
    }
  },
};

export default ResumeService;
