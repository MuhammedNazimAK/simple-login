const express = require("express");
const router = express.Router();

const name = "admin";
const pass = "pass123";

router.get("/", (req, res) => {
  if (req.session.isLoggedIn) {
    res.render("home");
  } else {
    res.redirect("/login");
  }
});

router.get("/login", (req, res) => {
  if(req.session.isLoggedIn) {
    res.redirect("/");
  }else{
    res.render("login",{message:req.session.message});
  }
});

router.post("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/login")
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if(req.session.isLoggedIn) {
    res.redirect("/");
  }else{
    if (name === username && pass === password) {
      req.session.isLoggedIn = true;
      res.redirect("/");
    } else {
      req.session.message = true;
      res.redirect("/login");
    }
  }
});

module.exports = router;