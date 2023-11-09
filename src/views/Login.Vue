<template>
  <div class="login">
    <div class="div">
      <div class="overlap">
        <img class="image" alt="Image" src="image-1.png" />
      </div>
      <div class="div-wrapper">
        <div class="group-2">
          <div class="group-3">
            <div class="group-4">
              <div class="text-wrapper-2">欢迎登录查重系统</div>
            </div>
            <div class="group-5">
              <GroupWrapper class="group-21" />
              <div class="overlap-group-wrapper">
                <div class="overlap-group">
                  <GroupWrapper class="group-21" groupText="输入密码" text="密码" />
                  <img class="invisible" alt="Invisible" src="invisible-1.svg" />
                </div>
              </div>
              <div class="group-6">
                <div class="text-wrapper-3">忘记密码？</div>
              </div>
              <div class="overlap-wrapper">
                <div class="login-wrapper">
                  <div class="text-wrapper-4">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</div>
                </div>
              </div>
            </div>
            <div class="text-wrapper-5">立即注册</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GroupWrapper } from "./GroupWrapper";

export default {
  name: "Login",
  components: {
    GroupWrapper,
  },
};
</script>

<style>
.login {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.login .div {
  background-color: #ffffff;
  height: 1024px;
  position: relative;
  width: 1440px;
}

.login .overlap {
  background-color: #004795;
  height: 150px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.login .image {
  height: 101px;
  left: 42px;
  object-fit: cover;
  position: absolute;
  top: 24px;
  width: 381px;
}

.login .div-wrapper {
  height: 701px;
  left: 468px;
  position: absolute;
  top: 222px;
  width: 505px;
}

.login .group-2 {
  background-color: #ffffff;
  border: 0.5px solid;
  border-color: #004795;
  border-radius: 10px;
  box-shadow: 0px 4px 64px #0000000d;
  height: 701px;
}

.login .group-3 {
  height: 565px;
  left: 34px;
  position: relative;
  top: 94px;
  width: 425px;
}

.login .group-4 {
  height: 48px;
  left: 43px;
  position: absolute;
  top: 0;
  width: 365px;
}

.login .text-wrapper-2 {
  color: #004795;
  font-family: "Poppins-Medium", Helvetica;
  font-size: 40px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 363px;
}

.login .group-5 {
  height: 358px;
  left: 0;
  position: absolute;
  top: 128px;
  width: 423px;
}

.login .group-21 {
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
}

.login .overlap-group-wrapper {
  height: 92px;
  left: 0;
  position: absolute;
  top: 130px;
  width: 423px;
}

.login .overlap-group {
  height: 92px;
  position: relative;
}

.login .invisible {
  height: 21px;
  left: 374px;
  position: absolute;
  top: 52px;
  width: 21px;
}

.login .group-6 {
  height: 21px;
  left: 346px;
  position: absolute;
  top: 247px;
  width: 72px;
}

.login .text-wrapper-3 {
  color: #004795;
  font-family: "Poppins-Light", Helvetica;
  font-size: 14px;
  font-weight: 300;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.login .overlap-wrapper {
  height: 57px;
  left: 0;
  position: absolute;
  top: 301px;
  width: 425px;
}

.login .login-wrapper {
  background-color: #004795;
  border-radius: 6px;
  height: 57px;
  position: relative;
  width: 423px;
}

.login .text-wrapper-4 {
  color: #ffffff;
  font-family: "Poppins-Bold", Helvetica;
  font-size: 25px;
  font-weight: 700;
  left: 178px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 12px;
  width: 82px;
}

.login .text-wrapper-5 {
  color: #004795;
  font-family: "Poppins-SemiBold", Helvetica;
  font-size: 24px;
  font-weight: 600;
  left: 327px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 529px;
}
</style>
