const usersCtrl = {};

usersCtrl.renderSignUpForm = (req,res) => {
  res.render('users/signup')
};

usersCtrl.signup =  (req,res) => {
  res.send('Signup');
};


usersCtrl.renderSigninForm = (req,res) => {
  res.render('users/signin');
};

usersCtrl.signin = (req,res) => {
  res.send('signip')
};

usersCtrl.logout = (req,res) => {
  res.send('logout')
}


module.exports = usersCtrl;