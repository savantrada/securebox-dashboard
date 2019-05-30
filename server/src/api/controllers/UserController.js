import _ from "underscore";
import User from "../models/user";

export default {
  register(req, res) {
    const user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    const isNullOrEmpty = _.isNull(req.body.email)
      || _.isEmpty(req.body.email)
      || _.isNull(req.body.password)
      || _.isEmpty(req.body.password);
    if (isNullOrEmpty) {
      res.status(500).json({ success: false, message: "Values Missing" });
    }
  },
  login() {},
};
